/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 4134                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/4134                           #+#        #+#      #+#    */
/*   Solved: 2025/03/01 15:55:01 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const [T, ...array] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const isPrime = (n) => {
  if (n <= 1) return false;
  if (n <= 3) return true;

  if (n % 2 === 0 || n % 3 === 0) return false;

  // 6k +-1로 검사
  for (let i = 5; i <= Math.sqrt(n); i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }

  return true;
};

const results = [];

for (let i = 0; i < T; i++) {
  const element = array[i];

  if (element <= 2) {
    // 2 이하인 경우엔 무조건 2가 정답
    results.push(2);
    continue;
  }

  // 짝수인 경우 홀수로 시작
  let candidate = element % 2 === 0 ? element + 1 : element;

  while (!isPrime(candidate)) {
    candidate++;
  }

  results.push(candidate);
}
isPrime(5);

console.log(results.join("\n"));
