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
