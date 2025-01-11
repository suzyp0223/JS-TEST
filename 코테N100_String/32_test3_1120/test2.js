
// 문자열 s. 중복된 글자를 제외한 문자 갯수를 출력하는 함수
const solution = (s) => {
  // s는 문자열 전체라서 인덱스i와 문자열 전체s를 비교하는건 논리에 어긋난다.
  // [...new Set(s)].filter((_, i) => i !== s ? answer++ : false);

  
  // 1번 답안
  let answer = [...new Set(s)].length;
  return answer;

  // 2번 답안
  // return new Set(s).size;
};

console.log(solution('google')); // 'g', 'o', 'l', 'e' 결과: 4