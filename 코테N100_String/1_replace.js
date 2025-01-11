// https://coding-prep.notion.site/7753b4d99fa4436fa0abb64b2c71db92
// 특정 문자 제거하기
/*
문자열 str과 문자 letter이 매개변수로 주어집니다. 
str에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
*/

// 1번 풀이 for - 특정 문자 제거할땐 인덱스가 같은지 확인할것,
const solution1 = (str, letter) => {
  let src = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== letter) src += str[i];
  };
  return src;
};
console.log(solution1('abcdef', 'f')); // 'abcde'
console.log(solution1('BCBdbe', 'B')); // 'Cdbe'


// 2번 풀이 for...of
const solution2 = (str, letter) => {
  let res = '';
  for (const c of str) {
    if (c !== letter) res += c;
  };
  return res;
};
console.log(solution2('abcdef', 'f')); // 'abcde'
console.log(solution2('BCBdbe', 'B')); // 'Cdbe'


// 3번 풀이 - forEach
/**
 // if (!c.includes(letter)) res += c; XX오류
 * - indexOf()는 문자열에서 서브 문자열을 찾는 메서드인데,
 *    c는 이미 단일 문자이기 때문에 indexOf()를 사용할 필요가 없습니다.
 // if (c.indexOf(letter)) res += c; XX오류
 * - indexOf()는 찾는 문자의 위치(인덱스)를 반환하며, 찾지 못하면 -1을 반환.
 *    c가 문자이므로, letter가 c에 있을 수 없고 indexOf()는 단일 문자에서 사용할 필요가 없음.
 */
const solution3 = (str, letter) => {
  let res = '';
  [...str].forEach(c => {
    // if (c !== letter) res += c;
    if (c.indexOf(letter)) res += c;
  });
  return res;
};
console.log(solution3('abcdef', 'f')); // 'abcde'
console.log(solution3('BCBdbe', 'B')); // 'Cdbe'


// 4번 풀이 filter - 제거문자가 단일 문자일땐 요소로 접근!!. 인덱스로 접근할 필요없음.
const solution4 = (str, letter) => {
  return [...str].filter((c) => c !== letter).join('');
};
console.log(solution4('abcdef', 'f')); // 'abcde'
console.log(solution4('BCBdbe', 'B')); // 'Cdbe'


// 5번 풀이 정규표현식-replace(변수명, '');
const solution5 = (str, letter) => {
  // 정규표현식 리터럴 방식을 추구했으나 잘못사용함.실패
  // const reg = [letter] / g;

  // const reg = /[fB]/g;  // 정규표현식 리터럴로 f,B모두 찾는 방법
  // return str.replace(reg, '');

  // 매개변수를 정규표현식에 쓸때는 정규표현식생성자(동적)
  // replace는 한 번만 실행되기 때문에 전역을 뜻하는 g플래그를 써야함.
  const regExp = new RegExp(letter, 'g');
  return str.replace(regExp, '');
};
console.log(solution5('abcdef', 'f')); // 'abcde'
console.log(solution5('BCBdbe', 'B')); // 'Cdbe'


// 6번 풀이 reduce1
const solution6 = (str, letter) => {
  return [...str].reduce((acc, cur) => cur !== letter ? acc += cur : acc, '');
};

// reduce2
const solution7 = (str, letter) => {
  return [...str].reduce((acc, cur) => {
    if (cur !== letter) acc += cur;
    return acc;
  }, '');
}
console.log(solution6('abcdef', 'f')); // 'abcde'
console.log(solution6('BCBdbe', 'B')); // 'Cdbe'
