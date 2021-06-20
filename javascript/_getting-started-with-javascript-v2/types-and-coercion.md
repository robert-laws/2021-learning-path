# Types and Coercion

## Primitive Types

- string
- number
- boolean
- object
- undefined
- symbol
- null (somewhat strange behavior)

Javascript is dynamically typed, meaning that variables can change types. The values of the variables have a type.

## NaN

Performing an operation on a variable that doesn't make sense is called `NaN` - indicates an invalid numeric value;

```javascript
let name = 'bob';
name / 2; // NaN
```

## new

Declaring an object wrapper can be used to construct a fundamental object

```javascript
let yesterday = new Date('March 2, 2021');
yesterday.toUTCString();

let grade = String(course.grade);
```

## Coercion

The way to convert from one type to another = coercion

```javascript
let beginMessage = 'Hello...';
let numberPeople = 24;
let endMessage = ' people.';

console.log(`There are ${numberPeople + ''} people`);
```

string concatenation will perform an implicit conversion from a number to a string when a number and a string are concatenated.

### Boolean

Truthy and Falsy when a value is converted into a boolean

#### Falsy

- ""
- 0 or -0
- null
- NaN
- false
- undefined

#### Truthy

- 'foo'
- 23
- { a: 1 }
- [1, 4]
- true
- function(){}

In situations where booleans are expected - ex. if statements - javascript will perform an implicit conversion if the value isn't already a boolean.

**Best Practices**:

Good practice to make it clear what the types are being used in a program. If coercion is helpful in an equality comparison or not. `==` is okay if the types are clear and known.

## Equality

checking equality `==` vs `===`

== allows coercion - javascript will perform coercion during the equality check

==== disallows coercion

```javascript
let name1 = 'bob';
let name2 = `${name1}`;

name1 == name2; // true
name1 === name2; // true
```
