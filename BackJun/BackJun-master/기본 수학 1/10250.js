const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim();
const [count, ...numbers] = input.split("\n");
for (let k = 0; k < +count; k++) {
  const item = numbers[k];

  const [H, W, N] = item.trim().split(" ");
  let count = 0;
  for (let i = 0; i < +W; i++) {
    for (let j = 0; j < +H; j++) {
      count++;
      if (count === +N) {
        console.log(i + 1 < 10 ? `${j + 1}0${i + 1}` : `${j + 1}${i + 1}`);
        break;
      }
    }
  }
}
