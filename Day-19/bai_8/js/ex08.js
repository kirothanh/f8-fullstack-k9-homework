function sum(n) {
  if(n == 1) {
    return 1;
  }
  return 1/n + sum(n-1);
}

var n = 3;
var result = sum(n);
console.log(`Result = ${result}`);