const fs = require("fs");
const input = fs
    .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

const [N, M] = input;

let result = [];
let result1 = "";

findFalse(0);

function findFalse(depth) {
    for (let i = 0; i < N; i++) {
        result[depth] = i + 1;
        if (depth + 1 < M) {
            findFalse(depth + 1);
        } else {
            result1 += result.join(" ").trim() + "\n";
        }
    }
}

console.log(result1.trim());
