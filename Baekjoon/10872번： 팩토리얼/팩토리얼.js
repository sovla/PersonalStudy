/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10872                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10872                          #+#        #+#      #+#    */
/*   Solved: 2025/03/02 20:35:26 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString().trim().split(" ")[0];

const factorial = (n) => {
  if (n >= 1) {
    return n * factorial(n - 1);
  } else {
    return 1;
  }
};
console.log(factorial(input));
