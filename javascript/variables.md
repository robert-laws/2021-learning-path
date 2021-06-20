# Variables

Variables can be declared using the `var`, `let`, and `const` keywords.

## var

The variable declaration `var` has been used with javascript since its inception. Declaring a variable with `var` places it within the global scope, meaning it can be accessed from any other part of the program.

```javascript
var myName = 'bob';
var myAge = 34;
var clubMember = true;
var schoolSupplies = ['pencil', 'notebook', 'pen', 'eraser'];
var schoolSchedule = {
  math: 'Advanced Algebra',
  science: 'Physics',
  literature: 'Modern Chinese Literature',
};
```

The variables above are all declared with the `var` keyword and represent different types of data. Each of the variables can be accessed elsewhere in the program - this is known as **global scope**.

```javascript
var myName = 'bob';

function studentProfile() {
  console.log(`student name: ${myName}`);
}

studentProfile(); // student name: bob - variable 'myName' is part of the global scope
```

Variables declared using `var` within functions - known as **function scope** are only accessible within the function. An exception is when a variable is assigned a value but not declared, as shown for `testResults` below. This variable can be accessed outside of the function.

```javascript
function getStudentGrade() {
  testResults = [75, 86, 93, 87];
  var testResultsAverage =
    testResults.reduce((a, b) => a + b) / testResults.length;
  return testResultsAverage;
}

console.log(testResults); // 85.25 - variable 'testResults' is part of the global scope
```

Variables declared using `var` within blocks - known as **block scope** - such as `if..else` blocks, are accessible outside of the block.

```javascript
if (true) {
  var newName = 'ned';
}

console.log(newName); // ned - variable 'newName' is part of the global scope
```

## let

The variable declaration `let` is similar to `var` in many ways, but different in some important ways. A variable declared within the global scope using `let` can be accessed anywhere in the program.

```javascript
let studentName = 'melvin';

function greetStudent() {
  console.log(`Greetings, ${studentName}!`);
}
```

This behavior is just like what happens with the `var` variable declaration.

Similarly, variables declared with `let` within a function scope are only accessible within the function scope.

```javascript
function chooseClub() {
  let clubSelection = 'chess club';
  console.log(clubSelection);
}

console.log(clubSelection); // ERROR - 'clubSelection' is only accessible within the function scope
```

There is a difference, however, when using block scopes. Unlike, variables declared with the `var` keywords, any variable declared using `let` within a block is not accessible outside of the block.

```javascript
if (10 > 5) {
  let answer = 'Ten is greater than five';
}

console.log(answer); // ERROR - 'answer' is only accessible within the block scope
```

## const

The variable declaration `const` is meant to be used for variables whose value will not change. Variables declared outside of a function or block using `const` are available within the global scope.

```javascript
const friendName = 'Kalvin';

function sayFriendName() {
  console.log(`Hi, ${friendName}!`);
}

sayFriendName(); // Hi, Kalvin! - variable 'friendName' is part of the global scope
```

Just like variables declared using `let`, a variable declared using `const` is not accessible outside of either function scope or block scope.

```javascript
function getLunch() {
  const specialMeal = 'pasta';
}

console.log(specialMeal); // ERROR - 'specialMeal' is only accessible within the function scope

if ('pizza' === 'pizza') {
  const favoriteFood = 'cheese pizza';
}

console.log(favoriteFood); // ERROR - 'favoriteFood' is only accessible within the block scope
```

An important note about using variables declared with `const`. Using `const` prevents the reassignment of values, arrays, and objects.

```javascript
// VALUE
const courseLength = '2 hours';

courseLength = 120; // ERROR - 'courseLength' cannot be reassigned

// ARRAY
const courseTitles = ['Intro to Math', 'English Literature', 'Biology'];

courseTitles = ['Physical Education', 'Chemistry', 'Spanish I']; // ERROR = 'courseTitles' cannot be reassigned

// OBJECT
const courseProfile = {
  name: 'Chemistry',
  days: ['Monday', 'Wednesday'],
  time: '9:30am',
  instructor: 'Gil',
};

courseProfile = {
  name: 'German Literature',
  days: ['Friday'],
  time: '14:00',
  instructor: 'Bob',
}; // ERROR - 'courseProfile' cannot be reassigned
```

An important thing to know about using `const` with arrays and objects is that both can be changed.

```javascript
// ARRAY
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

weekDays.push('Strangeday');

console.log(weekDays); // [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Strangeday' ]

// OBJECT
const mathAssignment = {
  partOne: 'Read the textbook',
  partTwo: 'Complete the homework questions',
};

mathAssignment.partThree = 'Take the quiz';

console.log(mathAssignment); // { partOne: 'Read the textbook', partTwo: 'Complete the homework questions', partThree: 'Take the quiz' }
```
