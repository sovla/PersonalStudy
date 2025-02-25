/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1546                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1546                           #+#        #+#      #+#    */
/*   Solved: 2025/02/25 18:01:53 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const inputs = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")[1]
  .split(" ")
  .map(Number);

const maxValue = Math.max(...inputs);

console.log(
  inputs.map((v) => (v / maxValue) * 100).reduce((prev, curr) => prev + curr) /
    inputs.length
);
