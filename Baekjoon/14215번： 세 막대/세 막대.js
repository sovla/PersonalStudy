/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 14215                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/14215                          #+#        #+#      #+#    */
/*   Solved: 2025/02/27 11:28:41 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [a, b, c] = input;
// Sort sides in ascending order
[a, b, c] = [a, b, c].sort((x, y) => x - y);

// For a valid triangle, the largest side must be less than the sum of the other two
// If not, we need to reduce the largest side
if (a + b <= c) {
  c = a + b - 1;
}

// Calculate perimeter
const perimeter = a + b + c;
console.log(perimeter);
