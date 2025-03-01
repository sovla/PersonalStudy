/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1620                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1620                           #+#        #+#      #+#    */
/*   Solved: 2025/03/01 13:19:05 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [info, ...pokemons] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = info.split(" ").map(Number);

const pokemonMap = new Map();
const pokemonArray = new Array(N + 1); // 1-based index

// 포켓몬 이름과 번호를 매핑
pokemons.slice(0, N).forEach((name, index) => {
  pokemonMap.set(name, index + 1); // 미리 1을 더해서 저장
  pokemonArray[index + 1] = name; // 1-based index 배열
});

// 질의(queries) 처리
const result = pokemons.slice(N).map((query) => {
  return isNaN(query) ? pokemonMap.get(query) : pokemonArray[Number(query)];
});

// 결과 출력
console.log(result.join("\n"));
