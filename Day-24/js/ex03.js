function timSoNguyenDuongDau(nums) {
  var n = nums.length;

  for(var i = 0; i < n; i++) {
    while(nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      var temp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
    }
  }

  for(var i = 0; i < n; i++) {
    if(nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return n+1;
}

console.log(timSoNguyenDuongDau([1, 2, 0])); 
console.log(timSoNguyenDuongDau([3, 4, -1, 1])); 
console.log(timSoNguyenDuongDau([7, 8, 9, 11, 12])); 