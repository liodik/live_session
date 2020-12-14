'use strict';

// const arr=[1,5,8,11]
// function getProducts(arr) {
// //
// //
// //
// }

// // send products to storage

/* ==================================== */
/* ===> мутирующие методы массивов <=== */
/* ===> изменяют исходный массив <===== */
/* ==================================== */

/* pop - удалит из массива последний элемент и вернет его */

// c помощью метода pop достань последний элемент массива numbersList1 и помести его в переменную lastNumber
// выведи в консоль эту переменную, а так же массив numbersList1 после выполнения pop

const numbersList1 = [1, 2, 3, 4, 5];
const lastNumber = numbersList1.pop();
console.log(numbersList1);
console.log(lastNumber);
// put your code here

/* push - добавит элемент в конец массива */

// c помощью метода push добавь число 6 в конец массива numbersList2
// выведи в консоль результат работы метода push, а так же массив numbersList2 после выполнения push

const numbersList2 = [1, 2, 3, 4, 5];
const pushRes = numbersList2.push(6);
console.log(pushRes);
console.log(numbersList2);

// put your code here

/* shift - удалит из массива первый элемент и вернет его */

// c помощью метода shift достань первый элемент массива numbersList3 и помести его в переменную firstNumber
// выведи в консоль эту переменную, а так же массив numbersList2 после выполнения shift

const numbersList3 = [1, 2, 3, 4, 5];
const fistNumber = numbersList3.shift();
console.log(fistNumber);
console.log(numbersList3);

// put your code here

/* unshift - добавит элемент в начало массива */

// c помощью метода unshift добавь число 0 в начало массива
// выведи в консоль результат работы метода unshift, а так же массив numbersList4 после выполнения unshift

const numbersList4 = [1, 2, 3, 4, 5];
const unshiftRes = numbersList4.unshift(0);
console.log(numbersList4);
console.log(unshiftRes);
// put your code here

/* ======================================= */
/* ===> НЕ мутирующие методы массивов <=== */
/* ===> НЕ изменяют исходный массив <===== */
/* ======================================= */

// начальный массив
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

/* метод filter */
/* const newArr = arr.filter(callback) - создает и возвращает новый отфильтрованный массив.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr
   в newArr попадут только те элементы arr, для которых callback(arr[i]) вернет true
   callback(arr[i]) === true -> элемент будет добавлен в финальный массив
   callback(arr[i]) === false -> элемент НЕ будет добавлен в финальный массив */

// c помощью метода filter создай новый массив bigNumbers, в котором будут числа > 5 из anotherNumbersList
// выведи bigNumbers в консоль
const bigNumbers = anotherNumbersList.filter(filterCallback);
console.log(bigNumbers);
console.log(anotherNumbersList);
//input:number, number, array
//output: boolean

// const bigNumbers = anotherNumbersList.filter(function (element) {
// return element > 5//   });
const bigNumbers = anotherNumbersList.filter(element => element > 5);

// put your code here

// c помощью метода filter создай новый массив evenPositions, в котором будут числа из четных позиций
// массива anotherNumbersList
const filterCallback = function (element, index, array) {
  if (element > 5) {
    return true;
  } else {
    return false;
  }
};
// выведи evenPositions в консоль

const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];
anotherNumbersList.filter((el, index) => index % 2 === 0);

// put your code here

/* метод map */
/* const newArr = arr.map(callback) - создает и возвращает новый массив. Длина нового и исходного массивов равны
   ф-ция callback запустится по очереди для каждого элемента начального массива arr
   элементы массива newArr - это результат вызова callback для каждого элемента arr
   newArr[i] = callback(arr[i]) */

// c помощью метода map создай новый массив squaredNumbers, в котором будут квадраты чисел из anotherNumbersList
// выведи squaredNumbers в консоль
// input: el, number, obj
// output: changed el

const squaredNumbers = anotherNumbersList.map(el => el * el);
console.log(squaredNumbers);
// put your code here

/* метод find */
/* const arrElement = arr.find(callback) - вернет первый элемент массива arr, который удовлетворяет условию в callback.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr 
   если callback(arr[i]) вернет true, то find прекратит поиск и вернет этот элемент */

// c помощью метода find найди первое нечетное число в anotherNumbersList и выведи его в консоль
const arrElement = anotherNumbersList.find(el => el % 2 !== 0);
console.log(arrElement);
// put your code here

/* метод forEach */
/* arr.forEach(callback) - итерирует массив и выполняет callback функцию по очереди для каждого элемента 
начального массива arr. callback функция ничего не должна возвращать */
anotherNumbersList.forEach(el => {
  if (el % 2 === 0) {
    console.log(el);
  } else false;
});
// c помощью метода forEach выведи в консоль только положителные элементы массива anotherNumbersList

// put your code here
