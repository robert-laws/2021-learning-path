// const greeting = (myName, callback) => {
//   setTimeout(() => {
//     let myMessage = `hello, ${myName}!`;
//     callback(myMessage);
//   }, 2000);
// };

// const sendMessage = (message) => {
//   console.log(`message is: ${message}.`);
// };

// greeting('hal', (message) => {
//   sendMessage(message);
// });

// Procedural
const basicAdd = (n1, n2) => {
  setTimeout(() => {
    return n1 + n2;
  }, 1000);
};

const basicSquare = (n) => {
  let square = n * n;
  console.log(square);
};

// let val = basicAdd(2, 4);
// let val2 = basicAdd(val, 4);
// let val3 = basicAdd(val2, 5);
// basicSquare(val3);

// Callback
const addNumbers = (num1, num2, callback) => {
  setTimeout(() => {
    let result = num1 + num2;
    callback(result);
  }, 1000);
};

const square = (number) => {
  let square = number * number;
  console.log(square);
};

// addNumbers(2, 4, (result) => {
//   addNumbers(result, 4, (result) => {
//     addNumbers(result, 5, square);
//   });
// });

// Promise
const addTwoNumbers = (n1, n2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n1 > 0 && n2 > 0) {
        let result = n1 + n2;
        resolve(result);
      } else {
        reject('Invalid numbers');
      }
    }, 1000);
  });
};

addTwoNumbers(1, 4)
  .then((result) => {
    return addTwoNumbers(result, 4);
  })
  .then((result) => {
    return addTwoNumbers(result, 5);
  })
  .then((result) => {
    square(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('end of example...');
  });
