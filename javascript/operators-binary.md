## Binary Operators

In contrast to unary operators, which require just one operand to perform its operation, binary operators require two operands - as the name applies.

## Arithmetic operator

[addition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition) **+**

The addition operator will add together two numbers. When the two operands are either not number or only one is a number, the operation performed will be different. If the two operands are strings, the result will be string concatenation. If one or more of the operands is a boolean, the value of the boolean will be converted to a number and the operation will be performed. Note also that a number added to a number that is in the form of a string will concatenate the two numbers together as a string, ex. `'23' + 5; // '235'`.

```javascript
5 + 2; // 7

2 + '4'; // 24

8 + true; // 9

[5, 7, 2] + 4; // [5, 7, 24]

'hello' + ' there'; // 'hello there'
```

[subtraction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction) **-**

The subtraction operator will subtract one number from another. However, when a number and a string that is a number are subtracted, JavaScript will attempt to convert the string into a number to perform the arithmetic. Two strings subtracted will result in a `NaN` result. A boolean value will be converted to a number, just as with addition operators.

```javascript
5 - 2; // 3

2 - '4'; // -2

8 - true;

[5, 7, 2] - 4; // NaN

'hello' - ' there'; // NaN
```

[multiplication](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication) **\***

The multiplication operator will multiply two numbers together. Performed on numbers that are string values, JavaScript will attempt to convert the string into a number and perform the multiplication. Similarly, with boolean values will be converted to numbers before the operation. Strings multiplied together will produce a `NaN` result.

```javascript
5 * 2; // 10

2 * '4'; // 8

8 * true; // 8

[5, 7, 2] * 4; // NaN

'hello' * ' there'; // NaN
```

[division](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division) **/**

Division is similar to multiplication and produces similar results for numbers. A number in the form of a string will be converted to a number before the operation is performed. A boolean is also converted to a number before the operation is performed. For two strings or at least one arrays, a `NaN` result is produced.

```javascript
5 / 2; // 2.5

2 / '4'; // 0.5

8 / true; // 8

[5, 7, 2] / 4; // NaN

'hello' / ' there'; // NaN
```

[modulus](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder) (remainder) **%**

The modulus operator will return a number representing the remainder from a division operation involving two numbers. For example, the modulus operation for `17` and `5` results in a value of `2`, which is the remainder from the division of 17 by 5. A smaller number divided by a larger number will result in a result less than 1 and the result of the modulus operation will be the first number.

```javascript
5 % 2; // 1

2 % '4'; // 2

8 % true; // 0

[5, 7, 2] % 4; // NaN

'hello' % ' there'; // NaN
```

[exponents](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation) **\*\***

The exponentiation operation works by taking the first operand and raising it to the power of the second number.

```javascript
3 ** 3; // 27

2 ** '4'; // 16

5 ** true; // 5

7 ** 'two'; // NaN
```

[increment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment) **++**

The increment operator is technically a unary operator, but is included here due to it's operation with arithmetic. The increment operator can be added before or after a variable that's been assigned a numeric value. When the increment operator is placed after the operand, it will return the value of the operand before the increment operation and then increment the value by one. When the increment operator is placed before the operand, the value of the variable will be incremented by one and this is the value returned.

```javascript
let number = 5;

number++; // 5
number; // 6

let newNumber = 10;

++newNumber; // 11
newNumber; // 11
```

[decrement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement) **--**

The decrement operator works similarly to the increment operator, except it decrements the value of the variable by one.

```javascript
let number = 5;

number--; // 5
number; // 4

let newNumber = 10;

--newNumber; // 9
newNumber; // 9
```

## Relational operators

<

>

> =

<=

## Equality operators

==

!=

===

!==

## Binary logical operators

&&

||

??

## Assignment operators

=

\*=

\*\*=

/=

%=

+=

-=

&&=

||=

??=
