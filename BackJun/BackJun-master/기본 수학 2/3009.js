const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim();

const arr = input.split("\n");
let xa = [],
  xy = [];
let resultx = "";
let resulty = "";

for (const item of arr) {
  const [x, y] = item.split(" ").map(Number);
  xa.push(x), xy.push(y);
}
for (let i = 0; i < xa.length; i++) {
  if (xa.filter((v) => v === xa[i]).length === 1) {
    resultx = xa[i];
  }

  if (xy.filter((v) => v === xy[i]).length === 1) {
    resulty = xy[i];
  }
}

console.log(resultx + " " + resulty);
