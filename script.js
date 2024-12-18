const openMenu = document.querySelector(".hamburger-open")
const closeMenu = document.querySelector(".hamburger-close")
const nav = document.querySelector(".mobile")

openMenu.addEventListener("click", ()=> {
    closeMenu.style.display = "flex"
    nav.style.display = "block"
    openMenu.style.display = "none"
})

closeMenu.addEventListener("click", ()=> {
    closeMenu.style.display = "none"
    nav.style.display = "none"
    openMenu.style.display = "block"
})