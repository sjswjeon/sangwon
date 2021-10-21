// sideBar Open & Close
var sideBarOpenBtn = document.querySelector('#nav-menu-btn');
var sideBarEl = document.querySelector('.side-bar');
var sideBarCloseBtn = document.querySelector('#side-bar-close-btn');
var darkeningEl = document.querySelector('.darkening');
var isSideBarOpen = false;
    // Open Side bar
sideBarOpenBtn.addEventListener('click', function() {
    if (isSideBarOpen == false) {
        gsap.to(sideBarEl, .4, {
            left: '0'
        });
        gsap.to(darkeningEl, .4, {
            display: "block",
            left: '300px'
        });
        isSideBarOpen = !isSideBarOpen;
    }
})
    // Close Side Bar
sideBarCloseBtn.addEventListener('click', function() {
    if (isSideBarOpen) {
        gsap.to(darkeningEl, 0, {
            display: "none",
            left: '0'
        });
        gsap.to(sideBarEl, .4, {
            left: '-300px'
        })
        isSideBarOpen = !isSideBarOpen;
    }
})
    // Darkening
darkeningEl.addEventListener('click', function() {
    if (isSideBarOpen) {
        gsap.to(darkeningEl, 0, {
            display: "none",
            left: '0'
        });
        gsap.to(sideBarEl, .4, {
            left: '-300px'
        })
        isSideBarOpen = !isSideBarOpen;
    }
})