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

	var _ajaxForm = __webpack_require__(5);

	var _ajaxForm2 = _interopRequireDefault(_ajaxForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	$(document).ready(function () {
	  if ($('.product-layout').length) {
	    _buyInOneClick2.default.render();
	    _product2.default.init();
	  }

	  if ($('.ajax-form').length) {
	    _ajaxForm2.default.send();
	  }

	  $('.toclick, .callback-link').magnificPopup({
	    mainClass: 'mfp-zoom-in',
	    removalDelay: 500
	  });
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

	    var imgUrl = $this.find('.img-responsive').attr('src'),
	        itemName = $this.find('h4 a').text(),
	        itemPrice = $this.find('.price').html(),
	        adminMail = $('#callback [name="admin_email"]').val();

	    $buttonGroup.append('<a class="button toclick" href="#pp-item_' + i + '">Купить в один клик</a>');

	    $this.after('<div id="pp-item_' + i + '" class="product-popup">\
	                <h2 class="pp-item__title">Купить в один клик</h2>\
	                <div class="pp-item__img-wrapper">\
	                  <img class="pp-item__img" src="' + imgUrl + '" alt="' + itemName + '">\
	                </div>\
	                <div class="pp-item__content">\
	                  <h3 class="pp-item__product-title">' + itemName + '</h3>\
	                  <div class="pp-item__price">' + itemPrice + '</div>\
	                  <form class="ajax-form">\
	                    <input type="hidden" name="project_name" value="IPhoneService">\
	                    <input type="hidden" name="admin_email" value="' + adminMail + '">\
	                    <input type="hidden" name="form_subject" value="Заявка с сайта Айфонсервис">\
	                    <input type="hidden" name="product" value="' + itemName + '">\
	                    <div class="callback__form-group">\
	                      <input class="form-control" type="text" name="Телефон" placeholder="Введите ваш телефон..." required>\
	                      <button class="callback__btn btn btn-primary">Заказать</button>\
	                    </div>\
	                  </form>\
	                  <div class="callback__succes">\
	                    <div class="callback__succes-text">Спасибо за заказ!</div>\
	                  </div>\
	                </div>\
	              </div>');
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
	  $('.product-thumb h4').equalHeights();
	}

	exports.default = {
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


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function send() {

	  //E-mail Ajax Send
	  $(".ajax-form").submit(function () {
	    var $this = $(this);
	    $.ajax({
	      type: "POST",
	      url: "/catalog/view/theme/phoneservice/mail.php",
	      data: $this.serialize()
	    }).done(function () {
	      var $callbackSucces = $this.closest('.product-popup').find('.callback__succes');

	      if ($callbackSucces.length) {
	        $callbackSucces.fadeIn();
	      }

	      setTimeout(function () {
	        // Done Functions
	        $this.trigger("reset");

	        if ($callbackSucces.length) {
	          $callbackSucces.fadeOut();
	        }

	        $.magnificPopup.close();
	      }, 1500);
	    });
	    return false;
	  });
	}

	exports.default = {
	  send: send
		};

/***/ })
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL3RoZW1lLmpzIiwid2VicGFjazovLy9zcmMvanMvbW9kdWxlcy9idXlJbk9uZUNsaWNrLmpzIiwid2VicGFjazovLy9zcmMvanMvbW9kdWxlcy9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL34vanF1ZXJ5LmVxdWFsaGVpZ2h0cy9qcXVlcnkuZXF1YWxoZWlnaHRzLm1pbi5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL21vZHVsZXMvYWpheEZvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IGJ1eUluT25lQ2xpY2sgZnJvbSAnLi9tb2R1bGVzL2J1eUluT25lQ2xpY2snO1xyXG5pbXBvcnQgcHJvZHVjdCBmcm9tICcuL21vZHVsZXMvcHJvZHVjdCc7XHJcbmltcG9ydCBhamF4Rm9ybSBmcm9tICcuL21vZHVsZXMvYWpheEZvcm0nO1xyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gIGlmICgkKCcucHJvZHVjdC1sYXlvdXQnKS5sZW5ndGgpIHtcclxuICAgIGJ1eUluT25lQ2xpY2sucmVuZGVyKCk7XHJcbiAgICBwcm9kdWN0LmluaXQoKTtcclxuICB9XHJcblxyXG4gIGlmICgkKCcuYWpheC1mb3JtJykubGVuZ3RoKSB7XHJcbiAgICBhamF4Rm9ybS5zZW5kKCk7XHJcbiAgfVxyXG5cclxuICAkKCcudG9jbGljaywgLmNhbGxiYWNrLWxpbmsnKS5tYWduaWZpY1BvcHVwKHtcclxuICAgIG1haW5DbGFzczogJ21mcC16b29tLWluJyxcclxuICAgIHJlbW92YWxEZWxheTogNTAwXHJcbiAgfSk7XHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvdGhlbWUuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgJCgnLnByb2R1Y3QtbGF5b3V0ID4gLnByb2R1Y3QtdGh1bWInKS5lYWNoKGZ1bmN0aW9uKGkpIHtcclxuXHJcbiAgICBpKys7XHJcblxyXG4gICAgdmFyXHJcbiAgICAgICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgJGJ1dHRvbkdyb3VwID0gJHRoaXMuZmluZCgnLmJ1dHRvbi1ncm91cCcpO1xyXG5cclxuICAgIHZhclxyXG4gICAgICBpbWdVcmwgPSAkdGhpcy5maW5kKCcuaW1nLXJlc3BvbnNpdmUnKS5hdHRyKCdzcmMnKSxcclxuICAgICAgaXRlbU5hbWUgPSAkdGhpcy5maW5kKCdoNCBhJykudGV4dCgpLFxyXG4gICAgICBpdGVtUHJpY2UgPSAkdGhpcy5maW5kKCcucHJpY2UnKS5odG1sKCksXHJcbiAgICAgIGFkbWluTWFpbCA9ICQoJyNjYWxsYmFjayBbbmFtZT1cImFkbWluX2VtYWlsXCJdJykudmFsKCk7XHJcblxyXG4gICAgJGJ1dHRvbkdyb3VwXHJcbiAgICAgIC5hcHBlbmQoJzxhIGNsYXNzPVwiYnV0dG9uIHRvY2xpY2tcIiBocmVmPVwiI3BwLWl0ZW1fJysgaSArJ1wiPtCa0YPQv9C40YLRjCDQsiDQvtC00LjQvSDQutC70LjQujwvYT4nKTtcclxuXHJcbiAgICAkdGhpc1xyXG4gICAgICAuYWZ0ZXIoJzxkaXYgaWQ9XCJwcC1pdGVtXycrIGkgKydcIiBjbGFzcz1cInByb2R1Y3QtcG9wdXBcIj5cXFxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicHAtaXRlbV9fdGl0bGVcIj7QmtGD0L/QuNGC0Ywg0LIg0L7QtNC40L0g0LrQu9C40Lo8L2gyPlxcXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHAtaXRlbV9faW1nLXdyYXBwZXJcIj5cXFxyXG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicHAtaXRlbV9faW1nXCIgc3JjPVwiJysgaW1nVXJsICsnXCIgYWx0PVwiJysgaXRlbU5hbWUgKydcIj5cXFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcC1pdGVtX19jb250ZW50XCI+XFxcclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwicHAtaXRlbV9fcHJvZHVjdC10aXRsZVwiPicrIGl0ZW1OYW1lICsnPC9oMz5cXFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHAtaXRlbV9fcHJpY2VcIj4nKyBpdGVtUHJpY2UgKyc8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImFqYXgtZm9ybVwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicHJvamVjdF9uYW1lXCIgdmFsdWU9XCJJUGhvbmVTZXJ2aWNlXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJhZG1pbl9lbWFpbFwiIHZhbHVlPVwiJysgYWRtaW5NYWlsICsnXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJmb3JtX3N1YmplY3RcIiB2YWx1ZT1cItCX0LDRj9Cy0LrQsCDRgSDRgdCw0LnRgtCwINCQ0LnRhNC+0L3RgdC10YDQstC40YFcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInByb2R1Y3RcIiB2YWx1ZT1cIicrIGl0ZW1OYW1lICsnXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsbGJhY2tfX2Zvcm0tZ3JvdXBcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBuYW1lPVwi0KLQtdC70LXRhNC+0L1cIiBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INCy0LDRiCDRgtC10LvQtdGE0L7QvS4uLlwiIHJlcXVpcmVkPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2FsbGJhY2tfX2J0biBidG4gYnRuLXByaW1hcnlcIj7Ql9Cw0LrQsNC30LDRgtGMPC9idXR0b24+XFxcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XFxcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGxiYWNrX19zdWNjZXNcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxsYmFja19fc3VjY2VzLXRleHRcIj7QodC/0LDRgdC40LHQviDQt9CwINC30LDQutCw0LchPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgPC9kaXY+JylcclxuICB9KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICByZW5kZXI6IHJlbmRlclxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9tb2R1bGVzL2J1eUluT25lQ2xpY2suanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgZXF1YWxIZWlnaHRzIGZyb20gJ2pxdWVyeS5lcXVhbGhlaWdodHMnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgJCgnLnByb2R1Y3QtdGh1bWIgaDQnKS5lcXVhbEhlaWdodHMoKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBpbml0OiBpbml0XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL21vZHVsZXMvcHJvZHVjdC5qcyIsIi8qIVxuICogU2ltcGxlIGpRdWVyeSBFcXVhbCBIZWlnaHRzXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IE1hdHQgQmFua3NcbiAqIER1YWwgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBhbmQgR1BMIGxpY2Vuc2VzLlxuICogVXNlcyB0aGUgc2FtZSBsaWNlbnNlIGFzIGpRdWVyeSwgc2VlOlxuICogaHR0cDovL2RvY3MuanF1ZXJ5LmNvbS9MaWNlbnNlXG4gKlxuICogQHZlcnNpb24gMS41LjNcbiAqL1xuIWZ1bmN0aW9uKGEpe3ZhciBiPVtdLGM9ZnVuY3Rpb24oYil7dmFyIGMsZD0wO3JldHVybiBiLmVhY2goZnVuY3Rpb24oKXtjPWEodGhpcykuaW5uZXJIZWlnaHQoKSxjPmQmJihkPWMpfSksZH0sZD1cImhlaWdodFwiLGU9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O2Eod2luZG93KS5vbihcInJlc2l6ZVwiLGZ1bmN0aW9uKCl7XG5mb3IodmFyIGYsZz0wLGg9Yi5sZW5ndGgsaT1bXSxqPVtdO2g+ZztnKyspZj1iW2ddLGYubGVuZ3RoJiZhLmNvbnRhaW5zKGUsZlswXSkmJihpLnB1c2goZiksZi5jc3MoZCxcImF1dG9cIikpO1xuZm9yKGc9MCxoPWkubGVuZ3RoO2g+ZztnKyspaltnXT1jKGlbZ10pO1xuZm9yKGc9MDtoPmc7ZysrKWlbZ10uY3NzKGQsaltnXSl9KSxhLmZuLmVxdWFsSGVpZ2h0cz1mdW5jdGlvbihlKXt2YXIgZixnLGgsaSxqLGssbD1hKHRoaXMpO2lmKGU9ZXx8e30sZj1jKGwpLGUud2F0Y2gpe2ZvcihnPTAsaD1iLmxlbmd0aCxpO2g+ZztnKyspaWYobC5pcyhiW2ddKSl7aT0hMDticmVha31pfHxiLnB1c2gobCl9aWYoZS51bndhdGNoKXtmb3IoZz0wLGg9Yi5sZW5ndGgsaj1bXTtoPmc7ZysrKWwuaXMoYltnXSl8fGoucHVzaChiW2ddKTtyZXR1cm4gYj1qLHRoaXN9cmV0dXJuIGUud2FpdD8oaz1zZXRJbnRlcnZhbChmdW5jdGlvbigpe3JldHVybiBmPjA/KGNsZWFySW50ZXJ2YWwoayksbC5jc3MoZCxmKSk6dm9pZChmPWMobCkpfSwxMDApLHRoaXMpOmwuY3NzKGQsZil9LFxuYShkb2N1bWVudCkub24oXCJyZWFkeVwiLGZ1bmN0aW9uKCl7YShcIltkYXRhLWVxdWFsXVwiKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKSxjPWIuZGF0YSgpLGQ9Yy5lcXVhbDtiLmZpbmQoZCkuZXF1YWxIZWlnaHRzKGMpfSl9KX0oalF1ZXJ5KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9qcXVlcnkuZXF1YWxoZWlnaHRzL2pxdWVyeS5lcXVhbGhlaWdodHMubWluLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIHNlbmQoKSB7XHJcblxyXG4gIC8vRS1tYWlsIEFqYXggU2VuZFxyXG4gICQoXCIuYWpheC1mb3JtXCIpLnN1Ym1pdChmdW5jdGlvbigpIHtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgdXJsOiBcIi9jYXRhbG9nL3ZpZXcvdGhlbWUvcGhvbmVzZXJ2aWNlL21haWwucGhwXCIsXHJcbiAgICAgIGRhdGE6ICR0aGlzLnNlcmlhbGl6ZSgpXHJcbiAgICB9KS5kb25lKGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgJGNhbGxiYWNrU3VjY2VzID0gJHRoaXMuY2xvc2VzdCgnLnByb2R1Y3QtcG9wdXAnKS5maW5kKCcuY2FsbGJhY2tfX3N1Y2NlcycpO1xyXG5cclxuICAgICAgaWYgKCRjYWxsYmFja1N1Y2Nlcy5sZW5ndGgpIHtcclxuICAgICAgICAkY2FsbGJhY2tTdWNjZXMuZmFkZUluKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gRG9uZSBGdW5jdGlvbnNcclxuICAgICAgICAkdGhpcy50cmlnZ2VyKFwicmVzZXRcIik7XHJcblxyXG4gICAgICAgIGlmICgkY2FsbGJhY2tTdWNjZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAkY2FsbGJhY2tTdWNjZXMuZmFkZU91dCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XHJcbiAgICAgIH0sIDE1MDApO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgc2VuZFxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvbW9kdWxlcy9hamF4Rm9ybS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7Ozs7QUNyQkE7QUFDQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUVBOzs7QUFDQTs7O0FBQUE7QUFBQTs7O0FBQUE7O0FBQUE7Ozs7Ozs7Ozs7QUFEQTtBQXdCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7Ozs7OztBQ2hEQTtBQUNBOzs7OztBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2RBO0FBQ0E7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==