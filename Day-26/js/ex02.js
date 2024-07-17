Number.prototype.getCurrency = function(currency) {
  if(typeof +this !== "number" || isNaN(+this)) {
    return "Giá trị không hợp lệ!";
  }

  return this.toLocaleString('vi-VN').replaceAll(".", ",") + ' ' + currency;
}

String.prototype.getCurrency = function(currency) {
  if(typeof +this !== "number" || isNaN(+this)) {
    return "Giá trị không hợp lệ!";
  }

  var number = +this;
  return number.toLocaleString("vi-VN").replaceAll(".", ",") + ' ' + currency;
}

//Case 1
var price = 12000;
console.log(price.getCurrency('đ')) //Hiển thị: 12,000 đ

//Case 2
var price2 = "12000000";
console.log(price2.getCurrency('đ')) //Hiển thị: 12,000,000 đ