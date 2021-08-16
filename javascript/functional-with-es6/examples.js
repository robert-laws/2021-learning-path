const myFunction = (a, b) => a + b;
myFunction(2, 6); // 8

const makeDouble = (x) => x * 2;
makeDouble(7); // 14

const getPersonData = () => ({
  name: 'John',
  age: 30,
  job: 'Software Engineer',
});

// functions as data
const sayHello = (myName) => console.log(`hello ${myName}!`);
const greeting = sayHello;
greeting('bob'); // hello bob!

const myNewFunction = true
  ? () => console.log('hello')
  : () => console.log('goodbye');

const DEVELOPMENT = true;

const fetchDataReal = () => {
  // time consuming operations
};

const fetchDataFake = () => ({
  name: 'Bob Cobb',
  age: 53,
});

const fetchData = DEVELOPMENT ? fetchDataFake : fetchDataReal;

// array of functions
const double = (x) => x * 2;
const subtractOne = (x) => x - 1;
const triple = (x) => x * 3;
const addFive = (x) => x + 5;

const functionsArray = [double, subtractOne, triple, addFive, Math.sqrt];

let number = 42;
functionsArray.forEach((func) => (number = func(number)));
console.log(number);

// passing functions as arguments
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

add(14, 7); // 21
subtract(14, 7); // 7

const combineTwoAndThree = (func) => {
  return func(2, 3);
};

console.log(combineTwoAndThree(add)); // 5;
console.log(combineTwoAndThree((x, y) => x + y)); // 5

console.log(combineTwoAndThree(subtract)); // -1

console.log(combineTwoAndThree(Math.max)); // 3
