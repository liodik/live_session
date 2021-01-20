const buildObject = (keys, values) => {
  return keys.reduce((acc, key, index) => {
    // console.log('Step ' + index);
    // console.log('acc ', acc);
    // console.log('key ' + key);
    // console.log('value ' + values[index]);

    return { ...acc, [key]: values[index] };
  }, {});
};

// const keys = ['name', 'adress', 'age'];
// const values = ['Bob', 'Ukraine', '34'];
// console.log(buildObject(keys, values));

// const bildObjectWithLoop = (keys, values) => {
//   const res = {};
//   for (let index = 0; index < keys.length; index += 1) {
//     const key = keys[index];
//     const value = values[index];

//     Object.assign(res, { [key]: value });
//   }
//   return res;
// };

// test

// step1:
// key="name, {} ==> {'name':"Bob"}

// step2
// adress, {'name':'Bob'} ==> {name:'Bob', adress:'Ukraine', age:34};
