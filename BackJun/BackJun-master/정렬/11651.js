const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim()
  .split("\n");
let map = new Map();
let arr = input
  .slice(1, +input[0] + 1)
  .map((v) => {
    if (map.has(v)) {
      return null;
    } else {
      map.set(v);
      return v.trim("\r");
    }
  })
  .filter(Boolean);

console.log(
  arr
    .sort((a, b) => {
      if (a.length === b.length) {
        if (a > b) {
          return 1;
        } else if (a < b) {
          return -1;
        } else {
          return 0;
        }
      } else {
        if (a.length > b.length) {
          return 1;
        } else if (a.length < b.length) {
          return -1;
        } else {
          return 0;
        }
      }
    })
    .join("\n")
);
