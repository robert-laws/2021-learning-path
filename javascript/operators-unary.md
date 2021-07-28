## Operators

Types and values are important, but by themselves aren't particularly dynamic. Being able to perform arithmetic, combine, compare, perform logical checks, and other operations on values transform them into dynamic values. Different types have available different operations. And some operations behave differently depending on the types involved. Operators can be broken down into a few groups.

## Unary Operators

A unary operation is an operation that involves only one operand.

#### delete

The [Delete](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) operator will remove a property from an object. This includes arrays. However, using `delete` with an array will delete teh value, but won't change the length of the array.

Deleting properties from a object.

```javascript
let myObj = {
  name: 'bob',
  age: 32,
  member: true,
};

delete myObj.age;

myObj; // { name: 'bob', member: true }

delete myObj['member'];

myObj; // { name: 'bob' }
```

Deleting item values from an array.

```javascript
let items = ['hat', 'cat', 'map'];

delete items[0];

items; // [<1 empty item>, 'cat', 'map']

items[0]; // undefined
```

#### void

The void operator will evaluate a given expression and then returns a value of `undefined`.

```javascript
function sayHello() {
  return 'hello';
}

sayHello(); // 'hello'
void sayHello(); // undefined
```

#### typeof

The typeof operator will evaluate and return a string of the type of the operand value

```javascript
let name = 'hal';
let age = 43;
let isMember = true;

typeof name; // 'string'
typeof age; // 'number'
typeof isMember; // 'boolean'
```

#### unary plus (+)

The [unary plus (+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus) will attempt to convert the value next to it into a number. This works with numbers, numbers that are in the form of strings (ex. `'246'`), and boolean values, converting true into `1` and false into `0`.

```javascript
let myValue = '326';
+myValue; // 326

let isMember = true;
+isMember; // 1

let name = 'bob';
+name; // NaN
```

#### unary negation (-)

The [unary negation (-)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation) does the same as the unary plus - converting the value into a number - and then negates it.

```javascript
let balance = '23.73';
-balance; // -23.73;
```

#### bitwise not (~)

The [bitwise not (~)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT) will invert the bits of its operand and return an integer of the result.

#### logical not (!)

The [logical not (!)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT) operator will evaluate a value as truthy or falsy and return the negated value as a boolean. When applied to a non-empty strings, non-zero numbers, or object the logical not operator will return false since each of those data types is considered to be true.

```javascript
let name = 'melvin';
!name; // false

let number = 232;
!number; // false

let person = { name: 'bob' };
!person; // false
```

When the logical not is applied to a boolean value, it will return the negation of the boolean value.

```javascript
let isMember = true;
!isMember; // false

!false; // true
```

There are other values that are considered 'falsy' and will return true when the logical not operator is applied to an operand.

```javascript
!null; // true
!undefined; // true
!NaN; // true
!''; // true
!0; // true
```

**Double negation** is possible by using two `!!` logical not operators in a row. When applied to an operand, it will evaluate and convert it to a boolean value and then negate that boolean to return the boolean value corresponding to the operands original 'truthy' or 'falsy' value. This is a useful technique when a boolean value is needed in evaluations for things like logical operations.

```javascript
let name = 'bob';
!!name; // true

!!null; // false
```
