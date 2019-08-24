// import name from './controller/2'
// const doPromise = async()=>{
//     let res = await name();
//     console.log(res)
// }
// doPromise();
import IndexController from "./controller/IndexController"
import classifyController from "./controller/classifyController"
import goodsController from './controller/goodsController'
import detailsController from './controller/detailsController'
import cartController from "./controller/cartController";

class changeHtml{
    constructor(){
        if(/http:\/\/10.60.15.8:8000\/classify.html/.test(location.href)){
            classifyController.htmlRender();
        }
        else if(/http:\/\/10.60.15.8:8000\/goods.html/.test(location.href)){
            goodsController.htmlRender();
        }
        else if (/http:\/\/10.60.15.8:8000\/details.html/.test(location.href)) {
            detailsController.htmlRender();
        }
        else if (/http:\/\/10.60.15.8:8000\/cart.html/.test(location.href)) {
            cartController.htmlRender();
        }
        else if(location.href==='http://10.60.15.8:8000/'||'http://10.60.15.8:8000/#household'||'http://10.60.15.8:8000/#inter'||'http://10.60.15.8:8000/#recommend'||'http://10.60.15.8:8000/#beauty'||'http://10.60.15.8:8000/#mab'||'http://10.60.15.8:8000/#household'){
            IndexController.htmlRender();
        }
    }
}
new changeHtml();