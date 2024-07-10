function isPrime(n) {
  if(n <= 1 || n % 1 !== 0) {
    return false;
  } else {
    for(var i = 2; i <= n - 1; i++) {
      if(n % i === 0) {
        return false;
      }
    }
    return true;
  }
}

function soDoiXung(n) {
  var soBanDau = n;
  var daoNguoc = 0;
  while(n > 0) {
    var chuSo = n % 10;
    daoNguoc = daoNguoc * 10 + chuSo;
    n = Math.floor(n / 10);
  }
  if(soBanDau === daoNguoc) {
    return true;
  }
  return false;
}


var soDau = 8;
var result = 0;
for(var i = soDau; i < 99999999999; i++) {
  if(isPrime(i) && soDoiXung(i)) { 
    result = i; 
    break 
  }
}
console.log(result);