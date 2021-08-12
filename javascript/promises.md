## Promises

There are many times when an operation in a program or on a webpage is requested, but the results of the request aren't immediately available for further processing. In cases like these, the operation is considered to be asynchronous. To handle this specific situation more smoothly, JavaScript has an object called a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that represents the eventual completion or failure of the asynchronous operation and provides the means for programmers to work with asynchronous operations and data.

#### The problem

Before diving into promises and their use, it's best to understand the problem they help to solve. Often in JavaScript one function depends on the result of another function before it can return its own result. For example, consider a complex set of mathematical operations that execute one after the other and depend on the result of the previous operation before the next can execute.

```javascript
const add = (n1, n2) => {
  return n1 + n2;
};

const square = (n) => {
  return n * n;
};

let v1 = add(5, 8);
let v2 = square(v1);
console.log(v2); // 169
```

This code executes in order, each function is able to return a result before the next function that uses the result executes. However, there are situations where a function will take some time to complete before returning a result.

```javascript
const add = (n1, n2) => {
  setTimeout(() => {
    return n1 + n2;
  }, 2000);
};

const square = (n) => {
  return n * n;
};

let result = add(5, 8);
console.log(square(result)); // NaN
```

The difference here is that the `add` function now has a delay of 2 seconds before it completes its operation and returns a result. By the time that has happened, the remainder of the code has already run. At the moment the second function executes, the variable `v1` has a value of `undefined`, which when passed into the `square` function returns `NaN`, which is outputted before the first function can return its calculated value.

#### Callbacks to the rescue

Before promises were added to JavaScript with ES6, the best way to handle asynchronous operations was by using callbacks. A callback is basically a function that is passed as an parameter to another function and is then called within the body of the first function. A common reason to do this is to handle asynchronous data retrieval - where progression of the program depends on data that can take some time to be returned and made available to the next part of the program. A typical example is asynchronously waiting for data from an api that is needed by another part of the program to continue.

For example, the example above currently fails to handle the case where the `square` function is called before the `add` function has completed. To solve this, the `square` function could be called as a callback from the `add` function, like so:

```javascript
const add = (n1, n2, callback) => {
  setTimeout(() => {
    let calculation = n1 + n2;
    callback(calculation);
  }, 2000);
};

const square = (n) => {
  return n * n;
};

add(5, 8, (result) => {
  console.log(square(result));
});
```

The example above executes the `add` function asynchronously, and then passes the result of the `add` function to the `square` function. The `square` function then uses the result of the `add` function to calculate the square of the result. In this case, even though there is a delay of 2 seconds, the `square` function is able to use the result of the `add` function since the callback depends on the result of the `add` function.

The simple example above isn't too difficult to understand. However, it's possible that an operation may require several steps before it is finished, and this would require multiple callbacks. For example, consider the following code:

```javascript
const add = (n1, n2, callback) => {
  setTimeout(() => {
    let result = n1 + n2;
    callback(result);
  }, 2000);
};

const multiply = (n1, n2, callback) => {
  setTimeout(() => {
    let result = n1 * n2;
    callback(result);
  }, 2000);
};

const subtract = (n1, n2, callback) => {
  setTimeout(() => {
    let result = n1 - n2;
    callback(result);
  }, 2000);
});

const square = (n) => {
  return n * n;
};

add(5, 8, (result) => {
  multiply(result, 5, (result) => {
    subtract(result, 8, (result) => {
      console.log(square(result));
    });
  });
});
```

Although this example doesn't look overly complex, it does show how the callback pattern can become deeply nested and with more complex tasks than shown above, it can become very difficult to understand what is happening. Thankfully, the developers of JavaScript recognized this problem and proposed a solution for it.

#### Improving on callbacks with a Promise

As described above, the problem with callbacks is that they can become complex and difficult to maintain and/or understand. Multiple callbacks nested within each other can quickly become unmanageable, sometimes called the [pyramid of doom](<https://en.wikipedia.org/wiki/Pyramid_of_doom_(programming)>). Additionally, callbacks don't offer any built-in error handling when an asynchronous request does not complete successfully. This functionality has to be added by the developer.

The introduction of the [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) object helps to address these problems and provide a more elegant way of handling asynchronous operations. A Promise represents the eventual completion or failure of an asynchronous operation and provides the means for the programmer to work with asynchronous operations and data.

The core idea behind a promise is that while an asynchronous operation is in process, it will return an intermediate value that can be used to track the progress of the operation. Once the operation is complete, the promise will either resolve to a final value or not. This value can be used to determine the success or failure of the operation.
