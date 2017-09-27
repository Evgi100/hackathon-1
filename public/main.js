

// var SpacebookApp = function () {




//     function _renderComments(postIndex) {
//         var post = $(".post")[postIndex];
//         $commentsList = $(post).find('.comments-list')
//         $commentsList.empty();
//         var source = $('#comment-template').html();
//         var template = Handlebars.compile(source);
//         for (var i = 0; i < posts[postIndex].comments.length; i++) {
//             var newHTML = template(posts[postIndex].comments[i]);
//             $commentsList.append(newHTML);
//             console.log(newHTML)
//         }
//     }



//     var addComment = function (newComment, postIndex) {
//         var id = posts[postIndex]._id //  THE ID of the current post that was clicked on.

//         $.ajax({
//             method: "POST",
//             url: '/post/' + id + '/comments',
//             data: newComment,
//             success: function (savedPost) {
//                 console.log(savedPost)
//                 // posts[postIndex].comments.push(savedComment);
//                 posts[postIndex] = savedPost;
//                 _renderPosts();
//             },
//             error: function (jqXHR, textStatus, errorThrown) {
//                 console.log(textStatus);
//             }
//         });
//     };


    

// //     return {
// //         addPost: addPost,
// //         addComment: addComment,
// //         posts: posts
// //     };
// // };

// var app = SpacebookApp();


// $('#addpost').on('click', function () {
//     var $input = $("#postText");
//     if ($input.val() === "") {
//         alert("Please enter text!");
//     } else {
//         var postData = {
//             text: $input.val(),
//             comments: []
//         }
//         app.addPost(postData);
//         $input.val("");
//     }
// });

// var $posts = $(".posts");


// $posts.on('click', '.toggle-comments', function () {
//     var $clickedPost = $(this).closest('.post');
//     $clickedPost.find('.comments-container').toggleClass('show');
// a});

// $posts.on('click', '.add-comment', function () {

//     var $comment = $(this).siblings('.comment');
//     var $user = $(this).siblings('.name');

//     if ($comment.val() === "" || $user.val() === "") {
//         alert("Please enter your name and a comment!");
//         return;
//     }
//     var postIndex = $(this).closest('.post').index();
//     var newComment = { text: $comment.val(), user: $user.val() };

//     app.addComment(newComment, postIndex);

//     $comment.val("");
//     $user.val("");
// });



