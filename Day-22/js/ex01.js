var mang = [5,3,2,8,19,11,22,12];
var camCo = -999999;
var maxIndex = 0

for (var i in mang) {
  if(mang[i] > camCo) {
    camCo = mang[i]
    maxIndex = i
  }
}

console.log("So lon nhat = ", camCo);
console.log("Vi tri = ", maxIndex);