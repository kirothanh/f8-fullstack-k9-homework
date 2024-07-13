var errors = {
  name: {
    required: "Vui lòng nhập họ tên",
    min: "Họ tên phải từ 5 ký tự"
  },
  email: {
    email: "Định dạng email không hợp lệ",
    unique: "Email đã có người sử dụng",
    required: "Vui lòng nhập địa chỉ email"
  },
  password: {
    required: "Vui lòng nhập mật khẩu",
    same: "Mật khẩu phải khớp với mật khẩu nhập lại"
  }
}

function getError(field) {
  var parts = field.split('.');
  var group = parts[0];
  var type = parts[1];

  if(type && errors[group] && errors[group][type]) {
    return errors[group][type];
  }

  if(errors[group] && errors[group].required) {
    return errors[group].required;
  }

  return null;
}

console.log(getError('name')); 
console.log(getError('name.min')); 
console.log(getError('email')); 
console.log(getError('email.unique')); 
 


