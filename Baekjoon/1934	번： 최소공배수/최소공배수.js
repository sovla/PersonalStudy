/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1934	                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1934	                          #+#        #+#      #+#    */
/*   Solved: 2025/03/01 14:48:32 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const [N, ...numbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let output = "";

function gcd(a, b) {
  // 최대 공약수
  return b === 0 ? a : gcd(b, a % b);
}

numbers.forEach((v) => {
  const [x, y] = v.split(" ").map(Number);

  // 최소 공배수 = a,b 곱에 최대 공약수로 나눠 주면 됨
  output += `${(x * y) / gcd(x, y)}\n`;
});

console.log(output);
