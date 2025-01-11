
// 1부터 n까지 자연수 모두 곱하는 함수
const solution = ( n ) => {
  let answer = 1;

  for (let i = 1; i <= n; i++) {
    answer = answer * i;
  }


  return answer;

  // return n * (n + 1);
};

console.log(solution(5)); // 1*2*3*4*5 = 120