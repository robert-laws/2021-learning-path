# Types and Values

The foundation of any programming language is data. Without data, creating a program is very difficult, if not impossible. Most interactions on the Internet involve data of some kind. Perhaps it's bank account data, or data about a list of products in a shopping cart, or a message on a social media network, or the latest score from the basketball playoffs. Data is the reason why people start up a browser and explore the Internet. JavaScript allows programmers to control data **values** and the **types** of data used in a program.

JavasScript allows programmers to work with a lot of different values. These values can include the _total dollar amount_ in an online bank account, a _list of the product names_ in a shopping cart TV on a e-commerce website, the _text_ of a post on a social media website, or the _final score_ of a basketball game. The common feature of all of these examples is that they are values - numbers, text, a list of text, etc. that is displayed on a webpage.

When speaking of values, it makes sense to do so in conjunction with types. In JavaScript, types are the different forms that data can take and are understood by the JavaScript engine. According to MDN, there are currently [nine distinct types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures). These include:

## Types

### Data Types (Primitives)

- Number - include integers and decimals (ex. 17, 2.63, -32.62, 5000.01)
- String - content enclosed by quotes, double quotes, or backticks (ex. 'hello, bob', "automobile rental company", `green park`)
- Boolean - true or false (ex. true, false)
- undefined - absence of value (ex. undefined)
- BigInt - numbers larger than 2^53 - 1 (ex. BigInt(9007199254740991))
- Symbol - an anonymous, unique property (ex. var sym = Symbol('sym'))

### Structural Types

- Object - data type for structured data (ex. { name: 'bob', age: 34 })
- Function - a code snippet that can be called by other code (ex. function sayHello() { return 'hello'; })

### Structural Root (Primitive)

- null - points to a nonexistent value (ex. var score = null)
