'use strict';

import buyInOneClick from './modules/buyInOneClick';
import product from './modules/product';


$(document).ready(function() {
  if ($('.product-layout').length) {
    buyInOneClick.render();
    product.init();
  }

  $('.toclick, .callback-link').magnificPopup({
    mainClass: 'mfp-zoom-in',
    removeDelay: 500,
  });
});