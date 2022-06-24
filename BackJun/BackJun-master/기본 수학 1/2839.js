const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim();

let sugar = +input;
let bag = 0;

while (sugar >= 0) {
  if (sugar % 5 === 0) {
    bag += Math.floor(sugar / 5);
    console.log(bag);
    break;
  }
  sugar -= 3;
  bag++;
}
if (sugar < 0) console.log("-1");
