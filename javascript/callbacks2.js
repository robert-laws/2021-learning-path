// const add = (n1, n2, callback) => {
//   setTimeout(() => {
//     let result = n1 + n2;
//     callback(result);
//   }, 2000);
// };

// const multiply = (n1, n2, callback) => {
//   setTimeout(() => {
//     let result = n1 * n2;
//     callback(result);
//   }, 2000);
// };

// const square = (n) => {
//   return n * n;
// };

// let v1 = add(3, 7);
// let v2 = multiply(v1, 2);
// let v3 = square(v2);

// console.log(v3);

// add(3, 7, (result) => {
//   multiply(result, 5, (result) => {
//     console.log(square(result));
//   });
// });

// add(5, 8, (result) => {
//   console.log(square(result));
// });

// const add = (n1, n2) => {
//   setTimeout(() => {
//     return n1 + n2;
//   }, 2000);
// };

// const square = (n) => {
//   return n * n;
// };

// let v1 = add(5, 8);
// console.log(square(v1));

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
};

const square = (n) => {
  return n * n;
};

add(5, 8, (result) => {
  multiply(result, 5, (result) => {
    subtract(result, 8, (result) => {
      console.log(square(result)); // 3249
    });
  });
});
