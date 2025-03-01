/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 4948                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/4948                           #+#        #+#      #+#    */
/*   Solved: 2025/03/01 22:32:36 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const inputs = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .filter((v) => v);

const maxNumber = Math.max(...inputs) * 2;
const sieve = new Array(maxNumber + 1).fill(true);
sieve[0] = false;
sieve[1] = false;

let processCount = 0;
// 에라토스테네스의 체 알고리즘: 2부터 √N까지의 수에 대해
for (let i = 2; i * i <= maxNumber; i++) {
  if (sieve[i]) {
    // i의 제곱부터 N까지 i의 배수를 모두 소수가 아님으로 처리
    for (let j = i * i; j <= maxNumber; j += i) {
      sieve[j] = false;
    }
  }
}

const prefix = new Array(maxNumber + 1).fill(0);
for (let i = 2; i <= maxNumber; i++) {
  prefix[i] = prefix[i - 1] + (sieve[i] ? 1 : 0);
}

console.log(
  inputs
    .map((v) => {
      return prefix[v * 2] - prefix[v];
    })
    .join("\n")
);
