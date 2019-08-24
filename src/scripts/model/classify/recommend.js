class RequestGoods{
    get(){
        return fetch('/hvip/api/category/category/getSellingCategorys/?app_name=&app_version=&mobile_channel=&hierarchy_id=&category_id=&warehouse=&mars_cid=&category_filter=&sale_for=&area_id=&from_url_go_api_switch=&preview_go_admin=&src=app&channel_id=&wap_id=classify_wap_107&channel_name=&_t=1565100635591&_=1565100635591')
        .then(response => response.json())
        .then(res =>{
            return res;
        })
    }
}
export default new RequestGoods();