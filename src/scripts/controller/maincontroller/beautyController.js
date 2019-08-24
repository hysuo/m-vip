import beautyTpl from '../../views/beauty/beautyMain.html'
import requestGoodsData from '../../model/beauty/requestGoods'
import BGoodsTpl from '../../views/beauty/b-goods.html'
import requestShop from '../../model/beauty/requestshop'
import shopTpl from '../../views/beauty/shop.html'
class BeautyController{
    async render(){
        $('main').html(beautyTpl)
        this.data = requestGoodsData;
        this.data = (await requestGoodsData.get()).data.data.floor_list;
        console.log(this.data);
        this.renderSlide();
        // // this.renderGoods();
        // this.renderGoods2();
        // // this.renderImg();
        // this.renderGoods3();
        // this.renderGoods4();
        // this.renderGoods5();
        // this.renderGoods6();
        // this.renderImg2();
        // this.renderImg3();
        // this. renderTitle();
        this.renderShop();
    }
    renderSlide(){
        // let url = this.data[0].data.operation_data.data.block[0].child[0].data.imageUrl;
        // $('.main-beauty-slide').append("<img>");
        // $('.main-beauty-slide img').attr("src",url);
        // let data = this.data[0].data.ad_data.ad_list
        // $('.beauty-img1').attr("src",data[0].imgFullPath);
        // $('.beauty-img2').attr("src",data[1].imgFullPath);
        // $('.beauty-img3').attr("src",data[2].imgFullPath);
        // $('.beauty-img4').attr("src",data[3].imgFullPath);

        $(document).ready(function () {
            var mySwiper = new Swiper ('.swiper-container', {
                direction: 'horizontal', 
                loop: true, // 循环模式选项
                autoplay:true,
                // 如果需要分页器
                pagination: {
                  el: '.swiper-pagination',
                },
              }) 
        })
    }
    renderGoods(){
        let data = this.data[1].data.operation_data.data.block[0].child;
        let html = template.render(BGoodsTpl,{data})
        $('.beauty-goods1').html(html);
    }
    renderGoods2(){
        let data2 = this.data[1].data.operation_data.data.block[0].child;
        let html = template.render(BGoodsTpl,{data2})
        $('.beauty-goods2').html(html);
    }
    renderImg(){
        let url = this.data[3].data.operation_data.data.block[0].child[0].data.imageUrl;
        $('.beauty-img').append("<img>");
        $('.beauty-img img').attr("src",url);
    }
    // renderGoods3(){
    //     let data3 = this.data[1].data.operation_data.data.block[0].child;
    //     let html = template.render(BGoodsTpl,{data3})
    //     $('.beauty-goods3').html(html);
    // }
    renderGoods4(){
        let data5 = this.data[1].data.operation_data.data.block[0].child;
        let html = template.render(BGoodsTpl,{data5})
        $('.beauty-goods4').html(html);
    }
    renderGoods5(){
        let data6 = this.data[2].data.operation_data.data.block[0].child;
        let html = template.render(BGoodsTpl,{data6})
        $('.beauty-goods5').html(html);
    }
    renderGoods6(){
        let data4 = this.data[3].data.resourceGroupList[0].resourceList[0].lightArtImage.imageUrl
        $('.beauty-goods6').append('<img>')
        $('.beauty-goods6>img').attr("src",data4);
        let data5 = this.data[3].data.resourceGroupList[0].resourceList;
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
        $('.beauty-goods6').append(html);
    }
    renderImg2(){
        let url = this.data[4].data.operation_data.data.block[0].child[0].data.imageUrl;
        $('.beauty-img2').append("<img>");
        $('.beauty-img2 img').attr("src",url);
    }
    // renderImg3(){
    //     let url = this.data[1].data.operation_data.data.block[0].child[0].data.imageUrl;
    //     $('.beauty-img3').append("<img>");
    //     $('.beauty-img3 img').attr("src",url);
    // }
    renderTitle(){
        $(".beauty-title").append('<span></span>')
        $(".beauty-title span").html(this.data[4].data.text);
    }
    async renderShop(){
        let res = (await requestShop.get()).data.data.floor_list;
        let html =template.render(shopTpl,{res})
        $('.beauty-shop-list').html(html);
    }
}
export default new BeautyController();