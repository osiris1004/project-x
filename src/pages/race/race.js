function countryClick() {
    document.querySelector("#main").classList.toggle("show-main") 
    document.querySelector(".myDropDownCountry").classList.toggle("show");
}
window.onclick = function (event) {
    
    if (!event.target.matches('.dropDownCountry')) {
        document.querySelector('#main').classList.remove('show-main')
        document.querySelector(".myDropDownCountry").classList.remove('show');
    }
    if (!event.target.matches('.dropdownCoat') ) {
                document.querySelector('#main').classList.remove('show-main-coat')
                document.querySelector(".myDropDownCoat").classList.remove('show-coat');
            }
}

function coatClick() {
    document.querySelector("#main").classList.toggle("show-main-coat") 
    document.querySelector(".myDropDownCoat").classList.toggle("show-coat");
}
