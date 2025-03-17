/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 13305                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/13305                          #+#        #+#      #+#    */
/*   Solved: 2025/03/17 10:21:42 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");

// 입력 데이터 읽기
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const distances = input[1].split(" ").map(Number);
const prices = input[2].split(" ").map(Number);

let minPrice = prices[0];
let total = BigInt(0);

for (let i = 0; i < N - 1; i++) {
  if (prices[i] < minPrice) {
    minPrice = prices[i];
  }

  total += BigInt(minPrice) * BigInt(distances[i]);
}
console.log(total.toString());
