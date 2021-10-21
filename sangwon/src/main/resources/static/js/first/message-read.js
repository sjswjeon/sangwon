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

// reply btn function

var replyBtn = document.querySelector('.material-icons.reply');
var replyPageEl = document.querySelector('.message.reply');
var isReplyOpen = false;

replyBtn.addEventListener('click', function() {
    isReplyOpen = !isReplyOpen;
    if (isReplyOpen) {
        gsap.to(replyPageEl, .4, {
            left: '-30px',
            boxShadow: '5px 5px 50px 10px #474747',
            opacity: 1
        })
    } else {
        gsap.to(replyPageEl, .4, {
            left: '-350px',
            boxShadow: 'none',
            opacity: 0.8
        })
    }

})