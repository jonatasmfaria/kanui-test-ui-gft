import Actions from "../../helpers/actions"

export default class LoginPage {

    get inputEmail() { return $(`#LoginForm_email`) }
    get inputPassword() { return $(`#LoginForm_password`) }
    get btnEnter() { return $(`#customer-account-login`) }
    get btnSignUp() { return $(`.accordion .accordion-item:last-child .accordion-link .account-form-title`) }

    open() {
        Actions.open(browser.config.baseUrl)
        browser.maximizeWindow()
    }

    clickSignUp() {
        this.btnSignUp.waitForDisplayed()
        this.btnSignUp.click()
    }
}