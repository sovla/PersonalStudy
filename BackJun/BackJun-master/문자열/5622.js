const fs = require("fs");
let input = fs
    .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
    .toString()
    .trim();

const array = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
let result = 0;
for (const item of input.split("")) {
    const index = array.findIndex((v) => v.includes(item));
    if (index !== -1) {
        result += index + 3;
    } else {
        result += 13;
    }
}

console.log(result);
