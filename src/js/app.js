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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL2FwcC5qcyIsInNyYy9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvcGFydGlhbHMvYWNjb3JkaW9uLmpzIiwic3JjL3Jlc291cmNlcy9hc3NldHMvc2NyaXB0cy9wYXJ0aWFscy9iYWNrLXRvLXRvcC5qcyIsInNyYy9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvcGFydGlhbHMvaW1hZ2UtbW9kZWwuanMiLCJzcmMvcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL3BhcnRpYWxzL2ltYWdlLXNsaWRlci5qcyIsInNyYy9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvcGFydGlhbHMvbmF2YmFyLXRvZ2dsZS5qcyIsInNyYy9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvcGFydGlhbHMvcmFuZ2Utc2xpZGVyLmpzIiwic3JjL3Jlc291cmNlcy9hc3NldHMvc2NyaXB0cy9wYXJ0aWFscy9zcGlubmVyLmpzIiwic3JjL3Jlc291cmNlcy9hc3NldHMvc2NyaXB0cy9wYXJ0aWFscy93aW5kb3ctbG9hZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBLFFBQVEsdUJBQVI7QUFDQSxRQUFRLHlCQUFSO0FBQ0EsUUFBUSw2QkFBUjtBQUNBLFFBQVEsMkJBQVI7QUFDQSxRQUFRLDJCQUFSO0FBQ0EsUUFBUSw0QkFBUjtBQUNBLFFBQVEsMkJBQVI7O0FBRUEsSUFBRyxTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBSCxFQUFzQztBQUNsQyxZQUFRLDRCQUFSO0FBQ0g7Ozs7O0FDWkQsRUFBRSxZQUFGLEVBQWdCLFNBQWhCLENBQTBCO0FBQ3RCLGlCQUFhO0FBRFMsQ0FBMUI7Ozs7O0FDQUEsRUFBRSxNQUFGLEVBQVUsTUFBVixDQUFpQixZQUFXO0FBQ3hCLFFBQUksRUFBRSxJQUFGLEVBQVEsU0FBUixNQUF1QixHQUEzQixFQUFn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Ozs7QUNBQSxPQUFPLE1BQVAsR0FBZ0IsWUFBVztBQUN2QixNQUFFLGlCQUFGLEVBQXFCLE9BQXJCLENBQTZCLE1BQTdCO0FBQ0gsQ0FGRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi9wYXJ0aWFscy9zcGlubmVyLmpzJyk7XG5yZXF1aXJlKCcuL3BhcnRpYWxzL2FjY29yZGlvbi5qcycpO1xucmVxdWlyZSgnLi9wYXJ0aWFscy9uYXZiYXItdG9nZ2xlLmpzJyk7XG5yZXF1aXJlKCcuL3BhcnRpYWxzL2JhY2stdG8tdG9wLmpzJyk7XG5yZXF1aXJlKCcuL3BhcnRpYWxzL2ltYWdlLW1vZGVsLmpzJyk7XG5yZXF1aXJlKCcuL3BhcnRpYWxzL3JhbmdlLXNsaWRlci5qcycpO1xucmVxdWlyZSgnLi9wYXJ0aWFscy93aW5kb3ctbG9hZC5qcycpO1xuXG5pZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyJykpIHtcbiAgICByZXF1aXJlKCcuL3BhcnRpYWxzL2ltYWdlLXNsaWRlci5qcycpO1xufVxuIiwiJCgnI2FjY29yZGlvbicpLmFjY29yZGlvbih7XG4gICAgaGVpZ2h0U3R5bGU6ICdjb250ZW50J1xufSk7XG4iLCIkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID49IDEwMCkge1xuICAgICAgICAkKCcuYmFjay10by10b3AnKS5mYWRlSW4oMjAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKCcuYmFjay10by10b3AnKS5mYWRlT3V0KDIwMCk7XG4gICAgfVxufSk7XG5cbiQoJy5iYWNrLXRvLXRvcCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe1xuICAgICAgICBzY3JvbGxUb3AgOiAwXG4gICAgfSwgNTAwKTtcbn0pO1xuIiwiY29uc3QgZ2FsbGVyeV9pdGVtID0gJCgnLmdhbGxlcnlfX2l0ZW0nKTtcblxubGV0IG1vZGFsID0gJCgnLmdhbGxlcnktbW9kYWwnKTtcbmxldCBtb2RhbF9pbWcgPSAkKCcuZ2FsbGVyeS1tb2RhbF9faW1nJyk7XG5sZXQgbW9kYWxfZGVzYyA9ICQoJy5nYWxsZXJ5LW1vZGFsX19kZXNjJyk7XG5sZXQgbW9kYWxfY2xvc2UgPSAkKCcuZ2FsbGVyeS1tb2RhbF9fY2xvc2UnKTtcblxuZ2FsbGVyeV9pdGVtLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIG1vZGFsLmZhZGVJbignc2xvdycpO1xuICAgIG1vZGFsX2ltZy5hdHRyKCdzcmMnLCAkKCdpbWcnLCB0aGlzKS5hdHRyKCdzcmMnKSk7XG4gICAgbW9kYWxfZGVzYy5odG1sKCQoJ3AnLCB0aGlzKS50ZXh0KCkpO1xufSk7XG5cbm1vZGFsX2Nsb3NlLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIG1vZGFsLmZhZGVPdXQoJ3Nsb3cnKTtcbn0pO1xuXG5cbiIsInZhciBvcHRpb25zID0ge1xuICAgICRBdXRvUGxheTogdHJ1ZSxcbiAgICAkU2xpZGVEdXJhdGlvbjogODAwLFxuICAgICRTbGlkZUVhc2luZzogJEplYXNlJC4kT3V0UXVpbnQsXG4gICAgJEFycm93TmF2aWdhdG9yT3B0aW9uczoge1xuICAgICAgICAkQ2xhc3M6ICRKc3NvckFycm93TmF2aWdhdG9yJFxuICAgIH0sXG4gICAgJEJ1bGxldE5hdmlnYXRvck9wdGlvbnM6IHtcbiAgICAgICAgJENsYXNzOiAkSnNzb3JCdWxsZXROYXZpZ2F0b3IkXG4gICAgfVxufTtcblxudmFyIHNsaWRlciA9IG5ldyAkSnNzb3JTbGlkZXIkKCdzbGlkZXInLCBvcHRpb25zKTtcblxuZnVuY3Rpb24gc2NhbGVTbGlkZXIoKSB7XG4gICAgdmFyIHJlZlNpemUgPSBzbGlkZXIuJEVsbXQucGFyZW50Tm9kZS5jbGllbnRXaWR0aDtcbiAgICBpZiAocmVmU2l6ZSkge1xuICAgICAgICByZWZTaXplID0gTWF0aC5taW4ocmVmU2l6ZSwgMTkyMCk7XG4gICAgICAgIHNsaWRlci4kU2NhbGVXaWR0aChyZWZTaXplKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHNjYWxlU2xpZGVyLCAzMCk7XG4gICAgfVxufVxuXG5zY2FsZVNsaWRlcigpO1xuXG4kKHdpbmRvdykuYmluZCgnbG9hZCcsIHNjYWxlU2xpZGVyKTtcbiQod2luZG93KS5iaW5kKCdyZXNpemUnLCBzY2FsZVNsaWRlcik7XG4kKHdpbmRvdykuYmluZCgnb3JpZW50YXRpb25jaGFuZ2UnLCBzY2FsZVNsaWRlcik7XG4iLCJkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCd0b2dnbGUtLWNoYW5nZScpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXInKS5jbGFzc0xpc3QudG9nZ2xlKCduYXZiYXItLXRvZ2dsZScpO1xufSk7XG4iLCJsZXQgaGFuZGxlID0gJCgnLmdhbGxlcnktc2xpZGVyX19oYW5kbGUnKTtcblxuJCgnLmdhbGxlcnktc2xpZGVyJykuc2xpZGVyKHtcbiAgICB2YWx1ZTogNCxcbiAgICBtaW46IDEsXG4gICAgbWF4OiA0LFxuICAgIGNyZWF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGhhbmRsZS50ZXh0KDQpO1xuICAgIH0sXG4gICAgc2xpZGU6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgIGhhbmRsZS50ZXh0KCB1aS52YWx1ZSApO1xuICAgICAgICAkKCcuZ2FsbGVyeScpLmNzcygnY29sdW1uLWNvdW50JywgdWkudmFsdWUpO1xuICAgIH1cbn0pO1xuIiwiJCgnI3NwaW5uZXInKS5zcGlubmVyKHtcbiAgICBtaW46IDEsXG4gICAgbWF4OiAxMDBcbn0pO1xuXG4iLCJ3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCl7XG4gICAgJCgnLndhaXQtdGlsbC1sb2FkJykuZmFkZU91dCgnc2xvdycpO1xufTtcbiJdfQ==
