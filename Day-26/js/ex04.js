Array.prototype.reduce2 = function(callback, initialValue) {
  if(typeof callback !== "function") {
    return;
  }

  var arr = this;
  var prevValue = initialValue;
  var startIndex = 0;

  if(prevValue === undefined) {
    if(arr.length === 0) {
      return;
    }
    prevValue = arr[0];
    startIndex = 1;
  }

  for(var i = startIndex; i < arr.length; i++) {
    prevValue = callback(prevValue, arr[i], i, arr)
  }

  return prevValue;
}


var arr = [1,2,3,4,5];
var rs = arr.reduce2(function(prev, current) {
  console.log(prev, current);
  return prev + current;
}, 0)
console.log(rs);