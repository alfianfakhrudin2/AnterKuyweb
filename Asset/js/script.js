document.addEventListener("DOMContentLoaded", function (x) {
    const toggleButton = document.querySelector(".toggle-button");
    const navList = document.querySelector(".nav-list");

    toggleButton.addEventListener("click", function () {
        navList.classList.toggle("show");
        // x.classList.toggle("toggleButton");
    });
});

function main() {
    var menuIconOpen = document.getElementsByClassName("open")[0];
    var menuIconClose = document.getElementsByClassName("close")[0];
    var menuItems = document.getElementsByClassName("menu");

    menuIconClose.style.display = "none";

    menuIconOpen.onclick = function () {
        this.style.display = "none";
        menuIconClose.style.display = "block";
        menuDisplay("show", menuItems);
    };

    menuIconClose.onclick = function () {
        this.style.display = "none";
        menuIconOpen.style.display = "block";
        menuDisplay("hide", menuItems);
    };
}

// darkmode 
var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("modegelap");
    if (document.body.classList.contains("modegelap")) {
        icon.src = "Asset/img/sun.png";
    } else {
        icon.src = "Asset/img/moon.png";
    }
}

window.onload = function () {
    main();
}

// untuk ganti tahun dinamis copyright
const yearSpan = document.querySelector("#currentYear");
const currentYear = new Date();
yearSpan.innerText = currentYear.getFullYear();