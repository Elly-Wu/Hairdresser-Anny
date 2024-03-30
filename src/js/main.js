// 漢堡按鈕-Jquery
$(document).ready(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('is-active');
    $('.menu').toggleClass('show');
  });
});

// G.sap Rollover Multiple找髮型
const catalogItems = document.querySelectorAll(".catalog-item")
gsap.defaults({duration:0.3});
catalogItems.forEach(function(item, index){
    const tl = gsap
    .timeline({paused:true})
    .to(item.querySelector(".text"), {x:10, scale:1.3, transformOrigin:"left center"})
    .to(item.querySelector(".dot"), {scale:1.5}, 0);
item.addEventListener("mouseenter", () => tl.play());
item.addEventListener("mouseleave", () => tl.reverse());
})

// menu__list下拉選單＿右
function dropdownCon() {
  let conDiv = document.querySelector(".contact");
  conDiv.style.display ="block";
}
function backCon() {
  let conDiv = document.querySelector(".contact");
  conDiv.style.display ="none";
}

// Swiper
const headerSwiper = new Swiper('.l-header__swiper', {
  effect: 'fade',
  // 施放距離
  longSwipesRatio: 0.1,
  loop: true,
  speed: 1200,
  autoplay: {
    delay: 3000,
    // 手動換頁之後停止自動輪播
    // false 手動之後還是會自動輪播
    disableOnInteraction: false
  }
});

// go top btn 髮型分頁scrollBehavior: "auto"移除bootstrap設定
$('#l-gotop').click(function(){
  $("html").css({
    scrollBehavior: "auto"
  })
  $("html,body").animate({scrollTop:0},500, function() {
    $("html").css({
      scrollBehavior: ""
    })
  });
});
// go top btn淡入淡出
$(window).scroll(function(){
  if($(this).scrollTop()>200){
    $('#l-gotop').stop().fadeTo('fast',1);
  }else{
    $('#l-gotop').stop().fadeOut();
  }
});

// feedback gsap
/* gsap.set(".post", {scale:0.7});
gsap.timeline()
    .from(".post .f-box", {y:160, stagger:0.5, duration:1, ease:"back"}, "+=1") */