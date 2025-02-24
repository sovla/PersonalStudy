/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10430                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10430                          #+#        #+#      #+#    */
/*   Solved: 2025/02/24 19:42:53 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require('fs');
const [A,B,C] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);


console.log((A+B)%C);
console.log(((A%C) + (B%C))%C);
console.log((A*B)%C);
console.log(((A%C) * (B%C))%C);