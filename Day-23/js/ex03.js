var arr = [["a", 1, true], ["b", 2, false]];
var result = [];
var stringMang = [];
var numberMang = [];
var boolMang = [];
var mangCuoi = [];

var flatten = function(arr) {
  for(var i = 0; i < arr.length; i++) {
    let item = arr[i];
    if(Array.isArray(item)) {
      flatten(item);
    } else {
      result.push(item)
    }
  }
  return result;
}

var newArr = flatten(arr);

for (var item in newArr) {
  if(typeof(newArr[item]) === "string") {
    stringMang.push(newArr[item]);
  } else if(typeof(newArr[item]) === "number") {
    numberMang.push(newArr[item]);
  } else if(typeof(newArr[item]) === "boolean") {
    boolMang.push(newArr[item]);
  }
}

mangCuoi.push(stringMang);
mangCuoi.push(numberMang);
mangCuoi.push(boolMang);
console.log(mangCuoi);


