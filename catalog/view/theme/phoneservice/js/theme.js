var theme =
webpackJsonp_name_([0,1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _buyInOneClick = __webpack_require__(2);

	var _buyInOneClick2 = _interopRequireDefault(_buyInOneClick);

	var _product = __webpack_require__(3);

	var _product2 = _interopRequireDefault(_product);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	$(document).ready(function () {
	  if ($('.product-layout').length) {
	    _buyInOneClick2.default.render();
	    _product2.default.init();
	  }
	});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function render() {
	  $('.product-layout > .product-thumb').each(function (i) {
	    i++;

	    var $this = $(this),
	        $buttonGroup = $this.find('.button-group');

	    $buttonGroup.append('<a class="button toclick" href="#pp-item-' + i + '">Купить в один клик</a>');
	  });
	}

	exports.default = {
	  render: render
		};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jquery = __webpack_require__(4);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function init() {
	  setWidth();

	  $('.product-thumb h4').equalHeights();
	}

	function setWidth() {
	  $('.product-layout > .product-thumb').each(function () {
	    var $this = $(this);

	    $this.parent('.product-layout').attr({
	      'class': 'product-layout col-xs-12 col-sm-6 col-md-4 col-lg-4'
	    });
	  });
	}

	exports.default = {
	  setWidth: setWidth,
	  init: init
		};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*!
	 * Simple jQuery Equal Heights
	 *
	 * Copyright (c) 2015 Matt Banks
	 * Dual licensed under the MIT and GPL licenses.
	 * Uses the same license as jQuery, see:
	 * http://docs.jquery.com/License
	 *
	 * @version 1.5.3
	 */
	!function(a){var b=[],c=function(b){var c,d=0;return b.each(function(){c=a(this).innerHeight(),c>d&&(d=c)}),d},d="height",e=document.documentElement;a(window).on("resize",function(){
	for(var f,g=0,h=b.length,i=[],j=[];h>g;g++)f=b[g],f.length&&a.contains(e,f[0])&&(i.push(f),f.css(d,"auto"));
	for(g=0,h=i.length;h>g;g++)j[g]=c(i[g]);
	for(g=0;h>g;g++)i[g].css(d,j[g])}),a.fn.equalHeights=function(e){var f,g,h,i,j,k,l=a(this);if(e=e||{},f=c(l),e.watch){for(g=0,h=b.length,i;h>g;g++)if(l.is(b[g])){i=!0;break}i||b.push(l)}if(e.unwatch){for(g=0,h=b.length,j=[];h>g;g++)l.is(b[g])||j.push(b[g]);return b=j,this}return e.wait?(k=setInterval(function(){return f>0?(clearInterval(k),l.css(d,f)):void(f=c(l))},100),this):l.css(d,f)},
	a(document).on("ready",function(){a("[data-equal]").each(function(){var b=a(this),c=b.data(),d=c.equal;b.find(d).equalHeights(c)})})}(jQuery);


/***/ })
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL3RoZW1lLmpzIiwid2VicGFjazovLy9zcmMvanMvbW9kdWxlcy9idXlJbk9uZUNsaWNrLmpzIiwid2VicGFjazovLy9zcmMvanMvbW9kdWxlcy9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL34vanF1ZXJ5LmVxdWFsaGVpZ2h0cy9qcXVlcnkuZXF1YWxoZWlnaHRzLm1pbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgYnV5SW5PbmVDbGljayBmcm9tICcuL21vZHVsZXMvYnV5SW5PbmVDbGljayc7XHJcbmltcG9ydCBwcm9kdWN0IGZyb20gJy4vbW9kdWxlcy9wcm9kdWN0JztcclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICBpZiAoJCgnLnByb2R1Y3QtbGF5b3V0JykubGVuZ3RoKSB7XHJcbiAgICBidXlJbk9uZUNsaWNrLnJlbmRlcigpO1xyXG4gICAgcHJvZHVjdC5pbml0KCk7XHJcbiAgfVxyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL3RoZW1lLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gICQoJy5wcm9kdWN0LWxheW91dCA+IC5wcm9kdWN0LXRodW1iJykuZWFjaChmdW5jdGlvbihpKSB7XHJcbiAgICBpKys7XHJcblxyXG4gICAgdmFyXHJcbiAgICAgICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgJGJ1dHRvbkdyb3VwID0gJHRoaXMuZmluZCgnLmJ1dHRvbi1ncm91cCcpO1xyXG5cclxuICAgICRidXR0b25Hcm91cFxyXG4gICAgICAuYXBwZW5kKCc8YSBjbGFzcz1cImJ1dHRvbiB0b2NsaWNrXCIgaHJlZj1cIiNwcC1pdGVtLScrIGkgKydcIj7QmtGD0L/QuNGC0Ywg0LIg0L7QtNC40L0g0LrQu9C40Lo8L2E+Jyk7XHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcmVuZGVyOiByZW5kZXJcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvbW9kdWxlcy9idXlJbk9uZUNsaWNrLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IGVxdWFsSGVpZ2h0cyBmcm9tICdqcXVlcnkuZXF1YWxoZWlnaHRzJztcclxuXHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gIHNldFdpZHRoKCk7XHJcblxyXG4gICQoJy5wcm9kdWN0LXRodW1iIGg0JykuZXF1YWxIZWlnaHRzKCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZXRXaWR0aCgpIHtcclxuICAkKCcucHJvZHVjdC1sYXlvdXQgPiAucHJvZHVjdC10aHVtYicpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICB2YXJcclxuICAgICAgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuICAgICR0aGlzXHJcbiAgICAgIC5wYXJlbnQoJy5wcm9kdWN0LWxheW91dCcpXHJcbiAgICAgICAgLmF0dHIoe1xyXG4gICAgICAgICAgJ2NsYXNzJzogJ3Byb2R1Y3QtbGF5b3V0IGNvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtNCBjb2wtbGctNCdcclxuICAgICAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHNldFdpZHRoOiBzZXRXaWR0aCxcclxuICBpbml0OiBpbml0XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL21vZHVsZXMvcHJvZHVjdC5qcyIsIi8qIVxuICogU2ltcGxlIGpRdWVyeSBFcXVhbCBIZWlnaHRzXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IE1hdHQgQmFua3NcbiAqIER1YWwgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBhbmQgR1BMIGxpY2Vuc2VzLlxuICogVXNlcyB0aGUgc2FtZSBsaWNlbnNlIGFzIGpRdWVyeSwgc2VlOlxuICogaHR0cDovL2RvY3MuanF1ZXJ5LmNvbS9MaWNlbnNlXG4gKlxuICogQHZlcnNpb24gMS41LjNcbiAqL1xuIWZ1bmN0aW9uKGEpe3ZhciBiPVtdLGM9ZnVuY3Rpb24oYil7dmFyIGMsZD0wO3JldHVybiBiLmVhY2goZnVuY3Rpb24oKXtjPWEodGhpcykuaW5uZXJIZWlnaHQoKSxjPmQmJihkPWMpfSksZH0sZD1cImhlaWdodFwiLGU9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O2Eod2luZG93KS5vbihcInJlc2l6ZVwiLGZ1bmN0aW9uKCl7XG5mb3IodmFyIGYsZz0wLGg9Yi5sZW5ndGgsaT1bXSxqPVtdO2g+ZztnKyspZj1iW2ddLGYubGVuZ3RoJiZhLmNvbnRhaW5zKGUsZlswXSkmJihpLnB1c2goZiksZi5jc3MoZCxcImF1dG9cIikpO1xuZm9yKGc9MCxoPWkubGVuZ3RoO2g+ZztnKyspaltnXT1jKGlbZ10pO1xuZm9yKGc9MDtoPmc7ZysrKWlbZ10uY3NzKGQsaltnXSl9KSxhLmZuLmVxdWFsSGVpZ2h0cz1mdW5jdGlvbihlKXt2YXIgZixnLGgsaSxqLGssbD1hKHRoaXMpO2lmKGU9ZXx8e30sZj1jKGwpLGUud2F0Y2gpe2ZvcihnPTAsaD1iLmxlbmd0aCxpO2g+ZztnKyspaWYobC5pcyhiW2ddKSl7aT0hMDticmVha31pfHxiLnB1c2gobCl9aWYoZS51bndhdGNoKXtmb3IoZz0wLGg9Yi5sZW5ndGgsaj1bXTtoPmc7ZysrKWwuaXMoYltnXSl8fGoucHVzaChiW2ddKTtyZXR1cm4gYj1qLHRoaXN9cmV0dXJuIGUud2FpdD8oaz1zZXRJbnRlcnZhbChmdW5jdGlvbigpe3JldHVybiBmPjA/KGNsZWFySW50ZXJ2YWwoayksbC5jc3MoZCxmKSk6dm9pZChmPWMobCkpfSwxMDApLHRoaXMpOmwuY3NzKGQsZil9LFxuYShkb2N1bWVudCkub24oXCJyZWFkeVwiLGZ1bmN0aW9uKCl7YShcIltkYXRhLWVxdWFsXVwiKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKSxjPWIuZGF0YSgpLGQ9Yy5lcXVhbDtiLmZpbmQoZCkuZXF1YWxIZWlnaHRzKGMpfSl9KX0oalF1ZXJ5KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9qcXVlcnkuZXF1YWxoZWlnaHRzL2pxdWVyeS5lcXVhbGhlaWdodHMubWluLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1ZBO0FBQ0E7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBOzs7Ozs7QUNoQkE7QUFDQTs7Ozs7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9