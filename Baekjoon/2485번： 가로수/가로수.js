/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2485                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2485                           #+#        #+#      #+#    */
/*   Solved: 2025/03/01 15:41:03 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const fs = require("fs");
const [N, ...numbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const diffs = [];

// 간격 구하기
numbers.forEach((value, index) => {
  if (index + 1 === numbers.length) return;
  diffs.push(numbers[index + 1] - value);
});

// 갭들의 최대 공약수 구하기
let commonGap = diffs[0];
for (let i = 1; i < diffs.length; i++) {
  commonGap = gcd(commonGap, diffs[i]);
}

let answer = 0;

for (const diff of diffs) {
  // 간격에서 최대 공약수로 나누면 사이에 심어야 되는 갯수
  // Ex 4간격에 최대공약수가 2인경우 사이에 심게 되는건 1이니 -1
  answer += diff / commonGap - 1;
}
console.log(answer);
