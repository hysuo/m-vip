class RequestGoods{
    get(){
        return fetch('/hvip/api/brandSearch/brandSearch/getStartPageDetailv3?unopera=&_t=1565158354471&_=1565158354471')
        .then(response => response.json())
        .then(res =>{
            return res;
        })
    }
}
export default new RequestGoods();