/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 5073                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/5073                           #+#        #+#      #+#    */
/*   Solved: 2025/02/26 23:04:02 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

inputs.forEach((value) => {
  if (value === "0 0 0") return;
  const data = value.split(" ").map(Number);

  if (data.reduce((a, b) => a + b) - Math.max(...data) <= Math.max(...data)) {
    console.log("Invalid");
    return;
  }
  const set = new Set(data);

  if (set.size === 3) {
    console.log("Scalene");
  } else if (set.size === 2) {
    console.log("Isosceles");
  } else {
    console.log("Equilateral");
  }
});
