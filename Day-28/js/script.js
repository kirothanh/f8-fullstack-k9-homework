var btnOpenModal = document.querySelector(".loginForm");
var modalBox = document.querySelector(".modal-box");
var overlay = modalBox.querySelector(".overlay");
var btnClose = document.querySelector(".btn-close");
var signIn = modalBox.querySelector(".modal-header .signIn");
var signUp = modalBox.querySelector(".modal-header .signUp");
var formLogin = modalBox.querySelector(".modal .form-login");
var formSignUp = modalBox.querySelector(".modal .form-signUp");

var emailInput = document.querySelector(".email-input");
var checkEmail = false;
var passwordInput = document.querySelector(".password-input");
var eye = document.querySelector(".eye");
var eyeSlash = document.querySelector(".eye-slash");

var fullnameInputSU = document.querySelector(".form-signUp .fullname-input");
var emailInputSU = document.querySelector(".form-signUp .email-input");
var checkEmailSU = false;
var passwordInputSU = document.querySelector(".form-signUp .password-input");
var eyeSU = document.querySelector(" .form-signUp .eye");
var eyeSlashSU = document.querySelector(".form-signUp .eye-slash");
var btnSignUp = document.querySelector(".form-signUp .btn");
var btnSignIn = document.querySelector(".form-login .btn");
var accountExist = document.querySelector(".account-exist");

btnOpenModal.addEventListener("click", function () {
  modalBox.style.display = "block";
})

overlay.addEventListener("click", function () {
  modalBox.style.display = "none";
})

btnClose.addEventListener("click", function () {
  modalBox.style.display = "none";
})

signIn.addEventListener("click", function () {
  formSignUp.style.display = "none";
  formLogin.style.display = "block";

  signIn.style.background = "#1a7900";
  signIn.style.color = "white";
  signUp.style.background = "#ccc";
  signUp.style.color = "black";

  fullnameInputSU.value = "";
  fullnameInputSU.style.border = "1px solid black";
  document.querySelector(".form-signUp .fullname .text-Noti").style.display = "none";
  emailInputSU.value = "";
  emailInputSU.style.border = "1px solid black";
  document.querySelector(".form-signUp .email .text-Noti").style.display = "none";
  passwordInputSU.value = "";
  passwordInputSU.style.border = "1px solid black";
  document.querySelector(".form-signUp .password .text-Noti").style.display = "none";

})

signUp.addEventListener("click", function () {
  accountExist.style.display = "none"
  formLogin.style.display = "none";
  formSignUp.style.display = "block";

  signUp.style.background = "#1a7900";
  signUp.style.color = "white";
  signIn.style.color = "black";
  signIn.style.background = "#ccc";

  emailInput.value = "";
  emailInput.style.border = "1px solid black";
  document.querySelector(".email .text-Noti").style.display = "none";
  passwordInput.value = "";
  passwordInput.style.border = "1px solid black";
  document.querySelector(".password .text-Noti").style.display = "none";
})

// Login
emailInput.addEventListener("blur", function () {
  var emailValue = emailInput.value;
  var textNoti = document.querySelector(".email .text-Noti")

  if (emailValue === "") {
    emailInput.style.border = "1px solid red";
    textNoti.style.display = "block";
  } else {
    emailInput.style.border = "1px solid black";
    textNoti.style.display = "none";
  }
});
emailInput.addEventListener("input", function () {
  var emailValue = emailInput.value;
  var textNoti = document.querySelector(".email .text-Noti")
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === "") {
    emailInput.style.border = "1px solid red";
    textNoti.style.display = "block";
  } else {
    if (emailPattern.test(emailValue)) {
      checkEmail = true;
    }
    emailInput.style.border = "1px solid black";
    textNoti.style.display = "none";
  }
});

passwordInput.addEventListener("blur", function () {
  var passwordValue = passwordInput.value;
  var textNoti = document.querySelector(".password .text-Noti")

  if (passwordValue === "") {
    passwordInput.style.border = "1px solid red";
    textNoti.style.display = "block";
  } else {
    passwordInput.style.border = "1px solid black";
    textNoti.style.display = "none";
  }
});
passwordInput.addEventListener("input", function () {
  var passwordValue = passwordInput.value;
  var textNoti = document.querySelector(".password .text-Noti")

  if (passwordValue === "") {
    passwordInput.style.border = "1px solid red";
    textNoti.style.display = "block";
  } else {
    passwordInput.style.border = "1px solid black";
    textNoti.style.display = "none";
  }
});

eye.addEventListener("click", function () {
  eyeSlash.style.display = "block";
  eye.style.display = "none";
  passwordInput.type = "text";
})
eyeSlash.addEventListener("click", function () {
  eye.style.display = "block";
  eyeSlash.style.display = "none";
  passwordInput.type = "password";
})

