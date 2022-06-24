const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim();

const [count, numbers] = input.split("\n");
const arr = numbers.split(" ");
let result = 0;
for (let i = 0; i < count; i++) {
  for (let j = 1; j < arr[i]; j++) {
    if (+arr[i] === 1) {
      console.log(arr[i]);
      break;
    }
    if (+arr[i] % j === 0 && j !== 1 && j !== +arr[i]) {
      break;
    }
    if (j == +arr[i] - 1) {
      result++;
    }
  }
}

console.log(result);
