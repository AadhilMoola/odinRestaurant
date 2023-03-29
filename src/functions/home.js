export function home(page){
    
    let homeBTN = document.querySelector('.homeBTN')
    homeBTN.classList.add('active')

    let imageDiv = document.createElement('div');
    //imageDiv.classList.add('homeImage')

    let image = document.createElement('img');
    image.classList.add('homeImage');

    image.src = "../src/images/fabrizio-pullara-vHRFraV4U00-unsplash.jpg";
    image.alt = "A picture of a freshly baked pizza coming out of a wood oven";

    imageDiv.appendChild(image);

    page.appendChild(imageDiv);

    let description = document.createElement('div');

    description.textContent = 'Authentic woodfired Neopolitan Pizza.';

    page.appendChild(description);

    page.style.cssText = 'display:flex; justify-content: center; align-items: center; flex-direction: column;'

}


