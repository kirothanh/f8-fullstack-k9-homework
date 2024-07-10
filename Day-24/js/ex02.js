var nums1 = [1, 3];
var nums2 = [2];

var newArr = nums1.concat(nums2);
newArr = newArr.sort(function(a, b) {
  return a - b;
})

var result = 0;
var index = 0; 

if(newArr.length % 2 === 0) {
  index = newArr.length / 2;
  result = (newArr[index] + newArr[index - 1]) / 2;
} else {
  index = Math.floor(newArr.length / 2);
  result = newArr[index];
}

console.log(result);