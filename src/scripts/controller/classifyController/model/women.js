import womenTpl from '../../../views/classify/classifymain/women.html'
import GoodsData from '../../../model/classify/women'
class WoMenController{
    async render(){
        this.data = (await GoodsData.get()).data.current_node.children;
        // console.log(this.data);
        this.renderhtml();
    }
    renderhtml(){
        let data = this.data;
        let html = template.render(womenTpl,{data});
        $('.classify-goods-content').html(html);
    }
}
export default new WoMenController();