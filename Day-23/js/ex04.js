var arr = [
  [
    "Tiêu đề bài viết 1",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi earum saepe distinctio enim! Fugit quos incidunt blanditiis doloremque voluptatibus quam!",
    "./img/image.jpg",
  ],

  [
    "Tiêu đề bài viết 2",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi earum saepe distinctio enim! Fugit quos incidunt blanditiis doloremque voluptatibus quam!",
    "./img/image.jpg",
  ],

  [
    "Tiêu đề bài viết 3",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi earum saepe distinctio enim! Fugit quos incidunt blanditiis doloremque voluptatibus quam!",
    "./img/image.jpg",
  ],
];

for (var item = 0; item < arr.length; item++) {
  var contentHTML = "";
  if (item % 2 === 0) {
    contentHTML =
      `<div class="box-wrap">` +
      `<img src="${arr[item][2]}" >` +
      `<div>` +
      `<h2>${arr[item][0]}</h2>` +
      `<p>${arr[item][1]}</p>` +
      `</div>` +
      `</div>`;
  } else {
    contentHTML =
      `<div class="box-wrap">` +
      `<div>` +
      `<h2>${arr[item][0]}</h2>` +
      `<p>${arr[item][1]}</p>` +
      `</div>` +
      `<img src="${arr[item][2]}" >` +
      `</div>`;
  }
  document.body.innerHTML += contentHTML;
}
