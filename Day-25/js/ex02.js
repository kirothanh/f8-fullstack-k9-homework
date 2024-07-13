const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

function createCustomers(customers) {
  var newArr = [];

  customers.map(customer => {
    var temp = customer['name'].split(" ");
    var shortName = '';

    for (var i = 0; i < temp.length; i++) {
      shortName += temp[0] + " " + temp[temp.length - 1];
      customer.shortName = shortName;
      break;
    }
    newArr.push(customer)
  })

  newArr.sort((a, b) => a.age - b.age);

  return newArr;
}

const result = createCustomers(customers); // Tạo hàm createCustomers này. return về mảng mới.
console.log(result);
