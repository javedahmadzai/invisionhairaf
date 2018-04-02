let handle = $('.gallery-slider__handle');

$('.gallery-slider').slider({
    value: 4,
    min: 1,
    max: 4,
    create: function() {
        handle.text(4);
    },
    slide: function( event, ui ) {
        handle.text( ui.value );
        $('.gallery').css('column-count', ui.value);
    }
});
