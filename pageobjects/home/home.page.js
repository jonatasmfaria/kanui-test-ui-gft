export default class HomePage {

    get btnEnter() { return $(`.header-login .header-login-link`) }

    clickBtnEnter() {
        this.btnEnter.waitForDisplayed()
        this.btnEnter.click()
    }

}