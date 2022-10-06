function myFunction() {
    document.querySelector("#main").classList.toggle("show-main") 
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn') ) {
        document.querySelector('#main').classList.remove('show-main')
        document.querySelector(".dropdown-content").classList.remove('show');
    }
}