/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1157                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1157                           #+#        #+#      #+#    */
/*   Solved: 2025/02/25 21:42:33 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().toUpperCase();

// 문자 출현 횟수를 저장할 객체
const charCount = {};

// 한 번의 순회로 모든 문자 카운트
for (const char of input) {
  charCount[char] = (charCount[char] || 0) + 1;
}

let maxCount = 0;
let maxChar = "";

// 객체를 순회하며 최대값 찾기
for (const [char, count] of Object.entries(charCount)) {
  if (count > maxCount) {
    maxCount = count;
    maxChar = char;
  } else if (count === maxCount) {
    maxChar = "?";
  }
}

console.log(maxChar);
