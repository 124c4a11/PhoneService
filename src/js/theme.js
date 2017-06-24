'use strict';

import buyInOneClick from './modules/buyInOneClick';
import product from './modules/product';
import ajaxForm from './modules/ajaxForm';


$(document).ready(function() {
  if ($('.product-layout').length) {
    buyInOneClick.render();
    product.init();
  }

  if ($('.ajax-form').length) {
    ajaxForm.send();
  }

  $('.toclick, .callback-link').magnificPopup({
    mainClass: 'mfp-zoom-in',
    removalDelay: 500
  });
});