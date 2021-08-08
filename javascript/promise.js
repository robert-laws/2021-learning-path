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

const getSomething = () => {
  return new Promise((resolve, reject) => {
    resolve('some data...');
    reject('error...');
  });
};

getSomething()
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
