import {Selector} from 'testcafe'

class CheckInfoTwoPage{
    constructor(){
            this.textPayInformation = Selector('div[class="summary_value_label"]')
            this.textSubtotal = Selector('div[class="summary_subtotal_label"]')
            this.textTax = Selector('div[class="summary_tax_label"]')
            this.textTotal = Selector('div[class="summary_total_label"]')
            this.buttonFinish = Selector('a[class="btn_action cart_button""]')

    }
}
export default new CheckInfoTwoPage()