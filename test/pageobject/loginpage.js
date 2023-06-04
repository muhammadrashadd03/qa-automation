class LoginPage {
    get navbar () { 
        return $('(//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView')
    }
    get loginBtn() {
        return $('//android.view.ViewGroup[@content-desc="menu item log in"]/android.widget.TextView')
    }
    get loginText () { 
        return $('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView')
}
}



module.exports = new LoginPage() 