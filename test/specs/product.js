const ProductPage = require('../pageobject/productpage')

describe('Choosing product', () => {

    it('should be navigate to product detail', async() => {
        await ProductPage.productImg.click()
        await expect (ProductPage.productname).toBeExisting()
    })
    })

describe('Click cart', () => {

    it('should be navigate to cart', async() => {
        await ProductPage.cartIcon.click()
        await expect (ProductPage.cart).toBeExisting()
    })
})



