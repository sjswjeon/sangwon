// Scroll Animation

var mHtml = $("html");
var page = 1;

mHtml.animate({scrollTop : 0}, 300);

// $(window).on("wheel", function(e) {
//     if(mHtml.is(":animated")) return;
//     if(e.originalEvent.deltaY > 0) {
//         if(page == 2) return;
//         page++;
//     } else if(e.originalEvent.deltaY < 0) {
//         if(page == 1) return;
//         page--;
//     }
//     var posTop = (page-1) * $(window).height();
//     mHtml.animate({scrollTop : posTop}, 100);
// })

// close side menu animation
function closeSideMenu() {
    isSideMenuOpen = false;

    gsap.to(sideMenuPage, .2, {
        left: '-250px'
    })
    gsap.to(darkeningPage, .2, {
        zIndex: -1,
        opacity: 0
    })
    gsap.to(sideMenuBtn, .2, {
        color: '#333',
        borderColor: '#333'
    })
    gsap.to(webSiteNameEl, .2, {
        scale: 1,
        left: '20px',
        color: '#333'
    })
}

// Scroll Animation - home button

function toHome() {
    page = 1;
    if(mHtml.is(":animated")) return;
    var posTop = (page-1) * $(window).height();
    mHtml.animate({scrollTop : posTop}, 100);

    closeSideMenu();
}

function toBoard() {
    page = 2;
    if(mHtml.is(":animated")) return;
    var posTop = (page-1) * $(window).height();
    mHtml.animate({scrollTop : posTop}, 100);

    closeSideMenu();

    var renewURL = location.href;

    renewURL += '/board/list';

    history.pushState(null, null, url);
}

function toMessage() {
    page = 3;
    if(mHtml.is(":animated")) return;
    var posTop = (page-1) * $(window).height();
    mHtml.animate({scrollTop : posTop}, 100);

    closeSideMenu();
}

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
            color: 'rgb(255, 232, 189)',
            borderColor: 'rgb(255, 232, 189)'
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
            color: '#333',
            borderColor: '#333'
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
            color: '#333',
            borderColor: '#333'
        })
        gsap.to(webSiteNameEl, .4, {
            scale: 1,
            left: '20px',
            color: '#333'
        })
        isSideMenuOpen = !isSideMenuOpen;
    }
})

// Second Page - Board Search Animation
var boardSearchEl = document.querySelector('form.board__search');
var boardSearchInputEl = boardSearchEl.querySelector('input');
var boardSearchBtn = boardSearchEl.querySelector('div.material-icons');
var boardSearchSubmitBtn = boardSearchEl.querySelector('button');

boardSearchBtn.addEventListener('click', function() {
    boardSearchInputEl.focus();
    gsap.to(boardSearchBtn, 0, {
        display: 'none'
    })
    gsap.to(boardSearchSubmitBtn, .4, {
        display: 'block',
        left: '120px'
    })
})

boardSearchInputEl.addEventListener('blur', function() {
    gsap.to(boardSearchBtn, 0, {
        delay: .4,
        display: 'block'
    })
    gsap.to(boardSearchSubmitBtn, .4, {
        display: 'none',
        left: 0
    })
})

// Read Post Animation
var isReadPostOpen = false;

function readPost(id) {
    if(isReadPostOpen) {
        var readPostPrevEl = document.querySelector('.read-container__inner.focused');
        gsap.to(readPostPrevEl, .2, {
            x: 500
        }).then(() => {
            gsap.to(readPostPrevEl, 0, {
                x: -10,
                y: -10,
                display: 'none'
            })
        });
        
        readPostPrevEl.classList.remove('focused');
    }
    var readPostEl = document.querySelector('.readpost' + id);

    gsap.to(readPostEl, .2, {
        y: 620,
        display: 'block'
    })
    readPostEl.classList.add('focused');
    isReadPostOpen = true;
}

function closeReadPost() {
    if(isReadPostOpen) {
        var readPostPrevEl = document.querySelector('.read-container__inner.focused');
        gsap.to(readPostPrevEl, .2, {
            x: 500
        }).then(() => {
            gsap.to(readPostPrevEl, 0, {
                x: -10,
                y: -10,
                display: 'none'
            })
            readPostPrevEl.classList.remove('focused');
            isReadPostOpen = false;
        });

    }
}

