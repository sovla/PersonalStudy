/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 25305                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/25305                          #+#        #+#      #+#    */
/*   Solved: 2025/03/01 11:36:01 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [info, numbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, k] = info.split(" ").map(Number);
const sortedNumbers = numbers
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

console.log(+sortedNumbers[k - 1]);
