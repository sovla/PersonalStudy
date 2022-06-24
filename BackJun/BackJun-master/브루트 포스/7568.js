const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim();

const arr = input.split("\n");
const n = +arr[0];
let result = new Array(n);
let ans = [];
for (let i = 0; i < n; i++) {
  const item = arr[i + 1];
  const [x, y] = item.split(" ").map(Number);
  result[i] = [x, y];
}
for (let i = 0; i < n; i++) {
  let count = 0;
  for (let j = 0; j < n; j++) {
    if (result[i][0] < result[j][0] && result[i][1] < result[j][1]) {
      count++;
    }
  }
  ans.push(count + 1);
}

console.log(ans.join(" "));
