// get images
(function () {
  [...Array(5)].forEach((_, index) => {
    let image = document.createElement("img");
    image.src = `../images/forest/forest${index + 1}.jpg`;
    image.alt = "forest";
    document.querySelector(".clider-items__images").append(image)
  });

})();


// set position slider
(function () {

  function getDevice() {
    let device = window.getComputedStyle(document.body, ":after")
      .getPropertyValue("content");

    let resultValue = device.slice(1, device.length - 1);
    return resultValue;
  }

  let section = document.querySelector(".slider-items");

  const containerImagesSettings = {
    "phone": 35,
    "laptop": 95,
    "laptop-portrait": 140,
    "desktop": 250,
    "big-desktop": 400,
  }

  setInterval(() => {
    section.style.left = containerImagesSettings[getDevice()] + "px";
  }, 100);
}());

// movie slide
document.addEventListener("click", e => {
  if (e.target.className.includes("arrow-right")) movieSlide.nextSlide(true);
  if (e.target.className.includes("arrow-left")) movieSlide.nextSlide(false);
});


const movieSlide = {
  counter: 0,

  nextSlide(bool) {
    let imageWidth = document.querySelector(".slider-items").querySelector("img").offsetWidth;

    bool === true ? this.counter += 1 : this.counter -= 1;
    let movieLeft = this.counter * (imageWidth + 5);
    document.querySelector(".clider-items__images").style.left = -movieLeft + "px";

    document.querySelector(".nums").innerHTML = `${this.counter + 1} / 5`;

    this.showAndHideArrows();
  },

  showAndHideArrows() {
    let counter = document.querySelector(".nums").innerHTML.slice(0, 1);

    let arrowLeft = document.querySelector(".arrow-left");
    let arrowRight = document.querySelector(".arrow-right");


    if (Number(counter) <= 1 || Number(counter) === 0) {
      arrowLeft.style.zIndex = -1;
    } else {
      arrowLeft.style.zIndex = 1;
    }

    if (Number(counter) >= 5) {
      arrowRight.style.zIndex = -1;
    } else {
      arrowRight.style.zIndex = 1;
    }
  }
}

movieSlide.showAndHideArrows();


