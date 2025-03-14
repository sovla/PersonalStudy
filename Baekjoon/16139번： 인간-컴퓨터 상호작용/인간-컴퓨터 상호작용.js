/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 16139                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/16139                          #+#        #+#      #+#    */
/*   Solved: 2025/03/14 14:36:34 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const [str, info, ...query] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const table = {};
table[-1] = Array.from({ length: 26 }, () => 0);

for (let i = 0; i < str.length; i++) {
  table[i] = [...table[i - 1]];
  const char = str[i].charCodeAt() - 97;
  table[i][char]++;
}

const results = query.map((el) => {
  const [alphabet, start, end] = el
    .split(" ")
    .map((v, i) => (i === 0 ? v : Number(v)));
  const char = alphabet.charCodeAt() - 97;
  return table[end][char] - table[start - 1][char];
});

console.log(results.join("\n"));
