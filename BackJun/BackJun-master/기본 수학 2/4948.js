const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim();

let [...numbers] = input.split("\n").map(Number);
for (const item of numbers) {
  if (item === 0) {
    break;
  }

  let arr = new Array(item * 2 + 1).fill(true);
  let result = 0;

  for (let i = 2; i * i <= item * 2; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= item * 2; j += i) {
        arr[j] = false;
      }
    }
  }

  arr.splice(0, 2, false, false);
  arr.forEach((v, i) => {
    if (i > item && v) {
      result++;
    }
  });
  console.log(result);
}
