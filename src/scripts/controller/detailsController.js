import footerTpl from '../views/details/footer.html'
import mainTpl from '../views/details/main.html'
class DetailsController {
    htmlRender() {
        $('.details-container footer').html(footerTpl);
        // $('.details-container main').html(mainTpl);
        this.renderMain();
        this.changeTab();
        this.addCart();
    }
    changeTab() {
        $('.d-size-list li').on('tap', function () {
            $(this).addClass('d-size-active').siblings().removeClass('d-size-active');
        })
    }
    renderMain() {
        let data = localStorage.getItem("data");
        data = JSON.parse(data);
        let id = localStorage.getItem("ID");
        id = JSON.parse(id)[0].id;
        data = this.data = $.grep(data, item => {
            return item.productId === id;
        })
        let html = template.render(mainTpl, { data })
        $('.details-container main').html(html);
    }
    addCart() {
        let id = localStorage.getItem("ID");
        id = JSON.parse(id)[0].id;
        $('.add-cart').on('tap', () => {
            let a = localStorage.getItem("cart")
            if (a === null) {
                let arr = [{
                    id: id,
                    count: 1,
                    size:$('.d-size-active').html(),
                }];
                localStorage.setItem("cart", JSON.stringify(arr))
            } else {
                let la = JSON.parse(a);
                let has_same_id = false;
                $.each(la, (index, item) => {
                    if (item.id === id && item.size === $('.d-size-active').html()) {
                        console.log(1)
                        item.count++;
                        has_same_id = true;
                    }
                })
                if (!has_same_id) {
                    la.push({
                        id: id,
                        count: 1,
                        size:$('.d-size-active').html(),
                    })
                }
                localStorage.setItem("cart", JSON.stringify(la))
            }
            $('.cart-count').html(this.Total());
        })
        $('.cart-count').html(this.Total());
    }
    Total() {
        let la = localStorage.getItem("cart");
        la = JSON.parse(la === null ? "[]" : la)
        let sum = 0;
        $.each(la, (index, item) => {
            sum += item.count;
        })
        return sum;
    }
}
export default new DetailsController();