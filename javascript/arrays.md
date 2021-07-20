## Arrays

Arrays at their most basic level are collections (or lists) of data. Since programs are constantly working with data, arrays are used extensively in JavaScript. A typical program will add data to list, like products in a shopping cart, which can be stored in an array. The shopping cart array can have items added, removed, and rearranged. To accomplish tasks like this, arrays come with many built-in methods that provide a lot of flexibility when working with them. This article will examine how to create arrays, access data with them, and work with arrays.

#### Creating an Array

Arrays can be created using the array literal syntax or using the Array constructor.

```javascript
// array literal syntax
let cart = ['pencil', 'hat', 'paper', 'belt'];
// creates an array with a length of 4 and defined content
```

The Array Constructor can be used to create an empty array of no length, an array of a specified length, and an array with specified content. Creating an array with the Array Constructor is equivalent to using the array literal syntax.

```javascript
let cart = new Array();
// creates an array with a length of 0 and no content

let cart2 = new Array(3);
// creates an array with a length of 3 and undefined content

let cart3 = new Array('pencil', 'map', 'shirt');
// creates an array with a length of 3 and defined content
```

## Arrays Basics

#### Array length property

The property `length` is the one property available for arrays. It returns a number that equals the number of items held in the array.

```javascript
let cart = ['pencil', 'hat', 'paper', 'belt'];
cart.length; // 4
```

#### Accessing items inside an array

Arrays are index-based, meaning that each item in an array corresponds with an zero-based index number. The first item in the array has an index of 0. The next item has an index of 1, and so on. Items within an array maintain their order, which corresponds to the index value. This provides some predictability since the items in the array will always be located at the same index unless changed by the program.

```javascript
let cart = ['pencil', 'hat', 'paper', 'belt'];
cart[0]; // 'pencil'
cart[2]; // 'paper'
cart[5]; // undefined
```

## Array Methods

The array class has one class method and several instance methods. A key concept of working with arrays and instance methods is how they change or do not change the original array. A method that takes in an array and modifies the original array is called destructive. It's considered destructive because the original array is destroyed and a new array takes its place. In contrast to this, methods that take in an array and after completion leaves its original array unchanged is called nondestructive. The original array emerges unchanged after the method completes. This is an important concept because there are situations where it's important to maintain the integrity of original data when working with array data.

**[isArray()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)**

The Array class has a method called isArray() that accepts a variable value and will return a boolean depending on whether or not it is an array or not.

```javascript
let cart = ['pencil', 'hat', 'paper', 'belt'];
Array.isArray(cart); // true
Array.isArray('pencil'); // false
```

#### Destructive methods to add to or remove from an array

**[shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)**

Removes the first element from the array and returns it. Returns undefined if the array is empty. The original array is modified.

```javascript
let cart = ['pencil', 'hat', 'paper', 'belt'];
cart.shift(); // 'pencil'
cart; // ['hat', 'paper', 'belt']
```

**[unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)**

Inserts the passed element to the beginning of the array. If several items are passed as multiple parameters, they are added to the array in the order listed as parameters. The return value is the new length of the array. The original array is modified.

```javascript
let cart = ['pencil', 'hat', 'paper', 'belt'];
cart.unshift('map'); // 5
cart; // ['map', 'pencil', 'hat', 'paper', 'belt'];
```

**[pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)**

Removes the last element from the array and returns it. Returns undefined if the array is empty. The original array is modified.

```javascript
let cart = ['pencil', 'hat', 'paper', 'belt'];
cart.pop(); // 'belt'
cart; // ['pencil', 'hat', 'paper']
```

**[push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)**

Inserts the passed element to the end of the array. If several items are passed as multiple parameters, they are added to the array in the order listed as parameters. The return value is the new length of the array. The original array is modified.

```javascript
let cart = ['pencil', 'hat', 'paper', 'belt'];
cart.push('map'); // 5
cart; // ['pencil', 'hat', 'paper', 'belt', 'map'];
```

**[splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)**

Modify an array by removing and or replacing elements from an array starting at a designated index within the array. The return value is the removed items. The original array is modified.

```javascript
let cart = ['pencil', 'hat', 'paper', 'belt'];
cart.splice(1, 2); // ['hat', 'paper'];
cart; // ['pencil', 'belt']
```

The method can accept additional parameters, which are inserted into the array at the location where the elements are removed from the array.

```javascript
let cart = ['pencil', 'hat', 'paper', 'belt'];
cart.splice(1, 2, 'printer', 'computer', 'hard drive'); // ['hat', 'paper'];
cart; // ['pencil', 'printer', 'computer', 'hard drive', 'belt']
```

--

reverse()

sort()

--

concat()

slice()

join()

--

indexOf()

lastIndexOf()

--

forEach()

every()

some()

--

map()

filter()

--

reduce()

--

entries()

find()

findIndex()

flat()

flatMap()

includes()
