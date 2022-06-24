const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim();
const [count, ...numbers] = input.split("\n").map(Number);
const max = Math.max(...numbers);
let arr = new Array(max + 1).fill(true);
for (let i = 2; i * i <= max; i++) {
  if (arr[i]) {
    for (let j = i * i; j <= max; j += i) {
      arr[j] = false;
    }
  }
}
arr.splice(0, 2, false, false);
for (let i = 0; i < count; i++) {
  const item = numbers[i];

  let result = [];
  for (let j = 0; j < item; j++) {
    if (j < item && arr[j]) {
      result.push(j);
    }
  }
  let max1 = 100000;
  let result1 = "";
  for (const item1 of result) {
    for (const item2 of result) {
      if (item1 + item2 === item) {
        if (max1 > Math.abs(item1 - item2)) {
          max1 = Math.abs(item1 - item2);
          result1 = `${item1} ${item2}`;
        }
      }
    }
  }

  console.log(result1);
}
