const LoginPage = require('../pageobject/loginpage')

describe('Click navbar', () => {

    it('open navigation bar', async() => {
        await LoginPage.navbar.click()
        await expect (LoginPage.loginBtn).toBeExisting()
    })
    })





