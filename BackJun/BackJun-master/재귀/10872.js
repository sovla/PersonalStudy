const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim();
console.log(fac(+input));

function fac(i) {
  return i > 1 ? fac(i - 1) * i : 1;
}
