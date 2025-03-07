/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 15650                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/15650                          #+#        #+#      #+#    */
/*   Solved: 2025/03/07 16:47:14 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [N, M] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const duplicateCheckSet = new Set();
const results = [];

const backtrack = (array) => {
  if (array.length === M) {
    const copyArray = [...array];
    const arrayString = copyArray.sort().toString();
    if (!duplicateCheckSet.has(arrayString)) {
      results.push(array.join(" "));
      duplicateCheckSet.add(arrayString);
    }

    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!array.includes(i)) {
      array.push(i);
      backtrack(array);
      array.pop();
    }
  }
};

backtrack([]);
console.log(results.join("\n"));
