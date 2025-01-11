// https://coding-prep.notion.site/l-cb875e73169f4efeb8a89537771bf12e
// https://school.programmers.co.kr/learn/courses/30/lessons/181834
// l로 만들기

// 알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 return 하는 solution 함수
/**
 *입출력 예 #1
- 0 ~ 4번 인덱스의 문자 "a","b","c","d","e"는 각각 "l"보다 앞서는 문자입니다. 따라서 "l"로 고쳐줍니다.
- 그 외의 문자는 모두 "l"보다 앞서지 않는 문자입니다. 따라서 바꾸지 않습니다.
- 따라서 "lllllvwxyz"을 return 합니다.
 *입출력 예 #2
- 0번, 1번, 6번, 7번 인덱스의 문자 "j","j","k","k"는 각각 "l"보다 앞서는 문자입니다. 따라서 "l"로 고쳐줍니다.
- 그 외의 문자는 모두 "l"보다 앞서지 않는 문자입니다. 따라서 바꾸지 않습니다.
- 따라서 "llnnllllmm"을 return 합니다.
 */

/* IDEA)
1. 오름차순 정렬시 l 보다 숫자가 작으면 l로 변경, 작으면 그대로 유지. a < z.
*/
// 1번 풀이 for문
const solution1 = (str) => {
  const target = 'l';
  let src = '';
  for (let i = 0; i < str.length; i++) {
    str[i] < target ? src += 'l' : src += str[i]
  };
  return src;
};
console.log(solution1('abcdevwxyz')); // 'lllllvwxyz'
console.log(solution1('jjnnllkkmm')); // 'llnnllllmm'


// 2번 풀이 for...of
const solution2 = (str) => {
  const target = 'l';
  let src = '';
  for (const c of str) {
    c < target ? src += 'l' : src += c;
  }
  return src;
};
console.log(solution2('abcdevwxyz')); // 'lllllvwxyz'
console.log(solution2('jjnnllkkmm')); // 'llnnllllmm'


// // 3번 풀이 forEach
const solution3 = (str) => {
  const target = 'l';
  let src = '';
  [...str].forEach(c =>
    c < target ? src += 'l' : src += c
  );
  return src;
};
console.log(solution3('abcdevwxyz')); // 'lllllvwxyz'
console.log(solution3('jjnnllkkmm')); // 'llnnllllmm'


// 4번 풀이 정규표현식 regExp - a~k를 l로 변경
const solution4 = (str) => {
  return str.replace(/[a-k]/g, 'l');
};
console.log(solution4('abcdevwxyz')); // 'lllllvwxyz'
console.log(solution4('jjnnllkkmm')); // 'llnnllllmm'


// 5번 풀이 map
const solution5 = (str) => {
  const target = 'l';
  return [...str].map(c =>
    c < target ? target : c
  ).join('');
};
console.log(solution5('abcdevwxyz')); // 'lllllvwxyz'
console.log(solution5('jjnnllkkmm')); // 'llnnllllmm'


// 6번 풀이 reduce
// 이전까지 누적된 값 acc에 현재 문자 cur가 target보다 작은 경우에는
// target을, 그렇지 않으면 c를 더하여 새로운 누적 값을 만들어냄.
const solution6 = (str) => {
  const target = 'l';
  return [...str].reduce((acc, cur) => acc + (cur < target ? target : cur), '');
};
console.log(solution6('abcdevwxyz')); // 'lllllvwxyz'
console.log(solution6('jjnnllkkmm')); // 'llnnllllmm'


/**
 * 이 문제는 값을 변경하거나 대체하는 문제라서 필터링 하는 용도인 filter()메서드가 적합하지 않다.
 * filter()는 요소를 남길지 여부를 결정하는 데 사용되며, 값을 변경하고자 한다면 map()을 사용하는 것이 적합하다.
 */