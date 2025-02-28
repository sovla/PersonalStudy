/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10101                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10101                          #+#        #+#      #+#    */
/*   Solved: 2025/02/26 23:00:33 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

// 세 각의 크기가 모두 60이면, Equilateral
// 세 각의 합이 180이고, 두 각이 같은 경우에는 Isosceles
// 세 각의 합이 180이고, 같은 각이 없는 경우에는 Scalene
// 세 각의 합이 180이 아닌 경우에는 Error

const fs = require("fs");
const inputs = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

if (inputs.reduce((a, b) => a + b) !== 180) {
  console.log("Error");
  return;
}

const set = new Set(inputs);

if (set.size === 3) {
  console.log("Scalene");
} else if (set.size === 2) {
  console.log("Isosceles");
} else {
  console.log("Equilateral");
}
