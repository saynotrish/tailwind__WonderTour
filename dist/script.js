const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav__top");
const header = document.querySelector(".header");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    headerNav.classList.toggle("open");
    header.classList.toggle("open");
    headerNav.style = "transition:.5s ease";
});

const contactNav = document.querySelector('.right__nav');
const toggleContact = document.querySelector('.toggle__ellipsis');
toggleContact.addEventListener('click', ()=>{
    contactNav.classList.toggle('open');
    toggleContact.classList.toggle('open');
});

const dropdown = document.querySelectorAll(".header__item h4");
dropdown.forEach((drop) => {
    drop.addEventListener("click", () => {
        drop.nextElementSibling.classList.toggle("open");
        drop.querySelector("i").classList.toggle("open");
    });
});