// spread operator
let names = ['bob', 'hal', 'jim', 'ted'];
let animals = ['cat', 'dog', 'pig', 'fish', 'bird'];
let combination = [...names, ...animals];
combination.length; // 9

// destructuring arrays
let cities = ['New York', 'Los Angeles', 'Chicago', 'San Francisco'];
let [first, second, third, fourth] = cities;
console.log(first); // 'New York'

// includes function
cities.includes('Chicago'); // true
cities.includes('San Antonio'); // false
