var paintChess = `<table>`;
var row = 8;
var column = 8;

for (var i = 1; i <= row; i++) {
  paintChess += `<tr>`;

  for (var j = 1; j <= column; j++) {
    var isWhite = (i + j) % 2 === 0;
    var cell = isWhite ? 'bg-white' : 'bg-black';
    paintChess += `<td class="${cell}"></td>`;
  } 

  paintChess += `</tr>`;
}

paintChess += `</table>`;

document.body.innerHTML = paintChess;