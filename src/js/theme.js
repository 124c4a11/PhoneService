'use strict';

import buyInOneClick from './modules/buyInOneClick';
import product from './modules/product';


$(document).ready(function() {
  if ($('.product-layout').length) {
    buyInOneClick.render();
    product.setWidth();
  }
});