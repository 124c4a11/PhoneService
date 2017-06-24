'use strict';

function render() {
  $('.product-layout > .product-thumb').each(function(i) {

    i++;

    var
      $this = $(this),
      $buttonGroup = $this.find('.button-group');

    var
      imgUrl = $this.find('.img-responsive').attr('src'),
      itemName = $this.find('h4 a').text(),
      itemPrice = $this.find('.price').html(),
      adminMail = $('#callback [name="admin_email"]').val();

    $buttonGroup
      .append('<a class="button toclick" href="#pp-item_'+ i +'">Купить в один клик</a>');

    $this
      .after('<div id="pp-item_'+ i +'" class="product-popup">\
                <h2 class="pp-item__title">Купить в один клик</h2>\
                <div class="pp-item__img-wrapper">\
                  <img class="pp-item__img" src="'+ imgUrl +'" alt="'+ itemName +'">\
                </div>\
                <div class="pp-item__content">\
                  <h3 class="pp-item__product-title">'+ itemName +'</h3>\
                  <div class="pp-item__price">'+ itemPrice +'</div>\
                  <form class="ajax-form">\
                    <input type="hidden" name="project_name" value="IPhoneService">\
                    <input type="hidden" name="admin_email" value="'+ adminMail +'">\
                    <input type="hidden" name="form_subject" value="Заявка с сайта Айфонсервис">\
                    <input type="hidden" name="product" value="'+ itemName +'">\
                    <div class="callback__form-group">\
                      <input class="form-control" type="text" name="Телефон" placeholder="Введите ваш телефон..." required>\
                      <button class="callback__btn btn btn-primary">Заказать</button>\
                    </div>\
                  </form>\
                  <div class="callback__succes">\
                    <div class="callback__succes-text">Спасибо за заказ!</div>\
                  </div>\
                </div>\
              </div>')
  });
}


export default {
  render: render
}