// advanced functional concepts
// partial application - use a function with an expected number of parameters, but call it with fixed arguments
const add = (x, y, z) => x + y + z;
const addPartial = (x) => (y, z) => add(x, y, z);

const addFive = addPartial(5);
const sum = addFive(10, 15);
console.log(sum);

// currying - use a function with an expected number of parameters, but call it with fixed arguments one at a time
const multiply = (x, y, z) => x * y * z;
const multiplyPartial = (x) => (y) => (z) => multiply(x, y, z);
const first5 = multiplyPartial(5);
const then8 = first5(8);
const multiplyProduct = then8(2);
console.log(multiplyProduct);

const newMultiplyProduct = multiplyPartial(5)(8)(2);
console.log(newMultiplyProduct);

// recursion - a function that calls itself
const countDown = (x) => {
  if (x < 0) return;
  console.log(x);
  countDown(x - 1);
};

const countUp = (x, max) => {
  if (x > max) return;
  console.log(x);
  countUp(x + 1, max);
};

countDown(7);
countUp(3, 8);

// functions as objects
const sayHello = (myName, newName) =>
  console.log('Hello, ' + myName + ' from: ' + newName);
console.log(sayHello.name);
console.log(sayHello.length);
console.log(sayHello.toString());
console.log(sayHello.call(null, 'bob', 'melvin'));
console.log(sayHello.apply(null, ['bob', 'louie']));

const args = [1, 3, 5];
console.log(add(...args));

const newSayHello = sayHello.bind(null, 'bob');
console.log(newSayHello('kalvin'));
