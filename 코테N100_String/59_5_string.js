// https://coding-prep.notion.site/c18bf1673ce44c8486f6343eec380702
// 글자 지우기

// 1번 풀이 for문
// 특정 인덱스에 해당하지 않는 문자로 새롭게 문자열을 생성하는 방법
const solution1 = (str, indices) => {
  let res = '';

  for (let i = 0; i < str.length; i++) {
    if (!indices.includes(i)) res += str[i];
  }
  return res;
};
console.log(solution1('apporoograpemmemprs', [1, 16, 6, 15, 0, 10, 11, 3])); // 'programmers'



// 특정 인덱스의 문자를 제거
// 2번 풀이 for...of
const solution2 = (str, indices) => {
  // indices 배열을 내림차순으로 정렬
  indices.sort((a, b) => b - a);

  // 각 인덱스에 해당하는 문자를 순차적으로 제거
  for (const i of indices) {
    str = str.slice(0, i) + str.slice(i + 1);
  }
  return str;
};
console.log(solution2('apporoograpemmemprs', [1, 16, 6, 15, 0, 10, 11, 3])); //  "programmers"



// 3번 풀이 filter
// str문자열에 indices가 포함되지 않은 문자열만 반환.
const solution3 = (str, indices) => {
  // 특정 인덱스에 해당하지 않는 문자로 새롭게 문자열을 생성
  return [...str].filter((_, i) => !indices.includes(i)).join('');

  // 인덱스가 아니라 문자c가 indices배열에 있는지 확인하는 코드. 인덱스i를 확인해야함.
  // [...str].filter((c) => indices.indexOf(c) ).join('');
};
console.log(solution3('apporoograpemmemprs', [1, 16, 6, 15, 0, 10, 11, 3])); // 'programmers'
