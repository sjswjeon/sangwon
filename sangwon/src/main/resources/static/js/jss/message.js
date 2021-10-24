
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
            color: 'rgb(41, 85, 28)'
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


// preview received Message

function previewMessage(id,messageType) {

    var messageGroup = document.querySelectorAll('.'+ messageType +'-message-page .message-li');
    var k = messageGroup.length -1;

    for(j=0; j < messageGroup.length; j++) {
        if (messageGroup[j].classList.contains('focused')) {
            messageGroup[j].classList.remove('focused');
        };
    };

    var currentMessage = document.querySelector('.' + messageType + id);
    var i = 0;
    while((currentMessage = currentMessage.previousElementSibling) != null) {
        i++;
    }
        
    var currentMessage = messageGroup[i];

    var previousMessage = currentMessage;

    for(var m = 1; m < 6; m++) {
        if (k >= m) {
            if(previousMessage.previousElementSibling != null) {
                eval("var prev" + m + "= previousMessage.previousElementSibling");
            } else {
                eval("var prev" + m + "= messageGroup[k]");
            }
            eval("previousMessage = prev" + m);
        }
    };

    var nextMessage = currentMessage;

    if(k >= 6) {
        for(var m = 6; m < 11; m++) {
            if (k >= m) {
                if(nextMessage.nextElementSibling != null) {
                    eval("var next" + (m-5) + "= nextMessage.nextElementSibling");
                } else {
                    eval("var next" + (m-5) + "= messageGroup[0]");
                }
                eval("nextMessage = next" + (m-5));
            }
        };
    };

    gsap.to(currentMessage, .2, {
        zIndex: 6,
        left: 0,
        scale: .6,
        opacity: 1
    })

    gsap.to(prev1, .2, {
        left: '-20%',
        scale: .47,
        zIndex: 5,
        opacity: .9
    })

    gsap.to(prev2, .2, {
        left: '-33%',
        zIndex: 4,
        scale: .43,
        opacity: .7
    })

    gsap.to(prev3, .2, {
        left: '-42%',
        zIndex: 3,
        scale: .4,
        opacity: .4
    })
            
    gsap.to(prev4, .2, {
        left: '-51%',
        zIndex: 2,
        scale: .35,
        opacity: .3
    })
    
    gsap.to(prev5, .2, {
        left: '-58%',
        zIndex: 1,
        scale: .3,
        opacity: .2
    })

    gsap.to(next1, .2, {
        left: '20%',
        zIndex: 5,
        scale: .47,
        opacity: .9
    })
    
    gsap.to(next2, .2, {
        left: '33%',
        zIndex: 4,
        scale: .43,
        opacity: .7
    })
    
    gsap.to(next3, .2, {
        left: '42%',
        zIndex: 3,
        scale: .4,
        opacity: .4
    })
    
    gsap.to(next4, .2, {
        left: '51%',
        zIndex: 2,
        scale: .35,
        opacity: .3
    })

    gsap.to(next5, .2, {
        left: '57%',
        scale: .3,
        zIndex: 1,
        opacity: .2
    })

    currentMessage.classList.add('focused');
}

// received <-> Sent Switch

var receivedBtn = document.querySelector('.received-message-btn');
var sentBtn = document.querySelector('.sent-message-btn');
var writeNewMessageBtn = document.querySelector('.write-message-btn');

var receivedMessageList = document.querySelector('.third-page .received-page');
var sentMessageList = document.querySelector('.third-page .sent-page');
var receivedMessagePage = document.querySelector('.third-page .received-message-page');
var sentMessagePage = document.querySelector('.third-page .sent-message-page');
var newMessageList = document.querySelector('.third-page .new-message-page');

var receivedTitle = document.querySelector('.title.received');
var sentTitle = document.querySelector('.title.sent');
var newTitle = document.querySelector('.title.new');

sentBtn.addEventListener('click', function() {

    // if ($('.message-list__single-message.sent') != null) {
    //     var firstSentMessageEl = $('.message-list__single-message.sent');
    //     firstSentMessageEl.trigger('mouseenter');
    // }

    gsap.to(receivedMessageList, .2, {
        left: '-69%',
        opacity: 0,
        display: 'none'
    })

    gsap.to(receivedMessagePage, 0, {
        opacity: 0,
        display: 'none'
    })

    gsap.to(sentMessageList, .2, {
        scale: 1,
        left: '10%',
        opacity: 1,
        display: 'block'
    })

    gsap.to(sentMessagePage, 0, {
        opacity: 1,
        display: 'block'
    })

    gsap.to(newMessageList, .2, {
        left: '89%',
        display: 'none',
        opacity: 0
    })

    gsap.to(receivedTitle, .2, {
        x: '-120px'
    })

    gsap.to(sentTitle, .2, {
        x: '-120px'
    })

    gsap.to(newTitle, .2, {
        x: '-120px'
    })
})

receivedBtn.addEventListener('click', function() {

    gsap.to(receivedMessageList, .2, {
        scale: 1,
        left: '10%',
        opacity: 1,
        display: 'block'
    })

    gsap.to(receivedMessagePage, 0, {
        opacity: 1,
        display: 'block'
    })

    gsap.to(sentMessageList, .2, {
        left: '89%',
        opacity: 0,
        display: 'none'
    })

    gsap.to(sentMessagePage, 0, {
        opacity: 0,
        display: 'none'
    })

    gsap.to(newMessageList, .2, {
        left: '168%',
        display: 'none',
        opacity: 0
    })
    
    gsap.to(receivedTitle, .2, {
        x: '0'
    })

    gsap.to(sentTitle, .2, {
        x: '0'
    })

    gsap.to(newTitle, .2, {
        x: '0'
    })
})

writeNewMessageBtn.addEventListener('click', function() {
    gsap.to(receivedMessageList, .2, {
        scale: 1,
        left: '-129%',
        opacity: 1,
        display: 'block'
    })

    gsap.to(sentMessageList, .2, {
        left: '-69%',
        opacity: 0,
        display: 'none'
    })

    gsap.to(newMessageList, .2, {
        left: '10%',
        display: 'block',
        opacity: 1
    })

    
    gsap.to(receivedTitle, .2, {
        x: '-240px'
    })

    gsap.to(sentTitle, .2, {
        x: '-240px'
    })

    gsap.to(newTitle, .2, {
        x: '-240px'
    })
})


// Reply Function
var messagePageInputEl = newMessageList.querySelector('input');
var messagePageTextareaEl = newMessageList.querySelector('textarea');
function reply(username, content) {
    writeNewMessageBtn.click();
    messagePageInputEl.value = username;
    messagePageTextareaEl.placeholder = content;

}

