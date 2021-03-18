import {Selector} from 'testcafe'

class CheckOutInfoPage{
    constructor(){
        this.fieldFirstName = Selector('input[id="first-name"]')
        this.fieldLastName = Selector('input[id="last-name"]')
        this.fieldZip = Selector('input[id="postal-code"]')
        this.errorMessage = Selector('h3[data-test="error"]')
        this.buttonContinue = Selector('input[class="btn_primary cart_button"]')
    }
}
export default new CheckOutInfoPage()