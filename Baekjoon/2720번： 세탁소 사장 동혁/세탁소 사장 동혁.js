/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2720                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2720                           #+#        #+#      #+#    */
/*   Solved: 2025/02/26 08:22:20 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const coins = {
  Quarter: 0.25,
  Dime: 0.1,
  Nickel: 0.05,
  Penny: 0.01,
};

const fs = require("fs");
const [N, ...changes] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const results = [];
for (const element of changes) {
  let change = +element;

  const result = [];
  for (const [coinName, unit] of Object.entries(coins)) {
    const value = Math.floor(change / (unit * 100));
    result.push(value);
    if (value) {
      change = change - value * unit * 100;
    }
  }
  results.push(result.join(" "));
}
console.log(results.join("\n"));
