
// b = a*c  / a를 b의 양의 약수라 할때
// 자연수 n 의 양의 약수 개수를 출력하는 프로그램.
const solution = (n) => {

  let answer = 0;

  // 1번
  // for (let i = 0; i <= n; i++) {
  //   if (n % i === 0) answer++;
  // }

  // 2번
  for (let i = 1; i * i <= n; i++) {
    if (i * i == n) {
      answer++;
    } else if (n % i === 0) {
      answer += 2;
    }

  }


  return answer;


};

console.log(solution(10)); // 4  / 10의 양의 약수는 1,2,5,10