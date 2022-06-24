const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim();

const [...arr] = input.split("\n");
for (const item of arr) {
  const [x, y, z] = item
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  if (x + y + z) {
    if (x * x + y * y === z * z) {
      console.log("right");
    } else {
      console.log("wrong");
    }
  } else {
    break;
  }
}
