
// 문자열 s가 target에 포함되는지 여부를 출력하는 함수
const solution = (s, target) => {
  const answer = true;

  if (target.indexOf(s) != -1) {
    return answer;
  }
  return false;


};

console.log(solution('ka', 'kakao')); // s 'ka, target 'kakao' = true