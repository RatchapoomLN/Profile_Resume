var target = document.querySelector("footer");
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;


  function callback(entries, observer) {
    scrollToTopBtn.classList.add("showBtn");
  }
  function scrollToTop() {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  scrollToTopBtn.addEventListener("click", scrollToTop);
  let observer = new IntersectionObserver(callback);
  observer.observe(target);