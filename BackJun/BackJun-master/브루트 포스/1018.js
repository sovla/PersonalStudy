const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim();

const [count, ...floor] = input.split("\n");
const [n, m] = count.split(" ").map(Number);
console.log(floor);
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {}
}
