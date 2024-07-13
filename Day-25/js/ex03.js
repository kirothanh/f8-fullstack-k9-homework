const data = [];

function Person(name, password, email) {
  this.name = name;
  this.password = password;
  this.email = email;
}

function handleRegister(name, password, email) {
  if(name === undefined || password === undefined || email === undefined) {
    throw "Thiếu thông tin người dùng";
  }

  var user = new Person(name, password, email);
  user.role = "user";

  data.push(user);
  return data;
}

function handleLogin(email, password) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].email === email && data[i].password === password) {
      return data[i];
    }
  }

  throw Error("Thông tin đăng nhập không hợp lệ");
}

const dataRegister = handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);
const dataRegister2 = handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);
console.log(data);

const dataLogin = handleLogin("nguyenvana@email.com", "123456");
console.log(dataLogin);
