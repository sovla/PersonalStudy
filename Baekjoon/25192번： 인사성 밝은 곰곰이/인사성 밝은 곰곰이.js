/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 25192                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/25192                          #+#        #+#      #+#    */
/*   Solved: 2025/03/02 22:24:41 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [N, ...chat] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let set = new Set();
let result = 0;
chat.forEach((v) => {
  if (v === "ENTER") {
    result += set.size;
    set = new Set();
  } else {
    set.add(v);
  }
});

console.log(result + set.size);
