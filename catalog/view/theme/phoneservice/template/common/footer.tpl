<footer class="main-footer">
  <div class="main-footer__navbar">
    <div class="container">
      <div class="row">

        <div class="col-sm-6 col-md-3">
          <div class="logo">
            <?php if ($logo) { ?>
              <a href="<?php echo $home; ?>">
                <img class="img-responsive" src="<?php echo $logo; ?>" alt="<?php echo $name; ?>">
              </a>
            <?php } ?>
          </div>
        </div>

        <div class="hidden-xs hidden-sm col-md-7">
          <nav class="main-footer__menu">
            <?php if ($informations) { ?>
                <ul class="nav navbar-nav">
                  <?php foreach ($informations as $information) { ?>
                  <li><a href="<?php echo $information['href']; ?>"><?php echo $information['title']; ?></a></li>
                  <?php } ?>
                  <li><a href="/skidki">Скидки</a></li>
                  <li><a href="<?php echo $contact; ?>">Контакты</a></li>
                </ul>
              <?php } ?>
          </nav>
        </div>

        <div class="col-sm-6 col-md-2">
          <ul class="socials socials_right">
            <li class="socials__item">
              <a href="http://vk.com" class="socials__link" rel="nofollow" target="_blank">
                <i class="socials__icon fa fa-vk"></i>
              </a>
            </li>
            <li class="socials__item">
              <a href="http://facebook.com" class="socials__link" rel="nofollow" target="_blank">
                <i class="socials__icon fa fa-facebook"></i>
              </a>
            </li>
            <li class="socials__item">
              <a href="http://instagram.com" class="socials__link" rel="nofollow" target="_blank">
                <i class="socials__icon fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>

  <div class="main-footer__phones">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">

          <div class="main-footer__phone"><?php echo $telephone; ?></div>
          <a class="main-footer__callback-link callback-link" href="#callback">Заказать звонок</a>

        </div>
      </div>
    </div>
  </div>

</footer>


<div id="callback" class="callback product-popup">
  <h2 class="callback__title">Заказать звонок</h2>
  <div class="callback__description">
    <p>Введите номер телефона и наш менеджер перезвонит Вам в течение <strong>15 минут</strong>.</p>
  </div>

  <form class="callback__form ajax-form">
    <!-- Hidden Required Fields -->
    <input type="hidden" name="project_name" value="IPhoneService">
    <input type="hidden" name="admin_email" value="<?php echo $email; ?>">
    <input type="hidden" name="form_subject" value="Заявка с сайта Айфонсервис">
    <!-- END Hidden Required Fields -->

    <div class="callback__form-group">
      <input class="form-control" type="text" name="Телефон" placeholder="Введите ваш телефон..." required>
      <button class="callback__btn btn btn-primary">Заказать</button>
    </div>
  </form>

  <div class="callback__succes">
    <div class="callback__succes-text">Спасибо за заявку!</div>
  </div>
</div>


</body></html>