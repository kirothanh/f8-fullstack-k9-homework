var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
var mangChua = []

var mangChua = arrA.filter(function(element) {
  return arrB.includes(element);
});

console.log(mangChua);