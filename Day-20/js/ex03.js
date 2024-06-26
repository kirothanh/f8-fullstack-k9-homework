// Ví dụ: Số 4298 sẽ chuyển thành: Bốn ngàn hai trăm chín tám

function digitToWord(digit) {
  if (digit === 0) return "không";
  if (digit === 1) return "một";
  if (digit === 2) return "hai";
  if (digit === 3) return "ba";
  if (digit === 4) return "bốn";
  if (digit === 5) return "năm";
  if (digit === 6) return "sáu";
  if (digit === 7) return "bảy";
  if (digit === 8) return "tám";
  if (digit === 9) return "chín";
}

function tensToWord(tensDigit, onesDigit) {
  if (tensDigit === 1) {
    if (onesDigit === 0) return "mười";
    if (onesDigit === 1) return "mười một";
    return "mười " + digitToWord(onesDigit);
  }
  return (
    digitToWord(tensDigit) +
    " mươi" +
    (onesDigit > 0 ? " " + digitToWord(onesDigit) : "")
  );
}

function numberToWords(num) {
  if (num === 0) return digitToWord(0);

  var result = "";

  var thousands = Math.floor(num / 1000);
  var hundreds = Math.floor((num % 1000) / 100);
  var tensDigit = Math.floor((num % 100) / 10);
  var ones = num % 10;

  if (thousands > 0) {
    result += digitToWord(thousands) + " ngàn ";
  }

  if (hundreds > 0) {
    result += digitToWord(hundreds) + " trăm ";
  } else if (thousands > 0 && (tensDigit > 0 || ones > 0)) {
    result += "không trăm ";
  }

  if (tensDigit > 0) {
    result += tensToWord(tensDigit, ones) + " ";
  } else if (hundreds > 0 && ones > 0) {
    result += "lẻ " + digitToWord(ones);
  } else if (ones > 0) {
    result += digitToWord(ones);
  }

  return result;
}

// Ví dụ:
console.log(numberToWords(4298)); 
