// received btn function
var receivedBtn = document.querySelector('.received.btn');
var sentBtn = document.querySelector('.sent.btn');
var receivedEl = document.querySelector('.list-box.received');
var sentEl = document.querySelector('.list-box.sent');

receivedBtn.addEventListener('click', function() {
    gsap.to(receivedEl, 0, {
        display: 'block',
    })
    gsap.to(receivedBtn, 0, {
        border: 'none',
        backgroundColor: 'gray'
    })
    gsap.to(sentBtn, 0, {
        border: '.5px solid black',
        backgroundColor: 'powderblue'
    })
    gsap.to(sentEl, 0, {
        display: 'none'
    })
})
// sent btn function
sentBtn.addEventListener('click', function() {
    gsap.to(receivedEl, 0, {
        display: 'none'
    })
    gsap.to(sentEl, 0, {
        display: 'block'
    })
    gsap.to(receivedBtn, 0, {
        border: '.5px solid black',
        backgroundColor: 'powderblue'
    })
    gsap.to(sentBtn, 0, {
        border: 'none',
        backgroundColor: 'gray'
    })
})

// new message

var rightBoxEl = document.querySelector('.right-box');
var newMessageEl = document.querySelector('.new-message-container');
var newMessageBtn = document.querySelector('.material-icons.edit');
var isNewMessageOpen = false;

newMessageBtn.addEventListener('click', function() {
    isNewMessageOpen = !isNewMessageOpen;

    if (isNewMessageOpen) {
        gsap.to(rightBoxEl, .4, {
            left: '27%'
        })
        gsap.to(newMessageEl, .4, {
            left: '27%',
            zIndex: 1,
            opacity: 1
        })
    } else {
        gsap.to(rightBoxEl, .4, {
            left: '0'
        })
        gsap.to(newMessageEl, .4, {
            left: '0',
            zIndex: '-1',
            opacity: 0
        })
    }
})

// message Mouseover function
var i = 3;

function messageMouseOver(id) {
    var recentMessageEl = document.querySelector('.message.message' + id);
    recentMessageEl.classList.add('mouseover');
    gsap.to(recentMessageEl, 0, {
        zIndex: i
    })
    i += 1;
}

function messageMouseOut(id) {
    var recentMessageEl = document.querySelector('.message.message' + id);
    recentMessageEl.classList.remove('mouseover');
}