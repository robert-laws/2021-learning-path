// string.repeat function
let yell = 'woo!';
let shout = yell.repeat(3);
console.log(shout);

let dog = {
  bark(times) {
    console.log('bark'.repeat(times));
  },
};
dog.bark(5);

// default parameters
function add(x = 5, y = 6) {
  console.log(x + y);
}

add(10, 20);

let haveFun = (activityName = 'hiking', time = 3) => {
  console.log(`${activityName} for ${time} minutes.`);
};
haveFun('swimming', 10);
haveFun('dancing');

// arrow functions
let studentList = (students) => {
  console.log(students);
};
studentList(['John', 'Mary', 'Jill']);

let list = [1, 2, 3, 4, 5];
list.map((item) => console.log(item));

// this in arrow functions
let person = {
  firstName: 'bob',
  lastName: 'cobb',
  hobbies: ['reading', 'sleeping'],
  printHobbies: function () {
    this.hobbies.forEach((hobby) => {
      let string = `${this.firstName} ${this.lastName} likes to ${hobby}.`;
      console.log(string);
    });
  },
};
person.printHobbies();

// working with generators - pause functions in the middle of execution
function* director() {
  yield 'Three';
  yield 'Two';
  yield 'One';
  yield 'Action!';
}
let countdown = director();
console.log(countdown.next().value);
console.log(countdown.next().value);
console.log(countdown.next().value);
console.log(countdown.next().value);
console.log(countdown.next().value);
