/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1929                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1929                           #+#        #+#      #+#    */
/*   Solved: 2025/03/01 22:25:21 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const [N, M] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const isPrime = (n) => {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i <= Math.sqrt(n); i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }

  return true;
};

const results = [];

const array = Array.from(
  {
    length: M - N + 1,
  },
  (_, i) => N + i
);

array.forEach((v) => {
  if (isPrime(v)) results.push(v);
});

console.log(results.join("\n"));

// 효율개선 방식
// const fs = require("fs");
// const [M, N] = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")
//   .map(Number);

// // N까지의 모든 수를 소수로 가정한 배열 생성 (0, 1은 소수가 아니므로 false 처리)
// const sieve = new Array(N + 1).fill(true);
// sieve[0] = false;
// sieve[1] = false;

// // 에라토스테네스의 체 알고리즘: 2부터 √N까지의 수에 대해
// for (let i = 2; i * i <= N; i++) {
//   if (sieve[i]) {
//     // i의 제곱부터 N까지 i의 배수를 모두 소수가 아님으로 처리
//     for (let j = i * i; j <= N; j += i) {
//       sieve[j] = false;
//     }
//   }
// }

// // M 이상 N 이하의 소수들을 결과 배열에 저장
// const result = [];
// for (let i = M; i <= N; i++) {
//   if (sieve[i]) result.push(i);
// }

// // 결과 출력: 각 소수를 새로운 줄에 출력
// console.log(result.join("\n"));
