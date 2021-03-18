import {Selector} from 'testcafe';
class productsPage{
    constructor(){
        this.pageTitle = Selector('.product_label')
        this.menuSlideLeftUp = Selector('#react-burger-menu-btn')
        this.logoutOption = Selector('#logout_sidebar_link')
        this.carBuyButton = Selector('.shopping_cart_container')
        this.addItemButton = Selector('button').withText('ADD TO CART')
        this.imgSauceLabsBackPack = Selector('.inventory_item_img')
    }
}

export default new productsPage()