class ProductPage {
    get productImg () { 
        return $('(//android.view.ViewGroup[@content-desc="store item"])[1]/android.view.ViewGroup[1]/android.widget.ImageView')
    }
    get productname() {
        return $('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView')
    }
    get cartIcon () { 
        return $('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView')
}
    get cart() {
        return $('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView')
}
}



module.exports = new ProductPage() 