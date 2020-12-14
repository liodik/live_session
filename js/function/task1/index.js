// 1. learn requirement
// 2. Create step by step algo (input&output for functions)
// 3. write draft solution & testing
// 4. refactoring & final testing => final solution

// algo
// 1. iterate numbers from 1 to n
// 2. chef if number is prime or not
// 2.1 iterate from 1 to n-1
// 2.2 .....

// input: number
// outout: boolean

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// input:Number
// output:undefined

function getPrime(n) {
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

// test function
// getPrime(7);
// getPrime(9);
