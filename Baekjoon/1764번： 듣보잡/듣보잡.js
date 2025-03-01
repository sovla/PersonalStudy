/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1764                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1764                           #+#        #+#      #+#    */
/*   Solved: 2025/03/01 13:30:04 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [info, ...peoples] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const set = new Set(peoples);

console.log(peoples.length - set.size);

const result = [];
peoples.forEach((v) => {
  if (set.has(v)) {
    set.delete(v);
  } else {
    result.push(v);
  }
});
console.log(result.sort().join("\n"));
