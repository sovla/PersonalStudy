/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1018                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1018                           #+#        #+#      #+#    */
/*   Solved: 2025/02/28 17:29:56 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [info, ...inputs] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const chessboard = inputs.map((row) => row.split(""));
const [N, M] = info.split(" ").map(Number);

let repaintedCount = Number.MAX_SAFE_INTEGER;

for (let i = 0; i <= chessboard.length - 8; i++) {
  for (let j = 0; j <= chessboard[i].length - 8; j++) {
    const firstChessboardColor = chessboard[i][j];
    let count = 0;

    for (let k = 0; k < 8; k++) {
      for (let m = 0; m < 8; m++) {
        const element = chessboard[i + k][j + m];
        const indexRemainder = (k + m) % 2;
        if (indexRemainder === 1 && element == firstChessboardColor) {
          count++;
        }
        if (indexRemainder === 0 && element != firstChessboardColor) {
          count++;
        }
      }
    }
    // 반대로 칠하는 경우도 존재
    const countAlternative = 64 - count;
    const minCount = Math.min(count, countAlternative);
    if (minCount < repaintedCount) {
      repaintedCount = minCount;
    }
  }
}
console.log(repaintedCount === Number.MAX_SAFE_INTEGER ? 0 : repaintedCount);
