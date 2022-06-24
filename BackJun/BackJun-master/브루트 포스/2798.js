const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim();

const [info, number] = input.split("\n");

const arr = number
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let count = 0;
let max = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    for (let k = j + 1; k < arr.length; k++) {
      const add = arr[i] + arr[j] + arr[k];
      if (add > +info.split(" ")[1]) {
        break;
      }
      if (add <= +info.split(" ")[1] && max < add) {
        max = add;
      }
      count++;
    }
  }
}

console.log(max, count);
