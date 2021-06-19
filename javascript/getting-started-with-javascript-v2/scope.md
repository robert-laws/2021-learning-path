# Scope

Scope is where javascript looks for things. When a variable is referenced, it matters where the variable was declared so that the program can access it properly.

```javascript
let name = 'bob';

const myCourse = () => {
  name = 'hal'; // name defined earlier in the code is overwritten
  topic = 'math'; // by declaring it this way, it is in global scope
  console.log('Hello');
};

myCourse(); // Hello
name; // hal
topic; // math
```

## Undefined vs. Undeclared

Undefined - variable that has been declared, but without a value
Undeclared - variable that has not been declared and is not available

## Function Expressions

A declared functions can be passed as a variable

```javascript
const getName = () => {
  console.log('bob');
};
```

## IIFE (Immediate Invoked Function Expression)

Function expressions can protect outer scope from it's variables with the use of `var`.

```javascript
var name = 'bob';

(anotherName = () => {
  var name = 'mel';
  console.log(name);
})();

console.log(name);
```

## Block Scoping

Better way to protect variables within a function block

```javascript
let name = 'bob';

const getName = () => {
  let name = 'kal';
  console.log(name); // name = 'kal' is only available within function scope
};
```

## Closure

Closure is when a function remembers the variables outside of it, even if you pass that function elsewhere. Makes sense as a closure if the function is passed as a value.

```javascript
const ask = (question) => {
  setTimeout(
    (waitASec = () => {
      console.log(question);
    }),
    100
  );
};

ask('what is closure?');
```

```javascript
const ask = (question) => {
  return (holdYouQuestion = () => {
    console.log(`Question: ${question}`);
  });
};

let myQuestion = ask('what is closure?');

myQuestion();
```
