"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d < 0) {
    return arr
  } else if (d == 0) {
    arr.push(-b / (2 * a))
  } else if (d > 0) {
    arr.push(((-b + Math.sqrt(d) )/(2*a)), ((-b - Math.sqrt(d) )/(2*a)));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
   
  let P = (percent / 100) / 12;
  let n = countMonths;
  let S = amount - contribution;
  let paymentPerMonth = S * (P + (P / (((1 + P)**n) - 1)));
  let totalAmount = (paymentPerMonth * n).toFixed(2);
  return totalAmount;
}
// не понимаю как применить isNaN или Number.isNaN
//пробовала сделать цикл if (isNaN(percent)) {return NaN} else {return percent}; но это почему то не работает