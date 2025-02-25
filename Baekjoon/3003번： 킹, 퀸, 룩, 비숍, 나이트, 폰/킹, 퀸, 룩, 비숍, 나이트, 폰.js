/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 3003                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/3003                           #+#        #+#      #+#    */
/*   Solved: 2025/02/25 21:21:26 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const rightChessPieces = [1, 1, 2, 2, 2, 8];

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(
  rightChessPieces
    .map((v, i) => {
      return v - input[i];
    })
    .join(" ")
);
