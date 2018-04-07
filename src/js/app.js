(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

require('./partials/spinner.js');
require('./partials/accordion.js');
require('./partials/navbar-toggle.js');
require('./partials/back-to-top.js');
require('./partials/image-model.js');
require('./partials/range-slider.js');
require('./partials/window-load.js');

if (document.getElementById('slider')) {
    require('./partials/image-slider.js');
}

},{"./partials/accordion.js":2,"./partials/back-to-top.js":3,"./partials/image-model.js":4,"./partials/image-slider.js":5,"./partials/navbar-toggle.js":6,"./partials/range-slider.js":7,"./partials/spinner.js":8,"./partials/window-load.js":9}],2:[function(require,module,exports){
'use strict';

$('#accordion').accordion({
    heightStyle: 'content'
});

},{}],3:[function(require,module,exports){
'use strict';

$(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
        $('.back-to-top').fadeIn(200);
    } else {
        $('.back-to-top').fadeOut(200);
    }
});

$('.back-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});

},{}],4:[function(require,module,exports){
'use strict';

var gallery_item = $('.gallery__item');

var modal = $('.gallery-modal');
var modal_img = $('.gallery-modal__img');
var modal_desc = $('.gallery-modal__desc');
var modal_close = $('.gallery-modal__close');

gallery_item.click(function () {
    modal.fadeIn('slow');
    modal_img.attr('src', $('img', this).attr('src'));
    modal_desc.html($('p', this).text());
});

modal_close.click(function () {
    modal.fadeOut('slow');
});

},{}],5:[function(require,module,exports){
'use strict';

var options = {
    $AutoPlay: true,
    $SlideDuration: 800,
    $SlideEasing: $Jease$.$OutQuint,
    $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
    },
    $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$
    }
};

var slider = new $JssorSlider$('slider', options);

function scaleSlider() {
    var refSize = slider.$Elmt.parentNode.clientWidth;
    if (refSize) {
        refSize = Math.min(refSize, 1920);
        slider.$ScaleWidth(refSize);
    } else {
        window.setTimeout(scaleSlider, 30);
    }
}

scaleSlider();

