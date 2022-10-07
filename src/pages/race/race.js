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















// //
// const setCurrentPage = (pageNum) => {
//     currentPage = pageNum;

//     handleActivePageNumber();
//     handlePageButtonsStatus();

//     const prevRange = (pageNum - 1) * paginationLimit;
//     const currRange = pageNum * paginationLimit;

//     listItems.forEach((item, index) => {
//         item.classList.add("hidden");
//         if (index >= prevRange && index < currRange) {
//             item.classList.remove("hidden");
//         }
//     });
// };

// window.addEventListener("load", () => {
    
//     getPaginationNumbers();
//     setCurrentPage(1);

//     prevButton.addEventListener("click", () => {
//         setCurrentPage(currentPage - 1);
//     });

//     nextButton.addEventListener("click", () => {
//         setCurrentPage(currentPage + 1);
//     });

//     document.querySelectorAll(".pagination-number").forEach((button) => {
//         const pageIndex = Number(button.getAttribute("page-index"));

//         if (pageIndex) {
//             button.addEventListener("click", () => {
//                 setCurrentPage(pageIndex);
//             });
//         }
//     });
// });