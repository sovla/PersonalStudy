// 회사원 Demi는 가끔은 야근을 하는데요, 야근을 하면 야근 피로도가 쌓입니다. 야근 피로도는 야근을 시작한 시점에서 남은 일의 작업량을 제곱하여 더한 값입니다. Demi는 N시간 동안 야근 피로도를 최소화하도록 일할 겁니다.Demi가 1시간 동안 작업량 1만큼을 처리할 수 있다고 할 때, 퇴근까지 남은 N 시간과 각 일에 대한 작업량 works에 대해 야근 피로도를 최소화한 값을 리턴하는 함수 solution을 완성해주세요.

// 제한 사항
// works는 길이 1 이상, 20,000 이하인 배열입니다.
// works의 원소는 50000 이하인 자연수입니다.
// n은 1,000,000 이하인 자연수입니다.
// 입출력 예
// works	n	result
// [4, 3, 3]	4	12
// [2, 1, 2]	1	6
// [1,1]	3	0
// 입출력 예 설명
// 입출력 예 #1
// n=4 일 때, 남은 일의 작업량이 [4, 3, 3] 이라면 야근 지수를 최소화하기 위해 4시간동안 일을 한 결과는 [2, 2, 2]입니다. 이 때 야근 지수는 22 + 22 + 22 = 12 입니다.

// 입출력 예 #2
// n=1일 때, 남은 일의 작업량이 [2,1,2]라면 야근 지수를 최소화하기 위해 1시간동안 일을 한 결과는 [1,1,2]입니다. 야근지수는 12 + 12 + 22 = 6입니다.

// 입출력 예 #3

// 남은 작업량이 없으므로 피로도는 0입니다.

/**
 *
 * @param {number} n
 * @param {Array<number>} works
 * @returns
 */
function solution(n, works) {
  if (works.reduce((acc, cur) => acc + cur) <= n) return 0;

  let sortedWorks = works.sort((a, b) => b - a);
  while (n) {
    const max = sortedWorks[0];
    for (let index = 0; index < sortedWorks.length; index++) {
      const element = sortedWorks[index];
      if (element >= max) {
        sortedWorks[index] = element - 1;
        n--;
      }
      if (n === 0) break;
    }
  }

  return sortedWorks.reduce((acc, cur) => acc + cur ** 2, 0);
}
console.time("s");
console.log(solution(4, [4, 3, 3])); // 12
console.timeEnd("s");
console.log(solution(1, [2, 1, 2])); // 6
console.log(solution(3, [1, 1])); // 6
console.log(solution(10, [10, 10, 1])); // 51

// 효율성 테스트
console.time("s");
console.log(solution(1000000, Array(20000).fill(50000)));
console.timeEnd("s");
