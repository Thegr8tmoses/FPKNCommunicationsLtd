const menu = document.querySelector('.list');
const menuToggle = document.querySelector('.list');
const menuClose = document.querySelector('.close');
const body = document.querySelector('body');
const btn = document.querySelector('.menu');
const nav = document.querySelector('.navbar');
const home = document.querySelector('.home');
const services = document.querySelector('.services');
const contact = document.querySelector('.contact');
const portfolio = document.querySelector('.portfolio');
const navicons = document.querySelector('.nav-icons');
const slide = document.getElementById('movingImages');

btn.addEventListener('click', function(error) {
    error.preventDefault();
    if (menu.style.display == 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});

function handleResponsiveNavbar() {
    const navLinks = document.querySelectorAll('.nav-link');
    const screenWidth = window.innerWidth;

    navLinks.forEach(link => {
        const textElement = link.querySelector('.nav-text');
        const iconElement = link.querySelector('.nav-icon');

        if (screenWidth <= 750) {
            textElement.style.display = 'none';
            iconElement.style.display = 'block';
            navicons.style.position = 'relative';
            navicons.style.right = '0px';
            navicons.style.marginTop = '-15px';
            nav.innerWidth = '80%';

        } else {
            textElement.style.display = 'block';
            iconElement.style.display = 'none';
            navicons.style.position = 'absolute';
            navicons.style.marginTop = '0px';
            navicons.style.right = '60px';
        }
    });
}

// Run on page load
handleResponsiveNavbar();

// Run on window resize
window.addEventListener('resize', handleResponsiveNavbar);

window.addEventListener('resize', handleResize);