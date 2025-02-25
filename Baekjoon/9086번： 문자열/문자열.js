/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 9086                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/9086                           #+#        #+#      #+#    */
/*   Solved: 2025/02/25 18:07:59 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [n, ...words] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const result = [];
words.forEach((word) => {
  result.push(word.at(0) + word.at(-1));
});

console.log(result.join("\n"));
