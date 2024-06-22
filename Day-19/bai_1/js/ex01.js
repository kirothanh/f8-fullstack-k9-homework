var kmMove = 125;
var totalPay = 0;

if(kmMove < 0) {
  console.log("Khong thoa man dieu kien");
} else {
  if(kmMove <= 1) {
    totalPay = 15000;
  } else if (kmMove <= 5) {
    totalPay += (kmMove - 1) * 13500 + 15000;
  } else {
    totalPay += 15000 + (4 * 13500) + (kmMove - 5) * 11000;
  } 
  if (kmMove > 120) { 
    totalPay *= 0.9
  }
}

console.log(`Số km: ${kmMove}, Tiền cước taxi: ${totalPay}`);