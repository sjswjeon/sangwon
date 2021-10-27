
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
            zIndex: 90,
            opacity: 1
        })
        gsap.to(sideMenuBtn, .4, {
            color: '#333',
            borderColor: 'rgb(210, 246, 255)',
            backgroundColor: 'rgb(210, 246, 255)',
            rotate: '360deg'
        })
        gsap.to(webSiteNameEl, .4, {
            scale: 1.3,
            left: '30px',
            color: 'rgb(210, 246, 255)'
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
            color: 'rgb(210, 246, 255)',
            borderColor: 'rgb(210, 246, 255)',
            backgroundColor: 'transparent',
            rotate: '-360deg'

        })
        gsap.to(webSiteNameEl, .4, {
            scale: 1,
            left: '20px',
            color: 'rgb(3, 8, 37)'
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

// switch

var postsBtn = document.querySelector('#posts');
var messagesBtn = document.querySelector('#messages');
var pointsBtn = document.querySelector('#points');
var friendsBtn = document.querySelector('#friends');

var bottomLineEl = document.querySelector('#bottom-line');

var postsEl = bottomLineEl.querySelector('.posts');
var messagesEl = bottomLineEl.querySelector('.messages');
var pointsEl = bottomLineEl.querySelector('.points');
var friendsEl = bottomLineEl.querySelector('.friends');

postsBtn.addEventListener('click', function() {
    gsap.to(postsEl, .2, {
        left: 0
    })
    gsap.to(messagesEl, .2, {
        left: '100%'
    })
    gsap.to(pointsEl, .2, {
        left: '200%'
    })
    gsap.to(friendsEl, .2, {
        left: '300%'
    })
})

messagesBtn.addEventListener('click', function() {
    gsap.to(postsEl, .2, {
        left: '-100%'
    })
    gsap.to(messagesEl, .2, {
        left: '0'
    })
    gsap.to(pointsEl, .2, {
        left: '100%'
    })
    gsap.to(friendsEl, .2, {
        left: '200%'
    })
})

pointsBtn.addEventListener('click', function() {
    gsap.to(postsEl, .2, {
        left: '-200%'
    })
    gsap.to(messagesEl, .2, {
        left: '-100%'
    })
    gsap.to(pointsEl, .2, {
        left: '0'
    })
    gsap.to(friendsEl, .2, {
        left: '100%'
    })
})

friendsBtn.addEventListener('click', function() {
    gsap.to(postsEl, .2, {
        left: '-300%'
    })
    gsap.to(messagesEl, .2, {
        left: '-200%'
    })
    gsap.to(pointsEl, .2, {
        left: '-100%'
    })
    gsap.to(friendsEl, .2, {
        left: '0'
    })
})


// Read Post Animation
var isReadPostOpen = false;

function readPost(id) {
    if (isDirectMessageOpened) {
        if (isReplyFormOpened) {
            showReplyForm();
        }
        closeDirectMessageForm();
    }
    var readPostEl = document.querySelector('.readpost' + id);
    if (readPostEl.classList.contains('focused')) {
        gsap.to(readPostEl, .4, {
            left: '-100%'
        }).then(() => {
            gsap.to(readPostEl, 0, {
                left: '100%',
                display: 'none'
            })
        });
        readPostEl.classList.remove('focused');
        isReadPostOpen = false;
    } else {
        if(isReadPostOpen) {
            var readPostPrevEl = document.querySelector('.read-container__inner.focused');
            gsap.to(readPostPrevEl, .4, {
                left: '-100%'
            }).then(() => {
                gsap.to(readPostPrevEl, 0, {
                    left: '100%',
                    display: 'none'
                })
            });
            
            readPostPrevEl.classList.remove('focused');
        }
        var readPostEl = document.querySelector('.readpost' + id);
    
        gsap.to(readPostEl, .4, {
            left: 0,
            display: 'block'
        })
        readPostEl.classList.add('focused');
        isReadPostOpen = true;
    }
    
}

function closeReadPost() {
    if(isReadPostOpen) {
        var readPostPrevEl = document.querySelector('.read-container__inner.focused');
        gsap.to(readPostPrevEl, .4, {
            left: '-100%'
        }).then(() => {
            gsap.to(readPostPrevEl, 0, {
                left: '100%',
                display: 'none'
            })
            readPostPrevEl.classList.remove('focused');
            isReadPostOpen = false;
        });

    }
}

// open reply btn
function openReplyComment(id) {
    var replyCommentForm = document.querySelector('.reply-comment-form' + id);

    if (replyCommentForm.classList.contains('opened')) {
        gsap.to(replyCommentForm, .2, {
            height: 0
        });
        replyCommentForm.classList.remove('opened');
    } else {
        gsap.to(replyCommentForm, .2, {
            height: 'auto'
        });
        replyCommentForm.classList.add('opened');
    }
}

// like post
function likePost(id) {
    $.ajax({
        url: '/api/board/read/like/' + id,
        type: 'PUT',
        success: function(result) {
            // var likeIcons = document.querySelectorAll('.post-like-icon');
            // for(var i=0; i < likeIcons.length; i++) {
            //     likeIcons[i].load(location.href + " .post-like-icon");
            // }
            $(".postlike"+id).load(location.href + " .postlike"+id);
            $(".list-like-count" + id).load(location.href + " .list-like-count" + id);
        }
    });
}

// like comment
function likeComment(id) {
    $.ajax({
        url: '/api/board/read/likecomment/' + id,
        type: 'PUT',
        success: function(result) {
            $(".like-comment-count" + id).load(location.href + " .like-comment-count" + id);
        }
    })
}

// like second comment
function likeSecondComment(id) {
    $.ajax({
        url: '/api/board/read/likecomment/' + id,
        type: 'PUT',
        success: function(result) {
            $(".second-comment-count"+id).load(window.location.href + " .second-comment-count"+id);
        }
    });
}

// Write First Comment
function firstComment(id) {
    var formData = new FormData(document.querySelector('.first-comment' + id));
    $.ajax({
        url: "/board/read/firstcomment",
        data: formData,
        // dataType: 'json',
        type: 'POST',
        processData: false,
        contentType: false,
        success: function(result) {
            $(".readpost"+id+" .content-group").load(location.href + " .replacement"+id);
            $(".list-comment-count" + id).load(location.href + " .list-comment-count" + id);
        }, error:function(request,status,error){
            console.log("error:"+error);
           }
    })
}

// Write Second Comment
function secondComment(id, boardid) {
    var formData = new FormData(document.querySelector('.reply-comment-form' + id));
    $.ajax({
        url: "/board/read/secondcomment",
        data: formData,
        // dataType: 'json',
        type: 'POST',
        processData: false,
        contentType: false,
        success: function(result) {
            $(".readpost"+boardid+" .content-group").load(location.href + " .replacement"+boardid);
        }, error:function(request,status,error){
            console.log("error:"+error);
           }
    })
}

// Delete Comment
function deleteComment(id, boardid) {
    $.ajax({
    url: '/api/comment/' + id,
    type: 'DELETE',
    success: function(result) {
        console.log('result', result);
        alert('deleted');
        $(".readpost"+boardid+" .content-group").load(location.href + " .replacement"+boardid);
        }
    });
}

// Write new post animation

var writeNewPostPage = document.querySelector('.board-write__container');
var myPageMain = document.querySelector('.mypage-main');
var isWritePageOpen = false;

var boardWriteTitle = writeNewPostPage.querySelector('.board-write__title input');
var boardWriteContent = writeNewPostPage.querySelector('.board-write__content textarea');
var boardWriteId = writeNewPostPage.querySelector('#board-write-id');
var boardWriteUsername = writeNewPostPage.querySelector('#board-write-username');


function clickNewWritePostBtn() {
    isWritePageOpen = !isWritePageOpen;
    if (isWritePageOpen) {
        gsap.to(writeNewPostPage, .2, {
            top: 0,
            display: 'block'
        })
        gsap.to(myPageMain, .2, {
            top: '-100%',
            display: 'none'
        })
    } else {
        gsap.to(writeNewPostPage, .2, {
            top: '100%',
            display: 'none'
        })
        gsap.to(myPageMain, .2, {
            top: 0,
            display: 'block'
        })
        boardWriteId.value = '';
        boardWriteTitle.value = '';
        boardWriteContent.value = '';
    }
}

// Modify Post

function modifyPost(id, title, content) {
    boardWriteId.value = id;
    boardWriteTitle.value = title;
    boardWriteContent.value = content;
    clickNewWritePostBtn();
    console.log(id);
}

// Delete Post
function deleteBoard() {
    $.ajax({
    url: '/api/board/' + boardWriteId.value,
    type: 'DELETE',
    success: function(result) {
        console.log('result', result);
        alert('deleted');
        window.location.href = '/mypage/main';
        }
    });
}

// Delete Comment
function deleteComment(id, boardid) {
    $.ajax({
    url: '/api/comment/' + id,
    type: 'DELETE',
    success: function(result) {
        console.log('result', result);
        alert('deleted');
        $(".readpost"+boardid+" .content-group").load(location.href + " .replacement"+boardid);
        }
    });
}

// Message Darkening

var isDirectMessageOpened = false;

function messageDarkening() {
    var messageDarkeningEl = document.querySelector('.message-darkening');
    if (isDirectMessageOpened) {
        gsap.to(messageDarkeningEl, .2, {
            opacity: 1,
            zIndex: 2
        })
        isMessageDarkeningActive = true;
    } else {
        gsap.to(messageDarkeningEl, .2, {
            opacity: 0,
            zIndex: '-1'
        })
        isMessageDarkeningActive = false;
    }
}

// Message Read

function readMessage(id) {
    if (isReadPostOpen) {
        closeReadPost();
    }
    var singleMessageEl = document.querySelector('.single-received' + id);
    if (isDirectMessageOpened) {
        if (isReplyFormOpened) {
            showReplyForm();
        }
        var focusedMessageEl = document.querySelector('.single-message.focused');
        if (singleMessageEl == focusedMessageEl) {
            gsap.to(singleMessageEl, .3, {
                top: '33%'
            }).then(() => {
                gsap.to(singleMessageEl, .3, {
                    top: '-45%'
                })
            })
            focusedMessageEl.classList.remove('focused');
            isDirectMessageOpened = false;
        } else {
            gsap.to(focusedMessageEl, .3, {
                top: '33%'
            }).then(() => {
                gsap.to(focusedMessageEl, .3, {
                    top: '-45%'
                })
            })
            focusedMessageEl.classList.remove('focused');
            gsap.to(singleMessageEl, .3, {
                top: '33%'
            }).then(() => {
                gsap.to(singleMessageEl, .3, {
                    top: '30%'
                })
            });
            singleMessageEl.classList.add('focused');
        }
    } else {
        gsap.to(singleMessageEl, .3, {
            top: '33%'
        }).then(() => {
            gsap.to(singleMessageEl, .3, {
                top: '30%'
            })
        });
        singleMessageEl.classList.add('focused');
        isDirectMessageOpened = true;
    }
    messageDarkening();
}

// close message

function closeDirectMessageForm() {

    if (isDirectMessageOpened) {
        if (isReplyFormOpened) {
            showReplyForm();
        }
        var singleMessageEl = document.querySelector('.single-message.focused');
    
        gsap.to(singleMessageEl, .3, {
            top: '33%'
        }).then(() => {
            gsap.to(singleMessageEl, .3, {
                top: '-45%'
            })
        })
        singleMessageEl.classList.remove('focused');
        isDirectMessageOpened = false;
        messageDarkening();
    }
}

// replyForm
var isReplyFormOpened = false;

function showReplyForm(id) {
    if (isReplyFormOpened) {
        document.querySelector('.activeMessage').classList.remove('activeMessage');
        document.querySelector('.replyForm').classList.remove('replyForm');
    } else {
        var activeMessageEl = document.querySelector('.single-received' + id);
        var replyFormEl = document.querySelector('.direct-message' + id);
        activeMessageEl.classList.add('activeMessage');
        replyFormEl.classList.add('replyForm');
    }
    isReplyFormOpened = !isReplyFormOpened;
}

// ReplyMessage

function sendMessage(id) {
    var formData = new FormData(document.querySelector('.direct-message' + id));
    $.ajax({
        url: "/message/new",
        data: formData,
        type: 'POST',
        processData: false,
        contentType: false,
        success: function(result) {
            closeDirectMessageForm();
            // window.location.href = '/mypage/main';
        }, error:function(request,status,error){
            console.log("error:"+error);
           }
    })
}

// function sendMessageAnimation () {
//     var replyForm = document.querySelector('.replyForm');
//     gsap.to(replyForm, .3, {
//         top: '33%'
//     }).then(() => {
//         gsap.to(replyForm, .3, {
//             top: '-45%'
//         })
//     })
//     messageDarkening();
// }
