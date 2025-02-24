/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2739                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2739                           #+#        #+#      #+#    */
/*   Solved: 2025/02/24 21:56:31 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [number] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

for (let index = 1; index < 10; index++) {
  console.log(`${number} * ${index} = ${number * index}`);
}
