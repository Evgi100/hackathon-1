var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//  Add new conection for heroku DB
mongoose.connect(process.env.CONNECTION_STRING ||'mongodb://localhost/wayToWinDB', function() {
    console.log("DB connection established!!!");
})

var Story = require('./models/postModel');

var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 1) to handle getting all story and their comments
app.get('/post', function(req, res) {
   Story.find({}, function(err, posts) {
        if (err) { return console.log("Error getting post from the DB"); }
        res.send(posts);
    });
});

// 2) to handle adding a story
app.post('/post', function(req, res) {
    var newStory = new Story(req.body);
    newStory.save(function(err, posts) {
        if (err) { return console.log("Error save"); }
        res.send(posts);
    });
});



// 3) to handle adding a comment to a story
app.post('/post/:id/comments', function(req, res) {
    var id = req.params.id;
   Story.findById(id, function(err, post) {
        if (err) { return console.log("Error delete") }
        post.comments.push(req.body)
        post.save();
        res.send(post);
    });
});



app.listen(process.env.PORT || 8000, function() {
    console.log("what do you want from me! get me on 8000 ;-)");
});