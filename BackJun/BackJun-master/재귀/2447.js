const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim();
let result = "";
star(+input);

function star(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      starString(i, j, n);
    }
    result += "\n";
  }
}

function starString(i, j, num) {
  if (i % 3 === 1 && j % 3 === 1) {
    result += " ";
  } else {
    if (num === 1) {
      result += "*";
    } else {
      starString(Math.floor(i / 3), Math.floor(j / 3), Math.floor(num / 3));
    }
  }
  return result;
}

console.log(result);
