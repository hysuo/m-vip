import IndexTpl from '../views/index.html'
import HeaderController from './headerController'
import NavController from './navController'
import RecommendController from './maincontroller/recommendController'
import BeautyController from './maincontroller/beautyController'
import MabController from './maincontroller/mabController'
import HouseholdController from './maincontroller/householdController'
import InterController from './maincontroller/interController'
class IndexController{
    htmlRender(){
        this.render();
        this.bindTabEvent();
        this.bindHashChange();
        this.components={
            recommend:RecommendController,
            beauty   :BeautyController,
            mab      :MabController,
            household:HouseholdController,
            inter    :InterController
        }
    }
    render(){
        $('#root').html(IndexTpl);
        HeaderController.render();
        NavController.render();
        // console.log(on);
    }
    bindHashChange(){
        $(window).on('hashchange',()=>{
            let hash = location.hash && location.hash.substr(1)|| "recommend";
            this.renderMain(this.components[hash])
            this.setTabActive(hash)
        })
        $(window).on("load",()=>{
            let hash = location.hash && location.hash.substr(1)|| "recommend";
            location.hash = hash
            this.renderMain(this.components[hash])
            this.setTabActive(hash)
        });
    }
    setTabActive(hash){
        $(`nav li[data-hash=${hash}]`).children('a:nth-child(1)').addClass('active')
        $(`nav li[data-hash=${hash}]`).siblings().children('a:nth-child(1)').removeClass('active')
    }
    renderMain(controller){
        controller.render();
    }
    bindTabEvent(){
        $('nav li').on('tap',function(){
            location.hash = $(this).attr('data-hash');
        })
    }
}

export default new IndexController();