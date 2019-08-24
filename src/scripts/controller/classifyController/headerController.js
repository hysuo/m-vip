import headerTpl from '../../views/classify/c-header.html'
import searchTpl from '../../views/classify/search.html'
class HeaderController{
    render(){
        $('header').html(headerTpl);
        $('.search').html(searchTpl);
    }
   
}
export default new HeaderController();