formLogin.addEventListener("submit", function (e) {
  var passwordValue = passwordInput.value;
  e.preventDefault();
  if (checkEmail === true && !(passwordValue === "")) {
    accountExist.style.display = "block"
  }
})

// Sign Up
fullnameInputSU.addEventListener("blur", function () {
  var emailValue = fullnameInputSU.value;
  var textNoti = document.querySelector(".form-signUp .fullname .text-Noti")

  if (emailValue === "") {
    fullnameInputSU.style.border = "1px solid red";
    textNoti.style.display = "block";
  } else {
    fullnameInputSU.style.border = "1px solid black";
    textNoti.style.display = "none";
  }
});
fullnameInputSU.addEventListener("input", function () {
  var passwordValue = fullnameInputSU.value;
  var textNoti = document.querySelector(".form-signUp .fullname .text-Noti")

  if (passwordValue === "") {
    fullnameInputSU.style.border = "1px solid red";
    textNoti.style.display = "block";
  } else {
    fullnameInputSU.style.border = "1px solid black";
    textNoti.style.display = "none";
  }
});
emailInputSU.addEventListener("blur", function () {
  var emailValue = emailInputSU.value;
  var textNoti = document.querySelector(".form-signUp .email .text-Noti")

  if (emailValue === "") {
    emailInputSU.style.border = "1px solid red";
    textNoti.style.display = "block";
  } else {
    emailInputSU.style.border = "1px solid black";
    textNoti.style.display = "none";
  }
});
emailInputSU.addEventListener("input", function () {
  var emailValue = emailInputSU.value;
  var textNoti = document.querySelector(".form-signUp .email .text-Noti")
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === "") {
    emailInputSU.style.border = "1px solid red";
    textNoti.style.display = "block";
  } else {
    if (emailPattern.test(emailValue)) {
      checkEmail = true;
    }
    emailInputSU.style.border = "1px solid black";
    textNoti.style.display = "none";
  }
});

passwordInputSU.addEventListener("blur", function () {
  var passwordValue = passwordInputSU.value;
  var textNoti = document.querySelector(".form-signUp .password .text-Noti")

  if (passwordValue === "") {
    passwordInputSU.style.border = "1px solid red";
    textNoti.style.display = "block";
  } else {
    passwordInputSU.style.border = "1px solid black";
    textNoti.style.display = "none";
  }
});
passwordInputSU.addEventListener("input", function () {
  var passwordValue = passwordInputSU.value;
  var textNoti = document.querySelector(".form-signUp .password .text-Noti")

  if (passwordValue === "") {
    passwordInputSU.style.border = "1px solid red";
    textNoti.style.display = "block";
  } else {
    passwordInputSU.style.border = "1px solid black";
    textNoti.style.display = "none";
  }
});

eyeSU.addEventListener("click", function () {
  eyeSlashSU.style.display = "block";
  eyeSU.style.display = "none";
  passwordInputSU.type = "text";
})
eyeSlashSU.addEventListener("click", function () {
  eyeSU.style.display = "block";
  eyeSlashSU.style.display = "none";
  passwordInputSU.type = "password";
})

formSignUp.addEventListener("submit", function (e) {
  var passwordValue = passwordInputSU.value;
  e.preventDefault();
  if (checkEmail === true && !(passwordValue === "")) {
    document.querySelector(".account-exist").style.display = "block"
  }
})

btnSignUp.addEventListener("click", function () {
  if (fullnameInputSU.value === "" && emailInputSU.value === "" && passwordInputSU.value === "") {
    var textNotiName = document.querySelector(".form-signUp .fullname .text-Noti");
    var textNotiEmail = document.querySelector(".form-signUp .email .text-Noti");
    var textNotiPass = document.querySelector(".form-signUp .password .text-Noti");
    fullnameInputSU.style.border = "1px solid red";
    textNotiName.style.display = "block";
    emailInputSU.style.border = "1px solid red";
    textNotiEmail.style.display = "block";
    passwordInputSU.style.border = "1px solid red";
    textNotiPass.style.display = "block";
  }
})

btnSignIn.addEventListener("click", function () {
  var textNotiEmail = document.querySelector(".form-login .email .text-Noti");
  var textNotiPass = document.querySelector(".form-login .password .text-Noti");
  if (emailInput.value === "" && passwordInput.value === "") {
    emailInput.style.border = "1px solid red";
    textNotiEmail.style.display = "block";
    passwordInput.style.border = "1px solid red";
    textNotiPass.style.display = "block";
  }
  if (emailInput.value === "") {
    emailInput.style.border = "1px solid red";
    textNotiEmail.style.display = "block";
    accountExist.style.display = "none";
  }
  if (passwordInput.value === "") {
    passwordInput.style.border = "1px solid red";
    textNotiPass.style.display = "block";
    accountExist.style.display = "none";
  }
})