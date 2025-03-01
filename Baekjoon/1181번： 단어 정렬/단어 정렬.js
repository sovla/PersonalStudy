/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1181                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1181                           #+#        #+#      #+#    */
/*   Solved: 2025/03/01 11:49:35 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [N, ...inputs] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const sets = new Set(inputs);

const sortedArray = [...sets.keys()].sort().sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  }
});

console.log(sortedArray.join("\n"));
