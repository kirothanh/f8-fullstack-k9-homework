function isPrime(n) {
  if(n <= 1 || n % 1 !== 0) {
    return false;
  } else {
    for(var i = 2; i <= n - 1; i++) {
      if(n % i === 0) {
        return false;
      }
    }
    return true;
  }
}

var bien = 47;
if(isPrime(bien) === true) {
  console.log(`${bien} la mot snt`);
} else {
  console.log(`${bien} ko la mot snt`);
}