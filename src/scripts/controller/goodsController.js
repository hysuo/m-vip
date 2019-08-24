import headerTpl from '../views/goods/g-header.html'
import mainTpl from '../views/goods/g-main.html'
import Data from '../model/goods/goods'
class GooodsController{
    async htmlRender(){
        $('.g-header').html(headerTpl);
        this.data =(await Data.get()).data.getMerchandiseInfoList.merchandiseInfoList;
        console.log(this.data);
        this.renderMain();
        this.HandlerTap();
    }
    renderMain(){
        let data = this.data;
        localStorage.setItem("data",JSON.stringify(data));
        let html = template.render(mainTpl,{data})
        $('.g-main').html(html);
    }
    HandlerTap(){
        $('.g-return').on('tap',()=>{
            window.history.go(-1);
        })
        $('.g-main-wrap div').on('tap',function(){
            let id = $(this).attr('data-id');
            // console.log(id);
            let a = [{
                id:id,
            }]
            localStorage.setItem("ID",JSON.stringify(a));
        })
    }
}
export default new GooodsController();