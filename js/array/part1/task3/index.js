// начальный массив
const numbersList = [5, 0, 8, 10, -4, 50, 220];

/* метод find */
/* const arrElement = arr.find(callback) - вернет первый элемент массива arr, который удовлетворяет условию в callback.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr 
   если callback(arr[i]) вернет true, то find прекратит поиск и вернет этот элемент */

// c помощью метода find найди первое нечетное число в numbersList и выведи его в консоль
//input: callback
//output: el OR undefined
const findRes = numbersList.find(el => el % 2 === 1);

//callback input: el, ind, Array
//callback output: boolean

// put your code here

/* метод forEach */
/* arr.forEach(callback) - итерирует массив и выполняет callback функцию по очереди для каждого элемента 
начального массива arr. callback функция ничего не должна возвращать */

// c помощью метода forEach выведи в консоль только положителные элементы массива numbersList
// input: callback
// output: undefined

// callback
// input: el
// output: none
const forEachRes = numbersList.forEach(el => {
  if (el > 0) {
    console.log(el);
  }
});
// put your code here

/* метод reduce */
/* const newArr = arr.reduce(callback) - применяет функцию callback к каждому элементу массива (слева-направо), 
возвращая одно результирующее значение. Функция callback принимает два параметра - accumulator, currentValue */

// С помощью метода reduce посчитай сумму чисел массива transactions которые больше 100
// выведи в консоль результат выполнения, а так же массив transactions после выполнения reduce

const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

//put your code here
// const reduceRes = transactions.reduce((acc, el) => {
//   console.log('acc ' + acc);
//   console.log('el ' + el);
//   if (el > 100) {
//     acc += el;
//   }
//   else {
//     return acc;
//   }
// }, 0);

const reduceRes = transactions.reduce((acc, el) => {
  return el > 100 ? acc + el : acc;
}, 0);
console.log(reduceRes);

/* sort - отсортирует массив в заданом порядке */

// c помощью метода sort отсортируй массив numbersList1 по убыванию, результат помести в переменную sortedArr1
// выведи в консоль sortedArr1, а так же массив numbersList1 после выполнения sort

const numbersList1 = [6, 20, 33, 43, 8];
// input callback
// output array

//option 1
const sortRes = numbersList1.sort((a, b) => {
  return b - a;
});

// callback
// input: el, el
//output: el,
//put your code here

// c помощью метода sort отсортируй массив numbersList2 по убыванию, но чтобы исходный массив не менялся.
// результат помести в переменную sortedArr2
// выведи в консоль sortedArr2, а так же массив numbersList2 после выполнения sort

//option2
const numbersList2 = [6, 20, 33, 43, 8];
const sortResCopied = numbersList2.slice().sort((a, b) => b - a);

//put your code here
