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
        console.log(result.join(" "));
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

// function dfs(cnt) {
//   if (cnt === M) {
//     result += `${output.join(" ")}\n`;
//     return;
//   }

//   for (let i = 0; i < N; i++) {
//     if (visited[i]) continue;
//     visited[i] = true;
//     output.push(i + 1);
//     dfs(cnt + 1);
//     output.pop();
//     visited[i] = false;
//   }
// // }
