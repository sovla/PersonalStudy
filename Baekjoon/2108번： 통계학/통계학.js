/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2108                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2108                           #+#        #+#      #+#    */
/*   Solved: 2025/03/05 14:31:47 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [N, ...numbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const results = [];
const total = numbers.reduce((a, b) => a + b, 0);

// 산술 평균
results.push(Math.round(total / N));

const sortNumbers = numbers.sort((a, b) => a - b);

// 중앙값
results.push(sortNumbers[Math.floor(numbers.length / 2)]);

const map = new Map();

let max = 0;
sortNumbers.forEach((v) => {
  const count = map.get(v) || 0;
  map.set(v, count + 1);

  if (max < map.get(v)) {
    max = map.get(v);
  }
});
const frq = [];

for (const [key, value] of map) {
  if (value === max) frq.push(key);
}

frq.sort((a, b) => a - b);

// 최빈값
results.push(frq.length > 1 ? frq.at(1) : frq.at(0));

const maxValue = Math.max(...sortNumbers);
const minValue = Math.min(...sortNumbers);

results.push(maxValue - minValue);

console.log(results.join("\n"));
