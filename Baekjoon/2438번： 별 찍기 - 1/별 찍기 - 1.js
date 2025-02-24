/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2438                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2438                           #+#        #+#      #+#    */
/*   Solved: 2025/02/25 08:42:40 by sovla         ###          ###   ##.kr    */
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

console.log(result.join("\n"));
