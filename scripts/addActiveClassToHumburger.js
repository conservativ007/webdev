let humburger = document.querySelector(".hamburger");
let childOfHumburger = humburger.querySelector("div");

humburger.addEventListener("click", toogleClass);
childOfHumburger.addEventListener("click", toogleClass);

function toogleClass(e) {
  e.stopPropagation();
  humburger.classList.toggle("active-humburger");

  document.querySelector("html").classList.toggle("active-humburger");
}