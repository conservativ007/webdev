import { movieSlide } from "./slider.js";

document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);
document.addEventListener("touchend", handleTouchEnd, false);

let x1 = null;
let y1 = null;
let target = null;
let xDiff = null;

function handleTouchStart(e) {
  let firstTouch = e.touches[0];

  x1 = firstTouch.clientX;
  y1 = firstTouch.clientY;
  target = firstTouch.target;
}

function handleTouchMove(e) {
  if (!x1 || !y1) return;
  if (target.className !== "images") return;

  let x2 = e.touches[0].clientX;

  xDiff = x2 - x1;
}

function handleTouchEnd() {
  if (target.className !== "images") return;
  if (xDiff < 0 && movieSlide.moveRight === true) movieSlide.nextSlide(true);
  if (xDiff > 0 && movieSlide.moveLeft === true) movieSlide.nextSlide(false);
}