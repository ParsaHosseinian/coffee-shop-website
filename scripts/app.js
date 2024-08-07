const navBtn = document.querySelector('.nav__hamburger-btn')
let navBtnLine = document.querySelector('.nav__hamburger-btn-line')
let navOpen = false;

navBtn.addEventListener("click", function () {

    if (navOpen) {
        navBtn.classList.remove("nav__hamburger-btn--open")
        navBtnLine.innerHTML = "منو";
        navOpen = false
    } else {
        navBtn.classList.add("nav__hamburger-btn--open")
        navBtnLine.innerHTML = "ببند";
        navOpen = true
    }
})