$(window).bind('load', scaleSlider);
$(window).bind('resize', scaleSlider);
$(window).bind('orientationchange', scaleSlider);

},{}],6:[function(require,module,exports){
'use strict';

document.getElementById('toggle').addEventListener('click', function () {
    this.classList.toggle('toggle--change');
    document.getElementById('navbar').classList.toggle('navbar--toggle');
});

},{}],7:[function(require,module,exports){
'use strict';

var handle = $('.gallery-slider__handle');

$('.gallery-slider').slider({
    value: 4,
    min: 1,
    max: 4,
    create: function create() {
        handle.text(4);
    },
    slide: function slide(event, ui) {
        handle.text(ui.value);
        $('.gallery').css('column-count', ui.value);
    }
});

},{}],8:[function(require,module,exports){
'use strict';

$('#spinner').spinner({
    min: 1,
    max: 100
});

},{}],9:[function(require,module,exports){
'use strict';

window.onload = function () {
    $('.wait-till-load').fadeOut('slow');
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL2FwcC5qcyIsInNyYy9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvcGFydGlhbHMvYWNjb3JkaW9uLmpzIiwic3JjL3Jlc291cmNlcy9hc3NldHMvc2NyaXB0cy9wYXJ0aWFscy9iYWNrLXRvLXRvcC5qcyIsInNyYy9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvcGFydGlhbHMvaW1hZ2UtbW9kZWwuanMiLCJzcmMvcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL3BhcnRpYWxzL2ltYWdlLXNsaWRlci5qcyIsInNyYy9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvcGFydGlhbHMvbmF2YmFyLXRvZ2dsZS5qcyIsInNyYy9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvcGFydGlhbHMvcmFuZ2Utc2xpZGVyLmpzIiwic3JjL3Jlc291cmNlcy9hc3NldHMvc2NyaXB0cy9wYXJ0aWFscy9zcGlubmVyLmpzIiwic3JjL3Jlc291cmNlcy9hc3NldHMvc2NyaXB0cy9wYXJ0aWFscy93aW5kb3ctbG9hZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBLFFBQVEsdUJBQVI7QUFDQSxRQUFRLHlCQUFSO0FBQ0EsUUFBUSw2QkFBUjtBQUNBLFFBQVEsMkJBQVI7QUFDQSxRQUFRLDJCQUFSO0FBQ0EsUUFBUSw0QkFBUjtBQUNBLFFBQVEsMkJBQVI7O0FBRUEsSUFBRyxTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBSCxFQUFxQztBQUNqQyxZQUFRLDRCQUFSO0FBQ0g7Ozs7O0FDWkQsRUFBRSxZQUFGLEVBQWdCLFNBQWhCLENBQTBCO0FBQ3RCLGlCQUFhO0FBRFMsQ0FBMUI7Ozs7O0FDQUEsRUFBRSxNQUFGLEVBQVUsTUFBVixDQUFpQixZQUFXO0FBQ3hCLFFBQUksRUFBRSxJQUFGLEVBQVEsU0FBUixNQUF1QixHQUEzQixFQUFn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Ozs7QUNBQSxPQUFPLE1BQVAsR0FBZ0IsWUFBVztBQUN2QixNQUFFLGlCQUFGLEVBQXFCLE9BQXJCLENBQTZCLE1BQTdCO0FBQ0gsQ0FGRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi9wYXJ0aWFscy9zcGlubmVyLmpzJyk7XG5yZXF1aXJlKCcuL3BhcnRpYWxzL2FjY29yZGlvbi5qcycpO1xucmVxdWlyZSgnLi9wYXJ0aWFscy9uYXZiYXItdG9nZ2xlLmpzJyk7XG5yZXF1aXJlKCcuL3BhcnRpYWxzL2JhY2stdG8tdG9wLmpzJyk7XG5yZXF1aXJlKCcuL3BhcnRpYWxzL2ltYWdlLW1vZGVsLmpzJyk7XG5yZXF1aXJlKCcuL3BhcnRpYWxzL3JhbmdlLXNsaWRlci5qcycpO1xucmVxdWlyZSgnLi9wYXJ0aWFscy93aW5kb3ctbG9hZC5qcycpO1xuXG5pZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyJykpe1xuICAgIHJlcXVpcmUoJy4vcGFydGlhbHMvaW1hZ2Utc2xpZGVyLmpzJyk7XG59XG4iLCIkKCcjYWNjb3JkaW9uJykuYWNjb3JkaW9uKHtcbiAgICBoZWlnaHRTdHlsZTogJ2NvbnRlbnQnXG59KTtcbiIsIiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPj0gMTAwKSB7XG4gICAgICAgICQoJy5iYWNrLXRvLXRvcCcpLmZhZGVJbigyMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoJy5iYWNrLXRvLXRvcCcpLmZhZGVPdXQoMjAwKTtcbiAgICB9XG59KTtcblxuJCgnLmJhY2stdG8tdG9wJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7XG4gICAgICAgIHNjcm9sbFRvcCA6IDBcbiAgICB9LCA1MDApO1xufSk7XG4iLCJjb25zdCBnYWxsZXJ5X2l0ZW0gPSAkKCcuZ2FsbGVyeV9faXRlbScpO1xuXG5sZXQgbW9kYWwgPSAkKCcuZ2FsbGVyeS1tb2RhbCcpO1xubGV0IG1vZGFsX2ltZyA9ICQoJy5nYWxsZXJ5LW1vZGFsX19pbWcnKTtcbmxldCBtb2RhbF9kZXNjID0gJCgnLmdhbGxlcnktbW9kYWxfX2Rlc2MnKTtcbmxldCBtb2RhbF9jbG9zZSA9ICQoJy5nYWxsZXJ5LW1vZGFsX19jbG9zZScpO1xuXG5nYWxsZXJ5X2l0ZW0uY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgbW9kYWwuZmFkZUluKCdzbG93Jyk7XG4gICAgbW9kYWxfaW1nLmF0dHIoJ3NyYycsICQoJ2ltZycsIHRoaXMpLmF0dHIoJ3NyYycpKTtcbiAgICBtb2RhbF9kZXNjLmh0bWwoJCgncCcsIHRoaXMpLnRleHQoKSk7XG59KTtcblxubW9kYWxfY2xvc2UuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgbW9kYWwuZmFkZU91dCgnc2xvdycpO1xufSk7XG5cblxuIiwidmFyIG9wdGlvbnMgPSB7XG4gICAgJEF1dG9QbGF5OiB0cnVlLFxuICAgICRTbGlkZUR1cmF0aW9uOiA4MDAsXG4gICAgJFNsaWRlRWFzaW5nOiAkSmVhc2UkLiRPdXRRdWludCxcbiAgICAkQXJyb3dOYXZpZ2F0b3JPcHRpb25zOiB7XG4gICAgICAgICRDbGFzczogJEpzc29yQXJyb3dOYXZpZ2F0b3IkXG4gICAgfSxcbiAgICAkQnVsbGV0TmF2aWdhdG9yT3B0aW9uczoge1xuICAgICAgICAkQ2xhc3M6ICRKc3NvckJ1bGxldE5hdmlnYXRvciRcbiAgICB9XG59O1xuXG52YXIgc2xpZGVyID0gbmV3ICRKc3NvclNsaWRlciQoJ3NsaWRlcicsIG9wdGlvbnMpO1xuXG5mdW5jdGlvbiBzY2FsZVNsaWRlcigpIHtcbiAgICB2YXIgcmVmU2l6ZSA9IHNsaWRlci4kRWxtdC5wYXJlbnROb2RlLmNsaWVudFdpZHRoO1xuICAgIGlmIChyZWZTaXplKSB7XG4gICAgICAgIHJlZlNpemUgPSBNYXRoLm1pbihyZWZTaXplLCAxOTIwKTtcbiAgICAgICAgc2xpZGVyLiRTY2FsZVdpZHRoKHJlZlNpemUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoc2NhbGVTbGlkZXIsIDMwKTtcbiAgICB9XG59XG5cbnNjYWxlU2xpZGVyKCk7XG5cbiQod2luZG93KS5iaW5kKCdsb2FkJywgc2NhbGVTbGlkZXIpO1xuJCh3aW5kb3cpLmJpbmQoJ3Jlc2l6ZScsIHNjYWxlU2xpZGVyKTtcbiQod2luZG93KS5iaW5kKCdvcmllbnRhdGlvbmNoYW5nZScsIHNjYWxlU2xpZGVyKTtcbiIsImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ3RvZ2dsZS0tY2hhbmdlJyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhcicpLmNsYXNzTGlzdC50b2dnbGUoJ25hdmJhci0tdG9nZ2xlJyk7XG59KTtcbiIsImxldCBoYW5kbGUgPSAkKCcuZ2FsbGVyeS1zbGlkZXJfX2hhbmRsZScpO1xuXG4kKCcuZ2FsbGVyeS1zbGlkZXInKS5zbGlkZXIoe1xuICAgIHZhbHVlOiA0LFxuICAgIG1pbjogMSxcbiAgICBtYXg6IDQsXG4gICAgY3JlYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaGFuZGxlLnRleHQoNCk7XG4gICAgfSxcbiAgICBzbGlkZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgaGFuZGxlLnRleHQoIHVpLnZhbHVlICk7XG4gICAgICAgICQoJy5nYWxsZXJ5JykuY3NzKCdjb2x1bW4tY291bnQnLCB1aS52YWx1ZSk7XG4gICAgfVxufSk7XG4iLCIkKCcjc3Bpbm5lcicpLnNwaW5uZXIoe1xuICAgIG1pbjogMSxcbiAgICBtYXg6IDEwMFxufSk7XG5cbiIsIndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKXtcbiAgICAkKCcud2FpdC10aWxsLWxvYWQnKS5mYWRlT3V0KCdzbG93Jyk7XG59O1xuIl19
