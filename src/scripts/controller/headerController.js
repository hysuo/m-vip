import headerTpl from '../views/header.html'
class HeaderController{
    render(){
        $('header').html(headerTpl);
    }
}
export default new HeaderController();