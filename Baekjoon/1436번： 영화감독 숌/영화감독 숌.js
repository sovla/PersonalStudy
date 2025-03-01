/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1436                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1436                           #+#        #+#      #+#    */
/*   Solved: 2025/03/01 09:57:42 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString().trim().split(" ")[0];

let count = 0;
for (let n = 666; count !== input; n++) {
  if (n.toString().match("666")) {
    count++;
    if (count === input) {
      console.log(n);
    }
  }
}
