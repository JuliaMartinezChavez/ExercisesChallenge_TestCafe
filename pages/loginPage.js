import {Selector} from 'testcafe';

class loginPage{
    constructor(){
        this.userNameField = Selector ('input[name="user-name"]')
        this.userPassField = Selector('input[name="password"]')
        this.loginButton = Selector('input[id="login-button"]')
        this.errorMessage = Selector('h3[data-test="error"]')
        this.logoLogin = Selector('div[name="login_logo"]')
    }
}
export default new loginPage()