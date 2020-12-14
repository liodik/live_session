// сигнатура ф-ции: назва і що приймає

// input: array, func
// output: arr

// callback
// Input:el, ind,arr
// output:bool
// algo
// 1. iterate array
// 2. apply callback function for every el;
// 3.if callback => true - add el to result;
//

// const filterArray = (arr, callback) => {
//   let result = [];
//   for (let i = 0; arr.i < arr.length; i++) {
//     if (callback(arr[i], i, arr)) {
//       result.push(arr[i]);
//     }
//   return result;
// };

// const filterArray = (arr, callback) => {
// let result = [];
// for (let i = 0; arr.i < arr.length; i++) {
// const fitsCondition = callback(arr[i],i,arr);
// if (fitsCondition) {
//   result.push(arr[i]);
// }
// }
// return result;
// }

const filterArray = (arr, callback) => {
  const result = [];
  for (let i = 0; arr.i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
};

// test funnc
//const testArr = [5, 6, 10, -2, 44, 5];
// const testCallback = (el, ind, arr) => el > 5) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const testCallback = (el, ind, arr) => el > 5;

// const res = filterArray(testArr, testCallback);
// console.log(res);
