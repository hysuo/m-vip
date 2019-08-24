import mainTpl from '../../views/classify/classifymain/main.html'
import recommendController from './model/recommend'
import womenController from './model/women'
import menController from './model/men'
import underController from './model/underwear'
import wshoesController from './model/wshoes'
import mshoesController from './model/mshoes'

class MainController{
    render(){
        $('.main').html(mainTpl)
        this.bindHashChange();
        this.bindTabEvent();
        this.components={
            hash1:recommendController,
            hash2:womenController,
            hash3:menController,
            hash4:underController,
            hash5:wshoesController,
            hash6:mshoesController,

        }
    }
    bindHashChange(){
        $(window).on('hashchange',()=>{
            let hash = location.hash && location.hash.substr(1)|| "hash1";
            this.renderMain(this.components[hash])
            // console.log(1)
            this.setTabActive(hash)
        })
        $(window).on("load",()=>{
            let hash = location.hash && location.hash.substr(1)|| "hash1";
            location.hash = hash
            this.renderMain(this.components[hash])
            // console.log(2)
            this.setTabActive(hash)
        });
    }
    setTabActive(hash){
        $(`.classify-list li[data-hash=${hash}]`).addClass('classify-list-active').siblings().removeClass('classify-list-active')
    }
    renderMain(controller){
        controller.render();
    }
    bindTabEvent(){
        $('.classify-list li').on('tap',function(){
            location.hash = $(this).attr('data-hash');
        })
    }
}
export default new MainController()