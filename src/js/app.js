(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./partials/jquery');
require('./partials/navbar-toggle.js');
require('./partials/back-to-top.js');

},{"./partials/back-to-top.js":2,"./partials/jquery":3,"./partials/navbar-toggle.js":4}],2:[function(require,module,exports){
"use strict";

var backToTop = document.getElementById('back-to-top');

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};

backToTop.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

},{}],3:[function(require,module,exports){
'use strict';

$('#accordion').accordion({
    heightStyle: 'content'
});

$('#spinner').spinner({
    min: 1,
    max: 100
});

},{}],4:[function(require,module,exports){
'use strict';

document.getElementById('toggle').addEventListener('click', function () {
    this.classList.toggle('toggle--change');
    document.getElementById('navbar').classList.toggle('navbar--toggle');
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXHJlc291cmNlc1xcYXNzZXRzXFxzY3JpcHRzXFxhcHAuanMiLCJzcmNcXHJlc291cmNlc1xcYXNzZXRzXFxzY3JpcHRzXFxwYXJ0aWFsc1xcYmFjay10by10b3AuanMiLCJzcmNcXHJlc291cmNlc1xcYXNzZXRzXFxzY3JpcHRzXFxwYXJ0aWFsc1xcanF1ZXJ5LmpzIiwic3JjXFxyZXNvdXJjZXNcXGFzc2V0c1xcc2NyaXB0c1xccGFydGlhbHNcXG5hdmJhci10b2dnbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFFQSxRQUFRLG1CQUFSO0FBQ0EsUUFBUSw2QkFBUjtBQUNBLFFBQVEsMkJBQVI7Ozs7O0FDSkEsSUFBTSxZQUFZLFNBQVMsY0FBVCxDQUF3QixhQUF4QixDQUFsQjs7QUFFQSxPQUFPLFFBQVAsR0FBa0IsWUFBVztBQUN6QixRQUFJLFNBQVMsSUFBVCxDQUFjLFNBQWQsR0FBMEIsRUFBMUIsSUFBZ0MsU0FBUyxlQUFULENBQXlCLFNBQXpCLEdBQXFDLEVBQXpFLEVBQTZFO0FBQ3pFLGtCQUFVLEtBQVYsQ0FBZ0IsT0FBaEIsR0FBMEIsT0FBMUI7QUFDSCxLQUZELE1BRU87QUFDSCxrQkFBVSxLQUFWLENBQWdCLE9BQWhCLEdBQTBCLE1BQTFCO0FBQ0g7QUFDSixDQU5EOztBQVFBLFVBQVUsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsWUFBVTtBQUMxQyxhQUFTLElBQVQsQ0FBYyxTQUFkLEdBQTBCLENBQTFCO0FBQ0EsYUFBUyxlQUFULENBQXlCLFNBQXpCLEdBQXFDLENBQXJDO0FBQ0gsQ0FIRDs7Ozs7QUNWQSxFQUFHLFlBQUgsRUFBa0IsU0FBbEIsQ0FBNEI7QUFDcEIsaUJBQWE7QUFETyxDQUE1Qjs7QUFJQSxFQUFHLFVBQUgsRUFBZ0IsT0FBaEIsQ0FBd0I7QUFDcEIsU0FBSyxDQURlO0FBRXBCLFNBQUs7QUFGZSxDQUF4Qjs7Ozs7QUNKQSxTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0MsZ0JBQWxDLENBQW1ELE9BQW5ELEVBQTRELFlBQVk7QUFDcEUsU0FBSyxTQUFMLENBQWUsTUFBZixDQUFzQixnQkFBdEI7QUFDQSxhQUFTLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0MsU0FBbEMsQ0FBNEMsTUFBNUMsQ0FBbUQsZ0JBQW5EO0FBQ0gsQ0FIRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4vcGFydGlhbHMvanF1ZXJ5Jyk7XG5yZXF1aXJlKCcuL3BhcnRpYWxzL25hdmJhci10b2dnbGUuanMnKTtcbnJlcXVpcmUoJy4vcGFydGlhbHMvYmFjay10by10b3AuanMnKTtcblxuIiwiY29uc3QgYmFja1RvVG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stdG8tdG9wJyk7XG5cbndpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA+IDIwIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiAyMCkge1xuICAgICAgICBiYWNrVG9Ub3Auc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBiYWNrVG9Ub3Auc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbn07XG5cbmJhY2tUb1RvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSAwO1xufSk7XG4iLCIkKCAnI2FjY29yZGlvbicgKS5hY2NvcmRpb24oe1xuICAgICAgICBoZWlnaHRTdHlsZTogJ2NvbnRlbnQnXG4gICAgfSk7XG5cbiQoICcjc3Bpbm5lcicgKS5zcGlubmVyKHtcbiAgICBtaW46IDEsXG4gICAgbWF4OiAxMDBcbn0pO1xuIiwiZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgndG9nZ2xlLS1jaGFuZ2UnKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyJykuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2YmFyLS10b2dnbGUnKTtcbn0pO1xuIl19
