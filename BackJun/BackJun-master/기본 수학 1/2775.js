const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim();
const [count, ...numbers] = input.split("\n");

for (let m = 0; m < count; m++) {
  const floor = +numbers[m * 2];
  const hosu = +numbers[m * 2 + 1];
  let arr = Array.from({ length: floor + 1 }, (e) => Array(hosu).fill(0));
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i == 0) {
        arr[i][j] = j + 1;
      } else {
        for (let k = 0; k <= j; k++) {
          arr[i][j] += arr[i - 1][k];
        }
      }
    }
  }
  console.log(arr[floor][hosu - 1]);
}
