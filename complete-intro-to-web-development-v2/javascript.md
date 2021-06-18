# Javascript

**Supporting Files**

- [Javscript Example]()

**Resources**

- [JavaScript from MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)

**Contents**

- [Adding Javascript to a Webpage](#adding-javascript-to-a-webpage)

- [Numbers, Strings, and Booleans](#numbers-strings-and-booleans)

- [Control Flow](#control-flow)

- [Loops](#loops)

- [Functions](#functions)

- [Scope](#scope)

- [Built-In Javascript Program Features](#built-in-javascript-program-features)

- [Objects](#objects)

- [Arrays](#arrays)

---

# Adding Javascript to a Webpage

An external javascript file can be added using the `<script>` tag.

```html
<script src="my-code.js"></script>
```

The script tag accepts several different attributes, which are described in detail in the [Script Element section from MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script).

# Numbers, Strings, and Booleans

## Strings

Strings are one or more characters together and enclosed with quotation marks.

```javascript
const firstName = 'Bob';
const lastName = 'Cobb';
// const fullName = firstName + " " + lastName;
const fullName = `${firstName} ${lastName}`;
```

The presence of backtick characters supports the use of template strings (template literals) `${name}`.

## Booleans

Boolean values are either `true` or `false`.

## Numbers

Javascript has one data type for numeric values - including integers (whole numbers) and floats (decimals).

```javascript
let age = 25;
let price = 16.27;
```

# Control Flow

Control flow is the way the code is run and the way in which it determines how to execute commands. One way to control the flow of the program is with conditionals - `if`, `else`, and `else if`.

```javascript
const age = 25;

if (age === 25) {
  console.log('age is 25');
} else {
  console.log('age is not 25');
}
```

# Loops

Loops are ways to run code multiple times using a control flow methods.

## While Loops

```javascript
let numberOfVisitors = 0;

while (numberOfVisitors < 5) {
  numberOfVisitors++;
}
console.log(numberOfVisitors);
```

## For Loops

```javascript
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
```

# Functions

Functions a finite pieces of code that can be run on demand by calling it.

```javascript
function getName(name) {
  return `Name is ${name}.`;
}
```

# Scope

There are different types of scope including `Global Scope` and `Block Scope`. Variables declared in the global scope are available throughout the program. Variables declared within a function are only available within the function scope and will not be accessible outside of the function.

```javascript
const name = 'bob';

function sayName() {
  return `hello, ${name}!`;
}
```

The variable `name` is declared within the global scope, so it's available within the function block.

```javascript
function getName() {
  const newName = 'hal';
  return `greetings, ${newName}!`;
}
```

The variable `newName` is declared within the function block, so it's not available outside the function scope.

# Built-In Javascript Program Features

There are several built-in features that come with JavaSript, including functions to work with strings, numbers, arrays, objects, and more.

```javascript
let name = 'kal';
name.toUpperCase();
// KAL
```

# Objects

Collections of data that use key, value pairs and can be composed of other data types.

```javascript
const item = {
  name: 'Toothbrush',
  price: 4.75,
  available: false,
};

console.log(item);
console.log(item.price);
console.log(item['price']);
```

# Context

```javascript
const item = {
  name: 'Toothbrush',
  price: 4.75,
  available: false,
  giveDescription() {
    return `description is ${this.name}`;
  },
};

console.log(item.giveDescription()); // description is Toothbrush
```

Using the keyword `this` helps to describe the context in which the reference is being made. Referencing `this` outside of an object scope, the `window` object or global context is accessed.

# Arrays

An array is an ordered list of data. Array data is zero-based, which means that the first value in the array - or the first index - begins at `0`. Arrays also have many built-in properties and functions that are available.

```javascript
const items = ['Toothbrush', 'Hat', 'Pencil'];

console.log(items[0]);
console.log(items.length);
```

```javascript
let items = ['hat', 'map', ['bin', 'cat'], 'pencil'];

let newItems = items.flat();
```

## Arrays and Loops

It's possible to loop through arrays using a few types of ways.

```javascript
items = ['hat', 'cat', 'map'];

for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

items.forEach(function (item) {
  console.log(item);
});
```

# DOM Events and Listeners

Events are things that can happen on a webpage - including user interactions. Listeners are ways to wire-up elements to respond to events.

```javascript
const button = document.querySelector('.event-button');
button.addEventListener('click', function () {
  alert('hello!');
});
```

# Event Delegation

It's possible to delegate events through event bubbling. This happens when a parent container listens for events that happen on children elements. For example. if there's an element such as `<div class='buttons'></div>` that is the parent for several buttons, adding an event listener to the parent element will capture events happening from children elements that bubble up through the DOM.

A key feature of event propagation is that events will continue to bubble up along the DOM unless they are stopped by using a method such as `stopPropagation()`.

```javascript
document.querySelector('.buttons').addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    alert(`You clicked on button #${event.target.innerText}.`);
  }
  event.stopPropagation();
});
```
