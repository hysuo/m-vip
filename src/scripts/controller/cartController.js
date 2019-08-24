import headerTpl from '../views/cart/header.html'
import footerTpl from '../views/cart/footer.html'
import mainTpl from '../views/cart/main.html'
class CartController{
    htmlRender(){
        $('.cart-container header').html(headerTpl)
        // $('.cart-container main').html(mainTpl);
        this.renderMain()
        this.changeGoodsNum()
        this.removeGoods()
        this.handlerTap()
    }
    renderMain(){
        this.arr=[]
        this.cart_data = JSON.parse(localStorage.getItem("cart")) 
        this.cart_data = (this.cart_data ===null ? "[]":this.cart_data)
        this.goods_data = JSON.parse(localStorage.getItem("data")) 
        $.each(this.goods_data,(goods_index,goods_item)=>{
          $.grep(this.cart_data,cart_item=>{
                if(goods_item.productId===cart_item.id){
                    this.a =JSON.parse(JSON.stringify(goods_item))
                    this.a.count =cart_item.count
                    this.a.size =cart_item.size
                    this.arr.push(this.a)
                }
          })  
        })
        let data = this.arr;
        let html = ""
        if(data.length===0){
             html = "<div class=cart-null>购物车空空如也,赶紧去挑选自己心仪的商品吧</div>"
            $('.cart-container main').html(html)
            $('.cart-container footer').html('')
        }else{
             html = template.render(mainTpl,{data})
            $('.cart-container main').html(html)
            $('.cart-container footer').html(footerTpl)
            $('.cart-total').html(this.totalPrice(data))
        }
    }
    changeGoodsNum(){
        $('.cart-container main').on('tap','.reduce-num',(evt)=>{
            let target = $(evt.target)
            let id = target.attr('data-id')
            let size = target.attr('data-size')
            $.each(this.cart_data,(index,item)=>{
                if(item.id === id && item.size === size){
                    item.count--
                    if(item.count === 0){
                        this.cart_data.splice(index,1)
                    }
                }
            })
            localStorage.setItem("cart",JSON.stringify(this.cart_data))
            this.renderMain()
        })
        $('.cart-container main').on('tap','.add-num',(evt)=>{
            let  target = $(evt.target)
            let id = target.attr('data-id')
            let size = target.attr('data-size')
            $.each(this.cart_data,(index,item)=>{
                if(item.id === id && item.size === size){
                    item.count++
                }
            })
            localStorage.setItem("cart",JSON.stringify(this.cart_data))
            this.renderMain()
        })
    }
    totalPrice(list){
        let sum_price = 0
        $.each(list,(index,item)=>{
            sum_price += (item.vipshopPrice * item.count);
        });
        return sum_price;
    }
    removeGoods(){
        $('.cart-container main').on('tap','.cart-remove',(evt)=>{
            let  target = $(evt.target)
            let id = target.attr('data-id')
            let size = target.attr('data-size')
            $.each(this.cart_data,(index,item)=>{
                if(item.id === id && item.size === size){
                    this.cart_data.splice(index,1)
                }
            })
            localStorage.setItem("cart",JSON.stringify(this.cart_data))
            console.log(1)
            this.renderMain()
        })
    }
    handlerTap(){
        $('.cart-return').on('tap',()=>{
            window.history.go(-1);
        })
        $('.clear-cart').on('tap',()=>{
            let clear = confirm("确定要清空购物车吗?");
            if(clear){
                localStorage.removeItem("cart");
                this.renderMain()
            }
        })
    }
} 
export default new CartController()