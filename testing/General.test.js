import ProductsPage from '../pages/productsPage';
import loginPage from '../pages/loginPage'
import ShoppingCart from '../pages/ShopingCartPage'
import CheckOutInfo from '../pages/CheckOutInfoPage'
import CheckInfoTwo from '../pages/CheckInfoTwoPage'
import {CREDENTIALS} from '../data/Constants'
import { roleUserValid,roleUserInvalid } from '../roles/Roles'
var x;

fixture('Login feature testing')

test.skip('1. Login with an user valid', async t =>{
    await t
    .useRole(roleUserValid)
    await t.expect(ProductsPage.pageTitle.exists).ok()
   

})

test.skip('2. Login with an user invalid', async t =>{
    await t
    .useRole(roleUserInvalid)

    await t.expect(loginPage.errorMessage.exists).ok()
})
test.skip('3. Logout from products page', async t =>{
    await t
    .useRole(roleUserValid)
    await t
    .click(ProductsPage.menuSlideLeftUp)
    .click(ProductsPage.logoutOption)

    

})
test.skip('4. Navigate to the shopping cart', async t =>{
    await t
    .useRole(roleUserValid)
    .click(ProductsPage.carBuyButton)
    await t.expect(ShoppingCart.titleShoppingCart.exists).ok()

})
test('5. Add a single item to the shopping cart', async t =>{
    await t
    .useRole(roleUserValid)
    .click(ProductsPage.imgSauceLabsBackPack)
    .click(ProductsPage.addItemButton.nth(0))
    //await t.expect(ShoppingCart.spamIconShopCart).gt(0, 'There is an item added')

})

test.skip('6. Add multiple items to the shopping cart', async t =>{
    await t
    .useRole(roleUserValid)
    .click(ProductsPage.addItemButton.nth(1))
    .click(ProductsPage.addItemButton.nth(2))
    .click(ProductsPage.addItemButton.nth(3))
    .click(ProductsPage.carBuyButton)
 


})

test.skip('7. Continue missing mail information', async t =>{
    await t
    .useRole(roleUserValid)
    .click(ProductsPage.carBuyButton)
    .click(ShoppingCart.buttonCheckOut)
    .click(CheckOutInfo.buttonContinue)
    await t.expect(CheckOutInfo.errorMessage.exists).ok()




})
test.skip('8. Fill´s user information', async t =>{
    await t
    .useRole(roleUserValid)
    .click(ProductsPage.carBuyButton)
    .click(ShoppingCart.buttonCheckOut)
    .typeText(CheckOutInfo.fieldFirstName, CREDENTIALS.INFORMATION.FIRSTNAME)
    .typeText(CheckOutInfo.fieldLastName, CREDENTIALS.INFORMATION.LASTNAME)
    .typeText(CheckOutInfo.fieldZip, CREDENTIALS.INFORMATION.ZIP)
    .click(CheckOutInfo.buttonContinue)
    await t.expect(CheckInfoTwo.textSubtotal.exists).ok()
    await t.expect(CheckInfoTwo.textTax.exists).ok()
    await t.expect(CheckInfoTwo.textTotal.exists).ok()
      
    
})