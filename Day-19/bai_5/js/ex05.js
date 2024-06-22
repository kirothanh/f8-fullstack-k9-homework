var n = 5;

var temp = 1;
for(var i = 1; i <= n; i++) {
  let row = '';
  for(var j = 1; j <= i; j++) {
    row += temp + ' ';
    temp++;
  }
  console.log(row);
}

