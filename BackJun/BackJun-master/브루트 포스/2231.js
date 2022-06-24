const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim();

let n = Math.floor(+input / 2);
let result = false;
while (n < +input) {
  let i = n;
  let arr = 0;
  while (i > 0) {
    arr += i % 10;
    i = Math.floor(i / 10);
  }
  if (arr + n === +input) {
    result = true;
    break;
  }
  n++;
}

console.log(result ? n : 0);
