'use strict';
console.log('hello');

// FUNCTION DECLARATION

function getSenseOflife() {
  return 42;
}
const res = getSenseOflife();
console.log(res);
console.log(getSenseOflife);
function sum(a, b) {
  return a + b;
}

function sum(a) {
  return console.log('i am ' + a + ' years old');
}
sum(6);
// arrow function

const mult = (a, b) => {
  return a + b;
};
console.log(mult(2, 5));

// FUNCTION EXPRETHION
const sumFunc = function (a, b) {
  return a + b;
};
const square = a => {
  const res = a * a;
  return res;
};

// const square = a => {
//   return a * a;
// };
const square = a => a * a;
console.log(square(10));

const getMagicNum = () => 17;
console.log(getMagicNum());
