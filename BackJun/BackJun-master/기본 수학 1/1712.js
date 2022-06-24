const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim();

const [A, B, C] = input.split(" ");

console.log(C - B > 0 ? Math.floor(A / (C - B)) + 1 : -1);
