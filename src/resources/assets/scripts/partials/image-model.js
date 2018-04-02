const gallery_item = $('.gallery__item');

let modal = $('.gallery-modal');
let modal_img = $('.gallery-modal__img');
let modal_desc = $('.gallery-modal__desc');
let modal_close = $('.gallery-modal__close');

gallery_item.click(function() {
    modal.fadeIn('slow');
    modal_img.attr('src', $('img', this).attr('src'));
    modal_desc.html($('p', this).text());
});

modal_close.click(function() {
    modal.fadeOut('slow');
});


