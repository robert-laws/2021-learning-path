// const getName = (name) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (name === 'bob') {
//         resolve(myName);
//       } else {
//         reject('Invalid name');
//       }
//     }, 1000);
//   });
// };

// getName('mel')
//   .then((name) => {
//     console.log(`hello ${name}...`);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const welcomeGuest = (guestName) => {
//   return new Promise((resolve, reject) => {
//     if (guestName !== '') {
//       resolve(guestName);
//     } else {
//       reject('Invalid Name');
//     }
//   });
// };

// welcomeGuest('kalvin')
//   .then((guestName) => {
//     return `Welcome ${guestName}`;
//   })
//   .then((greeting) => {
//     console.log(`Greeting: ${greeting}`);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   })
//   .finally(() => {
//     console.log('promise finished...');
//   });

// const sayHello = (personName, callback) => {
//   callback(personName);
// };

// const greetPerson = (personName) => {
//   console.log(`hello ${personName}`);
// };

// sayHello('ned', greetPerson);
// sayHello('bob', greetPerson);
// sayHello('lou', greetPerson);

// const myNewPromise = (personName) => {
//   return new Promise((resolve, reject) => {
//     resolve('hello ' + personName);
//     reject('error...');
//   });
// };

// myNewPromise('bob')
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     resolve('some data...');
//     reject('error...');
//   });
// };

// getSomething()
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const waitForName = (personName) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (personName !== '') {
//         resolve(personName);
//       } else {
//         reject('Enter a valid name');
//       }
//     }, 4000);
//   });
// };

// waitForName('')
//   .then((myName) => {
//     return `hello, ${myName}!`;
//   })
//   .then((greeting) => {
//     if (greeting.length > 15) {
//       console.log(`long greeting: ${greeting}`);
//     } else {
//       console.log(`short greeting: ${greeting}`);
//     }
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('promise finished...');
//   });

// Callback

// let myGreeting = null;

// const getName = (name, callback) => {
//   setTimeout(() => {
//     myGreeting = `howdy, ${name}!`;
//     callback(myGreeting);
//   }, 2000);
// };

// const sendGreeting = (greeting) => {
//   console.log(greeting);
// };

// getName('bob', sendGreeting);
// sendGreeting();

// const add = (n1, n2) => {
//   setTimeout(() => {
//     return n1 + n2;
//   }, 2000);
// };

// const multiply = (n1, n2) => {
//   return n1 * n2;
// };

// const square = (n) => {
//   return n * n;
// };

// let v1 = add(5, 8);
// let v2 = multiply(v1, 6);
// let v3 = square(v2);
// console.log(v3); // 6084

const additionPromise = (number1, number2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof number1 === 'number' && typeof number2 === 'number') {
        let result = number1 + number2;
        resolve(result);
      } else {
        reject('Please use numbers');
      }
    }, 2000);
  });
};

additionPromise(5, 7)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log('promise completed');
  });

additionPromise(5, 'hello')
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log('promise completed');
  });

const myPromise = new Promise((resolve, reject) => {
  resolve('promise is resolved');
});

myPromise.then((result) => {
  console.log(result);
});

const squarePromise = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof number === 'number') {
        let result = number * number;
        resolve(result);
      } else {
        reject('Please use a valid number');
      }
    }, 2000);
  });
};

additionPromise(2, 4)
  .then((result) => {
    return squarePromise(result);
  })
  .then((result) => {
    console.log(`final result: ${result}`);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('promise operation completed');
  });
