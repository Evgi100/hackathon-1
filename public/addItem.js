
stories = [];

$('a').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
});

var $stories = $(".stories");



$('.btn-submit-item').on('click', function () {
    if ($('#new-name').val() === "" && $('#new-story-title').val() === "" && $('#new-routine').val() === "" && $('#new-story').val() === "") {
        alert("Please provide us with your story.  We would love to hear about it!");
    } else if ( $('#new-story-title').val() === "") {
        alert("Your story must have a title")
    } else if ($('#new-routine').val()==="") {
        alert("Please provide us with your chalange story");
    } else if ( $('#new-story').val() === ""){
        alert("Please provide us with your story");
    }else {
        var newItem = newItemObj();
        addPost(newItem)
    }    
    });

function newItemObj() {
    var itemObj = {
        name: $('#new-name').val(),
        title: $('#new-story-title').val(),
        challenge: $('#new-routine').val(),
        story: $('#new-story').val(),
        email: $('#new-email').val(),
        number: $('#new-phone-number').val(),
        comments: []
    }
    return itemObj;
}

// 
function addPost(newStory) {
    $.ajax({
        method: "POST",
        url: '/post',
        data: newStory,
        success: function (data) {
            stories.push(data);
            _renderPosts();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });
}

function _fetchData() {
    $.ajax({
        method: "GET",
        url: '/post',
        success: function (data) {
            stories = (data);
            console.log(stories)
            _renderPosts();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });
}


function _renderPosts() {
    $stories.empty();
    var source = $('#post-template').html();
    var template = Handlebars.compile(source);
    for (var i = 0; i < stories.length; i++) {
        var newHTML = template(stories[i]);
        $stories.append(newHTML);
        // _renderComments(i)
    }
}


// function _renderComments(postIndex) {
//     var post = $(".post")[postIndex];
//     $commentsList = $(post).find('.comments-list')
//     $commentsList.empty();
//     var source = $('#comment-template').html();
//     var template = Handlebars.compile(source);
//     for (var i = 0; i < posts[postIndex].comments.length; i++) {
//         var newHTML = template(posts[postIndex].comments[i]);
//         $commentsList.append(newHTML);
//         console.log(newHTML)
//     }
// }

_fetchData();

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 7000);    
}