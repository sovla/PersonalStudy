const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(
  input
    .slice(1, input[0] + 1)
    .sort((a, b) => +a - +b)
    .join("\n")
);
