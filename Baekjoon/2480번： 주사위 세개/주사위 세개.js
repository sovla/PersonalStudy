/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2480                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2480                           #+#        #+#      #+#    */
/*   Solved: 2025/02/24 21:37:03 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");

// 입력값 읽기 및 파싱
const input = fs.readFileSync("/dev/stdin", "utf8").trim();
const [a, b, c] = input.split(" ").map(Number);

let prize = 0;

// 세 주사위의 눈이 모두 같은 경우
if (a === b && b === c) {
  prize = 10000 + a * 1000;
}
// 두 주사위의 눈이 같은 경우
else if (a === b || a === c) {
  prize = 1000 + a * 100;
} else if (b === c) {
  prize = 1000 + b * 100;
}
// 모두 다른 경우
else {
  const maxNumber = Math.max(a, b, c);
  prize = maxNumber * 100;
}

console.log(prize);
