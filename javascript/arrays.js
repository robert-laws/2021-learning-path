function range(start, end, step = 1) {
  let rangeArray = [];
  if (start <= end) {
    for (let i = start; i <= end; i = i + step) {
      rangeArray.push(i);
    }
  } else {
    for (let i = start; i >= end; i = i - step) {
      rangeArray.push(i);
    }
  }
  return rangeArray;
}

// const myArray = range(1, 10);

function sum(numbersArray) {
  let result = 0;
  numbersArray.forEach((number) => {
    result += number;
  });
  return result;
}

// const myTotal = sum(myArray);
// console.log(myTotal);

// const myTotal2 = sum(range(15, 2, 1));
// console.log(myTotal2);

function reverseArray(originalArray) {
  let newArray = [];
  let len = originalArray.length;
  for (let i = len; i > 0; i--) {
    let val = originalArray[i - 1];
    newArray.push(val);
  }

  return newArray;
}

// let itemsArray = ['thing', 4, true, 8, false];
// console.log(reverseArray(itemsArray));

let numbers = [2, 4, 10];

function arrayToList(myArray, list = {}) {
  if (myArray.length > 0) {
    let value = myArray.shift();
    list = {
      value,
      rest: myArray,
    };
    arrayToList(myArray, list);
  }
  return list;
}

let finalList = arrayToList(numbers);
console.log(finalList);
