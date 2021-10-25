
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

    if (isDirectMessageOpened) {
        closeDirectMessageForm();
    }
})

// Second Page - Board Search Animation
var boardSearchEl = document.querySelector('form.board__search');
var boardSearchInputEl = boardSearchEl.querySelector('input');
var boardSearchBtn = boardSearchEl.querySelector('div.material-icons');
var boardSearchSubmitBtn = boardSearchEl.querySelector('button');

boardSearchEl.addEventListener('click', function() {
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
    boardSearchEl.classList.remove('focused');

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

function addViewCount(id) {
    $.ajax({
        url: '/api/board/read/' + id,
        type: 'PUT',
        success: function() {
            $(".list-view-count" + id).load(location.href + " .list-view-count" + id);
        },
        error: function() {
            alert('error');
        }
    });
}

function readPost(id) {
    var readPostEl = document.querySelector('.readpost' + id);
    if (readPostEl.classList.contains('focused')) {
        gsap.to(readPostEl, .4, {
            x: 500
        }).then(() => {
            gsap.to(readPostEl, 0, {
                x: -10,
                y: -10,
                display: 'none'
            })
        });
        readPostEl.classList.remove('focused');
        isReadPostOpen = false;
    } else {
        addViewCount(id);
        if(isReadPostOpen) {
            var readPostPrevEl = document.querySelector('.read-container__inner.focused');
            gsap.to(readPostPrevEl, .4, {
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
    
        gsap.to(readPostEl, .4, {
            y: 620,
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


// direct Message
var isDirectMessageOpened = false;
var directMessageCloseBtn = document.querySelectorAll('.direct-message-form .material-icons.close');

for (i=0; i < directMessageCloseBtn.length; i++) {
    directMessageCloseBtn[i].addEventListener('click', function() {
        closeDirectMessageForm();
    })
}

function openDirectMessageForm(id) {
    var directMessageForm = document.querySelector('.direct-message' + id); 
    gsap.to(directMessageForm, 0, {
        display: 'block'
    })

    gsap.to(darkeningPage, .2, {
        opacity: 1,
        zIndex: 100
    })

    directMessageForm.classList.add('opened');
    isDirectMessageOpened = true;
}

function closeDirectMessageForm() {
    if (isDirectMessageOpened) {
        var directMessageForm = document.querySelector('.direct-message-form.opened');
        var textArea = directMessageForm.querySelector('textarea');
        textArea.value = "";
        directMessageForm.classList.remove('opened');
    
        gsap.to(directMessageForm, 0, {
            display: 'none',
            opacity: 1,
        });
    
        gsap.to(darkeningPage, .2, {
            opacity: 0,
            zIndex: -1
        })
    }
    isDirectMessageOpened = false;
}

function sendDirectMessageAnimation() {
    if (isDirectMessageOpened) {
        var directMessageForm = document.querySelector('.direct-message-form.opened');
        var textArea = directMessageForm.querySelector('textarea');
        textArea.value = "";
        directMessageForm.classList.remove('opened');
    
        gsap.to(directMessageForm, .1, {
            x: '370%',
            opacity: 1
        }).then(() => {
            gsap.to(directMessageForm, 0, {
                x: '0',
                opacity: 1,
                display: 'none'
            })
        });
    
        gsap.to(darkeningPage, .2, {
            opacity: 0,
            zIndex: -1
        })
    }
    isDirectMessageOpened = false;
}

function sendMessage(id) {
    var formData = new FormData(document.querySelector('.direct-message' + id));
    var directMessageForm = document.querySelector('.direct-message' + id);
    $.ajax({
        url: "/message/new",
        data: formData,
        // dataType: 'json',
        type: 'POST',
        processData: false,
        contentType: false,
        success: function(result) {
            sendDirectMessageAnimation();
        }, error:function(request,status,error){
            console.log("error:"+error);
           }
    })
}


// Modify Post
var boardWriteTitle = writeNewPostPage.querySelector('.board-write__title input');
var boardWriteContent = writeNewPostPage.querySelector('.board-write__content textarea');
var boardWriteId = writeNewPostPage.querySelector('#board-write-id');

function modifyPost(id, title, content) {
    boardWriteId.value = id;
    boardWriteTitle.value = title;
    boardWriteContent.value = content;
    clickNewWritePostBtn();
}