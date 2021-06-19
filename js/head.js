window.onscroll = function() {myFunction()};

var header = document.getElementById("headerman");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  }
}
