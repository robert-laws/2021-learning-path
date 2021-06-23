# Operators

Types and values are important, but by themselves aren't particularly dynamic. Being able to perform arithmetic, combine, compare, perform logical checks, and other operations on values transform them into dynamic values. Different types have available different operations. And some operations behave differently depending on the types involved. Operators can be broken down into a few groups.

### Unary Operators

A unary operation is an operation that involves only one operand.

#### delete

```javascript
let myObj = {
  name: 'bob',
  age: 32,
  member: true,
};

delete myObj.age;

myObj; // { name: 'bob', member: true }
```

#### void

The void operator will evaluate a given expression and then returns `undefined` .

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
