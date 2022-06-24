const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim()
  .split("\n");

const length = input[0];
const result = [];
for (let index = 0; index < length; index++) {
  const element = input[1 + index];
  +element > 0 ? result.push(+element) : result.pop();
}
console.log(result.reduce((p, c) => p + c, 0));
