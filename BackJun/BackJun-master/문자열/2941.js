const fs = require("fs");
let input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim();

const array = ["c=", "c-", "d-", "z=", "s=", "dz=", "lj", "nj"];
let result = 0;
const stringArray = input.split("");
for (let i = 0; i < stringArray.length; i++) {
  const string2 = stringArray.slice(i, i + 3).reduce((p, c) => p + c);
  if (string2[0] === "d" && array.find((v) => string2 === v)) {
    result++;
    i += 2;
  } else {
    const item = array.find((v) => string2[0] + string2[1] === v);
    if (item) {
      result++;
      i += 1;
    } else {
      result++;
    }
  }
}

console.log(result);
