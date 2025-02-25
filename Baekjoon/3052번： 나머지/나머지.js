/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 3052                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/3052                           #+#        #+#      #+#    */
/*   Solved: 2025/02/25 16:05:30 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const inputs = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const set = new Set();

inputs
  .filter((v) => Number.isInteger(v))
  .forEach((v) => {
    set.add(v % 42);
  });
console.log(set.size);
