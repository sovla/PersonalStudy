const fs = require("fs");
const [info, ...inputs] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = info.split(" ").map(Number);
const matrix = inputs.slice(0, N).map((line) => line.split(" ").map(Number));

// Create 2D prefix sum array
const dp = Array(N + 1)
  .fill()
  .map(() => Array(N + 1).fill(0));

// Build the prefix sum table
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    dp[i][j] =
      matrix[i - 1][j - 1] + dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1];
  }
}

const results = [];
const queries = inputs.slice(N);

queries.forEach((query) => {
  const [x1, y1, x2, y2] = query.split(" ").map(Number);

  // Calculate sum using the formula: sum(x1,y1,x2,y2) = dp[x2][y2] - dp[x2][y1-1] - dp[x1-1][y2] + dp[x1-1][y1-1]
  const sum = dp[x2][y2] - dp[x2][y1 - 1] - dp[x1 - 1][y2] + dp[x1 - 1][y1 - 1];
  results.push(sum);
});

console.log(results.join("\n"));
