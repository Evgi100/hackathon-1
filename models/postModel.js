var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/wayToWin');
//design the two schema below and use sub docs 
//to define the relationship between posts and comments

//you don't need a comments collection
//you only need a posts collection

var commentSchema = new Schema({
    text: String,
    user: String
});


var storySchema = new Schema({
    name:String,
    title:String,
    challenge:String,
    story:String,
    email:String,
    phone:String,
    video:String,
    comments: [commentSchema],

});

var Story = mongoose.model('story', storySchema)



module.exports = Story;