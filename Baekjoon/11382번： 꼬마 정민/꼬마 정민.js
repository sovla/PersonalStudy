/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 11382                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/11382                          #+#        #+#      #+#    */
/*   Solved: 2025/02/24 19:46:27 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

console.log(input.reduce((a,b)=>a+b));



