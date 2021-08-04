## Collections

JavaScript has many different ways to group and collect data including in arrays and objects. There are also two other main ways to organize collections of data - Maps and Sets. Although arrays and objects provide many useful features, they also come with some disadvantages. For example, an object is a key collection of values but does not allow for easy iteration of the values or finding the size of the collection. The `Map` and `Set` collections can be useful and provide advantages in certain situations over an array or object.

## Map

The [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) object provides a way to hold collections of key-value pairs. The Map maintains the order in which data is added into the Map object, which will be retrieved in order when the `Map` is iterated.

#### Features of the Map object

Maps can be created by invoking the `Map()` constructor. The constructor can be invoked without parameters or an optional iterable value.

```javascript
let employees = new Map();
let managers = new Map([
  ['bob', 23],
  ['kal', 36],
]);
```

The Map object has one property and several useful methods to work with the Map.

- **size** - is a property that returns the total number of key-value pairs held by the Map object.

- **set(key, value)** - is a method to append a new key-value pair to a Map.

- **get(key)** - is a method to retrieve a value from a Map by its key.

- **has(key)** - is a method to return a boolean based on whether or not a key value is included within a Map object.

- **delete(key)** - is a method that will remove the key-value pair from a Map object based on a key and will return a boolean depending on whether or not the key-value pair is deleted or not.

- **clear()** - removes all key-value pairs from the Map.

#### Working with the Map object

A key benefit of using Maps is the flexibility they offer, as can be shown with some examples.

```javascript
let employee = new Map();
employee.set('name', 'bob');
employee.set('age', 32);
employee.set('title', 'manager');
employee.set('skills', ['javascript', 'C#', 'Ruby']);

employee.size; // 4
employee.get('name'); // 'bob'

employee.has('title'); // true

employee.set('name', 'melvin');
employee.get('name'); // 'melvin'

employee.delete('age'); // true
employee.size; // 3

employee.clear();
employee.size; // 0
```

A key feature of the `Map` object is the ability to use any data type as the keys. This is different from an `Object`, which only allows strings or symbols to be used for keys.

```javascript
let person = new Map();
person.set('name', 'kal');
person.set(10, 'rating level');

let age = Symbol('age of person');
person.set(age, 36);

let education = ['high school', 'college', 'coding bootcamp'];
person.set(education, 'completed');

let contacts = {
  supervisor: 'jim',
  friend: 'hal',
};
person.set(contacts, 'work and home');
```

#### Methods to iterate over a Map object

The `Map` object also has several different ways to iterate over the Map object, its keys, and/or values either through methods available with the Map object or by using the `for..of` loop.

- keys() - returns an iterator object that contains the keys for each item.

- values() - returns an iterator object that contains the values for each item.

- entries() - returns an iterator object that contains the array of [key, value] for each element of the map object.

```javascript
let employee = new Map();
employee.set('name', 'bob');
employee.set('age', 32);
employee.set('title', 'manager');
employee.set('certified', true);

employee.keys(); // [Map Iterator] { 'name', 'age', 'title', 'certified' }
employee.values(); // [Map Iterator] { 'bob', 32, 'manager', true }
employee.entries(); // [Map Entries] { [ 'name', 'bob' ], [ 'age', 32 ], [ 'title', 'manager' ], [ 'certified', true ] }

for (const [key, value] of employee) {
  console.log(`employee ${key} is ${value}`);
}

// employee name is bob
// employee age is 32
// employee title is manager
// employee certified is true
```

Map objects can also iterated with the `forEach()` method.

```javascript
employee.forEach((key, value) => {
  console.log(`employee ${key} is ${value}`);
});
```

## Set

The [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) object is collection of values that can be of any type of primitive value. **Each value in a Set is unique**, which means it can only appear once within the `Set` object.

#### Features of the Set object

Sets can be created by invoking the `Set()` constructor. The constructor can be invoked without parameters or an optional iterable object of values.

```javascript
let employees = new Set();
let managers = new Set(['bob', 'kal', 'melvin']);
```

The Set object has one property and several useful methods to work with the Map.

- **size** - is a property that returns the total number of values held by the Set object.

- **add(value)** - is a method to append a new value to a Set.

- **has(value)** - is a method to return a boolean based on whether or not a value is included within a Set object.

- **delete(value)** - is a method that will remove the value from a Set object and will return a boolean depending on whether or not the value is deleted or not.

- **clear()** - removes all values from the Set.

#### Working with the Set object

A key benefit of using Sets is that they maintain the order of which the values are added to the Set. They also are iterable.

```javascript
let employees = new Set();
employees.add('melvin');
employees.add('bob');
employees.add('lou');
employees.add('gill');

employees.size; // 4
employees.has('jim'); // false
employees.has('lou'); // true

employees.delete('bob'); // true
employees.size; // 3

employees.clear();
employees.size; // 0
```
