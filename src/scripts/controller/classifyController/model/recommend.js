import recommendTpl from '../../../views/classify/classifymain/recommend.html'
import GoodsData from '../../../model/classify/recommend'
import tempTpl from '../../../views/classify/classifymain/rec-temp.html'
class RecommendController{
    async render(){
        $('.classify-goods-content').html(recommendTpl);
        this.data = (await GoodsData.get()).data.current_node.children;
        // console.log(this.data);
        this.renderhtml();
    }
    renderhtml(){
        let data1 = this.data[0].children;
        let html = template.render(tempTpl,{data1});
        $('.goods-recommend-content').html(html);
        let data2 = this.data[1].children;
        let html2 = template.render(tempTpl,{data2});
        $('.goods-select-content').html(html2);
    }
}
export default new RecommendController();