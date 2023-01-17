const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 100,
  navigation: {
    nextEl: ".swiper-button-next", // 다음 버튼 클래스명
    prevEl: ".swiper-button-prev", // 이번 버튼 클래스명
  },
});

//   console.log(swiper);

window.addEventListener("load", function () {
  /********** Elements Clone For Mobile  **********/
  const mobileMenus = document.querySelector(".mobile-menus");
  /********** Mobile Menu Toggle  **********/
  const mobileBtn = document.querySelector(".mobile-btn");
  const mobileNav = document.querySelector(".mobile-nav-wrap");
  const overlay = document.querySelector(".overlay");
  toggleMobileBtn = (e) => {
    const target = e.currentTarget;
    target.classList.toggle("active");

    if (target.classList.contains("active")) {
      mobileNav.classList.add("active");
      overlay.classList.add("show");
    } else {
      mobileNav.classList.remove("active");
      overlay.classList.remove("show");
    }
  };
  mobileBtn.addEventListener("click", toggleMobileBtn);

  overlay.addEventListener("click", function () {
    this.classList.remove("show");
    mobileNav.classList.remove("active");
  });
});
