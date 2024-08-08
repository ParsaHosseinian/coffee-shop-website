const navBtn = document.querySelector('.nav__hamburger-btn')
const mobileMenu = document.querySelector('.mobile-menu')
let navBtnLine = document.querySelector('.nav__hamburger-btn-line')
let body = document.getElementById('body')
let navOpen = false;

navBtn.addEventListener("click", function () {

    if (navOpen) {
        navBtn.classList.remove("nav__hamburger-btn--open")
        mobileMenu.classList.remove('mobile-menu--active')
        navBtnLine.innerHTML = "منو";
        document.body.style.background = "";
        navOpen = false
    } else {
        navBtn.classList.add("nav__hamburger-btn--open")
        navBtnLine.innerHTML = "ببند";
        mobileMenu.classList.add('mobile-menu--active')
        document.body.style.background = "rgba(19, 19, 23, 0.9)";
        navOpen = true
    }
})