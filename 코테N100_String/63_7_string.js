// https://coding-prep.notion.site/4e46d397de4f476186205db4c34d330d
// 중복된 문자 제거

// indexOf, includes, Set
/*
입출력 예 #1
- "people"에서 중복된 문자 "p"와 "e"을 제거한 "peol"을 return합니다.
입출력 예 #2
- "We are the world"에서 중복된 문자 "e", " ", "r" 들을 제거한 "We arthwold"을 return합니다.
*/

/**
 * @param {string} str
 * @return {string}
 */
// 1번 풀이 - set
const solution1 = str => [...new Set(str)].join('');
console.log(solution1);
console.log(solution1('people')); // 'peol'
console.log(solution1('We are the world')); // 'We arthwold'


// 2번 풀이 - filter
const solution2 = str => {
  return [...str].filter((c, i) => {
    return str.indexOf(c) === i
  }).join('');

  // console.log(str.indexOf(c)); // c-문자열 요소
  //문자열에서 현재 문자가 처음으로 등장하는 위치(인덱스)를 반환
  // console.log(str.indexOf(str[i]));  // str[i]-인덱스
};
console.log(solution2('people')); // 'peol'
console.log(solution2('We are the world')); // 'We arthwold'


// 3번 풀이 - reduce  // reduce사용시 초기값 설정 잊지 말것!!!
const solution3 = str => {
  return [...str].reduce((acc, cur) => {
    if (!acc.includes(cur)) {
      acc += cur;
    }
    return acc;
  }, '');
};
console.log(solution3('people')); // 'peol'
console.log(solution3('We are the world')); // 'We arthwold'


// 4번 풀이 - for
const solution4 = str => {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    // indexOf는 인수로 전달받은 문자열을 검색하여 첫번째 인덱스를 반환한다. 검색에 실패하면 -1을 반환한다.
    if (str.indexOf(str[i]) === i) res += str[i];
  }
  return res;
}
console.log(solution4('people')); // 'peol'
console.log(solution4('We are the world')); // 'We arthwold'


// 5번 풀이 - for...of
const solution5 = str => {
  let res = '';
  for (const c of str) {
    if (!res.includes(c)) res += c;
  }
  return res;
}
console.log(solution5('people')); // 'peol'
console.log(solution5('We are the world')); // 'We arthwold'
