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
