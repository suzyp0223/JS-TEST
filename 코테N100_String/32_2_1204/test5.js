
// 문자열s가 pangram 인지 판단하는 함수
// pangram이란 모든 알파벳이 사용된 문장을 뜻함.
// s는 소문자 알파벳과 공백(' ')으로만 구성됨.
//12624 pangram 이면 true 아니면 false 출력.
const solution = (s) => {
  // / 문자열에서 공백을 제거하고, Set을 통해 고유 알파벳만 추출
  const onlyCha = new Set(s.replace(/ /g, ''));

  // 고유 알파벳의 개수가 26개라면 Pangram
  const isCha = onlyCha.size === 26;
  return isCha;
};

console.log(solution("abcdefghijklmnopqrstuvwxyz")); // 답안: true

// -----------------------
function solution(s) {
  const strSet = new Set(s.split(' ').join(''));
  return strSet.size >= 26
}

// ======================
const solution = s => new Set(s.replace(/ /g, '')).size === 26;

// ======================
function solution(s) {
  const allAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  return allAlphabet.split('').every(item => s.includes(item));
}

// ======================