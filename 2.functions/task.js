function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((num, elem) => num + elem, 0)
	let avg = Number((sum/arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }  
  return arr.reduce((acc, cV) => acc + cV, 0);
}

function differenceMaxMinWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }  
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }  
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
  if(arr.length === 0) {
    return 0;
  }  
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
  let result = [];
  for (let i = 0; i < arrOfArr.length; i++) {
    result.push(func(...arrOfArr[i]));
  } 
  let max = Number(Math.max(...result));
  return max;
}
