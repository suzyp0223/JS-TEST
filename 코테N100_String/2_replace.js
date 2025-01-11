// https://coding-prep.notion.site/bf20fd8dbecc4ba6be1c225c8c8d3dfd
// https://school.programmers.co.kr/learn/courses/30/lessons/120849
// 모음제거


// a, e, i, o, u 다섯 가지 알파벳을 모음을 제거
// 1번 풀이 for
const solution1 = str => {
  const target = 'aeiou';
  let src = '';
  for (let i = 0; i < str.length; i++) {
    if (!target.includes(str[i])) src += str[i];
    // !target.includes(str[i]) ? src += str[i] : null;
  };
  return src;
};
console.log(solution1('bus')); // 'bs'
console.log(solution1('nice to meet you')); // 'nc t mt y'



// 2번 풀이 forEach
const solution2 = str => {
  const target = 'aeiou';
  let src = '';
  [...str].forEach(c => {
    if (!target.includes(c)) src += c;
  });
  return src;
};
console.log(solution2('bus')); // 'bs'
console.log(solution2('nice to meet you')); // 'nc t mt y'



// 3번 풀이 for...of
const solution3 = str => {
  const vowels = 'aeiou';
  let result = '';
  for (const c of str) {
    if (!vowels.includes(c)) result += c;
  }
  return result;
};
console.log(solution3('bus')); // 'bs'
console.log(solution3('nice to meet you')); // 'nc t mt y'



// 4번 풀이 정규표현식-replace(변수명, '');
const solution4 = str => {
  const regExp = /[aeiou]/g;
  return str.replace(regExp, '');
};
console.log(solution4('bus')); // 'bs'
console.log(solution4('nice to meet you')); // 'nc t mt y'



// 5번 풀이 reduce -모음을 제외한 문자 누적.
const solution5 = str => {
  const vowels = 'aeiou';
  return [...str].reduce((acc, cur) => vowels.includes(cur) ? acc : acc + cur, '');
};
console.log(solution5('bus')); // 'bs'
console.log(solution5('nice to meet you')); // 'nc t mt y'



// 6번 풀이 filter
const solution6 = str => {
  const vowels = 'aeiou';
  return [...str].filter((c) => !vowels.includes(c)).join('');
};
console.log(solution6('bus')); // 'bs'
console.log(solution6('nice to meet you')); // 'nc t mt y'
