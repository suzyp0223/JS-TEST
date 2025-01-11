// https://coding-prep.notion.site/4e46d397de4f476186205db4c34d330d
// 중복된 문자 제거
// https://school.programmers.co.kr/learn/courses/30/lessons/120888


// 입출력 예 #1
// - "people"에서 중복된 문자 "p"와 "e"을 제거한 "peol"을 return합니다.
// 입출력 예 #2
//   - "We are the world"에서 중복된 문자 "e", " ", "r" 들을 제거한 "We arthwold"을 return합니다.

/**
 * @param {string} str
 * @return {string}
 */
const solution = str => [...new Set(str)].join('');
console.log(solution('people')); // 'peol'
console.log(solution('We are the world')); // 'We arthwold'