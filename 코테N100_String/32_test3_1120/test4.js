
// 16진수 s를 2진수로 변환하여 출력하는 프로그램.
// s는 문자열, 숫자(0 ~ 9)와 알파벳 소문자(a ~ f)
const solution = (s) => {
  let answer = parseInt(s, 16).toString(2);

  console.log("answer:", answer);




  return answer;


};

console.log(solution("f4")); // "11110100"