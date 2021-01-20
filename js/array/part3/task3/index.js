const mapArrayElements = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const newEl = callback(arr[i], i, arr);
    result.push(newEl);
  }
  return result;
};

// const arr = [2, 5, 6];
// const callback = (el, i, arr) => el * 2;

// console.log(mapArrayElements(arr, callback));
