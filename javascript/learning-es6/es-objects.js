// enhancing object literals - can shorten the syntax when name of property is same as parameter name
let skier = (name, sound) => {
  return {
    name,
    sound,
    powderYell: () =>
      console.log(`${name} is calling out ${sound.toUpperCase()}`),
  };
};
console.log(skier('Eddie', 'Watch out').powderYell());

// objects and the spread operator
const daytime = {
  breakfast: 'oatmeal',
  lunch: 'soup',
};
const dinner = 'turkey sandwich';
const mealPlan = { ...daytime, dinner };
console.log(mealPlan);

// object destructuring
let people = { manager: 'bob', worker: 'jim', security: 'mel' };
let { manager, worker, security } = people;
console.log(people.security); // 'mel'
console.log(worker); // 'jim'
let marketing = ({ manager, worker }) => `${manager} works with ${worker}`;
console.log(marketing(people)); // 'bob works with jim'

// iterating with for-of
let cart = ['hat', 'map', 'book', 'pencil'];
for (let item of cart) {
  console.log(`My item: ${item}`);
}

// classes
class Vehicle {
  constructor(wheels, make, model) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  drive() {
    return `I'm a ${this.make} ${this.model} with ${this.wheels} number of wheels.`;
  }
}
let myCar = new Vehicle(4, 'Ford', 'F150');
console.log(myCar.drive());

// inheriting from classes
class Motorcycle extends Vehicle {
  constructor(make, model) {
    super(2, make, model);
  }
}
let myMotorcycle = new Motorcycle('Ducati', 'Zoom 1000');
console.log(myMotorcycle.drive());

// class getters and setters
let attendance = {
  _list: [],
  set addName(name) {
    this._list.push(name);
  },
  get list() {
    return this._list.join(', ');
  },
};

attendance.addName = 'bob cobb';
attendance.addName = 'mel mope';
attendance.addName = 'jim jupe';
console.log(attendance.list);

class Hike {
  constructor(distance, pace) {
    this.distance = distance;
    this.pace = pace;
  }
  get lengthInHours() {
    return `${this.calcLength()} hours.`;
  }
  calcLength() {
    return this.distance / this.pace;
  }
}

const mtRogers = new Hike(20, 5);
console.log(mtRogers.lengthInHours);
