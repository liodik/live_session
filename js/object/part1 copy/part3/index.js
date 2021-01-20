// obj => arr of obj

// algo
// 1. copy obj & get object entries
// 2. map Array
// 3. sort

// const customers = {
//   'customer-id-1': {
//     name: 'William',
//     age: 54,
//   },
//   'customer-id-2': {
//     name: 'Tom',
//     age: 17,
//   },
//   'customer-id-3': {
//     name: 'andrew',
//     age: 55,
//   },
// };

// const getCustomersList = obj => {
//   const entries = Object.entries(obj);
//   const resArr = entries.map(arr => {
//     return Object.assign(arr[1], { id: arr[0] });
//   });
//   const sortedResArr = resArr.sort((obj1, obj2) => {
//     return obj1.age - obj2.age;
//   });
//   return sortedResArr;
// };

const getCustomersList = obj => {
  return Object.entries(obj)
    .map(arr => ({ ...arr[1], id: arr[0] }))
    .sort((obj1, obj2) => obj1.age - obj2.age);
};

// test func
// console.log(getCustomersList(customers));

// destructing

// const user = {
//   name: 'Denis',
//   run: () => {
//     console.log('run');
//   },
// };
// function reactRender(user) {
//   const { name, run } = user;

//   console.log(name);
//   console.log(run);
// }

// reactRender(user);
