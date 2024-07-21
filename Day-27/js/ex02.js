Array.prototype.filter2 = function(callback) {
  var newArr = [];
  if(typeof callback !== "function") {
    return;
  }

  for(var i = 0; i < this.length; i++) {
    var result = callback(this[i])
    if(result) {
      newArr.push(this[i])
    }
  }
  return newArr;
} 

var arr = [1,4,6,9,10];
var result = arr.filter2(function(item, index) {
  return item % 2 === 0;
});
console.log(result);
