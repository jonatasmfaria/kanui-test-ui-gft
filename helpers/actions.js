import { HML, HML2, HML1, PROD } from '../environmentUrls'
var CPF = require("cpf_cnpj").CPF;
var CNPJ = require("cpf_cnpj").CNPJ;
const ENV = process.env.ENV

export default class Actions {

    static generateCPF() {
        return CPF.generate(true);
    }

    static generateCNPJ() {
        return CNPJ.generate(true);
    }

    static scrollIntoViewElement(element) {
        element.scrollIntoView()
    }

    static getRandomNumber() {
        return Math.random()
    }

    static getEnvironmentName() {
        switch (ENV) {
            case 'HML':
                return HML.name
                break;
            case 'HML1':
                return HML1.name
                break;
            case 'HML2':
                return HML2.name
                break;
            case 'PROD':
                return PROD.name
                break;
            default:
                break;
        }
    }

    static getEnvironmentUrl() {
        switch (ENV) {
            case 'HML':
                return HML.url
                break;
            case 'HML1':
                return HML1.url
                break;
            case 'HML2':
                return HML2.url
                break;
            case 'PROD':
                return PROD.url
                break;
            default:
                break;
        }
    }

    static open(path) { browser.url(path) }
    static reloadSession() { browser.reloadSession() }
    static newUrl(path) { browser.navigateTo(path) }
}