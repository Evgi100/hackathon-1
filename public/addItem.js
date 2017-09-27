// var source = $("#entry-template").html();
var itemTemplate = Handlebars.compile($('#item-template').html());

$('.btn-submit-item').click(function () {

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