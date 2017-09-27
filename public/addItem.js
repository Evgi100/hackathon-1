
posts=[];

// var source = $("#entry-template").html();
var itemTemplate = Handlebars.compile($('#item-template').html());

$('.btn-submit-item').on('click',function () {

    // addRow();

    console.log('Submit button invoke that function')

    // var $lastRow = $('.shopping-cart-table').find('.row').last();

    var newItem = newItemObj();

    addPost(newItem)

    // $('.shopping-cart-table').find('.row').last().append(itemTemplate(newItem));
});

// function addRow() {
//     $('.shopping-cart-table').append('<div class="row"></div>');
// }

function newItemObj() {
    var itemObj = {
        name: $('#new-name').val(),
        title: $('#new-story-title').val(),
        challenge: $('#new-routine').val(),
        story: $('#new-story').val(),
        email: $('#new-email').val(),
        number: $('#new-phone-number').val(),
        comments:[]
    }
    return itemObj;
}

function addPost(newStory) {
    $.ajax({
        method: "POST",
        url: '/post',
        data: newStory,
        success: function (data) {
            posts.push(data);
            _renderPosts();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });
}

function _renderPosts() {
    $posts.empty();
    var source = $('#post-template').html();
    var template = Handlebars.compile(source);
    for (var i = 0; i < posts.length; i++) {
        var newHTML = template(posts[i]);
        $posts.append(newHTML);
        _renderComments(i)
    }
}

function _renderComments(postIndex) {
    var post = $(".post")[postIndex];
    $commentsList = $(post).find('.comments-list')
    $commentsList.empty();
    var source = $('#comment-template').html();
    var template = Handlebars.compile(source);
    for (var i = 0; i < posts[postIndex].comments.length; i++) {
        var newHTML = template(posts[postIndex].comments[i]);
        $commentsList.append(newHTML);
        console.log(newHTML)
    }
}
