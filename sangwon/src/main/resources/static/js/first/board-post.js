// comment btn expansion
function openComment(id) {
    var secondCommentEl = document.querySelector('.comment'+id);

    if (secondCommentEl.classList.contains('opened'+id)) {
        secondCommentEl.classList.remove('opened'+id);
        gsap.to(secondCommentEl, 0, {
            display: 'none'
        })
    } else {
        secondCommentEl.classList.add('opened'+id);
        gsap.to(secondCommentEl, 0, {
            display: 'block'
        })
    }
}

function closeComment(id) {
    var secondCommentEl = document.querySelector('.opened'+id);
    secondCommentEl.classList.remove('opened'+id);
    gsap.to(secondCommentEl, 0, {
        display: 'none'
    })
}

// board-form(modify) active

var boardListEl = document.querySelector('.table');
var boardFormEl = document.querySelector('.board-form__container');
var modifyBtn = document.querySelector('.modify-btn');
var backBtn = document.querySelector('.back-btn');

modifyBtn.addEventListener('click', function() {
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

// like post
function likePost(id) {
    $.ajax({
        url: '/api/board/read/like/' + id,
        type: 'PUT',
        success: function(result) {
            $("#modify-btns").load(location.href + " #modify-btns");
        }
    });
}

// like comment
function likeComment(id) {
    $.ajax({
        url: '/api/board/read/likecomment/' + id,
        type: 'PUT',
        success: function(result) {
            $("#comment-box").load(location.href + " #comment-box");
        }
    })
}
// like second comment
function likeSecondComment(id) {
    $.ajax({
        url: '/api/board/read/likecomment/' + id,
        type: 'PUT',
        success: function(result) {
            $(".like-count"+id).load(window.location.href + " .like-count"+id);
        }
    });
}
