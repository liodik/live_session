/**
A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished
**/

function sum(from, to, printer) {
  let sum = 0;
  while (from <= to) {
    sum += from;
    from++;
  }
  printer(sum);
}

function printResult(res) {
  console.log('Result is ' + res);
}
// console.log(sum(2, 4, printResult));
