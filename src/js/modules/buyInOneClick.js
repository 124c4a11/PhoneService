'use strict';

function render() {
  $('.product-layout > .product-thumb').each(function(i) {
    i++;

    var
      $this = $(this),
      $buttonGroup = $this.find('.button-group');

    $buttonGroup
      .append('<a class="button toclick" href="#pp-item-'+ i +'">Купить в один клик</a>');
  });
}


export default {
  render: render
}