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

// functions that return functions
const createPrinter = () => {
  return () => console.log('hello...');
};

const myPrint = createPrinter();
myPrint();

const createMultiplier = (y) => (x) => x * y;

const myDouble = createMultiplier(2);
const myTriple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(quadruple(9));

// closure - the function that is returned still has access to the outer function scope
const createMyPrinter = () => {
  const myFavoriteNumber = 42;
  return () => console.log(`my favorite number is ${myFavoriteNumber}.`);
};

const printer = createMyPrinter();
printer();

// private variable in closure
const Person = ({ name, age, job }) => {
  let _name = name;
  let _age = age;
  let _job = job;

  return {
    getName: () => _name,
    getAge: () => _age,
    getJob: () => _job,

    setAge: (newAge) => {
      _age = newAge;
    },

    setJob: (newJob) => {
      _job = newJob;
    },
  };
};

const me = Person({ name: 'Kal', age: 30, job: 'Software Engineer' });
console.log(me.getName()); // Kal;

console.log(me.getJob()); // Software Engineer
me.setJob('Manager');
console.log(me.getJob()); // Software Engineer

// higher-order functions
const divide = (x, y) => x / y;

const secondArgumentIsntZero =
  (func) =>
  (...args) => {
    if (args[1] === 0) {
      console.log('error dividing by zero');
      return null;
    }

    return func(...args);
  };

const divideSafe = secondArgumentIsntZero(divide);
console.log(divideSafe(4, 2)); // 2
console.log(divideSafe(4, 0)); // 2
