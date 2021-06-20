# this and Prototype

## this keyword

A function's `this` keyword references the execution context for that call, determined entirely by how the function was called.

A `this` aware function can have a different context each time it's called, which makes it flexible and reusable (dynamic context).

```javascript
let place = {
  name: 'bob',
  ask(question) {
    console.log(this.name, question);
  },
};

place.ask('what is the implicit binding?');
```

Using arrow functions helps to avoid issues of context with the `this` keyword.

```javascript
let team = {
  greeting: 'Hello',
  names: ['hal', 'kal', 'mel'],
  getTeam() {
    this.names.forEach((name) => {
      console.log(`${this.greeting}, ${name}!`);
    });
  },
};

team.getTeam();
```

## Prototypes

A prototype can delegate to itself and make use of the `this` keyword to access variables within the prototype.

```javascript
function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function (question) {
  console.log(this.teacher, question);
};

let deepJS = new Workshop('bob');
let reactJS = new Workshop('hal');

deepJS.ask('how is the class?');
reactJS.ask('where is the class?');
```

## Class

```javascript
class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }
  ask(question) {
    console.log(this.teacher, question);
  }
}

let deepJS = new Workshop('bob');
let reactJS = new Workshop('hal');

deepJS.ask('how is the class?');
reactJS.ask('where is the class?');
```
