export function always(container){

    // Header

    let header = document.createElement('div')

    header.classList.add("header")

    container.appendChild(header)

    // Restaurant Name

    let name = document.createElement('div')

    name.classList.add('name')

    name.textContent = 'The Pizza Place'

    header.appendChild(name)

    // Buttons and their background

    let btnBG = document.createElement('div')

    btnBG.classList.add('btnBG')

    let homeBTN = document.createElement('button')
    let menuBTN = document.createElement('button')
    let contactBTN = document.createElement('button')

    homeBTN.textContent = 'Home'
    menuBTN.textContent = 'Menu'
    contactBTN.textContent = 'Contact'

    let buttonArray = [homeBTN, menuBTN, contactBTN];
    
    buttonArray.forEach(element => {
        element.classList.add('button-40')
        btnBG.appendChild(element)
        
    });


    container.appendChild(btnBG)


    // Div That will change when the page changes

    let page = document.createElement('div')
    page.classList.add('page')

    container.appendChild(page)

    // footer
    
    let footer = document.createElement('div')
    footer.classList.add('footer')

    footer.textContent = ' Created by Aadhil Moola for The Odin Project'

    container.appendChild(footer)

    

}