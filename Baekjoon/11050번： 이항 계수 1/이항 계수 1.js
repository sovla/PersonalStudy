/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 11050                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/11050                          #+#        #+#      #+#    */
/*   Solved: 2025/03/02 20:55:14 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

// (n/K) 는 n! / k!(n-k)!로 계산가능
// (n/k) 는 n-1/k-1 + n-1/k로도 계산가능

const fs = require("fs");
const [n, k] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const factorial = (number) => {
  if (number > 1) {
    return factorial(number - 1) * number;
  } else {
    return 1;
  }
};

console.log(factorial(n) / (factorial(k) * factorial(n - k)));
