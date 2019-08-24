import HeaderController from './classifyController/headerController'
import MainController from './classifyController/mainController'
import brandController from './classifyController/model/brand'
class classifyController{
    htmlRender(){
        this.flag  = false;
        this.flag2 = true;
        HeaderController.render();
        MainController.render();
        this.renderMain();
    }
    renderMain(){
        $('#c-classify').on('tap',() => {
            this.flag2 = true;
            // console.log(MainController.render)
            if(this.flag){
               location.hash = "hash1";
               MainController.render();
               this.flag = false;
            }
            $("#c-classify").addClass('c-active')
            $("#c-brand").removeClass('c-active')
        })
        $('#c-brand').on('tap',() => {
            this.flag = true;
            if(this.flag2){
                $(".main").html("");
                brandController.render();
                location.hash = "";
                this.flag2 = false;
            }
            $("#c-brand").addClass('c-active')
            $("#c-classify").removeClass('c-active')
        })
    }
}

export default new classifyController()