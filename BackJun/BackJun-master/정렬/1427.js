const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(
  input
    .sort((a, b) => a - b)
    .reverse()
    .join("")
);
