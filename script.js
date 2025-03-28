const menu = document.querySelector('.list');
const menuToggle = document.querySelector('.menu');
const menuClose = document.querySelector('.close');
const body = document.querySelector('body');
const btn = document.querySelector('.menu');
const nav = document.querySelector('.navbar');
const home = document.querySelector('.home');
const services = document.querySelector('#services');
const contact = document.querySelector('.contact');
const portfolio = document.querySelector('#portfolio');
const navicons = document.querySelector('.nav-icons');
const slide = document.getElementById('movingImages');
const servbtn = document.querySelector('.servicebtn');
const servtext = document.querySelector('.servicebtn-text');
const servimg  = document.querySelector('.service-img');
const navlogo = document.getElementById('logo');
const logotext = document.querySelector('.logotxt');
const screenWidth = window.innerWidth;

menu.addEventListener('mouseenter', function(menuErr) {
    menuErr.preventDefault();
        menu.style.display = 'block'
    });
menu.addEventListener('mouseleave', function(menuErr) {
    menuErr.preventDefault();
    menu.style.display = 'none';
});

btn.addEventListener('click', function(error) {
    error.preventDefault();
    if (menu.style.display === 'none' || menu.style.display === '') {
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
        
        if (screenWidth <= 400) {
            btn.style.left = '70px';
            btn.style.display = 'block';
            textElement.style.display = 'none';
            iconElement.style.display = 'block';
            navicons.style.position = 'relative';
            navicons.style.right = '0px';
            navicons.style.marginTop = '-15px';
            nav.innerWidth = '80%';
            menu.style.left = '90px';
            services.style.width = '65%';
            servtext.style.display = 'none';
            logotext.style.display = 'none';
            servimg.style.display = 'block';
            servbtn.style.width = 'fit-content';
            navicons.style.alignItems = 'center';
            portfolio.style.width = '85%';
        }
        else if (screenWidth <= 750) {
            textElement.style.display = 'none';
            btn.style.left = '70px';
            btn.style.right = '20px';
            btn.style.top = '10px';
            menu.style.left = '90px';
            logotext.style.display = 'none';
            iconElement.style.display = 'block';
            navicons.style.position = 'relative';
            navicons.style.right = '0px';
            navicons.style.marginTop = '-15px';
            nav.innerWidth = '80%';
            services.style.width = '65%';
            servtext.style.display = 'none';
            servimg.style.display = 'block';
            servbtn.style.width = 'fit-content';
            portfolio.style.width = '85%';
        }else {
            textElement.style.display = 'block';
            iconElement.style.display = 'none';
            btn.style.left = '';
            menu.style.left = '';
            btn.style.right = '20px';
            logotext.style.display = 'block';
            navicons.style.position = 'absolute';
            navicons.style.marginTop = '0px';
            navicons.style.right = '60px';
            services.style.width = '85%';
            servtext.style.display = 'block';
            servimg.style.display = 'none';
            servbtn.style.width = '25%';
            servtext.style.fontSize = '22px';
            portfolio.style.width = '50%';
        }
    });
}

const prevButton = document.querySelector('.portbtnleft');
const nextButton = document.querySelector('.portbtnright');
const slider = document.querySelector('.gallery');
const slides = document.querySelectorAll('.slides');
let currentSlide = 0;

slides.forEach((slide, index) => {
    slide.style.display = (index === currentSlide) ? 'block' : 'block'; 'none' ;
    slider.style.overflow = 'hidden' ;
});

function updateSlider() {
    slides.forEach((slide, index) => {
        slide.style.display = (index === currentSlide) ? 'block' : 'none';
    });
}

function updateSlider() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
    });
}

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    updateSlider();
});
updateSlider();
handleResponsiveNavbar();

window.addEventListener('resize', handleResponsiveNavbar);
window.addEventListener('resize', handleResize);


