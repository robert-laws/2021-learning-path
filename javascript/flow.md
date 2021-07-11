## Program Flow

JavaScript offers several ways to control the flow of a program. Normally, a JavaScript program will begin to execute a program starting from the first line and continuing with each line to the end of the program. There are several different ways to control the flow of the program, including conditional statements, loops, and exception handling statements. Each offer the ability for the programmer to evaluate different aspects of the program before continuing down a particular path or repeating a piece of code a specified number of times.

#### Conditional Statements

Conditional statements give the programmer the power to specify what code should be executed based on different conditions. For example, a program may display different information for a user depending on information like their age, sex, and location. A program could use this information to conditionally set information.

There are two main ways to handle conditional logic in JavaScript, either with `if...else` or `switch` statements. The main different is that `switch` statements are typically used to match against a set of fixed values whereas `if...else` statements can match against one or more boolean values or within ranges of values.

#### if...else

```javascript
let age = 34;

if (age <= 18) {
  console.log('child options');
} else if (age > 18 && age < 50) {
  console.log('adult options');
} else {
  console.log('elderly options');
}
```

#### switch

The switch statement accepts a parameter, against which it will attempt to match as a case. If no match if found, a default option is available to provide some kind of processing in such situations.

```javascript
let customer = 'vip';

switch (customerType) {
  case 'new customer':
    console.log('new customer menu');
    return;
  case 'returning customer':
    console.log('returning customer menu');
    return;
  case 'vip':
    console.log('vip menu');
    return;
  default:
    console.log('new customer menu');
    return;
}
```

#### Loops

#### Exception Handling Statements
