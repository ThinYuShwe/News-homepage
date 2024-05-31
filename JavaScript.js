document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".menuMobile");
  const crossX = document.querySelector(".cross-x");
  const menuIcon = document.querySelector(".menuIcon");

  menuIcon.addEventListener("click", function () {
    if (mobileMenu.style.display === "block") {
      mobileMenu.style.display = "none";
    } else {
      mobileMenu.style.display = "block";
    }
  });

  crossX.addEventListener("click", function () {
    mobileMenu.style.display = "none";
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1200) {
      mobileMenu.style.display = "none";
    }
  });
});
