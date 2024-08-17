$('.carousel').slick({
  autoplay: true,
  dots: true,
  infinite: true,
  autoplaySpeed: 4000,
  fade: true,
  cssEase: 'linear'
});

//半透明アニメーション
$('a,.item img').on('mouseover', function () {
  $(this).animate({
    opacity: 0.5,
  }, 100);
});

//半透明を戻す
$('a,.item img').on('mouseout', function () {
  $(this).animate({
    opacity: 1.0,
  }, 100);
});

//TOPのボタンを出す

$(function() {
  var btn = $('.top');

$(window).on('load scroll', function(){
  if($(this).scrollTop() > 100) {
    btn.addClass('active');
  }else{
    btn.removeClass('active');
  }
});

btn.on('click',function () {
  $('body,html').animate({
    scrollTop: 0
  });
});
});

//スクロールをなめらかにする
$(function(){
  $('a[href^="#"]').click(function(){
    var adjust = 0;
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

//セクションのフェードイン
 $(window).scroll(function () {
  const scrollAmount = $(window).scrollTop();
  const windowHeight = $(window).height();
  $('section').each(function () {
    const position = $(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('fade-in');
    }
  });
});

// モーダル
$(document).ready(function () {
  $(".works img").click(function (event) {
      event.preventDefault();
      const imgSrc = $(this).attr("src");
      $(".modall-img").attr("src", imgSrc);
      $(".modall").fadeIn();
  });

  // 閉じる
  $(".close-btn, .modall").click(function (event) {
      event.preventDefault();
      $(".modall").fadeOut();
  });

  $(".modall").click(function (event) {
      if (!$(event.target).is(".modall-img, .close-btn")) {
          $(".modall").fadeOut();
      }
  });
});