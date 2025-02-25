/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2444                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2444                           #+#        #+#      #+#    */
/*   Solved: 2025/02/25 21:23:51 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

/* 2. 1부터 N-1까지 공백과 별 찍기 */
for (let i = 1; i < input; i++) {
  let blank = " ".repeat(input - i);
  let stars = "*".repeat(2 * i - 1);
  console.log(blank + stars);
}

/* 3. N부터 1까지 공백과 별 찍기 */
for (let i = input; i > 0; i--) {
  let blank = " ".repeat(input - i);
  let stars = "*".repeat(2 * i - 1);
  console.log(blank + stars);
}
