/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10809                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10809                          #+#        #+#      #+#    */
/*   Solved: 2025/02/25 18:16:53 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const alphabet = new Array(123 - 97)
  .fill(0)
  .map((_, i) => String.fromCharCode(i + 97));

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const result = [];
alphabet.forEach((v) => {
  result.push(input.indexOf(v));
});

console.log(result.join(" "));
