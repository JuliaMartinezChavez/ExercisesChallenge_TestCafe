import { t, Role } from 'testcafe'
import LoginPage from '../pages/loginPage'
import {CREDENTIALS} from '../data/Constants'

const saucedoDemoUrl = 'https://www.saucedemo.com/'


export const roleUserValid = Role(saucedoDemoUrl, async t => {
    await validUserLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.USERPASS)
}, {
        preserveUrl: true
});
export const roleUserInvalid = Role(saucedoDemoUrl, async t => {
    await invalidUserLogin(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.USERPASS)
}, {
        preserveUrl: true
});


async function validUserLogin(userName, password) {
    await t
    .typeText(LoginPage.userNameField, userName)
        .typeText(LoginPage.userPassField, password)
        .click(LoginPage.loginButton)
};

async function invalidUserLogin(userName, password) {
    await t
    .typeText(LoginPage.userNameField, userName)
    .typeText(LoginPage.userPassField, password)
    .click(LoginPage.loginButton)
};


