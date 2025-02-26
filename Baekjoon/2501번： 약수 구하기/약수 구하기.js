/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2501                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2501                           #+#        #+#      #+#    */
/*   Solved: 2025/02/26 21:50:33 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [N, K] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const divisors = [];
for (let index = 1; index <= N && divisors.length < K; index++) {
  if (N % index === 0) {
    divisors.push(index);
  } else {
    continue;
  }
}

console.log(divisors[K - 1] ?? 0);
