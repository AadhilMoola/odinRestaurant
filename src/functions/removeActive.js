export function removeActive(array){
    array.forEach(element => {
        element.classList.remove('active')
    });
}