/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2563                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2563                           #+#        #+#      #+#    */
/*   Solved: 2025/02/26 08:01:13 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [N, ...numbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const paper = new Array(100).fill(0).map(() => new Array(100).fill(0));
for (const element of numbers) {
  const [x, y] = element.split(" ").map(Number);
  for (let i = x; i < x + 10; i++) {
    for (let j = y; j < y + 10; j++) {
      paper[i][j] = 1;
    }
  }
}
console.log(
  paper.reduce((prev, curr) => prev + curr.flat().filter(Boolean).length, 0)
);
