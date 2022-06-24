const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [count, ...arr] = input;
const array = Array.from({ length: +count }, (v, k) => {
  return arr[k].trim().split(" ");
});

let result = [];

let counting = new Array(+count).fill(false);

findAll(0);

function findAll(depth) {
  if (counting.filter(Boolean).length === 2) {
    let index = [];
    counting.forEach((v, i) => {
      if (v) index.push(i);
    });
    let ans = 0;
    const [a, b] = index;
    ans += +array[a][b];
    ans += +array[b][a];
    result.push(ans);
    return;
  }
  for (let i = 1; i <= +count; i++) {
    if (!counting[i - 1]) {
      counting[i - 1] = true;
      findAll(depth + 1);
      counting[i - 1] = false;
    }
  }
}

console.log(
  result
    .sort((a, b) => a - b)
    .filter((v, i, arr) => {
      if (v === arr[i + 1]) {
        return null;
      } else {
        return v;
      }
    })
);
