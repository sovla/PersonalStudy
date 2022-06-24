const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim()
  .split("\n");

let count = 0;
function fib(n) {
  if (n == 1 || n == 2) {
    count++;
    return 1;
  } else {
    count++;
    return fib(n - 1) + fib(n - 2);
  }
}
fib(+input);
const fib_array = [0];
function fibd(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  if (fib_array[n] != null) {
    return fib_array[n];
  }
  return fibd(n - 1) + fibd(n - 2);
}
console.log(fibd(1));
console.log(fibd(2));
console.log(fibd(3));
console.log(fibd(4));
console.log(fibd(50));
