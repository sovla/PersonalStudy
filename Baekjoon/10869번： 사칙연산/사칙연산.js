/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10869                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10869                          #+#        #+#      #+#    */
/*   Solved: 2025/02/24 17:41:47 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const [a,b] = input.map(Number);



console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(Math.floor(a/b));
console.log(a%b);

