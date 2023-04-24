window.addEventListener("scroll", function () {
  var nav = document.getElementById("main-nav");
  if (window.pageYOffset > 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
