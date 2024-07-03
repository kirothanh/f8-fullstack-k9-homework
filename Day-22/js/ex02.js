function isPrime(n) {
  if (n <= 1 || n % 1 !== 0) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

var mang = [5,3,2,8,7];
var mangTest = [];
var bandau = 0;
var tong = 0;

for (var i in mang) {
  if(isPrime(mang[i])) {
    mangTest[mangTest.length] = mang[i]
    tong += mang[i];
  }
  else {
    bandau += 1;
  }
}

if(bandau === mang.length) {
  console.log("Khong co so nguyen to");
}

console.log("Trung bình các số nguyên tố = ", tong / mangTest.length);

