// variables
let myName = 'bob';
const PLATFORM = 'desktop';

// template literals/string
let response = `hello, ${myName}, very nice to meet you.`;

// string searching
let endsWithResult = response.endsWith('.'); // true
let beginsWithResult = response.startsWith('howdy'); // false
let includesResult = response.includes('nice'); // true
let searchResult = response.search('hello'); // 0

// symbols - a unique identifier for an object
const id = Symbol();
const course = {
  id: 'js-course',
  title: 'JavaScript',
  topics: ['ES6', 'ES7', 'ES8'],
};
course[id] = 32456; // unique id even if the object has an 'id' property

// maps - holds key-value pairs
let courseList = new Map();
courseList.set('react', { description: 'programming' });
courseList.set('jest', { description: 'testing' });
console.log(courseList.get('react').description); // programming

let courseDetails = new Map([
  [new Date(), 'today'],
  [2, { javascript: ['js', 'node', 'react'] }],
  ['items', [2, 4, 6, 8]],
]);
courseDetails.size; // 3

// sets - holds unique values
let uniqueValues = new Set();
uniqueValues.add(1);
uniqueValues.add(2);
uniqueValues.add(2);
uniqueValues.add(3);
uniqueValues.add(5);
uniqueValues.size; // 4
uniqueValues.has(4); // false
uniqueValues.delete(1);
uniqueValues.size; // 3
for (item of uniqueValues) {
  console.log(item);
}
