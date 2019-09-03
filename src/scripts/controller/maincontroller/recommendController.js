import mainTpl from '../../views/main/main.html'
import recommendTpl from '../../views/main/recommend.html'
import recListTpl from '../../views/main/rec-list.html'
import requestGoodsData from '../../model/recommend/requestGoods'
import requestShopData from '../../model/recommend/requestshop'
import shopTpl from '../../views/main/shop.html'
class RecommendController{
    render(){
        $('main').html(mainTpl);
        // let data = (await requestGoodsData.get()).data.data.floor_list;
        // console.log(data);
        // this.renderList1(data);
        // this.renderList2(data);
        // this.renderList3(data);
        // this.renderList4(data);
        // this.renderTodaySale(data);
        this.renderShop();
    }
    renderList1(data){
        let data1 = data[2].data.operation_data.data.block[0].child;
        let html = template.render(recommendTpl,{data1});
        $('.main-goods-list').html(html);
    }
    renderList2(data){
        let data2 = data[3].data.operation_data.data.block[0].child;
        let html2 = template.render(recommendTpl,{data2});
        $('.main-goods-list2').html(html2);
        $('.main-list2-title img').attr("src",data[4].data.operation_data.data.block[0].child[0].data.imageUrl);
        let data3 = data[5].data.operation_data.data.block[0].child;
        let html3 = template.render(recListTpl,{data3});
        $('.main-list2-content').html(html3);
    }
    renderList3(data){
        let data4 = data[12].data.resourceGroupList[0].resourceList[0].lightArtImage.imageUrl
        $('.main-list3>img').attr("src",data4);
        let data5 = data[12].data.resourceGroupList[0].resourceList;
        let html = `<div>
                        <img src="${data5[1].lightArtImage.imageUrl}" alt="">
                        <img src="${data5[2].lightArtImage.imageUrl}" alt="">
                        <p>${data5[3].lightArtLabel.text}</p>
                    </div>
                    <div>
                        <img src="${data5[4].lightArtImage.imageUrl}" alt="">
                        <img src="${data5[5].lightArtImage.imageUrl}" alt="">
                        <p>${data5[6].lightArtLabel.text}</p>
                    </div>
                    <div>
                        <img src="${data5[7].lightArtImage.imageUrl}" alt="">
                        <img src="${data5[8].lightArtImage.imageUrl}" alt="">
                        <p>${data5[9].lightArtLabel.text}</p>
                    </div>
                    <div>
                        <img src="${data5[10].lightArtImage.imageUrl}" alt="">
                        <img src="${data5[11].lightArtImage.imageUrl}" alt="">
                        <p>${data5[12].lightArtLabel.text}</p>
                    </div>
                    `
        $('.main-list3-content').html(html);
    }
    renderList4(data){
        let data4 = data[13].data.resourceGroupList[0].resourceList[0].lightArtImage.imageUrl
        $('.main-list4>img').attr("src",data4);
        let data5 = data[13].data.resourceGroupList[0].resourceList;
        let html = `<div>
                        <img src="${data5[1].lightArtImage.imageUrl}" alt="">
                        <div>
                            <img src="${data5[6].lightArtImage.imageUrl}" alt="">
                            <p>${data5[4].lightArtLabel.text}</p>
                        </div>
                        <p><span>${data5[3].lightArtLabel.text}</span><span>${data5[5].lightArtLabel.text}</span></p>
                    </div>
                    <div>
                        <img src="${data5[7].lightArtImage.imageUrl}" alt="">
                        <div>
                            <img src="${data5[12].lightArtImage.imageUrl}" alt="">
                            <p>${data5[10].lightArtLabel.text}</p>
                        </div>
                        <p><span>${data5[9].lightArtLabel.text}</span><span>${data5[11].lightArtLabel.text}</span></p>
                    </div>
                    <div>
                        <img src="${data5[13].lightArtImage.imageUrl}" alt="">
                        <div>
                            <img src="${data5[18].lightArtImage.imageUrl}" alt="">
                            <p>${data5[16].lightArtLabel.text}</p>
                        </div>
                        <p><span>${data5[15].lightArtLabel.text}</span><span>${data5[17].lightArtLabel.text}</span></p>
                    </div>
                    `
        $('.main-list4-content').html(html);
    }
    renderTodaySale(data){
        let data8 = data[14].data.image;
        $(".today-sale").append('<img>');
        $(".today-sale img").attr("src",data8);

    }
    async renderShop(){
        // let res = (await requestShopData.get()).data.data.floor_list;
        let res = (await requestShopData.get()).data.list;
        // res = res.splice(1,18)
        // console.log(res);
        // let html = "";
        // $.each(res,(index,item)=>{
        //     if(index===0){
        //         // html +=`<div>
        //         //         <img src="${item.data.special.image}" alt="">
        //         //     </div>`
        //     }
        //     else {
        //         if(item.data.brand.remain_days ===undefined){
        //             html += `<div>
        //                     <img src="${item.data.brand.brand_image}" alt="">
        //                     <p><span>${item.data.brand.title}</span></p>
        //                     <p>${item.data.brand.discount}</p>
        //                 </div>`
        //         }
        //         else{
        //             html += `<div>
        //                         <img src="${item.data.brand.brand_image}" alt="">
        //                         <p><span>${item.data.brand.title}</span><span>${item.data.brand.remain_days}</span></p>
        //                         <p>${item.data.brand.discount}</p>
        //                     </div>`
        //         }
        //     }
        // })
        let html = template.render(shopTpl,{res,escap:false})
        $('.shop-wrap').html(html);
    }   
}
export default new RecommendController()