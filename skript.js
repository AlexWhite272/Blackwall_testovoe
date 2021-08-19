const menuOpen = document.querySelector(".nav__open")
const mobNav = document.querySelector(".mobile")
const menuClose = document.querySelector(".nav__close")
var open = false;
menuOpen.addEventListener("click", ()=>{
        mobNav.style.display = "block";
        menuOpen.style.display = "none"
        menuClose.style.display = "block"
})
menuClose.addEventListener("click", ()=>{
    mobNav.style.display = "none";
    menuOpen.style.display = " "
    menuClose.style.display = "none"
})



