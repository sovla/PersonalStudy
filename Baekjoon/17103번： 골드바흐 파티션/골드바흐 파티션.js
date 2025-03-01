/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 17103                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/17103                          #+#        #+#      #+#    */
/*   Solved: 2025/03/01 22:53:13 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [n, ...numbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const results = [];

const MAX = 1000001;
const sieve = new Array(MAX).fill(true);
sieve[0] = sieve[1] = false;

for (let i = 2; i * i <= MAX; i++) {
  if (sieve[i]) {
    for (let j = i * i; j < MAX; j += i) {
      sieve[j] = false;
    }
  }
}

numbers.forEach((v) => {
  let result = 0;

  for (let i = 2; i <= v / 2; i++) {
    if (sieve[i] && sieve[v - i]) {
      result++;
    }
  }
  results.push(result);
});

console.log(results.join("\n"));

// 소수들의 집합
// 소수들의 더한 값을 미리 저장해둔다? -> 배열 돌면서 소수 구하고 구한 소수끼리 더하고.. 이게 더 복잡할것 같음
//
