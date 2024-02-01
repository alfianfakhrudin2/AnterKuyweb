// var icon = document.getElementById("icon");
// icon.onclick = function () {
//     document.body.classList.toggle("modegelap");
//     if (document.body.classList.contains("modegelap")) {
//         icon.src = "img/sun.png";
//     } else {
//         icon.src = "img/moon.png";
//     }
// }

document.addEventListener("DOMContentLoaded", function (x) {
    const toggleButton = document.querySelector(".toggle-button");
    const navList = document.querySelector(".nav-list");

    toggleButton.addEventListener("click", function () {
        navList.classList.toggle("show");
        // x.classList.toggle("toggleButton");
    });
});

// untuk ganti tahun dinamis copyright
const yearSpan = document.querySelector("#currentYear");
const currentYear = new Date();
yearSpan.innerText = currentYear.getFullYear();


// const menu = document.getElementById("menu");
// const navbarMenu = document.querySelector(".navbar-menu");

// menu.onclick = function () {
//     if (navbarMenu.style.display == "flex") {
//         navbarMenu.style.display = "none";
//     } else {
//         navbarMenu.style.display = "flex";
//     }
// };