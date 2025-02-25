/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10810                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10810                          #+#        #+#      #+#    */
/*   Solved: 2025/02/25 11:09:36 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [basketInfo, ...numbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");
const [N, M] = basketInfo.split(" ").map(Number);
const basket = Array(N).fill(0);
numbers.forEach((v) => {
  const [start, end, value] = v.split(" ").map(Number);
  for (let index = 1; index <= basket.length; index++) {
    if (index >= start && index <= end) {
      basket[index - 1] = value;
    }
  }
});

console.log(basket.join(" "));
