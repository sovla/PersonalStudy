const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim()
  .split("\n");

let arr = [];
for (let i = 1; i <= +input[0]; i++) {
  const element = input[i];
  const [x, y] = element.split(" ").map(Number);
  arr.push({
    x,
    y,
  });
}
console.log(
  arr
    .sort((a, b) => {
      if (a.x > b.x) {
        return 1;
      } else if (a.x === b.x) {
        if (a.y > b.y) {
          return 1;
        } else if (a.y <= b.y) {
          return -1;
        } else {
          return 0;
        }
      } else if (a.x < b.x) {
        return -1;
      } else {
        return 0;
      }
    })
    .map((v) => {
      return `${v.x} ${v.y}`;
    })
    .join("\n")
);
