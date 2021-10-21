// Login & Register Page Open Function
var openLoginPageBtn = document.querySelector('.open-login-page-btn');
var openRegisterPageBtn = document.querySelector('.open-register-page-btn');
var loginPageEl = document.querySelector('.form-signin');
var registerPageEl = document.querySelector('.form-register');
var isPageOpen = false;

openRegisterPageBtn.addEventListener('click', function() {
    isPageOpen = !isPageOpen;
    
    if (isPageOpen) {
        gsap.to(loginPageEl, .6, {
            opacity: 0,
            zIndex: 0
        })

        gsap.to(registerPageEl, .6, {
            opacity: 1,
            zIndex: 1
        })

        var renewURL = location.href;

        renewURL = renewURL.replace('/login','');

        renewURL += '/register';

        history.pushState(null, null, url);

    } else {
        gsap.to(loginPageEl, .6, {
            opacity: 1,
            zIndex: 1
        })

        gsap.to(registerPageEl, .6, {
            opacity: 0,
            zIndex: 0
        })
    }
})

openLoginPageBtn.addEventListener('click', function() {
    
    if (isPageOpen) {
        gsap.to(loginPageEl, .6, {
            opacity: 1,
            zIndex: 1
        })

        gsap.to(registerPageEl, .6, {
            opacity: 0,
            zIndex: 0
        })


        var renewURL = location.href;

        renewURL = renewURL.replace('/register','');

        renewURL += '/login';

        history.pushState(null, null, url);

    } else {
        gsap.to(loginPageEl, .6, {
            opacity: 0,
            zIndex: 0
        })

        gsap.to(registerPageEl, .6, {
            opacity: 1,
            zIndex: 1
        })
    }
    isPageOpen = !isPageOpen;
})