// Write new post animation

var writeNewPostPage = document.querySelector('.board-write__container');
var boardListPage = document.querySelector('.board-list__container');
var isWritePageOpen = false;

function clickNewWritePostBtn() {
    isWritePageOpen = !isWritePageOpen;
    if (isWritePageOpen) {
        gsap.to(writeNewPostPage, .2, {
            top: 0,
            display: 'block'
        })
        gsap.to(boardListPage, .2, {
            top: '-100%',
            display: 'none'
        })
    } else {
        gsap.to(writeNewPostPage, .2, {
            top: '100%',
            display: 'none'
        })
        gsap.to(boardListPage, .2, {
            top: 0,
            display: 'block'
        })
    }
}

// Main Write Post Btn
var mainPageWriteBtn = document.querySelector('.bottom-nav__write-btn');
mainPageWriteBtn.addEventListener('click', function () {
    page = 2;
    if(mHtml.is(":animated")) return;
    var posTop = (page-1) * $(window).height();
    mHtml.animate({scrollTop : posTop}, 100);
    
    gsap.to(writeNewPostPage, 0, {
        top: 0,
        display: 'block'
    })
    gsap.to(boardListPage, 0, {
        top: '-100%',
        display: 'none'
    })

    isWritePageOpen = true;
})

// preview received Message
var messageGroup = document.querySelectorAll('.received-message-page .message-li');

