let menuBar = document.querySelector("header div span");
let linksPopup = document.querySelector(".links-popup");
let overlay = document.querySelector(".overlay");

menuBar.onclick = function () {
    if (this.firstChild.classList.contains("fa-bars")) {
        this.firstChild.classList.replace("fa-bars", "fa-xmark");
        document.body.classList.add("no-scroll");
        overlay.style.display = "block";
        linksPopup.style.display = "block";
    } else {
        closePopup();
    }
}

overlay.onclick = function () {
    closePopup();
}

function closePopup () {
    menuBar.firstChild.classList.replace("fa-xmark", "fa-bars");
    document.body.classList.remove("no-scroll");
    overlay.style.display = "none";
    linksPopup.style.display = "none";
}