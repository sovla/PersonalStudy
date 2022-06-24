const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim();

let [n, max] = input.split(" ").map(Number);
let arr = new Array(max + 1).fill(true);

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
    console.log(i);
  }
});
