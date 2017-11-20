stories = [];

$('a').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
});

var $stories = $("#stories");



$('.btn-submit-item').on('click', function () {
    if ($('#new-name').val() === "" && $('#new-story-title').val() === "" && $('#new-story').text() === "") {
        alert("Please share your story with us.We would love to hear about it!");
    } else if ( $('#new-story-title').val() === "") {
        alert("Your story must have a title")
    } else if ($('#new-routine').val()==="") {
        alert("Please provide us with your story");
    } else if ( $('#new-email').val() === ""){
        alert("Please enter a valid email adress");
    }else {
        var newItem = newItemObj();
        addPost(newItem)
    }    
    });

function newItemObj() {
    var itemObj = {
        name: $('#new-name').val(),
        title: $('#new-story-title').val(),
        story: $('#new-story').val(),
        video:$('#new-video').val(),
        email: $('#new-email').val(),
        phone: $('#new-phone-number').val(),
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
        $('#stories').append(newHTML);
        // _renderComments(i)
    }
}

_fetchData();

var myIndex = 0;


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

carousel();

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  function validate() {
    var email = $("#new-email").val();
    if (validateEmail(!email)) {
      alert(email + " is not valid :(");
    }
    return false;
  }
  
  $(".new-email").on("focusout", validate);