// Search box focus
var searchEl = document.querySelector('.search');
var searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
    searchInputEl.focus();
})

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
})

searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
})

// board-form active

var boardListEl = document.querySelector('.table');
var boardFormEl = document.querySelector('.board-form__container');
var writeBtn = document.querySelector('.write-btn');
var backBtn = document.querySelector('.back-btn');

writeBtn.addEventListener('click', function() {
    gsap.to(boardListEl, 0, {
        display: 'none'
    })

    gsap.to(boardFormEl, 0, {
        display: 'block'
    })
})

backBtn.addEventListener('click', function() {
    gsap.to(boardListEl, 0, {
        display: 'block'
    })

    gsap.to(boardFormEl, 0, {
        display: 'none'
    })
})