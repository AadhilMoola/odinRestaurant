export function menu(page){

    // Makes the button active on the webpage
    let menuBTN = document.querySelector('.menuBTN')
    menuBTN.classList.add('active')

    let menu = document.createElement('div')

    // Creates an object constructor for all the Pizzas
    class Pizza {
        constructor(name, picture, price){
            this.name = name;
            this.picture = picture;
            this.price = price;
        }
    }

    // Creates all the Pizza Objects
let margarita = new Pizza('Margarita', '../src/images/phillip-goldsberry-PKfz98depf0-unsplash.jpg', 'R50.00')
let pepperoni  = new Pizza('Pepperoni','../src/images/amirhosein-darbzanjiri-Q5NhoNIFxXQ-unsplash.jpg', 'R80.00')
let veg = new Pizza('Vegetarian', '../src/images/engin-akyurt-i1CCaOnyWiI-unsplash.jpg', 'R65.00')

// In an array so as to loop through
const pizzaArray = [margarita, pepperoni, veg]

// Table for all the pizzas on the page
let table = document.createElement('table')


menu.appendChild(table)


for(let i = 0; i<pizzaArray.length; i++){
    
    let row = document.createElement('tr')
    table.appendChild(row)

    let name = document.createElement('td')
    name.textContent = pizzaArray[i].name
    row.appendChild(name)

    let picColumn = document.createElement('td')
    let pic = document.createElement('img')
    pic.src = pizzaArray[i].picture
    pic.classList.add('pizzaPic')
    picColumn.appendChild(pic)
    row.appendChild(picColumn)

    let price = document.createElement('td')
    price.textContent = pizzaArray[i].price
    row.appendChild(price)


}



    page.appendChild(menu)


}