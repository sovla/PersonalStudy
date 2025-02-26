/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2581                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2581                           #+#        #+#      #+#    */
/*   Solved: 2025/02/26 22:03:15 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [N, M] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const primeNumbers = new Array(M - N + 1)
  .fill(0)
  .map((_, i) => i + N)
  .filter((v) => {
    if (v < 2) return false; // 1과 0은 소수가 아님
    let isPrime = true;
    for (let index = 2; index <= Math.sqrt(v) && isPrime; index++) {
      if (v % index === 0) {
        isPrime = false;
      }
    }
    return isPrime;
  });

if (primeNumbers.length) {
  console.log(primeNumbers.reduce((a, b) => a + b, 0));
  console.log(Math.min(...primeNumbers));
} else {
  console.log("-1");
}
