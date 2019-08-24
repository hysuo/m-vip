import interTpl from '../../views/inter/main.html'

class InterController{
    render(){
        $('main').html(interTpl)
    }
}
export default new InterController()