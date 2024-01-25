var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("modegelap");
    if (document.body.classList.contains("modegelap")) {
        icon.src = "img/sun.png";
    } else {
        icon.src = "img/moon.png";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".toggle-button");
    const navList = document.querySelector(".nav-list");

    toggleButton.addEventListener("click", function () {
        navList.classList.toggle("show");
    });
});