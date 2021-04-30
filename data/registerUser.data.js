import Actions from "../helpers/actions"

export const userDataPF = {
    typeOfPerson: 0,
    name: 'TESTANDO',
    lastName: `Test`,
    email: `${Actions.getRandomNumber()}@test.com.br`,
    genderUser: 'male',
    birth: {
        day: '15',
        month: '03',
        year: '1996'
    },
    password: 'Test@1234#@',
    confirmPassword: 'Test@1234#@',
    newsletterSubscribed: false
}

export const userDataPJ = {
    typeOfPerson: 1,
    name: 'TESTANDO',
    companyName: 'TESTANDO COMPANY NAME',
    isExempt: true,
    email: `${Actions.getRandomNumber()}@test.com.br`,
    genderUser: 'female',
    birth: {
        day: '15',
        month: '03',
        year: '1996'
    },
    password: 'Test@1234#@',
    confirmPassword: 'Test@1234#@',
    newsletterSubscribed: true
}