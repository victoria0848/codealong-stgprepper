import { cookieBanner } from "../../controllers/cookieBannerController.js"
import { Div, Heading, Input, Label, Li, Link, Paragraph, Ul } from "../atoms/index.js"
import { Image } from "../atoms/index.js"

export const HeaderView = () => {
    const element = document.createElement('header')
    element.className = 'header'
    // Logo 
    const logo = Image('./images/logo.svg', 'Sgt. Prepper logo', 'logo')
    element.append(logo)

    // Login-link
    const p = Paragraph('loginp')
    const a = Link('/index.htm#/login', 'Login', 'login')
    p.append(a)
    element.append(p)

    // Cart-link
    const cart = Paragraph()
    const cartLink = Link('/index.htm#/cart')
    const cartIcon = Image('./images/icons/cart.svg', 'Se kurv', 'cart-icon')
    cartLink.append(cartIcon)
    cart.append(cartLink)
    element.append(cart)

    return element
}


// export const WelcomeSectionView = () => {
//   const section = document.createElement('section')
//   section.className = 'welcome-section'

//   const welcomeImg = Image('./images/welcome.svg', 'Velkomstbillede', 'welcome-img')

//   const welcomeText = document.createElement('h2')
//   welcomeText.className = 'welcome-text'
//   welcomeText.innerText = 'Velkommen til Sgt. Prepper.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

//   section.append(welcomeImg, welcomeText)
//   return section
// }

export const NavBarView = arrNavItems => {
    const element = document.createElement('nav')
    element.className = 'navbar'
    const ul = Ul('flex')

    arrNavItems.forEach(item => {
        const { url, title } = item // Destructure assignment - udskiller egenskaber fra objekt

        const li = Li()
        const item1 = Link(url, title, '')
        li.append(item1)
        ul.append(li)
    })

    element.append(ul)
    return element
}

export const MainView = (title, content) => {
    const element = document.createElement('main')
    element.className = "main"
    const h1 = Heading(title)
    element.append(h1, content)
    element.append(cookieBanner())
    return element
}

export const FooterView = () => {
    const element = document.createElement('footer')
    element.className = "footer"
    return element
}

export const FormGroup = (title, name, placeholder, type, value) => {
    const element = Div('mb-4')
    const label = Label(title, name)
    const input = Input(name, placeholder, type, value)    
    element.append(label, input)
    return element
}