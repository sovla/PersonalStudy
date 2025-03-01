/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10815                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10815                          #+#        #+#      #+#    */
/*   Solved: 2025/03/01 12:40:17 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [N, haveCards, M, determineCards] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const setHaveCards = new Set(haveCards.split(" ").map(Number));

const result = [];
determineCards.split(" ").forEach((v) => {
  result.push(setHaveCards.has(Number(v)) ? 1 : 0);
});
console.log(result.join(" "));
