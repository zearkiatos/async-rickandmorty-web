function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

function date(callback) {
  const date = new Date();
  console.log(date);
  setTimeout(function () {
    let date = new Date();
    callback(date);
  }, 3000);
  return date;
}

function printDate(dateNow) {
  return dateNow;
}

export { calc, sum, printDate, date };
