/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 11021                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/11021                          #+#        #+#      #+#    */
/*   Solved: 2025/02/25 08:20:38 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const [number, ...numbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");
const result = [];

for (let index = 0; index < +number; index++) {
  const addResult = numbers[index]
    .split(" ")
    .reduce((prev, curr) => +prev + +curr, 0);
  result.push(addResult);
}

console.log(result.map((v, i) => `Case #${i + 1}: ${v}`).join("\n"));
