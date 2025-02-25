/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2675                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2675                           #+#        #+#      #+#    */
/*   Solved: 2025/02/25 18:20:27 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [N, ...wordInfo] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const result = [];
wordInfo.forEach((v) => {
  const [repeatCount, word] = v.split(" ");

  let repeatWord = "";
  for (let index = 0; index < word.length; index++) {
    repeatWord += word.at(index).repeat(+repeatCount);
  }
  result.push(repeatWord);
});

console.log(result.join("\n"));
