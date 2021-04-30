import Actions from "../../helpers/actions"

export default class AccountHomePage {
    get accountName() { return $(`.header-login-welcome-name`) }
    get btnMyDemand() { return $(`//p[contains(text(),'Meus Pedidos')]`) }
    get btnMyFavorites() { return $(`//p[contains(text(),'Meus Favoritos')]`) }
    get btnCancelExchangeOrReturn() { return $(`//p[contains(text(),'Cancelar, Trocar ou Devolver')]`) }
    get btnAccountInformation() { return $(`//p[contains(text(),'Informações de Conta')]`) }
    get btnMyAddresses() { return $(`//p[contains(text(),'Meus Endereços')]`) }
    get btnCardsAndCoupons() { return $(`//p[contains(text(),'Cartões e Vales')]`) }


    getAccountName() {
        this.accountName.waitForDisplayed()
        return this.accountName.getText()
    }

    isVisibleBtnMyDemand() {
        Actions.scrollIntoViewElement(this.btnMyDemand)
        return this.btnMyDemand.isDisplayed()
    }

    isVisibleBtnMyFavorites() {
        return this.btnMyFavorites.isDisplayed()
    }

    isVisibleBtnCancelExchangeOrReturn() {
        return this.btnCancelExchangeOrReturn.isDisplayed()
    }

    isVisibleBtnAccountInformation() {
        return this.btnAccountInformation.isDisplayed()
    }

    isVisibleBtnMyAddresses() {
        return this.btnMyAddresses.isDisplayed()
    }

    isVisibleBtnCardsAndCoupons() {
        return this.btnCardsAndCoupons.isDisplayed()
    }
}