/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 12789                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/12789                          #+#        #+#      #+#    */
/*   Solved: 2025/03/02 10:29:59 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
let [N, inputs] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const stack = [];

let peoples = inputs.split(" ").map(Number);

for (let i = 1; i <= N; i++) {
  while (stack.at(-1) !== i) {
    if (peoples.length) {
      stack.push(peoples.at(0));
      peoples = peoples.slice(1);
    } else {
      console.log("Sad");
      return;
    }
  }
  stack.pop();
}

console.log("Nice");
