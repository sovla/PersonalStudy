/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 24416                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/24416                          #+#        #+#      #+#    */
/*   Solved: 2025/03/10 12:20:08 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString().trim().split(" ")[0];

let result1 = 1;
let result2 = 0;
const fib = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  }

  result1++;
  return fib(n - 1) + fib(n - 2);
};

const dp = new Array(input).fill(0);
dp[0] = 1;
dp[1] = 1;
const fib2 = (n) => {
  for (let i = 2; i < n; i++) {
    result2++;
    dp[i] = dp[i - 1] + dp[n - 2];
  }
  return dp[n];
};

fib(input);
fib2(input);

console.log(`${result1} ${result2}`);
