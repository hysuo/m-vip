class RequestShop{
    get(){
        return fetch('/vip/vips-mobile/rest/layout/h5/channel/data?f=&width=640&height=460&net=wifi&changeResolution=2&channel_name=%E7%BE%8E%E5%A6%86&app_name=shop_wap&app_version=4.0&mars_cid=1563940659145_fbcca5d3f511568b5517f151d1d9b7a3&warehouse=VIP_BJ&api_key=8cec5243ade04ed3a02c5972bcda0d3f&fdc_area_id=101101101&province_id=101101&city_id=101101101&saturn=&wap_consumer=A1&standby_id=nature&source_app=yd_wap&mobile_platform=2&platform=2&client=wap&lightart_version=1&mobile_channel=mobiles-%7C%7C&menu_code=20170217%3A1&load_more_token=eyJjaGFubmVsX2lkIjoiMiIsInRzaWZ0IjoiMCIsImJyYW5kX29mZnNldCI6IjkwIiwiYnJhbmRfcmVmZXJfaW5kZXgiOiIxMSIsInRvcGljX2dyb3VwIjoiMCJ9&_=1565009054954')
        .then(response => response.json())
        .then(res =>{
            return res;
        })
    }
}
export default new RequestShop();