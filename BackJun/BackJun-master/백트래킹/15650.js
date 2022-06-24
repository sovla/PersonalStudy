const fs = require("fs");
const input = fs
    .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

const [N, M] = input;
let count = new Array(N).fill(false);
let result = [];

findFalse();

function findFalse() {
    let n = 0;
    if (result.length === M) {
        let isDone = true;
        for (let i = 0; i < result.length - 1; i++) {
            const element = result[i];
            const nextElement = result[i + 1];
            if (element > nextElement) {
                isDone = false;
            }
        }
        if (isDone) console.log(result.join(" "));
        return;
    }
    while (N > n) {
        if (!count[n]) {
            count[n] = true;
            result.push(n + 1);
            findFalse(0);
            result.pop();
            count[n] = false;
        }
        n++;
    }
}
