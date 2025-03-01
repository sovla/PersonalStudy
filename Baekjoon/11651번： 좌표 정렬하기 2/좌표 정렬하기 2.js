/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 11651                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/11651                          #+#        #+#      #+#    */
/*   Solved: 2025/03/01 11:48:51 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [N, ...coordinate] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

coordinate.sort((a, b) => {
  const [x, y] = a.split(" ").map(Number);
  const [x1, y1] = b.split(" ").map(Number);

  return y - y1 || x - x1;
});

console.log(coordinate.join("\n"));
