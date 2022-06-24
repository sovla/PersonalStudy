const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim();
console.log(f(+input));

function f(i) {
  return i >= 2 ? f(i - 1) + f(i - 2) : i;
}
