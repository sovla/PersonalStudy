/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 11478                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/11478                          #+#        #+#      #+#    */
/*   Solved: 2025/03/01 14:19:53 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const set = new Set();
const length = input.length;

for (let i = 0; i < length; i++) {
  for (let j = i + 1; j <= length; j++) {
    set.add(input.slice(i, j)); // slice()를 사용하여 서브스트링 생성
  }
}

console.log(set.size);
