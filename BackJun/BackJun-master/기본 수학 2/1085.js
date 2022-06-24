const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim();

const [x, y, W, H] = input.split(" ").map(Number);
console.log(Math.min(W - x, H - y, x, y));
