Array.prototype.push2 = function(...items) {
  var newArr = [...this];

  items.forEach(item => {
    newArr[newArr.length] = item
  })

  return newArr;
} 

var arr = [1,4,6,9,10];
var result = arr.push2(12,14,5, "as");
console.log(arr);
console.log(result);