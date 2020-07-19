$(document).ready(function(){
   menu();
   search();
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