/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 26069                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/26069                          #+#        #+#      #+#    */
/*   Solved: 2025/03/05 14:20:39 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const seeingPerson = new Set();
seeingPerson.add("ChongChong");

const fs = require("fs");
const [N, ...person] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (const element of person) {
  const [A, B] = element.split(" ");

  if (
    (seeingPerson.has(A) && !seeingPerson.has(B)) ||
    (!seeingPerson.has(A) && seeingPerson.has(B))
  ) {
    seeingPerson.add(A);
    seeingPerson.add(B);
    isAdd = true;
  }
}

console.log(seeingPerson.size);
