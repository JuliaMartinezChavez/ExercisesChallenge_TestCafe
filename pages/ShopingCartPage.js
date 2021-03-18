import {Selector} from 'testcafe'

class ShopingCartPage{
    constructor(){
        this.titleShoppingCart = Selector('div[class="subheader"]')
        this.spamIconShopCart = Selector('spam[class="fa-layers-counter shopping_cart_badge"]')
        this.buttonCheckOut = Selector('a[class="btn_action checkout_button"]')
    }
}
export default new ShopingCartPage()