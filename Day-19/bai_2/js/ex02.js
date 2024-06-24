var electricUseNum = 50;
var totalPay = 0;

if(electricUseNum < 0) {
  console.log("Khong thoa man dieu kien");
} else {
  if (electricUseNum <= 50) {
    totalPay += 1678 * electricUseNum
  }
  else if (electricUseNum <= 100) {
    totalPay += 1678 * 50 + (electricUseNum - 50) * 1734 
  } 
  else if (electricUseNum <= 200) {
    totalPay += 1678 * 50 + 50 * 1734 + (electricUseNum - 100) * 2014
  } 
  else if (electricUseNum <= 300) {
    totalPay += 1678 * 50 + 50 * 1734 + 100 * 2014 + (electricUseNum - 200) * 2536
  }
  else if (electricUseNum <= 400) {
    totalPay += 1678 * 50 + 50 * 1734 + 100 * 2014 + 100 * 2536 + (electricUseNum - 300) * 2834
  } else {
    totalPay += 1678 * 50 + 50 * 1734 + 100 * 2014 + 100 * 2536 + 100 * 2834 + (electricUseNum - 400) * 2927
  }
}

console.log(`Số tiền phải trả = ${totalPay}`);