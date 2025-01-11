

// n: 쌓고자 하는 피라미드의 층 수(정수)
// 피라미드 모양 탑은 1개의 블록
// 그 아래는 2개의 블록,
// 그 아래는 3개의 블록의 방식으로 쌓음.
// n 층의 피라미드 모양의 탑을 쌓을 때, 총 필요한 블록의 수는?

// MEMO 수학 공식: 1부터 n까지의 합을 구하는 공식
// 초6 ~ 중1 수학적 규칙성이나 등차수열의 합배우면서 공부하게 됨.
const solution = (n) => {

  let element = 0;  // 총 블록 수를 저장할 변수
  for (let i = 1; i <= n; i++) {
    element += i; // 각 층의 블록 수를 더함
  }
  return element;

};

console.log(solution(4)); // 결과는 10


// 자연수의 합
const solution2 = (n) => {
  // 1부터 n까지의 합 계산
  return (n * (n + 1)) / 2;
};

console.log(solution2(4)); // 결과는 10


// ============================
const solution3 = n => {
  let answer = 0;
  for (let i = n; i > 0; i--) {
    answer += i;
  }
  return answer;
}

