
var itemTemplate = Handlebars.compile($('#item-template').html());

<<<<<<< HEAD
$('.btn-submit-item').click(function() {
console.log("patients chico");
=======
$('.btn-submit-item').click(function () {

>>>>>>> 3f1fc8ae434e303d16d465ecd2396944bd4b32bf
    addRow();

    var $lastRow = $('.shopping-cart-table').find('.row').last();

    var newItem = newItemObj();


    $('.shopping-cart-table').find('.row').last().append(itemTemplate(newItem));
});

function addRow() {
    $('.shopping-cart-table').append('<div class="row"></div>');
}

function newItemObj() {
    var itemObj = {
        name: $('#new-name').val(),
        title: $('#new-story-title').val(),
        challenge: $('new-routine').val(),
        story: $('#new-story').val(),
        email: $('#new-email').val(),
        number: $('#new-phone-number').val()
    }
    return itemObj;
}