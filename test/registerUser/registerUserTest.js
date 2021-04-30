import { assert } from 'chai'
import allureReporter from '@wdio/allure-reporter'
import { accountHomePage, homePage, loginPage, registerUser } from '../../constants'
import { userDataPF, userDataPJ } from '../../data/registerUser.data'
import Actions from '../../helpers/actions'

describe(`Kanui - Cadastro de Usuário`, function () {

    beforeEach(function () {
        allureReporter.addStory('Registro de usuário')
        allureReporter.addSeverity('critical')
        allureReporter.addEnvironment(Actions.getEnvironmentName(), Actions.getEnvironmentUrl())
        loginPage.open()
        homePage.clickBtnEnter()
        loginPage.clickSignUp()
    })

    it(`[Test-01]Cadastro de usuário pessoa fisíca`, function () {
        registerUser.createAccountPf(userDataPF)
        assert.equal(accountHomePage.getAccountName(), userDataPF.name, `O nome do usuário não foi exibido.`)
        assert.isTrue(accountHomePage.isVisibleBtnMyDemand(), `Botão 'Meus pedidos' não foi exibido na tela.`)
        assert.isTrue(accountHomePage.isVisibleBtnMyFavorites(), `Botão 'Meus favoritos' não foi exibido na tela.`)
        assert.isTrue(accountHomePage.isVisibleBtnCancelExchangeOrReturn(), `Botão 'Cancelar, Trocar ou Devolver' não foi exibido na tela.`)
        assert.isTrue(accountHomePage.isVisibleBtnAccountInformation(), `Botão 'Informações de Conta' não foi exibido na tela.`)
        assert.isTrue(accountHomePage.isVisibleBtnMyAddresses(), `Botão 'Meus Endereços' não foi exibido na tela.`)
        assert.isTrue(accountHomePage.isVisibleBtnCardsAndCoupons(), `Botão 'Cartões e Vales' não foi exibido na tela.`)
    })

    it(`[Test-02]Cadastro de usuário pessoa jurídica`, function () {
        registerUser.createAccountPj(userDataPJ)
        assert.equal(accountHomePage.getAccountName(), userDataPJ.name, `O nome do usuário não foi exibido.`)
        assert.isTrue(accountHomePage.isVisibleBtnMyDemand(), `Botão 'Meus pedidos' não foi exibido na tela.`)
        assert.isTrue(accountHomePage.isVisibleBtnMyFavorites(), `Botão 'Meus favoritos' não foi exibido na tela.`)
        assert.isTrue(accountHomePage.isVisibleBtnCancelExchangeOrReturn(), `Botão 'Cancelar, Trocar ou Devolver' não foi exibido na tela.`)
        assert.isTrue(accountHomePage.isVisibleBtnAccountInformation(), `Botão 'Informações de Conta' não foi exibido na tela.`)
        assert.isTrue(accountHomePage.isVisibleBtnMyAddresses(), `Botão 'Meus Endereços' não foi exibido na tela.`)
        assert.isTrue(accountHomePage.isVisibleBtnCardsAndCoupons(), `Botão 'Cartões e Vales' não foi exibido na tela.`)
    })

})