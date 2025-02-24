/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2439                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2439                           #+#        #+#      #+#    */
/*   Solved: 2025/02/25 08:46:21 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [number] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

const result = [];
for (let index = 0; index < number; index++) {
  result.push("*".repeat(index + 1));
}

console.log(result.map((v) => v.padStart(number, " ")).join("\n"));
