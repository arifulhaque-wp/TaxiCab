(function ($) {
  "Use Strict";

  $('.main-menu li a').click(function(e) {
    e.preventDefault();
    $('a').removeClass('active');
    $(this).addClass('active');
  });

}) (jQuery);


const menu = document.querySelector(".main-menu ul");
const menuBars = document.querySelector(".bars");
const menuClose = document.querySelector(".close-btn");

menuBars.onclick = ()=> {
  menu.classList.add("active");
  menuBars.classList.add("hide");
}
menuClose.onclick = ()=> {
  menu.classList.remove("active");
  menuBars.classList.remove("hide");
}