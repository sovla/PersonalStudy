/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2588                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2588                           #+#        #+#      #+#    */
/*   Solved: 2025/02/24 19:43:54 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require('fs');
const [A,B] = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

console.log(A*(B%10));

console.log(A*Math.floor((B%100/10)));

console.log((A*Math.floor(B/100)));

console.log(A*B);