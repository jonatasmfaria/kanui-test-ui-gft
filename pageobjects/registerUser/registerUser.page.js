import { userData } from "../../data/registerUser.data"
import Actions from "../../helpers/actions"

export default class RegisterUserPage {

    get checkboxPF() { return $(`#RegistrationForm_customer_personality_0`) }
    get checkboxPJ() { return $(`#RegistrationForm_customer_personality_1`) }
    get inputNameOrCompanyName() { return $(`#RegistrationForm_first_name`) }
    get inputLastName() { return $(`#RegistrationForm_last_name`) }
    get inputEmail() { return $(`#RegistrationForm_email`) }
    get checkboxExempt() { return $(`#RegistrationForm_state_registration_exempt`) }
    set selectGender(genderOfUser) { this.gender = $(`option[value='${genderOfUser}']`) }
    get selectGender() { return this.gender }
    get inputCpfOrCnpj() { return $(`#RegistrationForm_tax_identification`) }
    set selectYear(option) { this.optionSelected = $(`.selectbox.year option[value='${option}']`) }
    get selectYear() { return this.optionSelected }
    set selectMonth(option) { this.optionSelected = $(`.selectbox.month option[value='${option}']`) }
    get selectMonth() { return this.optionSelected }
    set selectDay(option) { this.optionSelected = $(`.selectbox.day option[value='${option}']`) }
    get selectDay() { return this.optionSelected }
    get inputPassword() { return $(`#form-customer-account-password`) }
    get inputConfirmPassword() { return $(`#RegistrationForm_password2`) }
    get btnCreateAccount() { return $(`#customer-account-create`) }
    get checkboxNewsletterSubscribed() { return $(`#RegistrationForm_is_newsletter_subscribed`) }

    setInputNameOrCompanyName(name) {
        this.inputNameOrCompanyName.waitForDisplayed()
        this.inputNameOrCompanyName.setValue(name)
    }

    setInputLastName(lastName) {
        this.inputLastName.waitForDisplayed()
        this.inputLastName.setValue(lastName)
    }

    setInputEmail(email) {
        this.inputEmail.waitForDisplayed()
        this.inputEmail.setValue(email)
    }

    setInputCpfOrCnpj(userRegistrationData) {
        let cpfOrCnpj = userRegistrationData.typeOfPerson === 0 ? Actions.generateCPF() : Actions.generateCNPJ()
        this.inputCpfOrCnpj.waitForDisplayed()
        this.inputCpfOrCnpj.setValue(cpfOrCnpj)
    }

    setInputPassword(password) {
        this.inputPassword.waitForDisplayed()
        this.inputPassword.setValue(password)
    }

    setInputConfirmPassword(confirmPassword) {
        this.inputConfirmPassword.waitForDisplayed()
        this.inputConfirmPassword.setValue(confirmPassword)
    }

    setUserGender(userGender) {
        this.selectGender = userGender
        this.selectGender.waitForDisplayed()
        this.selectGender.click()
    }

    setDay(day) {
        this.selectDay = day
        this.selectDay.waitForDisplayed()
        this.selectDay.click()
    }

    setMonth(month) {
        this.selectMonth = month
        this.selectMonth.waitForDisplayed()
        this.selectMonth.click()
    }

    setYear(year) {
        this.selectYear = year
        this.selectYear.waitForDisplayed()
        this.selectYear.click()
    }

    setBirthUser(birthUser) {
        this.setDay(birthUser.birth.day)
        this.setMonth(birthUser.birth.month)
        this.setYear(birthUser.birth.year)
    }

    clickNewsletterSubscribed() {
        this.checkboxNewsletterSubscribed.waitForDisplayed()
        this.checkboxNewsletterSubscribed.click()
    }

    clickCheckboxExempt() {
        this.checkboxExempt.waitForDisplayed()
        this.checkboxExempt.click()
    }

    isSelectedCheckboxNewsletterSubscribed() {
        return this.checkboxNewsletterSubscribed.getAttribute("checked") === "checked" ? true : false
    }

    setUserDataPf(userRegistrationDataPf) {
        userRegistrationDataPf.typeOfPerson === 0 ? this.checkboxPF.click() : this.checkboxPJ.click()
        this.setInputNameOrCompanyName(userRegistrationDataPf.name)
        this.setInputLastName(userRegistrationDataPf.lastName)
        this.setInputEmail(userRegistrationDataPf.email)
        this.setUserGender(userRegistrationDataPf.genderUser)
        this.setInputCpfOrCnpj(userRegistrationDataPf)
        this.setBirthUser(userRegistrationDataPf)
        this.setInputPassword(userRegistrationDataPf.password)
        this.setInputConfirmPassword(userRegistrationDataPf.confirmPassword)
        if (this.isSelectedCheckboxNewsletterSubscribed() === true && userRegistrationDataPj.newsletterSubscribed != true)
            this.clickNewsletterSubscribed()
    }

    setUserDataPj(userRegistrationDataPj) {
        userRegistrationDataPj.typeOfPerson === 0 ? this.checkboxPF.click() : this.checkboxPJ.click()
        this.setInputNameOrCompanyName(userRegistrationDataPj.companyName)
        if (userRegistrationDataPj.isExempt === true)
            this.clickCheckboxExempt()
        this.setInputEmail(userRegistrationDataPj.email)
        this.setInputCpfOrCnpj(userRegistrationDataPj)
        this.setInputPassword(userRegistrationDataPj.password)
        this.setInputConfirmPassword(userRegistrationDataPj.confirmPassword)
        if (this.isSelectedCheckboxNewsletterSubscribed() === true && userRegistrationDataPj.newsletterSubscribed != true)
            this.clickNewsletterSubscribed()
    }

    clickCreateAccount() {
        Actions.scrollIntoViewElement(this.btnCreateAccount)
        this.btnCreateAccount.waitForDisplayed()
        this.btnCreateAccount.click()
    }

    createAccountPf(userRegistrationData = userData) {
        this.setUserDataPf(userRegistrationData)
        this.clickCreateAccount()
    }

    createAccountPj(userRegistrationData = userData) {
        this.setUserDataPj(userRegistrationData)
        this.clickCreateAccount()
    }
}