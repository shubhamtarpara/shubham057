const hamburger = document.querySelector(".horline");
const navMenu = document.querySelector(".navbar-list");
const navLink = document.querySelectorAll(".navbar-terms");
const navBar = document.querySelector(".navbar");
const scrollUp = document.querySelector(".scroll-up");
const section = document.querySelectorAll('section');

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));
scrollUp.addEventListener("click", closeMenu)

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    navMenu.classList.remove("active");
}

window.onscroll = function () {
    if (window.pageYOffset > 0) {
        navBar.classList.add('scrolled')
    } else {
        navBar.classList.remove('scrolled')
    }
}

/*window.addEventListener('scroll', () => {
    let len = sections.length;
    while (--len && window.scrollY - 97 < sections[len].offsetTop) {
    }
    navLink.forEach(ltx => ltx.classList.remove('active-link'));
    navLink[len].classList.add('active-link');
});*/

function activeMenu() {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) {
    }
    navLink.forEach(ltx => ltx.classList.remove("active-link"));
    navLink[len].classList.add("active-link");
}

activeMenu();
window.addEventListener("scroll", activeMenu)

const printSentence = (id, sentence, speed = 100) => {
    let index = 0;
    let element = document.getElementById(id);
    let timer = setInterval(function () {
        element.innerHTML = sentence.slice(0, index);
        if (++index === sentence.length) {
            clearInterval(timer);
        }
    }, speed);
}

printSentence(
    'text-content',
    'It\'s the only place you have to live.'
)