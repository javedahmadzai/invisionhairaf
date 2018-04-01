(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

require('./partials/spinner.js');
require('./partials/accordion.js');
require('./partials/navbar-toggle.js');
require('./partials/back-to-top.js');

},{"./partials/accordion.js":2,"./partials/back-to-top.js":3,"./partials/navbar-toggle.js":4,"./partials/spinner.js":5}],2:[function(require,module,exports){
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

document.getElementById('toggle').addEventListener('click', function () {
    this.classList.toggle('toggle--change');
    document.getElementById('navbar').classList.toggle('navbar--toggle');
});

},{}],5:[function(require,module,exports){
'use strict';

$('#spinner').spinner({
    min: 1,
    max: 100
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL2FwcC5qcyIsInNyYy9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvcGFydGlhbHMvYWNjb3JkaW9uLmpzIiwic3JjL3Jlc291cmNlcy9hc3NldHMvc2NyaXB0cy9wYXJ0aWFscy9iYWNrLXRvLXRvcC5qcyIsInNyYy9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvcGFydGlhbHMvbmF2YmFyLXRvZ2dsZS5qcyIsInNyYy9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvcGFydGlhbHMvc3Bpbm5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBLFFBQVEsdUJBQVI7QUFDQSxRQUFRLHlCQUFSO0FBQ0EsUUFBUSw2QkFBUjtBQUNBLFFBQVEsMkJBQVI7Ozs7O0FDTEEsRUFBRSxZQUFGLEVBQWdCLFNBQWhCLENBQTBCO0FBQ3RCLGlCQUFhO0FBRFMsQ0FBMUI7Ozs7O0FDQUEsRUFBRSxNQUFGLEVBQVUsTUFBVixDQUFpQixZQUFXO0FBQ3hCLFFBQUksRUFBRSxJQUFGLEVBQVEsU0FBUixNQUF1QixHQUEzQixFQUFnQztBQUM1QixVQUFFLGNBQUYsRUFBa0IsTUFBbEIsQ0FBeUIsR0FBekI7QUFDSCxLQUZELE1BRU87QUFDSCxVQUFFLGNBQUYsRUFBa0IsT0FBbEIsQ0FBMEIsR0FBMUI7QUFDSDtBQUNKLENBTkQ7O0FBUUEsRUFBRSxjQUFGLEVBQWtCLEtBQWxCLENBQXdCLFlBQVc7QUFDL0IsTUFBRSxXQUFGLEVBQWUsT0FBZixDQUF1QjtBQUNuQixtQkFBWTtBQURPLEtBQXZCLEVBRUcsR0FGSDtBQUdILENBSkQ7Ozs7O0FDUkEsU0FBUyxjQUFULENBQXdCLFFBQXhCLEVBQWtDLGdCQUFsQyxDQUFtRCxPQUFuRCxFQUE0RCxZQUFZO0FBQ3BFLFNBQUssU0FBTCxDQUFlLE1BQWYsQ0FBc0IsZ0JBQXRCO0FBQ0EsYUFBUyxjQUFULENBQXdCLFFBQXhCLEVBQWtDLFNBQWxDLENBQTRDLE1BQTVDLENBQW1ELGdCQUFuRDtBQUNILENBSEQ7Ozs7O0FDQUEsRUFBRSxVQUFGLEVBQWMsT0FBZCxDQUFzQjtBQUNsQixTQUFLLENBRGE7QUFFbEIsU0FBSztBQUZhLENBQXRCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuL3BhcnRpYWxzL3NwaW5uZXIuanMnKTtcbnJlcXVpcmUoJy4vcGFydGlhbHMvYWNjb3JkaW9uLmpzJyk7XG5yZXF1aXJlKCcuL3BhcnRpYWxzL25hdmJhci10b2dnbGUuanMnKTtcbnJlcXVpcmUoJy4vcGFydGlhbHMvYmFjay10by10b3AuanMnKTtcblxuXG4iLCIkKCcjYWNjb3JkaW9uJykuYWNjb3JkaW9uKHtcbiAgICBoZWlnaHRTdHlsZTogJ2NvbnRlbnQnXG59KTtcbiIsIiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPj0gMTAwKSB7XG4gICAgICAgICQoJyNiYWNrLXRvLXRvcCcpLmZhZGVJbigyMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoJyNiYWNrLXRvLXRvcCcpLmZhZGVPdXQoMjAwKTtcbiAgICB9XG59KTtcblxuJCgnI2JhY2stdG8tdG9wJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7XG4gICAgICAgIHNjcm9sbFRvcCA6IDBcbiAgICB9LCA1MDApO1xufSk7XG4iLCJkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCd0b2dnbGUtLWNoYW5nZScpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXInKS5jbGFzc0xpc3QudG9nZ2xlKCduYXZiYXItLXRvZ2dsZScpO1xufSk7XG4iLCIkKCcjc3Bpbm5lcicpLnNwaW5uZXIoe1xuICAgIG1pbjogMSxcbiAgICBtYXg6IDEwMFxufSk7XG5cbiJdfQ==
