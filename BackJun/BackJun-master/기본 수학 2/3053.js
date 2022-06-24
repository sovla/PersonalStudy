const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim();

console.log((Math.pow(+input, 2) * Math.PI).toFixed(6));
console.log((Math.pow(+input, 2) * 2).toFixed(6));
