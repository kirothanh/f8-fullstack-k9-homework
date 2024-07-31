var carouselInner = document.querySelector(".carousel .carousel-inner");
var nextBtn = document.querySelector(".carousel .carousel-nav .next")
var prevBtn = document.querySelector(".carousel .carousel-nav .prev");
var carouselDots = document.querySelector(".carousel-dots");
var carouselItems = carouselInner.querySelectorAll(".item");

var carouselWidth = carouselInner.clientWidth;
var totalWidth = carouselWidth * carouselInner.children.length;
var position = 0;
var currentIndex = 0;

var dotsHtml = "";
carouselItems.forEach(function (item, index) {
  item.style.width = `${carouselWidth}px`;
  dotsHtml += `<span class="${index === 0 ? "active" : ""}" data-index="${index}"></span>`
})
carouselDots.innerHTML = dotsHtml;
carouselInner.style.width = `${totalWidth}px`;

var updateItem = function (index) {
  position = 0 - carouselWidth * (currentIndex = index);
  carouselInner.style.translate = `${position}px`;
  updateDots(currentIndex);
}
var updateDots = function (index) {
  Array.from(carouselDots.children).forEach(function (dot, dotIndex) {
    if (dot.classList.contains("active")) {
      dot.classList.remove("active");
    }
    if (index === dotIndex) {
      dot.classList.add("active");
    }

    dot.addEventListener("click", function () {
      updateItem(dotIndex);
    })
  })
}
updateDots(0)

nextBtn.addEventListener("click", function () {
  if (Math.abs(position) + carouselWidth >= totalWidth) {
    return;
  }
  position -= carouselWidth;
  carouselInner.style.translate = `${position}px`;
  updateDots(++currentIndex)
})

prevBtn.addEventListener("click", function () {
  if (Math.abs(position) === 0) {
    return;
  }
  position += carouselWidth;
  carouselInner.style.translate = `${position}px`;
  updateDots(--currentIndex)
})

var initial_offsetX = 0;
var dragPercentHold = (10 * carouselWidth) / 100;
var isDragging = false;
var hasMoved = false;

carouselInner.addEventListener("mousedown", function (e) {
  e.preventDefault();
  if (e.which === 1) {
    initial_offsetX = e.offsetX;
    isDragging = true
  }
})

carouselInner.addEventListener("mouseup", function (e) {
  e.preventDefault();
  isDragging = false;
  carouselInner.style.translate = `${position}px`;
  carouselInner.style.transition = null;
  updateDots(currentIndex);
  hasMoved = false;
})

carouselInner.addEventListener("mousemove", function (e) {
  if (isDragging) {
    carouselInner.style.cursor = "move";
    var moveDistance = e.clientX - initial_offsetX;
    if (moveDistance < 0) {
      if (Math.abs(moveDistance) < dragPercentHold) {
        carouselInner.style.translate = `${position + moveDistance}px`;
        carouselInner.style.transition = "none";
      } else if (!hasMoved && Math.abs(position) < totalWidth - carouselWidth) {
        position = 0 - ++currentIndex * carouselWidth;
        hasMoved = true;
        carouselInner.style.translate = `${position}px`;
        carouselInner.style.transition = null;
        updateDots(currentIndex);
      }
    }
    else {
      if (Math.abs(moveDistance) < dragPercentHold) {
        carouselInner.style.translate = `${position + moveDistance}px`;
        carouselInner.style.transition = "none";
      } else if (!hasMoved && position < 0) {
        position = 0 - --currentIndex * carouselWidth;
        hasMoved = true;
        carouselInner.style.translate = `${position}px`;
        carouselInner.style.transition = null;
        updateDots(currentIndex);
      }
    }

  } else {
    carouselInner.style.cursor = "default";
  }
})