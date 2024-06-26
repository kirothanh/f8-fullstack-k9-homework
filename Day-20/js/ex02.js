function reverseNumber(n) {
  var result = 0;
  while (n > 0) {
    result = result * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return result;
}
console.log(reverseNumber(12345));