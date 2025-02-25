/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 25206                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/25206                          #+#        #+#      #+#    */
/*   Solved: 2025/02/25 22:55:59 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const grade = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

let totalScore = 0;
let addGradeScore = 0;
for (const input of inputs) {
  const [className, score, gradeScore] = input.split(" ");
  if (gradeScore === "P") continue;

  totalScore += +score;

  addGradeScore += +score * grade[gradeScore];
}
console.log(addGradeScore / totalScore);
