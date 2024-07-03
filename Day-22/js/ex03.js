var mang = [1,3,2,1,4,2,2,4,3,9,5,5,6,2,7,8,4];
var mangMoi = [];

// Sắp xếp mảng
for (var i = 0; i < mang.length - 1; i++) {
  for (var j = i + 1; j < mang.length; j++) {
    if (mang[i] > mang[j]) {
      var test = mang[i];
      mang[i] = mang[j];
      mang[j] = test;
    }
  }
}

// Lọc các số xuất hiện đúng một lần
for (var i = 0; i < mang.length; i++) {
  var isDuplicate = false;

  for (var j = 0; j < mangMoi.length; j++) {
    if (mang[i] === mangMoi[j]) {
      isDuplicate = true;
      break;
    }
  }

  if (!isDuplicate) {
    mangMoi[mangMoi.length] = mang[i];
  }
}

console.log("Các số xuất hiện đúng một lần: ", mangMoi);
