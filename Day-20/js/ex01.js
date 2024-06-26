function fibonacci(n, a = 0, b = 1, rs = []) {
  if(n === 0) return rs;
  rs.push(a);
  return fibonacci(n - 1, b, a + b, rs)
}

var n = 10;
var kq = fibonacci(n);
console.log(kq);