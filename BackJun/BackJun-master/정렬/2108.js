const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
let countField = new Map();
const arr = input.slice(1, input[0] + 1).sort((a, b) => a - b);
let add = 0;
let count = input[0];
const isOdd = count % 2 === 0;
let max = 1;

for (let i = 0; i < arr.length; i++) {
  const item = arr[i];
  add += item;
  if (countField.has(item)) {
    max = Math.max(max, countField.get(item) + 1);
    countField.set(item, countField.get(item) + 1);
  } else {
    countField.set(item, 1);
  }
}

let maxArr = [];
for (const [key, value] of countField) {
  if (max === value) maxArr.push(key);
}

let medium = 0;
if (isOdd) {
  const itemI = Math.floor(count / 2);
  medium = arr[itemI] + arr[itemI - 1] / 2;
} else {
  const itemI = Math.floor(count / 2);
  medium = arr[itemI];
}
const result = arr.reduce((p, c) => p + c, 0) / count;
const isNaN = result < 0 && result > -0.5;
console.log(Math.round(isNaN ? 0 : result));
console.log(medium);
console.log(maxArr.length > 1 ? maxArr[1] : maxArr[0]);
console.log(arr[arr.length - 1] - arr[0]);
