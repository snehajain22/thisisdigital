document.querySelector(".box").addEventListener("mouseover",function(){
    document.querySelector(".opening").style.width = "100%";
})
document.querySelector(".box").addEventListener("mouseleave",function(){
    document.querySelector(".opening").style.width = "0%";
})




var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });