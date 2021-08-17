// JavaScript: The Functional Parts

// spread operator to combine two arrays or objects
const person = {
  name: 'John',
  age: 30,
  hairColor: 'brown',
  eyeColor: 'blue',
};

const careerData = {
  title: 'Software Engineer',
  company: 'Google',
};

const nameWithCareer = { name: person.name, ...careerData };
const personWithCareer = { ...person, ...careerData };

const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6, 7, 8, 9];

// map
const evenNumbers = [2, 4, 6, 8, 10];
const double = (x) => x * 2;

const doubledNumbers = evenNumbers.map(double);
console.log(doubledNumbers);

// filter
const randomNumbers = [1, 3, 4, 5, 7, 8, 9, 50, 63, 77, 80, 99];
const isEven = (x) => x % 2 === 0;

const onlyEvenNumbers = randomNumbers.filter(isEven);
console.log(onlyEvenNumbers);

const words = ['pencil', 'pen', 'paper', 'alphabet', 'apple', 'computer'];
const createLengthTest = (minLength) => (word) => word.length > minLength;
const longWords = words.filter(createLengthTest(5));
console.log(longWords);

// every / some
const employees = [
  { name: 'John', age: 30, salary: 13556262 },
  { name: 'Jane', age: 25, salary: 56262 },
  { name: 'Bob', age: 40, salary: 136262 },
];

const makesMoreThanMillion = (employee) => employee.salary > 1000000;
const result = employees.some(makesMoreThanMillion);
console.log(result);

const formValues = ['Bob', 'Cobb', 'Florida', 'Manager'];
const isNotEmpty = (string) => !!string;
const allFieldsFilled = formValues.every(isNotEmpty);
console.log(allFieldsFilled);

// slice - used to create a copy of an array and then apply mutating functions
const myNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myNumbers.slice().reverse());
console.log(myNumbers);

// sort
const people = ['jim', 'bob', 'jane', 'melvin', 'will', 'carla', 'mary', 'sam'];
const ascending = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

const descending = (a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
};
const sortedPeople = people.slice().sort(ascending);
const sortedPeople2 = people.slice().sort(descending);
console.log(sortedPeople);
console.log(sortedPeople2);

// reduce
const listOfNumbers = [4, 8, 15, 16, 23, 42];
const totalForNumbers = listOfNumbers.reduce((accumulator, currentValue) => {
  let acc = accumulator;
  let curr = currentValue;
  return accumulator + currentValue;
}, 0);
console.log(totalForNumbers);

// combining array functions
const newEmployees = [
  { name: 'John', age: 30, jobTitle: 'engineer', salary: 13556262 },
  { name: 'Jane', age: 25, jobTitle: 'developer', salary: 56262 },
  { name: 'Bob', age: 40, jobTitle: 'engineer', salary: 136262 },
  { name: 'Melvin', age: 20, jobTitle: 'manager', salary: 1356262 },
  { name: 'Will', age: 30, jobTitle: 'secretary', salary: 466262 },
  { name: 'Carla', age: 25, jobTitle: 'engineer', salary: 2616262 },
  { name: 'Mary', age: 40, jobTitle: 'manager', salary: 427262 },
  { name: 'Sam', age: 30, jobTitle: 'engineer', salary: 956262 },
  { name: 'Sally', age: 25, jobTitle: 'developer', salary: 6262 },
  { name: 'Mark', age: 40, jobTitle: 'developer', salary: 756263 },
];

const finalResult = newEmployees.filter(
  (employee) => employee.jobTitle === 'developer'
);

const resultSalary = finalResult.map((developer) => developer.salary);
const totalDeveloperSalary = resultSalary.reduce(
  (accumulator, currentValue) => {
    return accumulator + currentValue;
  },
  0
);
const averageSalary = totalDeveloperSalary / resultSalary.length;

console.log(averageSalary);

// recreate map function
const newMap = (array, func) => {
  let finalArray = [];
  for (let i = 0; i < array.length; i++) {
    finalArray[i] = func(array[i]);
  }
  return finalArray;
};

console.log(newMap([1, 2, 3], (x) => x * 2));
console.log(newMap([5, 6, 7, 8, 9, 10], (x) => -x));
console.log(newMap(['a', 'b', 'c', 'd'], (x) => x.toUpperCase()));

const newArrayWithReduce = (array, func) => {
  return array.reduce((acc, currentValue) => {
    let newArray = acc;
    let curr = func(currentValue);
    return newArray.concat(curr);
  }, []);
};

console.log(newArrayWithReduce([1, 2, 3], (x) => x * 2));
console.log(newArrayWithReduce([5, 6, 7, 8, 9, 10], (x) => -x));
console.log(newArrayWithReduce(['a', 'b', 'c', 'd'], (x) => x.toUpperCase()));
