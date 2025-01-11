
// 2진수의 1은 붉은색, 0은 흰색
// 0부터 n까지의 수 중 붉은색의 수는?
// int형식으로 출력하는 함수
//
// 예로, 숫자3
// 0을 이진수로 표현: 0
// 0을 표현할 때 붉은색 수: 0개
//
// 1을 이진수로 표현: 1
// 1을 표현할때 붉은색 수: 1개
//
// 2를 이진수로 표현: 10
// 2을 표현할때 붉은색 수: 1개
//
// 3을 이진수로 표현: 11
// 3을 표현할때 붉은색 수: 2개
//
// 결과: 0개 + 1개 + 1개 + 2개 = 4개
//
const solution = (n) => {
  let totalReds = 0;

  for (let i = 0; i <= n; i++) {
    const binary = i.toString(2); // i를 2진수 문자열로 변환
    const redCount = (binary.match(/1/g) || []).length; // '1'의 개수를 계산
    totalReds += redCount; // 누적합산
  }

  return totalReds; // 총 '1'의 개수를 반환
};

console.log(solution(3)); //결과는: 4
// ---------------------------------
function solution(n) {
  function getRedCount(n) {
    let binary = ''
    while (n > 0) {
      binary = n % 2 + binary;
      n = Math.floor(n / 2)
    }
    return binary.split('').filter(e => e === '1').length
  }

  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += getRedCount(i)
  }

  return total
}