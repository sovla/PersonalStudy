/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 9184                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/9184                           #+#        #+#      #+#    */
/*   Solved: 2025/03/10 12:40:41 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const map = new Map();

const w = (a, b, c) => {
  const key = `${a} ${b} ${c}`;
  const cache = map.has(key);
  if (cache) {
    return map.get(key);
  }
  if (a <= 0 || b <= 0 || c <= 0) {
    map.set(key, 1);
    return 1;
  }

  if (a > 20 || b > 20 || c > 20) {
    const result = w(20, 20, 20);
    map.set(key, result);
    return result;
  }

  if (a < b && b < c) {
    const result = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
    map.set(key, result);
    return result;
  }

  const result =
    w(a - 1, b, c) +
    w(a - 1, b - 1, c) +
    w(a - 1, b, c - 1) -
    w(a - 1, b - 1, c - 1);
  map.set(key, result);
  return result;
};

const fs = require("fs");
const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const results = [];

inputs.forEach((v) => {
  const [a, b, c] = v.split(" ").map(Number);

  if (a === -1 && a === b && b === c) {
    return;
  }

  results.push(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
});

console.log(results.join("\n"));
