const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim();
const [A, B, V] = input.split(" ");

console.log(Math.ceil((V - A) / (A - B)) + 1);
