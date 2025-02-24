/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10950                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10950                          #+#        #+#      #+#    */
/*   Solved: 2025/02/24 21:58:30 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [count, ...numbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

for (let index = 0; index < +count; index++) {
  const [a, b] = numbers[index].split(" ").map(Number);
  console.log(a + b);
}
