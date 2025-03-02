/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1010                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1010                           #+#        #+#      #+#    */
/*   Solved: 2025/03/02 21:00:42 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const factorial = (n) => (n > 1 ? factorial(n - 1) * n : 1);

const fs = require("fs");
const [N, ...numbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const results = [];

numbers.forEach((v) => {
  const [N, M] = v.split(" ").map(Number);

  // N!
  // M!*(N-M)!
  results.push(Math.round(factorial(M) / (factorial(N) * factorial(M - N))));
});

console.log(results.join("\n"));
