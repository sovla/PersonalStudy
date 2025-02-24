/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 25304                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/25304                          #+#        #+#      #+#    */
/*   Solved: 2025/02/24 22:02:19 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [total, count, ...items] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

let calculateReduce = 0;
for (let index = 0; index < count; index++) {
  const [value, itemCount] = items[index].split(" ").map(Number);
  calculateReduce += value * itemCount;
}
console.log(+total === calculateReduce ? "Yes" : "No");
