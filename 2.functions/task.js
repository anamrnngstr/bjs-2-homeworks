function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((num, elem) => num + elem, 0)
	let avg = Number((sum/arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = arr.reduce((acc, cV) => acc + cV, 0)
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return Number(max - min);
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] % 2) === 0) {
     sumEvenElement += arr[i];
    } else {
     sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] % 2) === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  } 
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let result = [];
  for (let i = 0; i < arrOfArr.length; i++) {
    result.push(func(...arrOfArr[i]));
  } 
  let max = Number(Math.max(...result));
   if (max > maxWorkerResult) {
    maxWorkerResult = max;
  } 
  return maxWorkerResult;
}
