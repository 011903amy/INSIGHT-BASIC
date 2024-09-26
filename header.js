const header = document.querySelector(".header");
const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");

window.addEventListener("scroll",() => {
    if(window.scrollY >= 100){
        header.classList.add("dark");
    }
    else{
         header.classList.remove("dark");
    }
});

toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    headerNav.classList.toggle("open");
})