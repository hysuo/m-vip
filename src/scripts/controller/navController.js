import navTpl from '../views/nav.html'
import BScroll from 'better-scroll'
class navController{
    render(){
        $('nav').html(navTpl)
        new BScroll('.ul-wrapper', {scrollX: true,})
}
}
export default new navController();