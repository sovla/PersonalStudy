/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 25501                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/25501                          #+#        #+#      #+#    */
/*   Solved: 2025/03/02 23:04:08 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const results = [];
let recursionCount = 0;
const recursion = (s, l, r) => {
  recursionCount++;
  if (l >= r) {
    return 1;
  } else if (s[l] != s[r]) {
    return 0;
  } else {
    return recursion(s, l + 1, r - 1);
  }
};

const isPalindrome = (str) => {
  return recursion(str, 0, str.length - 1);
};

const fs = require("fs");
const [N, ...words] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

words.forEach((v) => {
  const isTruthNumber = isPalindrome(v);

  results.push(`${isTruthNumber} ${recursionCount}`);
  recursionCount = 0;
});

console.log(results.join("\n"));
