// https://coding-prep.notion.site/bfdf94fb7d2b42ccb4f95d1a200bde81
// https://school.programmers.co.kr/learn/courses/30/lessons/181864
// 문자열 바꿔서 찾기

// 문자열 순회하면서 'A'면 'B'로 변경 'B'면 'A'로 변경하기
// part가 str에 있으면 1 없으면 0 반환 - include.

// 1번 풀이 for루프
/*
  1. str의 A, B를 변경,
  2. part에 str이 연속해서 있는지 확인해서 1, 0 리턴.
*/
// 'A', 'B' 만 고려한 코드
// 'A', 'B' 외의 다른 코드까지 고려한 코드
const solution = (str, part) => {
  let oppositeStr = '';
  for (let i = 0; i < str.length; i++) {
    // str[i] === 'A'이면 직접 'B'를 oppositeStr에 추가하고, 아니면 'A'를 추가함.
    // 즉, 동작은 동일하지만, 조건에 따라 서로 다른 대입문이 실행됨.
    str[i] === 'A' ? oppositeStr += 'B' : oppositeStr += 'A'  // 'A', 'B' 만 고려한 코드
    // oppositeStr += str[i] === 'A' ? 'B' : 'A'  // 위 코드를 아래 처럼 고칠수도 있다. 삼항 연산자 전체가 하나의 표현식으로 처리
    // 결론적으로 결과는 동일하나 첫번째 방식은 삼항 연산자 자체가 결과를 반환한 후에 한 번만 +=이 실행되며,
    // 두 번째 방식에서는 조건에 따라 서로 다른 명령이 실행된다.

    // oppositeStr += str[i] === 'A' ? 'B' : (str[i] === 'B' ? 'A' : str[i]);  // 'A', 'B' 외의 다른 코드까지 만 고려한 코드
  }
  return oppositeStr.includes(part) ? 1 : 0;
};
console.log(solution('ABBAA', 'AABB')); // 1
console.log(solution('ABAB', 'ABAB')); // 0


// 2번 풀이 for...of
const solution2 = (str, part) => {
  let oppositeStr = '';
  for (const c of str) {
    if (c === 'A') {
      oppositeStr += 'B'
    } else if (c === 'B') {
      oppositeStr += 'A'
    }

    // 간단하게 삼항연산자로 변경
    // oppositeStr += c === 'A' ? 'B' : 'A';
  }
  return oppositeStr.includes(part) ? 1 : 0;
};
console.log(solution2('ABBAA', 'AABB')); // 1
console.log(solution2('ABAB', 'ABAB')); // 0


// 3번 풀이 forEach - includes, indexOf, match
const solution3 = (str, part) => {
  let oppositeStr = '';
  [...str].forEach(c => oppositeStr += c === 'A' ? 'B' : 'A');
  // return oppositeStr.includes(part) ? 1 : 0;
  // return oppositeStr.indexOf(part) !== -1 ? 1 : 0; // 요소가 존재하지않는게 아니면-1 맞으면-0. 즉, 부정을부정.
  return oppositeStr.match(part) ? 1 : 0
};
console.log(solution3('ABBAA', 'AABB')); // 1
console.log(solution3('ABAB', 'ABAB')); // 0


// 4번 풀이 정규표현식 리터럴, indexOf
const solution4 = (str, part) => {
  const regExp = /[AB]/g;
  const change = str.replace(regExp, match => (match === 'A' ? 'B' : 'A'));

  // XX오류
  // return change.indexOf(part) ? 1 : 0;
  // indexOf가 반환하는 값이 0보다 크면 (즉, part가 문자열의 시작이 아닌 곳에 존재하면)
  // 그 값은 true로 평가되어 1이 반환됨.


  // indexOf가 -1일 경우 part가 포함되지 않은 것이므로 0 반환,
  // 문자열 내에 part가 포함된 경우에만 1, 포함되지 않으면 0
  return change.indexOf(part) !== -1 ? 1 : 0;
};
console.log(solution4('ABBAA', 'AABB')); // 1
console.log(solution4('ABAB', 'ABAB')); // 0



// 5번 풀이 map
const solution5 = (str, part) => {
  const oppositeStr = [...str].map(c => c === 'A' ? 'B' : 'A').join('');
  return oppositeStr.match(part) ? 1 : 0;
};
console.log(solution5('ABBAA', 'AABB')); // 1
console.log(solution5('ABAB', 'ABAB')); // 0


// 6번 풀이 reduce
const solution6 = (str, part) => {
  const oppositeStr = [...str].reduce((acc, cur) => cur === 'A' ? acc + 'B' : acc + 'A', '');
  return oppositeStr.includes(part) ? 1 : 0;

};
console.log(solution6('ABBAA', 'AABB')); // 1
console.log(solution6('ABAB', 'ABAB')); // 0


// // 7번 풀이 filter
// // filter 메서드는 요소를 선택하는 데 사용되며, 각 요소의 값을 변환하는 데는 적합하지 않다.
// // 따라서 A와 B를 서로 반전시키는 작업은 filter로는 수행할 수 없음.
// const solution7 = (str, part) => {
// };
// console.log(solution7('ABBAA', 'AABB')); // 1
// console.log(solution7('ABAB', 'ABAB')); // 0