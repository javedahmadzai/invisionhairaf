(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

require('./partials/spinner.js');
require('./partials/accordion.js');
require('./partials/navbar-toggle.js');
require('./partials/back-to-top.js');
require('./partials/image-model.js');
require('./partials/range-slider.js');

},{"./partials/accordion.js":2,"./partials/back-to-top.js":3,"./partials/image-model.js":4,"./partials/navbar-toggle.js":5,"./partials/range-slider.js":6,"./partials/spinner.js":7}],2:[function(require,module,exports){
'use strict';

$('#accordion').accordion({
    heightStyle: 'content'
});

},{}],3:[function(require,module,exports){
'use strict';

$(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
        $('#back-to-top').fadeIn(200);
    } else {
        $('#back-to-top').fadeOut(200);
    }
});

$('#back-to-top').click(function () {
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

document.getElementById('toggle').addEventListener('click', function () {
    this.classList.toggle('toggle--change');
    document.getElementById('navbar').classList.toggle('navbar--toggle');
});

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
'use strict';

$('#spinner').spinner({
    min: 1,
    max: 100
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL2FwcC5qcyIsInNyYy9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvcGFydGlhbHMvYWNjb3JkaW9uLmpzIiwic3JjL3Jlc291cmNlcy9hc3NldHMvc2NyaXB0cy9wYXJ0aWFscy9iYWNrLXRvLXRvcC5qcyIsInNyYy9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvcGFydGlhbHMvaW1hZ2UtbW9kZWwuanMiLCJzcmMvcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL3BhcnRpYWxzL25hdmJhci10b2dnbGUuanMiLCJzcmMvcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL3BhcnRpYWxzL3JhbmdlLXNsaWRlci5qcyIsInNyYy9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvcGFydGlhbHMvc3Bpbm5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBLFFBQVEsdUJBQVI7QUFDQSxRQUFRLHlCQUFSO0FBQ0EsUUFBUSw2QkFBUjtBQUNBLFFBQVEsMkJBQVI7QUFDQSxRQUFRLDJCQUFSO0FBQ0EsUUFBUSw0QkFBUjs7Ozs7QUNQQSxFQUFFLFlBQUYsRUFBZ0IsU0FBaEIsQ0FBMEI7QUFDdEIsaUJBQWE7QUFEUyxDQUExQjs7Ozs7QUNBQSxFQUFFLE1BQUYsRUFBVSxNQUFWLENBQWlCLFlBQVc7QUFDeEIsUUFBSSxFQUFFLElBQUYsRUFBUSxTQUFSLE1BQXVCLEdBQTNCLEVBQWdDO0FBQzVCLFVBQUUsY0FBRixFQUFrQixNQUFsQixDQUF5QixHQUF6QjtBQUNILEtBRkQsTUFFTztBQUNILFVBQUUsY0FBRixFQUFrQixPQUFsQixDQUEwQixHQUExQjtBQUNIO0FBQ0osQ0FORDs7QUFRQSxFQUFFLGNBQUYsRUFBa0IsS0FBbEIsQ0FBd0IsWUFBVztBQUMvQixNQUFFLFdBQUYsRUFBZSxPQUFmLENBQXVCO0FBQ25CLG1CQUFZO0FBRE8sS0FBdkIsRUFFRyxHQUZIO0FBR0gsQ0FKRDs7Ozs7QUNSQSxJQUFNLGVBQWUsRUFBRSxnQkFBRixDQUFyQjs7QUFFQSxJQUFJLFFBQVEsRUFBRSxnQkFBRixDQUFaO0FBQ0EsSUFBSSxZQUFZLEVBQUUscUJBQUYsQ0FBaEI7QUFDQSxJQUFJLGFBQWEsRUFBRSxzQkFBRixDQUFqQjtBQUNBLElBQUksY0FBYyxFQUFFLHVCQUFGLENBQWxCOztBQUVBLGFBQWEsS0FBYixDQUFtQixZQUFXO0FBQzFCLFVBQU0sTUFBTixDQUFhLE1BQWI7QUFDQSxjQUFVLElBQVYsQ0FBZSxLQUFmLEVBQXNCLEVBQUUsS0FBRixFQUFTLElBQVQsRUFBZSxJQUFmLENBQW9CLEtBQXBCLENBQXRCO0FBQ0EsZUFBVyxJQUFYLENBQWdCLEVBQUUsR0FBRixFQUFPLElBQVAsRUFBYSxJQUFiLEVBQWhCO0FBQ0gsQ0FKRDs7QUFNQSxZQUFZLEtBQVosQ0FBa0IsWUFBVztBQUN6QixVQUFNLE9BQU4sQ0FBYyxNQUFkO0FBQ0gsQ0FGRDs7Ozs7QUNiQSxTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0MsZ0JBQWxDLENBQW1ELE9BQW5ELEVBQTRELFlBQVk7QUFDcEUsU0FBSyxTQUFMLENBQWUsTUFBZixDQUFzQixnQkFBdEI7QUFDQSxhQUFTLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0MsU0FBbEMsQ0FBNEMsTUFBNUMsQ0FBbUQsZ0JBQW5EO0FBQ0gsQ0FIRDs7Ozs7QUNBQSxJQUFJLFNBQVMsRUFBRSx5QkFBRixDQUFiOztBQUVBLEVBQUUsaUJBQUYsRUFBcUIsTUFBckIsQ0FBNEI7QUFDeEIsV0FBTyxDQURpQjtBQUV4QixTQUFLLENBRm1CO0FBR3hCLFNBQUssQ0FIbUI7QUFJeEIsWUFBUSxrQkFBVztBQUNmLGVBQU8sSUFBUCxDQUFZLENBQVo7QUFDSCxLQU51QjtBQU94QixXQUFPLGVBQVUsS0FBVixFQUFpQixFQUFqQixFQUFzQjtBQUN6QixlQUFPLElBQVAsQ0FBYSxHQUFHLEtBQWhCO0FBQ0EsVUFBRSxVQUFGLEVBQWMsR0FBZCxDQUFrQixjQUFsQixFQUFrQyxHQUFHLEtBQXJDO0FBQ0g7QUFWdUIsQ0FBNUI7Ozs7O0FDRkEsRUFBRSxVQUFGLEVBQWMsT0FBZCxDQUFzQjtBQUNsQixTQUFLLENBRGE7QUFFbEIsU0FBSztBQUZhLENBQXRCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuL3BhcnRpYWxzL3NwaW5uZXIuanMnKTtcbnJlcXVpcmUoJy4vcGFydGlhbHMvYWNjb3JkaW9uLmpzJyk7XG5yZXF1aXJlKCcuL3BhcnRpYWxzL25hdmJhci10b2dnbGUuanMnKTtcbnJlcXVpcmUoJy4vcGFydGlhbHMvYmFjay10by10b3AuanMnKTtcbnJlcXVpcmUoJy4vcGFydGlhbHMvaW1hZ2UtbW9kZWwuanMnKTtcbnJlcXVpcmUoJy4vcGFydGlhbHMvcmFuZ2Utc2xpZGVyLmpzJyk7XG5cblxuIiwiJCgnI2FjY29yZGlvbicpLmFjY29yZGlvbih7XG4gICAgaGVpZ2h0U3R5bGU6ICdjb250ZW50J1xufSk7XG4iLCIkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID49IDEwMCkge1xuICAgICAgICAkKCcjYmFjay10by10b3AnKS5mYWRlSW4oMjAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKCcjYmFjay10by10b3AnKS5mYWRlT3V0KDIwMCk7XG4gICAgfVxufSk7XG5cbiQoJyNiYWNrLXRvLXRvcCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe1xuICAgICAgICBzY3JvbGxUb3AgOiAwXG4gICAgfSwgNTAwKTtcbn0pO1xuIiwiY29uc3QgZ2FsbGVyeV9pdGVtID0gJCgnLmdhbGxlcnlfX2l0ZW0nKTtcblxubGV0IG1vZGFsID0gJCgnLmdhbGxlcnktbW9kYWwnKTtcbmxldCBtb2RhbF9pbWcgPSAkKCcuZ2FsbGVyeS1tb2RhbF9faW1nJyk7XG5sZXQgbW9kYWxfZGVzYyA9ICQoJy5nYWxsZXJ5LW1vZGFsX19kZXNjJyk7XG5sZXQgbW9kYWxfY2xvc2UgPSAkKCcuZ2FsbGVyeS1tb2RhbF9fY2xvc2UnKTtcblxuZ2FsbGVyeV9pdGVtLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIG1vZGFsLmZhZGVJbignc2xvdycpO1xuICAgIG1vZGFsX2ltZy5hdHRyKCdzcmMnLCAkKCdpbWcnLCB0aGlzKS5hdHRyKCdzcmMnKSk7XG4gICAgbW9kYWxfZGVzYy5odG1sKCQoJ3AnLCB0aGlzKS50ZXh0KCkpO1xufSk7XG5cbm1vZGFsX2Nsb3NlLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIG1vZGFsLmZhZGVPdXQoJ3Nsb3cnKTtcbn0pO1xuXG5cbiIsImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ3RvZ2dsZS0tY2hhbmdlJyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhcicpLmNsYXNzTGlzdC50b2dnbGUoJ25hdmJhci0tdG9nZ2xlJyk7XG59KTtcbiIsImxldCBoYW5kbGUgPSAkKCcuZ2FsbGVyeS1zbGlkZXJfX2hhbmRsZScpO1xuXG4kKCcuZ2FsbGVyeS1zbGlkZXInKS5zbGlkZXIoe1xuICAgIHZhbHVlOiA0LFxuICAgIG1pbjogMSxcbiAgICBtYXg6IDQsXG4gICAgY3JlYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaGFuZGxlLnRleHQoNCk7XG4gICAgfSxcbiAgICBzbGlkZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgaGFuZGxlLnRleHQoIHVpLnZhbHVlICk7XG4gICAgICAgICQoJy5nYWxsZXJ5JykuY3NzKCdjb2x1bW4tY291bnQnLCB1aS52YWx1ZSk7XG4gICAgfVxufSk7XG4iLCIkKCcjc3Bpbm5lcicpLnNwaW5uZXIoe1xuICAgIG1pbjogMSxcbiAgICBtYXg6IDEwMFxufSk7XG5cbiJdfQ==
