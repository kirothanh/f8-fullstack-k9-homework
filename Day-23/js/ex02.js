var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
var result = [];
var flatten = function(arr) {
  for(var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if(Array.isArray(arr[i])) {
      flatten(item)
    } else {
      result.push(item)
    }
  }
  return result;
}

console.log(flatten(arr));