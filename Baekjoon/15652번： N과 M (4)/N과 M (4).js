const fs = require("fs");
const [N, M] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const results = [];

const backtrack = (array, start) => {
  if (array.length === M) {
    results.push(array.join(" "));
    return;
  }

  for (let i = start; i <= N; i++) {
    array.push(i);
    backtrack(array, i);
    array.pop();
  }
};

backtrack([], 1);

console.log(results.join("\n"));
