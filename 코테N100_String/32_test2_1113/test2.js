
// 정수 n에서 각 자릿수에서 홀수를 출력하는 함수
const solution = (n) => {
  let answer = 0;
  [...String(n)].forEach(num => {
  // [...String(n)].filter(num => {
    if (num % 2 !== 0) {
      answer++;
    }
  });

  return answer;
};

console.log(solution(364829)); //각 자릿수의 홀수 값은 3,9로 결과는 2