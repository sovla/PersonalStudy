/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 11022                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/11022                          #+#        #+#      #+#    */
/*   Solved: 2025/02/25 08:37:41 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [number, ...numbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

const result = [];
for (let index = 0; index < +number; index++) {
  const [A, B] = numbers[index].split(" ").map(Number);
  result.push(`Case #${index + 1}: ${A} + ${B} = ${A + B}`);
}

console.log(result.join("\n"));
