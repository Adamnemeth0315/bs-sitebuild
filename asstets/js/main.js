'use strict';

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

const navbar = document.querySelector('.nav');
const sticky = navbar.offsetTop;
const link = document.querySelectorAll('.nav-link');

function stickyNavBarFunction() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
        navbar.classList.add("bg-light");
    } else {
        navbar.classList.remove("sticky");
    }
}

function stickyNavBarFunction() {
    if (window.pageYOffset = sticky) {
        navbar.classList.remove("sticky");
    } else {
        navbar.classList.add("sticky");
    }
}

window.addEventListener('scroll', stickyNavBarFunction);


$("navbar").find("link").click(function (e) {
    e.preventDefault();
    let section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    }, 1000, 'easeInOutExpo');
});

let scroll = SmoothScroll('a[href*="#"', {
    speed: 300
});