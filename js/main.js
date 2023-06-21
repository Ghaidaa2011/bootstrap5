"use strict";
// Loadign 
document.addEventListener("DOMContentLoaded", function () {
    setTimeout( () => {
        const loading = document.getElementById("load");
        document.body.style.overflow = 'auto';
        document.getElementById("load").remove();
    }, 2000);
});
// Loading
//Scroll 
const scrollUp = document.querySelector(".scroll");
window.onscroll = function () {
    this.scrollY <= 400 ? scrollUp.classList.add("show") : scrollUp.classList.remove("show");
}
scrollUp.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
//Scroll