/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 14425                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/14425                          #+#        #+#      #+#    */
/*   Solved: 2025/03/01 13:04:23 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const [info, ...words] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = info.split(" ").map(Number);

const S = new Set(words.slice(0, N));

let count = 0;
words.slice(N).forEach((v) => {
  S.has(v) && count++;
});

console.log(count);
