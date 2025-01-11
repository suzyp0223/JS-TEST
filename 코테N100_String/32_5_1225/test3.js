
// 문자열 알파벳 S.
// 순서대로 문자열을 확인해서
// 2회 연속으로 동일한 문자가 나타나면 소거,
// 소거뒤에 나온 문자열에서
// 다시 연속해서 나오는 알파벳을 소거하는 작업을
// 더 이상 작업할것이 없을 때까지 반복.
// 최종 문자열이 완전히 소거되어 빈문자열 이면 1,
// 알파벳이 남아있으면 0을 반환 하는 함수.
const solution = (S) => {
  // return [...S].map(v => (S.indexOf(v) === S.lastIndexOf(v)) ? 1 : 0).join('');

  // return [...S].map(v => {
  //   if (S.indexOf(v) === S.lastIndexOf(v)) {
  //     return 1;
  //   }
  //   return 0;
  // });

  let stack = [];

  for (const char of S) {
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack = stack.slice(0, -1); // 마지막 문자 제거
    } else {
      stack = stack.concat(char); // 새로운 문자 추가
    }
  }

  return stack.length === 0 ? 1 : 0;
};

console.log(solution("ABBA")); //결과는: 1