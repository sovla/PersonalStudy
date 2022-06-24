const fs = require("fs");
const input = fs
    .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

const [N, M] = input;

let result = [];

findFalse(0);

function findFalse(depth) {
    for (let i = 0; i < N; i++) {
        result[depth] = i + 1;
        if (depth + 1 < M) {
            findFalse(depth + 1);
        } else {
            let isDone = true;
            for (let j = 0; j < result.length - 1; j++) {
                const element = result[j];
                const nextElement = result[j + 1];
                if (element > nextElement) isDone = false;
            }
            if (isDone) console.log(result.join(" "));
        }
    }
}
