function sum(...args) {
  var total = 0;
  args.forEach(num => {
    num = +num;
    if(typeof num === "number") {
      total += num;
    } else {
      throw "Không phải kiểu dữ liệu là số"
    }
  })
  return total;
}

var result = sum(1,1.2,3,4);
console.log(result);