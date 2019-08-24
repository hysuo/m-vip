import brandTpl from '../../../views/classify/classifymain/brand.html'
import Data from '../../../model/classify/brand'
class BrandController{
    async render(){
        $('.main').html(brandTpl)
        this.data = (await Data.get()).data.operation_list;
        console.log(this.data)
        this.rendermain();
    }
    rendermain(){
        let data = this.data
        let html = template.render(brandTpl,{data})
        $('.main').html(html)
    }
}

export default new BrandController();