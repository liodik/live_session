'use strict';

function printMessage(country, city) {
  console.log(`Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`);
}

const user = {
  firstName: 'Andrey',
  age: 111,
};
// input: context, ...args
// output: funct

// 1
// const printMessageBinded = printMessage.bind(user, 'Germany', 'Berlin');
// printMessageBinded();

// 2
// printMessage.bind(user, 'Germany', 'Berlin')();

// 3
// const printMessageBinded = printMessage.bind(user, 'Germany');
// printMessageBinded('Berlin');

// 4
// const printMessageBinded = printMessage.bind(user);
// printMessageBinded('Berlin', 'Germany');

// 5
// const printMessageBinded = printMessage.bind(user)('Berlin', 'Germany');

// option 1 - using bind

// function myBind(func, context, ...args) {
//   return func.bind(context, ...args);
// }

// const printMessageBinded = myBind(printMessage, user);
// printMessageBinded('Germany', 'Berlin');
// option 2 - using apply

// function bind(func, context, ...args) {
//   return function (...args1) {
//     return func.call(context, ...args, ...args1);
//   };
// }

// option 3 - using custom js

function mybind(func, context, ...args) {
  return function (...params) {
    const contextCopy = { ...context };
    contextCopy.tempFunc = func;
    contextCopy.tempFunc(...args, ...params);
  };
}
const printMessageBinded = myBind(printMessage, user);
printMessageBinded('Germany', 'Berlin');
