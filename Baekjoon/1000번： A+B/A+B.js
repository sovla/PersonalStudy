/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1000                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1000                           #+#        #+#      #+#    */
/*   Solved: 2025/02/24 17:16:00 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */


const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

console.log(input.reduce((prev,curr)=> +prev + +curr,0))