/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2566                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2566                           #+#        #+#      #+#    */
/*   Solved: 2025/02/26 07:48:41 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const inputs = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

let max = 0; // 최대값
let row = 0; // 최대값이 있는 행
for (let i = 0; i < 9; i++) {
  const maxNumber = Math.max(...inputs[i]);
  if (max < maxNumber) {
    max = maxNumber; // 최대값
    row = i;
  }
}
let col = inputs[row].findIndex((item) => item === max); // 최대값이 위치한 열

console.log(max);
console.log(row + 1, col + 1);
