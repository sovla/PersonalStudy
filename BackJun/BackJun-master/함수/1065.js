const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();

const count = +input;
let result = 1;
for (let i = 1; i < count; i++) {
    const [h, t, o, ...s] = (i + "").split("").map(Number);
    if (i < 100) {
        result++;
    } else if (h - t === t - o) {
        result++;
    }
}
console.log(result);

const fs = require("fs");
const [n] = (
    process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `1000
`
)
    .trim()
    .split("\n");

let N = Number(n);

let count = 0;

for (let i = 1; i <= N; i++) {
    let nArr = String(i);
    if (i < 100) {
        count++;
        continue;
    }
    let A = Number(nArr[0]) - Number(nArr[1]);
    let B = Number(nArr[1]) - Number(nArr[2]);
    if (A === B) {
        count++;
    }
}

console.log(count);
