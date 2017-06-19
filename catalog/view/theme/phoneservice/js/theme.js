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
	    _product2.default.setWidth();
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
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function setWidth() {
	  $('.product-layout > .product-thumb').each(function () {
	    var $this = $(this);

	    $this.parent('.product-layout').attr({
	      'class': 'product-layout col-xs-12 col-sm-6 col-md-4 col-lg-4'
	    });
	  });
	}

	exports.default = {
	  setWidth: setWidth
		};

/***/ })
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL3RoZW1lLmpzIiwid2VicGFjazovLy9zcmMvanMvbW9kdWxlcy9idXlJbk9uZUNsaWNrLmpzIiwid2VicGFjazovLy9zcmMvanMvbW9kdWxlcy9wcm9kdWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBidXlJbk9uZUNsaWNrIGZyb20gJy4vbW9kdWxlcy9idXlJbk9uZUNsaWNrJztcclxuaW1wb3J0IHByb2R1Y3QgZnJvbSAnLi9tb2R1bGVzL3Byb2R1Y3QnO1xyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gIGlmICgkKCcucHJvZHVjdC1sYXlvdXQnKS5sZW5ndGgpIHtcclxuICAgIGJ1eUluT25lQ2xpY2sucmVuZGVyKCk7XHJcbiAgICBwcm9kdWN0LnNldFdpZHRoKCk7XHJcbiAgfVxyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL3RoZW1lLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gICQoJy5wcm9kdWN0LWxheW91dCA+IC5wcm9kdWN0LXRodW1iJykuZWFjaChmdW5jdGlvbihpKSB7XHJcbiAgICBpKys7XHJcblxyXG4gICAgdmFyXHJcbiAgICAgICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgJGJ1dHRvbkdyb3VwID0gJHRoaXMuZmluZCgnLmJ1dHRvbi1ncm91cCcpO1xyXG5cclxuICAgICRidXR0b25Hcm91cFxyXG4gICAgICAuYXBwZW5kKCc8YSBjbGFzcz1cImJ1dHRvbiB0b2NsaWNrXCIgaHJlZj1cIiNwcC1pdGVtLScrIGkgKydcIj7QmtGD0L/QuNGC0Ywg0LIg0L7QtNC40L0g0LrQu9C40Lo8L2E+Jyk7XHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcmVuZGVyOiByZW5kZXJcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvbW9kdWxlcy9idXlJbk9uZUNsaWNrLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gc2V0V2lkdGgoKSB7XHJcbiAgJCgnLnByb2R1Y3QtbGF5b3V0ID4gLnByb2R1Y3QtdGh1bWInKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyXHJcbiAgICAgICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAkdGhpc1xyXG4gICAgICAucGFyZW50KCcucHJvZHVjdC1sYXlvdXQnKVxyXG4gICAgICAgIC5hdHRyKHtcclxuICAgICAgICAgICdjbGFzcyc6ICdwcm9kdWN0LWxheW91dCBjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTQgY29sLWxnLTQnXHJcbiAgICAgICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBzZXRXaWR0aDogc2V0V2lkdGhcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvbW9kdWxlcy9wcm9kdWN0LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVkE7QUFDQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7Ozs7OztBQ2hCQTtBQUNBOzs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7OzsiLCJzb3VyY2VSb290IjoiIn0=