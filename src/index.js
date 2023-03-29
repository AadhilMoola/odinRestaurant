import './styles.css'
import { always } from './functions/always';
import { home } from './functions/home';
import { clear } from './functions/clearPage'
import { removeActive } from './functions/removeActive';
import { menu } from './functions/menu';
import { contact } from './functions/contact';

let container = document.querySelector('content')

    always(content)

let page = document.querySelector('.page')

    home(page)



let homeBTN = document.querySelector('.homeBTN')
let menuBTN = document.querySelector('.menuBTN')
let contactBTN = document.querySelector('.contactBTN')

const buttonArray = [homeBTN, menuBTN, contactBTN]

homeBTN.addEventListener('click', function(){
    removeActive(buttonArray);
    clear(page);
    home(page);
} )


menuBTN.addEventListener('click', function () {
    removeActive(buttonArray);
    clear(page);
    menu(page)

})

contactBTN.addEventListener('click', function () {
    removeActive(buttonArray);
    clear(page);
    contact(page)

})