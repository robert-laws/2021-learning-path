function min(first, second) {
  if (first < second) {
    return first;
  } else {
    return second;
  }
}

// console.log(min(34, 64));

function isEven(n) {
  let num = Math.abs(n);
  if (num == 0) {
    result = true;
  } else if (num == 1) {
    result = false;
  } else {
    let number = num - 2;
    isEven(number);
  }
  return result;
}

// console.log(isEven(13));

function countChar(word, letter) {
  let total = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] == letter) {
      total += 1;
    }
  }

  return total;
}

// console.log(countChar('Buumble', 'u'));

console.log(sayHello('lou'));
// console.log(typeof info);

let greeting = function () {
  return 'greetings...';
};

function sayHello(name = 'unknown') {
  return `hello, ${name}`;
}

// var info = 'info';
// console.log(typeof info);
let multiply = function (firstNumber) {
  function by(secondNumber) {
    return firstNumber * secondNumber;
  }

  return by;
};

let math = multiply(5);
console.log(math);

console.log(math(9));
