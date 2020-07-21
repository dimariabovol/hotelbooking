$(document).ready(function(){
   menu();
   search();
   sliderModel();
   tab();
});

function menu() {
   $(".nav__mob").on('click', function () {
      if ($(".nav").hasClass('mob-menu')) {
         $(".nav").removeClass('mob-menu');
      } 
      else {
         $(".nav").addClass('mob-menu');
      }
   });

   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".nav").length) {
         if ($(".nav").hasClass("mob-menu")) {
            $(".nav").removeClass("mob-menu");
         }
      }
   });
}

function search() {
   $(".search__mob").on('click', function () {
         if ($(".header").hasClass('mob-search')) {
            $(".header").removeClass('mob-search');
         } 
         else {
            $(".header").addClass('mob-search');
         }
   });

   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".search").length) {
         if ($(".header").hasClass("mob-search")) {
            $(".header").removeClass("mob-search");
         }
      }
   });
}

function sliderModel() {
   $('.model__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      prevArrow: '<div class="prev"></div>',
      nextArrow: '<div class="next"></div>'
    });
}

function tab() {
   $(".tab__info").not(":first").hide();
   $(".tab .tab__item").click(function() {
      $(".tab .tab__item").removeClass("tab__item_active").eq($(this).index()).addClass("tab__item_active");
      $(".tab__info").hide().eq($(this).index()).fadeIn();
   });
}