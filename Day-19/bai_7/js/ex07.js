var drawMultiplicationTable = `<div class="wrap">` 
var n = 10;

for (var i = 1; i <= n; i++) {
  drawMultiplicationTable += `<div class="border-box">`
  for(var j = 1; j <= n; j++) {
    drawMultiplicationTable += `<div>${i} x ${j} = ${i * j}</div>`;
  }
  drawMultiplicationTable += `</div>`
}

drawMultiplicationTable += `</div>`

document.body.innerHTML = drawMultiplicationTable