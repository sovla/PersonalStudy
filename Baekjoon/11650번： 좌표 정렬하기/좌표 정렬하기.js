/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 11650                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/11650                          #+#        #+#      #+#    */
/*   Solved: 2025/03/01 11:45:39 by sovla         ###          ###   ##.kr    */
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

  return x - x1 || y - y1;
});

console.log(coordinate.join("\n"));
