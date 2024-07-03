var mang = [5, 1, 9, 8, 10];
var element = 4;
var index = 0;

for(var i = 0; i < mang.length - 1; i++) {
  for(var j = i + 1; j < mang.length; j++) {
    if(mang[i] > mang[j]) {
      var temp = mang[i];
      mang[i] = mang[j];
      mang[j] = temp;
    }
  }
}

for(var i = 0; i < mang.length; i++) {
  if(element > mang[i]) {
    index = i + 1;
  }
}

for(var i = mang.length - 1; i >= index; i--) {
  mang[i+1] = mang[i];
}
mang[index] = element;

console.log(mang);