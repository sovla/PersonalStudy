/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 9063                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/9063                           #+#        #+#      #+#    */
/*   Solved: 2025/02/26 22:57:03 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [N, ...coordinates] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const x = [];
const y = [];
coordinates.forEach((v) => {
  const [dotX, dotY] = v.split(" ").map(Number);
  x.push(dotX);
  y.push(dotY);
});

const width = Math.max(...x) - Math.min(...x);
const height = Math.max(...y) - Math.min(...y);

console.log(width * height);
