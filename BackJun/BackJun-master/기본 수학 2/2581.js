const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim();

let [n, max] = input.split("\n").map(Number);
let arr = new Array(max + 1).fill(true);
let result = [];

for (let i = 2; i * i <= max; i++) {
  if (arr[i]) {
    for (let j = i * i; j <= max; j += i) {
      arr[j] = false;
    }
  }
}
arr.splice(0, 2, false, false);
arr.forEach((v, i) => {
  if (i >= n && v) {
    result.push(i);
  }
});
if (result.length) {
  console.log(result.reduce((p, c) => p + c));
  console.log(Math.min(...result));
} else {
  console.log("-1");
}