function previewMessage(id) {
    for(j=0; j < messageGroup.length; j++) {
        if (messageGroup[j].classList.contains('focused')) {
            messageGroup[j].classList.remove('focused');
        };
    };

    var currentMessage = document.querySelector('.received' + id);
    var i = 0;
    while((currentMessage = currentMessage.previousElementSibling) != null) {
        i++;
    }
    
    var currentMessage = messageGroup[i];
    console.log('currentMessage = ' + currentMessage.className);
    
    if (currentMessage.previousElementSibling != null) {
        var prev1 = currentMessage.previousElementSibling;
    } else {
        var prev1 = messageGroup[10];
    }

    if (prev1.previousElementSibling != null) {
        var prev2 = prev1.previousElementSibling;
    } else {
        var prev2 = messageGroup[10];
    }

    if (prev2.previousElementSibling != null) {
        var prev3 = prev2.previousElementSibling;
    } else {
        var prev3 = messageGroup[10];
    }

    if (prev3.previousElementSibling != null) {
        var prev4 = prev3.previousElementSibling;
    } else {
        var prev4 = messageGroup[10];
    }

    if (prev4.previousElementSibling != null) {
        var prev5 = prev4.previousElementSibling;
    } else {
        var prev5 = messageGroup[10];
    }

    if(prev5.previousElementSibling != null) {
        var next5 = prev5.previousElementSibling;
    } else {
        var next5 = messageGroup[10]; 
    }

    if(next5.previousElementSibling != null) {
        var next4 = next5.previousElementSibling;
    } else {
        var next4 = messageGroup[10]; 
    }

    if(next4.previousElementSibling != null) {
        var next3 = next4.previousElementSibling;
    } else {
        var next3 = messageGroup[10]; 
    }

    if(next3.previousElementSibling != null) {
        var next2 = next3.previousElementSibling;
    } else {
        var next2 = messageGroup[10]; 
    }

    if(next2.previousElementSibling != null) {
        var next1 = next2.previousElementSibling;
    } else {
        var next1 = messageGroup[10]; 
    }

    // if (currentMessage.nextElementSibling != null) {
    //     var next1 = currentMessage.nextElementSibling;
    // } else {
    //     var next1 = messageGroup[0];
    // }

    // if (next1.nextElementSibling != null) {
    //     var next2 = next1.nextElementSibling;
    // } else {
    //     var next2 = messageGroup[0];
    // }

    // if (next2.nextElementSibling != null) {
    //     var next3 = next2.nextElementSibling;
    // } else {
    //     var next3 = messageGroup[0];
    // }

    // if (next3.nextElementSibling != null) {
    //     var next4 = next3.nextElementSibling;
    // } else {
    //     var next4 = messageGroup[0];
    // }

    // if (next4.nextElementSibling != null) {
    //     var next5 = next4.nextElementSibling;
    // } else {
    //     var next5 = messageGroup[0];
    // }

    gsap.to(currentMessage, .2, {
        zIndex: 6,
        left: 0,
        scale: .6,
        opacity: 1
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

    gsap.to(prev5, .2, {
        left: '-58%',
        zIndex: 1,
        scale: .3,
        opacity: .2
    })
        
    gsap.to(prev4, .2, {
        left: '-51%',
        zIndex: 2,
        scale: .35,
        opacity: .3
    })

    gsap.to(prev3, .2, {
        left: '-42%',
        zIndex: 3,
        scale: .4,
        opacity: .4
    })

    gsap.to(prev2, .2, {
        left: '-33%',
        zIndex: 4,
        scale: .43,
        opacity: .7
    })

    gsap.to(prev1, .2, {
        left: '-20%',
        scale: .47,
        zIndex: 5,
        opacity: .9
    })


    // var currentMessage = messageGroup[i];
    // i += 1;

    // if (i <= 10) {
    //     var message6 = messageGroup[i];
    //     i++;
    // } else {
    //     i = 0;
    //     var message6 = messageGroup[i];
    //     i++;
    // }

    // if (i <= 10) {
    //     var message7 = messageGroup[i];
    //     i++;
    // } else {
    //     i = 0;
    //     var message7 = messageGroup[i];
    //     i++;
    // }

    // if (i <= 10) {
    //     var message8 = messageGroup[i];
    //     i++;
    // } else {
    //     i = 0;
    //     var message8 = messageGroup[i];
    //     i++;
    // }

    // if (i <= 10) {
    //     var message9 = messageGroup[i];
    //     i++;
    // } else {
    //     i = 0;
    //     var message9 = messageGroup[i];
    //     i++;
    // }

    // if (i <= 10) {
    //     var message10 = messageGroup[i];
    //     i++;
    // } else {
    //     i = 0;
    //     var message10 = messageGroup[i];
    //     i++;
    // }

    // if (i <= 10) {
    //     var message0 = messageGroup[i];
    //     i++;
    // } else {
    //     i = 0;
    //     var message0 = messageGroup[i];
    //     i++;
    // }

    // if (i <= 10) {
    //     var message1 = messageGroup[i];
    //     i++;
    // } else {
    //     i = 0;
    //     var message1 = messageGroup[i];
    //     i++;
    // }

    // if (i <= 10) {
    //     var message2 = messageGroup[i];
    //     i++;
    // } else {
    //     i = 0;
    //     var message2 = messageGroup[i];
    //     i++;
    // }

    // if (i <= 10) {
    //     var message3 = messageGroup[i];
    //     i++;
    // } else {
    //     i = 0;
    //     var message3 = messageGroup[i];
    //     i++;
    // }

    // if (i <= 10) {
    //     var message4 = messageGroup[i];
    //     i++;
    // } else {
    //     i = 0;
    //     var message4 = messageGroup[i];
    //     i++;
    // }

    currentMessage.classList.add('focused');

    console.log('prev5 = ' + prev5.className);
    console.log('prev4 = ' + prev4.className);
    console.log('prev3 = ' + prev3.className);
    console.log('prev2 = ' + prev2.className);
    console.log('prev1 = ' + prev1.className);
    console.log('currentMessage = ' + currentMessage.className);
    console.log('next1 = ' + next1.className);
    console.log('next2 = ' + next2.className);
    console.log('next3 = ' + next3.className);
    console.log('next4 = ' + next4.className);
    console.log('next5 = ' + next5.className);

    console.log('----------------');
}


// Message received Hover

function mouseOverMessage(id) {
    for (var l=0; l < messageGroup.length; l++) {
        messageGroup[l].classList.remove('focused');
    }

    var currentMessage = document.querySelector('.received' + id);

    if (currentMessage.previousElementSibling != null) {
        var prev1 = currentMessage.previousElementSibling;
    } else {
        var prev1 = messageGroup[10];
    }

    if (prev1.previousElementSibling != null) {
        var prev2 = prev1.previousElementSibling;
    } else {
        var prev2 = messageGroup[10];
    }

    if (prev2.previousElementSibling != null) {
        var prev3 = prev2.previousElementSibling;
    } else {
        var prev3 = messageGroup[10];
    }

    if (prev3.previousElementSibling != null) {
        var prev4 = prev3.previousElementSibling;
    } else {
        var prev4 = messageGroup[10];
    }

    if (prev4.previousElementSibling != null) {
        var prev5 = prev4.previousElementSibling;
    } else {
        var prev5 = messageGroup[10];
    }

    if(prev5.previousElementSibling != null) {
        var next5 = prev5.previousElementSibling;
    } else {
        var next5 = messageGroup[10]; 
    }

    if(next5.previousElementSibling != null) {
        var next4 = next5.previousElementSibling;
    } else {
        var next4 = messageGroup[10]; 
    }

    if(next4.previousElementSibling != null) {
        var next3 = next4.previousElementSibling;
    } else {
        var next3 = messageGroup[10]; 
    }

    if(next3.previousElementSibling != null) {
        var next2 = next3.previousElementSibling;
    } else {
        var next2 = messageGroup[10]; 
    }

    if(next2.previousElementSibling != null) {
        var next1 = next2.previousElementSibling;
    } else {
        var next1 = messageGroup[10]; 
    }

    gsap.to(currentMessage, .2, {
        zIndex: 6,
        left: 0,
        scale: .6,
        opacity: 1
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

    gsap.to(prev5, .2, {
        left: '-58%',
        zIndex: 1,
        scale: .3,
        opacity: .2
    })
        
    gsap.to(prev4, .2, {
        left: '-51%',
        zIndex: 2,
        scale: .35,
        opacity: .3
    })

    gsap.to(prev3, .2, {
        left: '-42%',
        zIndex: 3,
        scale: .4,
        opacity: .4
    })

    gsap.to(prev2, .2, {
        left: '-33%',
        zIndex: 4,
        scale: .43,
        opacity: .7
    })

    gsap.to(prev1, .2, {
        left: '-20%',
        scale: .47,
        zIndex: 5,
        opacity: .9
    })

    currentMessage.classList.add('focused');

}

// preview sent message 

var sentMessageGroup = document.querySelectorAll('.sent-message-page .message-li');

function previewSentMessage(id) {
    for(j=0; j < sentMessageGroup.length; j++) {
        if (sentMessageGroup[j].classList.contains('focused')) {
            sentMessageGroup[j].classList.remove('focused');
        };
    };

    var currentMessage = document.querySelector('.sent' + id);
    var i = 0;
    while((currentMessage = currentMessage.previousElementSibling) != null) {
        i++;
    }
    
    var currentMessage = sentMessageGroup[i];
    console.log('currentMessage = ' + currentMessage.className);
    
    if (currentMessage.previousElementSibling != null) {
        var prev1 = currentMessage.previousElementSibling;
    } else {
        var prev1 = sentMessageGroup[10];
    }

    if (prev1.previousElementSibling != null) {
        var prev2 = prev1.previousElementSibling;
    } else {
        var prev2 = sentMessageGroup[10];
    }

    if (prev2.previousElementSibling != null) {
        var prev3 = prev2.previousElementSibling;
    } else {
        var prev3 = sentMessageGroup[10];
    }

    if (prev3.previousElementSibling != null) {
        var prev4 = prev3.previousElementSibling;
    } else {
        var prev4 = sentMessageGroup[10];
    }

    if (prev4.previousElementSibling != null) {
        var prev5 = prev4.previousElementSibling;
    } else {
        var prev5 = sentMessageGroup[10];
    }

    if(prev5.previousElementSibling != null) {
        var next5 = prev5.previousElementSibling;
    } else {
        var next5 = sentMessageGroup[10]; 
    }

    if(next5.previousElementSibling != null) {
        var next4 = next5.previousElementSibling;
    } else {
        var next4 = sentMessageGroup[10]; 
    }

    if(next4.previousElementSibling != null) {
        var next3 = next4.previousElementSibling;
    } else {
        var next3 = sentMessageGroup[10]; 
    }

    if(next3.previousElementSibling != null) {
        var next2 = next3.previousElementSibling;
    } else {
        var next2 = sentMessageGroup[10]; 
    }

    if(next2.previousElementSibling != null) {
        var next1 = next2.previousElementSibling;
    } else {
        var next1 = sentMessageGroup[10]; 
    }

    gsap.to(currentMessage, .2, {
        zIndex: 6,
        left: 0,
        scale: .6,
        opacity: 1
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

    gsap.to(prev5, .2, {
        left: '-58%',
        zIndex: 1,
        scale: .3,
        opacity: .2
    })
        
    gsap.to(prev4, .2, {
        left: '-51%',
        zIndex: 2,
        scale: .35,
        opacity: .3
    })

    gsap.to(prev3, .2, {
        left: '-42%',
        zIndex: 3,
        scale: .4,
        opacity: .4
    })

    gsap.to(prev2, .2, {
        left: '-33%',
        zIndex: 4,
        scale: .43,
        opacity: .7
    })

    gsap.to(prev1, .2, {
        left: '-20%',
        scale: .47,
        zIndex: 5,
        opacity: .9
    })

    currentMessage.classList.add('focused');
}

// Message sent Hover

function mouseOverSentMessage(id) {
    for (var l=0; l < sentMessageGroup.length; l++) {
        sentMessageGroup[l].classList.remove('focused');
    }

    var currentMessage = document.querySelector('.sent' + id);

    if (currentMessage.previousElementSibling != null) {
        var prev1 = currentMessage.previousElementSibling;
    } else {
        var prev1 = sentMessageGroup[10];
    }

    if (prev1.previousElementSibling != null) {
        var prev2 = prev1.previousElementSibling;
    } else {
        var prev2 = sentMessageGroup[10];
    }

    if (prev2.previousElementSibling != null) {
        var prev3 = prev2.previousElementSibling;
    } else {
        var prev3 = sentMessageGroup[10];
    }

    if (prev3.previousElementSibling != null) {
        var prev4 = prev3.previousElementSibling;
    } else {
        var prev4 = sentMessageGroup[10];
    }

    if (prev4.previousElementSibling != null) {
        var prev5 = prev4.previousElementSibling;
    } else {
        var prev5 = sentMessageGroup[10];
    }

    if(prev5.previousElementSibling != null) {
        var next5 = prev5.previousElementSibling;
    } else {
        var next5 = sentMessageGroup[10]; 
    }

    if(next5.previousElementSibling != null) {
        var next4 = next5.previousElementSibling;
    } else {
        var next4 = sentMessageGroup[10]; 
    }

    if(next4.previousElementSibling != null) {
        var next3 = next4.previousElementSibling;
    } else {
        var next3 = sentMessageGroup[10]; 
    }

    if(next3.previousElementSibling != null) {
        var next2 = next3.previousElementSibling;
    } else {
        var next2 = sentMessageGroup[10]; 
    }

    if(next2.previousElementSibling != null) {
        var next1 = next2.previousElementSibling;
    } else {
        var next1 = sentMessageGroup[10]; 
    }

    gsap.to(currentMessage, .2, {
        zIndex: 6,
        left: 0,
        scale: .6,
        opacity: 1
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

    gsap.to(prev5, .2, {
        left: '-58%',
        zIndex: 1,
        scale: .3,
        opacity: .2
    })
        
    gsap.to(prev4, .2, {
        left: '-51%',
        zIndex: 2,
        scale: .35,
        opacity: .3
    })

    gsap.to(prev3, .2, {
        left: '-42%',
        zIndex: 3,
        scale: .4,
        opacity: .4
    })

    gsap.to(prev2, .2, {
        left: '-33%',
        zIndex: 4,
        scale: .43,
        opacity: .7
    })

    gsap.to(prev1, .2, {
        left: '-20%',
        scale: .47,
        zIndex: 5,
        opacity: .9
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

sentBtn.addEventListener('click', function() {
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
})