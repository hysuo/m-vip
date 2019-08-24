const connect = require('gulp-connect')
const webpack = require('webpack-stream')
const sass = require('gulp-sass')
const del = require('del')
const proxy = require('http-proxy-middleware')

const { 
  series,
  src,
  dest,
  watch,
  parallel
} = require('gulp')

// 拷贝html
function copyHtml () {
  return src('../src/*.html')
    .pipe(dest('../dev'))
    .pipe(connect.reload())
}

// 拷贝 assest
function copyAssets () {
  return src(['../src/assets/**/*'])
    .pipe(dest('../dev/assets'))
    .pipe(connect.reload())
}

// 拷贝 libs
function copyLibs () {
  return src(['../src/libs/**/*'])
    .pipe(dest('../dev/libs'))
    .pipe(connect.reload())
}
// 拷贝 json
function copyjson () {
  return src(['../src/json/**/*'])
    .pipe(dest('../dev/json'))
    .pipe(connect.reload())
}


// 启动一个本地的 web server
function webServer () {
  return connect.server({
    host: '10.60.15.8',
    root: '../dev',
    port: 8000,
    livereload: true,
    middleware() {
      return [
        proxy('/api', {
          target: 'https://m.lagou.com',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }),
        proxy('/vip', {
          target: 'https://mapi.vip.com',
          changeOrigin: true,
          pathRewrite: {
            '^/vip': ''
          }
        }),
        proxy('/hvip', {
          target: 'https://h5.vip.com',
          changeOrigin: true,
          pathRewrite: {
            '^/hvip': ''
          }
        }),
        proxy('/mvip', {
          target: 'https://list.vip.com',
          changeOrigin: true,
          pathRewrite: {
            '^/mvip': ''
          }
        }),
        
      ]
    }
  })
}

// JS 模块化
function packJS () {
  return src('../src/scripts/app.js')
    .pipe(webpack({
        mode: 'development',
        entry: '../src/scripts/app.js',
        output: {
          filename: 'app.js'
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env'],
                  plugins: ['@babel/plugin-transform-runtime']
                }
              }
            },
            {
              test: /\.html$/,
              loader: 'string-loader'
            }
          ]
        }
      }))
    .pipe(dest('../dev/scripts'))
    .pipe(connect.reload())
}

// 删除dev文件夹
function delDevFolder() {
  return del('../dev/**', {
    force: true
  })
}

// CSS 模块化
function packCSS () {
  return src(['../src/styles/app.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('../dev/styles'))
    .pipe(connect.reload())
}

function watcher () {
  watch('../src/*.html', series(copyHtml))
  watch('../src/scripts/**/*', packJS)
  watch('../src/styles/**/*.scss', packCSS)
  watch('../src/assets', copyAssets)
  watch('../src/libs', copyLibs)
}

exports.default = series(delDevFolder, packJS, packCSS,parallel(copyHtml,copyAssets,copyLibs,copyjson) , parallel(webServer, watcher))