class RequestShop{
    get(){
        return fetch('/vip/vips-mobile/rest/layout/h5/channel/data?f=&width=640&height=460&net=wifi&changeResolution=2&channel_name=%E5%AE%B6%E7%94%B5&app_name=shop_wap&app_version=4.0&mars_cid=1563940659145_fbcca5d3f511568b5517f151d1d9b7a3&warehouse=VIP_BJ&api_key=8cec5243ade04ed3a02c5972bcda0d3f&fdc_area_id=101101101&province_id=101101&city_id=101101101&saturn=&wap_consumer=A1&standby_id=nature&source_app=yd_wap&mobile_platform=2&platform=2&client=wap&lightart_version=1&mobile_channel=mobiles-%7C%7C&menu_code=20180518001&load_more_token=eyJjaGFubmVsX2lkIjoiNDciLCJ0c2lmdCI6IjAiLCJicmFuZF9vZmZzZXQiOiI5MCIsImJyYW5kX3JlZmVyX2luZGV4IjoiMTQiLCJ0b3BpY19ncm91cCI6IjAifQ%3D%3D&_=1565052018432')
        .then(response => response.json())
        .then(res =>{
            return res;
        })
    }
}
export default new RequestShop();