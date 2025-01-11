
// 문자열에서 제일 처음으로 두번 등장하는
// 문자를 출력하는 함수
// 예로, "google"에서 제일 처음 두번 등장하는 문자는 "o"
// 만약 못찾으면 빈문자열('') 반환
// 소문자로만 이루어짐
/**
 * @param s {string}
 * @returns {string}
 */
const solution = (s) => {
  const seen = new Set(); // 이미 본 문자를 저장할 집합

  for (let char of s) {
    if (seen.has(char)) {
      return char; // 이미 본 문자라면 반환
    }
    seen.add(char); // 본 적 없는 문자라면 추가
  }

  return ''; // 끝까지 중복된 문자가 없으면 빈 문자열 반환
};


console.log(solution("google")); //결과는: "o"
// ---------------------------
/**
 * @param s {string}
 * @returns {string}
 */
function solution(s) {
  let letter = '';
  for (let i = 0; i < s.length; i++) {
    for (let k = 0; k < i; k++) {
      if (s[k] === s[i]) {
        letter = s[k];
        return letter
      }
    }
  }
  return letter
}