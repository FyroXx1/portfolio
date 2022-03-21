// ===== > INIT AOS LIBS
AOS.init({
    duration: 1000,
    once: true
});

// ===== > NAVBAR VARIABLES

let header = document.querySelector('#header');
let btnNavHamburger = document.querySelector('#btn-nav-hamburger');
let navbarList = document.querySelector('.navbar_list');
let navbarLink = document.querySelectorAll('.navbar_link');
let btnContact = document.getElementById("btn-contact");

let headerHeight = 85;


// ===== > NAVBAR OPEN MENU
btnNavHamburger.addEventListener('click', () => {
    btnNavHamburger.children[0].classList.toggle('active_btn_hamburger');
    navbarList.classList.toggle('active_navbar');
});


// ===== > NAVBAR SCROLL EVENT 
let verticale = window.scrollY;

if (window.scrollY > 200) {
    header.classList.add("scrolled_header");
} else {
    header.classList.remove("scrolled_header");
}

document.addEventListener('scroll', () => {

    if (window.scrollY > 200) {
        header.classList.add("scrolled_header");
    } else {
        header.classList.remove("scrolled_header");
    }

});

// ===== > NAVBAR CLICK LINK 
navbarLink.forEach(element => {

    let dataId = element.getAttribute('data-id');

    element.addEventListener('click', (event) => {
        event.preventDefault();
        btnNavHamburger.children[0].classList.remove('active_btn_hamburger');
        navbarList.classList.remove('active_navbar');

        let directorySection = document.querySelector('#' + dataId);

        window.scrollTo({
            top: directorySection.offsetTop - headerHeight,
            behavior: 'smooth'
        });

    })
});


// ===== > SHOW TEXT PROJECTS ON CLICK PLUS BUTTON
let btnPlus = document.querySelectorAll(".btn_plus");
btnPlus.forEach(element => {

    element.addEventListener("click", () => {
        element.classList.toggle("active_btn");
        element.nextElementSibling.classList.toggle("active_element");
    });
});