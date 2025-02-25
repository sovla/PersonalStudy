/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2738                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2738                           #+#        #+#      #+#    */
/*   Solved: 2025/02/26 07:36:09 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const [line, ...numbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = line.split(" ").map(Number);
const twoDimensionalArray = new Array(N)
  .fill(0)
  .map(() => new Array(M).fill(0));

for (let index = 0; index < numbers.length; index++) {
  const accessIndex = index % N;

  const lines = numbers[index].split(" ").map(Number);

  for (let elementIndex = 0; elementIndex < lines.length; elementIndex++) {
    const element = lines[elementIndex];

    twoDimensionalArray[accessIndex][elementIndex] += element;
  }
}

console.log(twoDimensionalArray.map((v) => v.join(" ")).join("\n"));
