/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 11659                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/11659                          #+#        #+#      #+#    */
/*   Solved: 2025/03/13 15:47:12 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [info, inputs, ...numbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const number = inputs.split(" ").map(Number);
const dp = new Array(number.length).fill(0);

number.forEach((v, i) => {
  dp[i] = (dp[i - 1] ?? 0) + v;
});

const results = [];
numbers.forEach((v) => {
  const [start, end] = v.split(" ").map(Number);

  results.push(dp[end - 1] - (dp[start - 2] ?? 0));
});

console.log(results.join("\n"));
