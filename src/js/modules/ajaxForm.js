'use strict';

function send() {

  //E-mail Ajax Send
  $(".ajax-form").submit(function() {
    var $this = $(this);
    $.ajax({
      type: "POST",
      url: "/catalog/view/theme/phoneservice/mail.php",
      data: $this.serialize()
    }).done(function() {
      var $callbackSucces = $this.closest('.product-popup').find('.callback__succes');

      if ($callbackSucces.length) {
        $callbackSucces.fadeIn();
      }

      setTimeout(function() {
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


export default {
  send
};