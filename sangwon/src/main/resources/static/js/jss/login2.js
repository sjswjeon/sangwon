// side menu Animation
var sideMenuBtn = document.querySelector('.side-menu-btn');
var sideMenuPage = document.querySelector('.side-menu');
var darkeningPage = document.querySelector('.darkening');
var webSiteNameEl = document.querySelector('.website-name');
var isSideMenuOpen = false;

sideMenuBtn.addEventListener('click', function() {
    isSideMenuOpen = !isSideMenuOpen;

    if (isSideMenuOpen) {
        gsap.to(sideMenuPage, .4, {
            left: 0
        })
        gsap.to(darkeningPage, .4, {
            zIndex: 1,
            opacity: 1
        })
        gsap.to(sideMenuBtn, .4, {
            color: '#333',
            borderColor: 'rgb(255, 232, 189)',
            backgroundColor: 'rgb(255, 232, 189)',
            rotate: '360deg'
        })
        gsap.to(webSiteNameEl, .4, {
            scale: 1.3,
            left: '30px',
            color: 'rgb(255, 232, 189)'
        })
    } else {
        gsap.to(sideMenuPage, .4, {
            left: '-250px'
        })
        gsap.to(darkeningPage, .4, {
            zIndex: -1,
            opacity: 0
        })
        gsap.to(sideMenuBtn, .4, {
            color: 'rgb(255, 232, 189)',
            borderColor: 'rgb(255, 232, 189)',
            backgroundColor: 'transparent',
            rotate: '-360deg'

        })
        gsap.to(webSiteNameEl, .4, {
            scale: 1,
            left: '20px',
            color: '#333'
        })
    }
})

darkeningPage.addEventListener('click', function() {
    if (isSideMenuOpen) {
        gsap.to(sideMenuPage, .4, {
            left: '-250px'
        })
        gsap.to(darkeningPage, .4, {
            zIndex: -1,
            opacity: 0
        })
        gsap.to(sideMenuBtn, .4, {
            color: 'rgb(255, 232, 189)',
            borderColor: 'rgb(255, 232, 189)',
            backgroundColor: 'transparent',
            rotate: '-360deg'
        })
        gsap.to(webSiteNameEl, .4, {
            scale: 1,
            left: '20px',
            color: '#333'
        })
        isSideMenuOpen = !isSideMenuOpen;
    }
})

// Sign in <-> Register animation
var logInPage = document.querySelector('.login');
var registerPage =document.querySelector('.register');
var isRegisterPageOpen = false;

function swapPage() {
    isRegisterPageOpen = !isRegisterPageOpen;

    if (isRegisterPageOpen) {
        gsap.to(logInPage, .2, {
            left: '-80%',
            opacity: 0
        })
        gsap.to(registerPage, .2, {
            left: 0,
            opacity: 1
        })

        var renewURL = location.href;

        renewURL = renewURL.replace('/login','');

        renewURL += '/register';

        history.pushState(null, null, url);

    } else {
        gsap.to(logInPage, .2, {
            left: 0,
            opacity: 1
        })
        gsap.to(registerPage, .2, {
            left: '80%',
            opacity: 0
        })

        var renewURL = location.href;

        renewURL = renewURL.replace('/register','');

        renewURL += '/login';

        history.pushState(null, null, url);
    }

}