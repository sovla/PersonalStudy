/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10816                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10816                          #+#        #+#      #+#    */
/*   Solved: 2025/03/01 13:25:37 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [N, haveNumbers, M, queryNumbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const haveMap = new Map();

haveNumbers.split(" ").forEach((element) => {
  haveMap.set(element, (haveMap.get(element) || 0) + 1);
});

const result = [];
queryNumbers.split(" ").forEach((element) => {
  result.push(haveMap.get(element) || 0);
});

console.log(result.join(" "));
