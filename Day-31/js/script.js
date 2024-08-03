var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");
var progressBarWidth = progressBar.clientWidth;

var timer = progressBar.querySelector(".timer");

let isPlaying = false;
let isDragging = false;
var clientXSpan = 0;
var offsetLeft = 0;
var rate = 0;
var currentTime = 0;

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    isDragging = true;
    var offsetX = e.offsetX;
    rate = (offsetX / progressBarWidth) * 100;
    progress.style.width = `${rate}%`;
    clientXSpan = e.clientX;
    offsetLeft = offsetX;
    document.addEventListener("mousemove", handleDrag);

    currentTime = (audio.duration * rate) / 100;
    audio.currentTime = currentTime;
    currentTimeEl.innerText = getTimeFormat(currentTime);
  }
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  if (e.which === 1) {
    isDragging = true;
    document.addEventListener("mousemove", handleDrag);
    clientXSpan = e.clientX;
    offsetLeft = e.target.offsetLeft;
  }
});

function handleDrag(e) {
  var spaceMove = e.clientX - clientXSpan + offsetLeft;
  rate = (spaceMove / progressBarWidth) * 100;
  if (rate < 0) {
    rate = 0;
  }
  if (rate > 100) {
    rate = 100;
  }
  progress.style.width = `${rate}%`;

  currentTime = (audio.duration * rate) / 100;
  currentTimeEl.innerText = getTimeFormat(currentTime);
}

document.addEventListener("mouseup", function () {
  if (isDragging) {
    document.removeEventListener("mousemove", handleDrag);

    currentTime = (audio.duration * rate) / 100;
    audio.currentTime = currentTime;
    currentTimeEl.innerText = getTimeFormat(currentTime);

    isDragging = false;
  }
});

// Xây dựng player
var audio = document.querySelector("audio");
var playAction = document.querySelector(".player .play-action i");
var currentTimeEl = progressBar.previousElementSibling;
var durationEl = progressBar.nextElementSibling;

var getTimeFormat = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${seconds < 10 ? "0" + seconds : seconds}`
}

audio.addEventListener("canplay", function () {
  durationEl.innerText = getTimeFormat(audio.duration)
})

playAction.addEventListener("click", function () {
  if (audio.paused) {
    audio.play()
    isPlaying = true;
  } else {
    audio.pause()
    isPlaying = false;
  }
})

audio.addEventListener("play", function () {
  playAction.classList.replace('fa-play', 'fa-pause')
  isPlaying = true;
})

audio.addEventListener("pause", function () {
  playAction.classList.replace('fa-pause', 'fa-play')
  isPlaying = false;
})

audio.addEventListener("timeupdate", function () {
  if (!isDragging) {
    currentTimeEl.innerText = getTimeFormat(audio.currentTime);
    rate = audio.currentTime / audio.duration * 100;
    progress.style.width = `${rate}%`
  }
})

audio.addEventListener("ended", function () {
  rate = 0;
  progress.style.width = `${rate}%`;
  audio.currentTime = 0;
  playAction.classList.replace('fa-pause', 'fa-play')
})

progressSpan.addEventListener("mousemove", function (e) {
  e.stopPropagation();
})

progressBar.addEventListener("mousemove", function (e) {
  timer.style.display = "block";
  timer.style.left = `${e.offsetX}px`;

  rate = (e.offsetX * 100) / progressBarWidth;
  currentTime = (audio.duration * rate) / 100;

  timer.innerText = getTimeFormat(currentTime);
})

progressBar.addEventListener("mouseout", function () {
  timer.style.display = "none";
})
