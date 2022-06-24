const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim();

const num = +input;
let n = 1;
let range = 2;
if (num == 1) {
  console.log(1);
} else {
  while (range <= num) {
    range = range + 6 * n;
    n++;
  }
  console.log(n);
}

[1, 0.5, 2, 0.33, 1, 3];
