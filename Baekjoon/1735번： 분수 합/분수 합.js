/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1735                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1735                           #+#        #+#      #+#    */
/*   Solved: 2025/03/01 15:00:29 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [line1, line2] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [a, b] = line1.split(" ").map(Number);
const [c, d] = line2.split(" ").map(Number);

// 최대공약수 (GCD) 함수: 유클리드 호제법
const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));

// 최소공배수 (LCM) 함수
const lcm = (x, y) => (x * y) / gcd(x, y);

// 두 분모의 최소공배수
const commonDenom = lcm(b, d);

// 두 분수의 합 계산
const numerator = a * (commonDenom / b) + c * (commonDenom / d);

// 기약분수로 만들기 위해 분자와 분모의 최대공약수를 구함
const commonGcd = gcd(numerator, commonDenom);

console.log(`${numerator / commonGcd} ${commonDenom / commonGcd}`);
