/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 15552                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/15552                          #+#        #+#      #+#    */
/*   Solved: 2025/02/24 22:11:20 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [number, ...numbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");
let result = [];
for (let index = 0; index < number; index++) {
  const addResult = numbers[index]
    .split(" ")
    .map(Number)
    .reduce((prev, curr) => prev + curr, 0);
  result.push(addResult);
}
console.log(result.join("\n"));
