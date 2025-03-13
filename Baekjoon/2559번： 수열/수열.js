/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2559                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2559                           #+#        #+#      #+#    */
/*   Solved: 2025/03/14 08:40:44 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [info, numbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, K] = info.split(" ").map(Number);
const dp = [0];

numbers
  .split(" ")
  .map(Number)
  .forEach((v, i) => {
    dp.push(dp[i] + v);
  });

let result = -Number.MAX_SAFE_INTEGER;

for (let i = K; i <= N; i++) {
  const add = dp[i] - dp[i - K];
  if (add > result) result = add;
}
console.log(result);
