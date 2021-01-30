function add(num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  return num1 / num2
}

function calc(num1, num2, callback) {
  return callback(num1, num2)
}

console.log(calc(6, 2, add))
console.log(calc(6, 2, subtract))
console.log(calc(6, 2, multiply))
console.log(calc(6, 2, divide))

/////////////////////

function date(callback) {
  console.log(new Date())
  setTimeout(() => {
    let date = new Date()
    callback(date)
  }, 3000)
}

function printDate(dateNow) {
  console.log(dateNow)
}

date(printDate)
