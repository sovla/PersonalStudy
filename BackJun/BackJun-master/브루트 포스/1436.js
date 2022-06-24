const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim();

let N = +input;
let n = 0;
let count = 0;
while (true) {
  if (N == count) {
    break;
  }
  if (String(n).includes("666")) {
    count++;
  }
  n++;
}

console.log(n - 1);
