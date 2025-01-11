
// n개의 정수 배열 arr 배열 내 홀수의 개수를 출력하는 함수
const solution = (arr) => {
  let answer = 0;
  // [...arr].forEach(num =>
  [...arr].map(num =>
  {
    if (num % 2 !== 0) {
       return answer++;
    }
  });

  return answer;
};

console.log(solution([4, 8, 13, 6, 9])); // 홀수 2개