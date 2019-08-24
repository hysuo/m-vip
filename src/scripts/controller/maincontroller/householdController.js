import householdTpl from '../../views/household/main.html'
import requestGoodsDate from '../../model/household/requestGoods'
import HGoodsTpl from '../../views/household/h-goods.html'
import requestShopData from '../../model/household/requestshop'
import shopTpl from '../../views/household/shop.html'
class HouseHoldConteroller{
    async render(){
        $('main').html(householdTpl);
        // this.data = (await requestGoodsDate.get()).data.data.floor_list;
        // console.log(this.data)
        // this.renderSlide();
        // this.renderGoods1();
        // this.renderGoods2();
        // this.renderGoods3();
        // // this.renderImg();
        // this.renderGoods6();
        // this.renderGoods7();
        // this.renderImg2();
        // this.renderImg3();
        // this.renderImg4();
        // this.renderImg5();
        // this.renderImg6();
        this.renderShop();
    }
    renderSlide(){
        let url = this.data[1].data.operation_data.data.block[0].child[0].data.imageUrl;
        $('.household-wrap .img1').attr("src",url);
        // let data = this.data[0].data.ad_data.ad_list
        // $('.img1').attr("src",data[0].imgFullPath);
        // $('.img2').attr("src",data[1].imgFullPath);

        // $(document).ready(function () {
        //     var mySwiper = new Swiper ('.swiper-container', {
        //         direction: 'horizontal', 
        //         loop: true, // 循环模式选项
        //         autoplay:true,
        //         // 如果需要分页器
        //         pagination: {
        //           el: '.swiper-pagination',
        //         },
        //       }) 
        // })
    }
    renderGoods1(){
        let data = this.data[6].data.operation_data.data.block[0].child;
        let html = template.render(HGoodsTpl,{data})
        $('.household-goods1').html(html);
    }
    renderGoods2(){
        let data2 = this.data[3].data.operation_data.data.block[0].child;
        let html = template.render(HGoodsTpl,{data2})
        $('.household-goods2').html(html);
    }
    renderGoods3(){
        let data3 = this.data[4].data.operation_data.data.block[0].child;
        let html = template.render(HGoodsTpl,{data3})
        $('.household-goods3').html(html);
    }
    renderImg(){
        let url = this.data[6].data.operation_data.data.block[0].child[0].data.imageUrl;
        $('.household-img').append("<img>");
        $('.household-img img').attr("src",url);
    }
    renderGoods6(){
        let data6 = this.data[7].data.operation_data.data.block[0].child;
        let html = template.render(HGoodsTpl,{data6})
        $('.household-goods6').html(html);
    }
    renderGoods7(){
        let data8 = this.data[11].data.resourceGroupList[0].resourceList[0].lightArtImage.imageUrl
        $('.household-goods7').append('<img>')
        $('.household-goods7>img').attr("src",data8);
        let data5 = this.data[11].data.resourceGroupList[0].resourceList;
        let html = `<div>
                    <div>
                        <img src="${data5[1].lightArtImage.imageUrl}" alt="">
                        <img src="${data5[2].lightArtImage.imageUrl}" alt="">
                        <p><span>${data5[3].lightArtLabel.text}</span><span>${data5[4].lightArtLabel.text}</span></p>
                    </div>
                    <div>
                        <img src="${data5[5].lightArtImage.imageUrl}" alt="">
                        <img src="${data5[6].lightArtImage.imageUrl}" alt="">
                        <p><span>${data5[7].lightArtLabel.text}</span><span>${data5[8].lightArtLabel.text}</span></p>
                    </div>
                    <div>
                        <img src="${data5[9].lightArtImage.imageUrl}" alt="">
                        <img src="${data5[10].lightArtImage.imageUrl}" alt="">
                        <p><span>${data5[11].lightArtLabel.text}</span><span>${data5[12].lightArtLabel.text}</span></p>
                    </div>
                    <div>
                        <img src="${data5[13].lightArtImage.imageUrl}" alt="">
                        <img src="${data5[14].lightArtImage.imageUrl}" alt="">
                        <p><span>${data5[15].lightArtLabel.text}</span><span>${data5[16].lightArtLabel.text}</span></p>
                    </div>
                    </div>`
        $('.household-goods7').append(html);
    }
    renderImg2(){
        let url = this.data[12].data.operation_data.data.block[0].child[0].data.imageUrl;
        $('.household-img2').append("<img>");
        $('.household-img2 img').attr("src",url);
    }
    renderImg3(){
        let url = this.data[13].data.operation_data.data.block[0].child[0].data.imageUrl;
        $('.household-img3').append("<img>");
        $('.household-img3 img').attr("src",url);
    }
    renderImg4(){
        let url = this.data[14].data.operation_data.data.block[0].child[0].data.imageUrl;
        $('.household-img4').append("<img>");
        $('.household-img4 img').attr("src",url);
    }
    renderImg5(){
        let data8 = this.data[15].data.operation_data.data.block[0].child;
        let html = template.render(HGoodsTpl,{data8})
        $('.household-img5').html(html);
    }
    renderImg6(){
        let url = this.data[16].data.operation_data.data.block[0].child[0].data.imageUrl;
        $('.household-img6').append("<img>");
        $('.household-img6 img').attr("src",url);
    }
    async renderShop(){
        let res = (await requestShopData.get()).data.data.floor_list;
        let html = template.render(shopTpl,{res})
        $('.household-shop-list').html(html);
    }
}
export default new HouseHoldConteroller();