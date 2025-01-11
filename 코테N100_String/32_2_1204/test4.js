
// 반복없이 가장 긴 알파벳 길이를 구하는 함수
// 예로, 문자열s가 "abssccbsbsv"일 때,
// 반복 없이 가장 긴 알파벳 길이는 3.
//11493 알파벳은 중복될수 있음, 반복 없는 가장 긴 문자열을 출력.
const solution = (s) => {
  let maxLength = 0; // 반복 없는 가장 긴 길이를 저장
  let currentSubstring = ''; // 현재 반복 없는 문자열을 저장

  for (let char of s) {
    // 현재 문자가 이미 currentSubstring에 포함되어 있다면
    if (currentSubstring.includes(char)) {
      // 현재 반복 없는 길이와 최대 길이를 비교하여 갱신
      maxLength = Math.max(maxLength, currentSubstring.length);

      // 중복된 문자 이후부터 새로운 문자열 시작
      const index = currentSubstring.indexOf(char);
      currentSubstring = currentSubstring.slice(index + 1);
    }
    // 현재 문자를 currentSubstring에 추가
    currentSubstring += char;
  }

  // 마지막으로 남은 currentSubstring 길이를 비교하여 갱신
  maxLength = Math.max(maxLength, currentSubstring.length);

  return maxLength;

};
console.log(solution("abssccbsbsv")); // 결과: 3


function solution2(s) {
  let cha = 0; // 부분 문자열의 시작 인덱스
  let max = 0;  // 가장 긴 길이
  let set = new Set();  // 현재 부분 문자열에서 본 문자들

  for (let i = 0; i < s.length; i++) {
    // 중복 문자가 있을 때까지 계속 확장
    while (set.has(s[i])) {
      // 중복 문자가 있으면 start를 한 칸씩 밀어서 중복 제거
      set.delete(s[cha]);
      cha++;
    }
    // 현재 문자를 Set에 추가
    set.add(s[i]);
    // 가장 긴 부분 문자열 길이 갱신
    // Math.max의  첫 번째 인자는 현재까지의 최대값을 저장
    // 두 번째 인자는 비교 대상(새로운 값)
    max = Math.max(max, i - cha + 1);
  }
  return max;
}

console.log(solution2("abssccbsbsv")); // 결과: 3

// --------------------------------
function solution(s) {
  let strings = [];
  let string = '';
  for (let i = 0; i < s.length; i++) {
    const charIndex = string.indexOf(s[i])
    if (charIndex === -1) {
      string += s[i]
    } else {
      strings.push(string);
      string = string.slice(charIndex + 1) + s[i];
    }
  }
  strings.push(string);
  return strings.sort((a, b) => b.length - a.length)[0].length
}

// ====================================
const solution = s => {
  let str = '';
  let maxLength = 0;

  for (const c of s) {

    if (str.includes(c)) {
      str = str.slice(str.indexOf(c) + 1);
    }
    str += c;

    maxLength = Math.max(maxLength, str.length);
  }

  return maxLength;
}

// ====================================


// ====================================