# Functional Programming

Code written in a non-functional style is hard to read and maintain. Functional programming aims to contain complex logic in a more readable, easier-to-understand form by placing code within functions.

The ideas behind functional programming is similar to object-oriented programming, but instead of classes, functions are used. Using functions with the aim of creating a workflow with input, processing, and output, functional programming aims to make the code more precise and easier to read.

## Declarative vs. imperative

Functional programming is declarative. This means that the focus on what a function does instead of how it does it.

```javascript
// imperative
let numbers = [2, 5, 10, 15, 20];
let x = 0;
for (let i = 0; i < numbers.length; i++) {
  x += numbers[i];
}
let average = x / numbers.length;

// declarative
// average is the sum of all numbers in the array divided by the length of the array
let average = numbers.reduce((a, b) => a + b) / numbers.length;
```

## Core concepts of functional programming

### Immutability

Programmers are accustomed to the idea of declaring a variable and being able to change it later. In functional programming, we declare a variable and assign a value to it. The value cannot be changed. Variable are not assigned they are bound to a value.

### Separating functions and data

Data is information that the program may include, but only represented by arrays and hashes, not as part of classes. Functions are separated from the data they operate on. Data is passed as objects to functions.

### First-class functions

Functions are a first-class object in functional programming. This means that functions can be passed as arguments to other functions, and can be assigned to variables.
