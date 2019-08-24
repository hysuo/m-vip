import motherAndBabyTpl from '../../views/monthAndBaby/main.html'

class MabController{
    render(){
        $('main').html(motherAndBabyTpl)
    }
}
export default new MabController();