/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 5597                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/5597                           #+#        #+#      #+#    */
/*   Solved: 2025/02/25 16:01:09 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const students = new Array(30).fill(0).map((v, i) => i + 1);

const fs = require("fs");
const numbers = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

numbers.forEach((v) => {
  const findIndex = students.indexOf(v);
  if (findIndex > -1) {
    students.splice(findIndex, 1);
  }
});
console.log(students.join("\n"));
