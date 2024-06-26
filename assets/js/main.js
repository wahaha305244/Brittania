/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 10) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.value__accordion-item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.value__accordion-header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.value__accordion-content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
    }
}
// /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = Window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight,
//               sectionTop = current.offsetTop - 58,
//               sectionId = current.getAttribute('id')

        
//               if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//                 document.querySelector('.nav__menu a[href*="' + sectionId + '"]').classList.add('active-link');
//             } else {
//                 document.querySelector('.nav__menu a[href*="' + sectionId + '"]').classList.remove('active-link');
//             }
            
//     })
// }
// window.addEventListener('scroll', scrollActive)
/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'


const selectdTheme = localStorage.getItem('selected-theme')
const selectIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'


if (selectdTheme) {

    document.body.classList[selectdTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () => {

    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('select-icon', getCurrentIcon())
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

// ============= Hamburger ============
// JavaScript for toggling mobile menu
document.addEventListener('DOMContentLoaded', function() {
    var hamburgerIcon = document.getElementById('hamburgerIcon');
    var hamMenu = document.getElementById('hamMenu');
    var hamClose = document.getElementById('hamClose');
    var hamContent = document.getElementById('hamContent');
    var hamburgerMenu = document.getElementById('hamburger-menu');

    // Function to toggle the visibility of the hamburger menu
    function toggleMenu() {
        hamMenu.style.transform = 'translateX(0px)'; // Hide the menu
        hamContent.style.width = "100vw";
        hamburgerMenu.style.display = "none";
    }

    function disableMenu() {
        hamMenu.style.transform = 'translateX(390px)';
        hamContent.style.width = "0vw";
        hamburgerMenu.style.display = "flex";
    }

    // Event listener for the hamburger icon click
    hamburgerIcon.addEventListener('click', function() {
        toggleMenu(); // Toggle the menu visibility
    });

    hamClose.addEventListener('click', function() {
        disableMenu(); // Toggle the menu visibility
    });

    hamContent.addEventListener('click', function() {
        disableMenu(); // Toggle the menu visibility
    });
});




sr.reveal('.home__title, .popular__container, .subscribe__container, .footer__container, .contact_btn')
sr.reveal('.home__description, .footer__info', {delay: 500})
sr.reveal('.home__value', {delay: 700})
sr.reveal('.home__img', {delay: 800, origin: 'right'})
sr.reveal('.logos__img', {interval: 100})
sr.reveal('.value__images, .contact__content', {origin: 'left'})
sr.reveal('.value__content, .contact__images', {origin: 'right'})