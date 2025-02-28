/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2798                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2798                           #+#        #+#      #+#    */
/*   Solved: 2025/02/28 16:17:52 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const [info, strings] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const numbers = strings.split(" ").map(Number);

const [N, M] = info.split(" ").map(Number);

let result = 0;

for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    for (let k = j + 1; k < numbers.length; k++) {
      const addResult = +numbers[i] + +numbers[j] + +numbers[k];
      if (M >= addResult && result < addResult) {
        result = addResult;
      }
    }
  }
}

console.log(result);
