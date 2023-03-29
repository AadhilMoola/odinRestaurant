export function contact(page){

    // make the button active
    let contactBTN = document.querySelector('.contactBTN')
    contactBTN.classList.add('active')

    let contact = document.createElement('div')

    contact.textContent = "You can call us on the following: 012 345 6789"

    contact.style.cssText = "text-align: center; padding-top: 100px;"

    page.appendChild(contact)



}