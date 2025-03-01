/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1269                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1269                           #+#        #+#      #+#    */
/*   Solved: 2025/03/01 13:49:15 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [info, N, M] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const numbers = N.split(" ").map(Number);
const numbers2 = M.split(" ").map(Number);

const getDifferenceOfSetsCount = (array, array2) => {
  const set = new Set(array);

  array2.forEach((v) => {
    set.delete(v);
  });
  return set.size;
};

const count =
  getDifferenceOfSetsCount(numbers, numbers2) +
  getDifferenceOfSetsCount(numbers2, numbers);

console.log(count);
