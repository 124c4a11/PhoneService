'use strict';

import equalHeights from 'jquery.equalheights';


function init() {
  setWidth();

  $('.product-thumb h4').equalHeights();
}


function setWidth() {
  $('.product-layout > .product-thumb').each(function() {
    var
      $this = $(this);

    $this
      .parent('.product-layout')
        .attr({
          'class': 'product-layout col-xs-12 col-sm-6 col-md-4 col-lg-4'
        });
  });
}

export default {
  setWidth: setWidth,
  init: init
}