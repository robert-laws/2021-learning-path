# Programming Primer

## Values

There are different types of values including:

- numbers (integers and decimals)
- strings
- booleans
- null (empty value)
- undefined (empty value)
- object (array and objects)
- symbol

## Operations

The types can have operations performed on them. The type of operation depends on the type(s) involved.

Binary operator (involves two values with an operator) and unary operator (only involves single value)

For numbers, the `+` operation will add together the number values
For strings, the `+` operation will concatenate the two strings
For booleans, the `!` operation will return the opposite boolean value

### Comparison Operators

There are several operators to perform comparisons, including:

- < (less than)
- = (assignment operator)
- == (equality of value)
- === (equality of value and type)
- || (or operator)
- && (and operator)
- ++ (increment by one)
- += (add and assign into variable)

## Types

Kind of values are known as types. To test for type, the operator `typeof` can be used:

- typeof 42 // "number"
- typeof "Item" // "string"
- typeof true // "boolean"
- typeof undefined // "undefined"
- typeof [1, 2, 4] // "object"

## Variable

Is a place in memory in a computer that can be referenced with a symbolic pointer to retrieve the value.

```javascript
let name = 'hal';
let age = 23;
let place;
let items = ['hat', 'cap', 'pencil'];
```

## Expressions vs Statements

Expression is finite piece of code. A statement is a complete code that has a beginning and end, which includes expressions.

ex. `(age * 2)` has several expressions
ex. `age = (age * 2);` is a statement

## If & Else

Decisions are ways of determining how a program should proceed through expressions and statements.

```javascript
var age = 34;

if (age >= 10) {
  getFood();
} else {
  buyFood();
}
```

In the code above, the code makes a decision at the `>=` comparison operator because of the if statement. If the result of the condition is false, the `else` statement will execute.

## Loops

Are ways to repeat an operation on a collection of values.

```javascript
let items = ['cap', 'hat', 'pencil'];

while (items.length > 0) {
  let item = items.pop();
  buyItem(item);
}

for (let i = 0; i < items.length; i++) {
  buyItem(items[i]);
}

for (let item of items) {
  buyItem(item);
}

items.forEach((item) => {
  buyItem(item);
});
```

## Functions

Functions can be created to reuse expressions and statements multiple times. Functions are first declared and then called.

```javascript
function getName(name) {
  console.log(`Hello, ${name}!`);
}

let myName = 'melvin';
getName(myName); // "Hello, melvin!"

function isEligible(age) {
  if (age > 15) {
    return true;
  } else {
    return false;
  }
}

let age = 25;
isEligible(age); // true
```
