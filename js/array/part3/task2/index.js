// input num num num....
// num

// function multiply() {
//   // console.log(arguments);
//   return Object.values(arguments).reduce((acc, el) => acc * el);
// }

const multiply = (...args) => {
  return args.reduce((acc, el) => acc * el);
};

// const testArr = [3, 4, 5, 6, 7, 5];
// console.log(...testArr);
