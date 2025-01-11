// https://coding-prep.notion.site/a0e2c71a30c847a7a0d9b581156fcef7
// 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기

// 1번 풀이 for문 + lastIndexOf
const solution1 = (str, part) => {
  let answer = '';
  const lastIndex = str.lastIndexOf(part) + part.length;
  console.log(lastIndex);
  for (let i = 0; i < lastIndex; i++) {
    answer += str[i];
  }
  return answer;
};
console.log(solution1('AbCdEFG', 'dE')); // 'AbCdE'
console.log(solution1('AAAAaaaa', 'a')); // 'AAAAaaaa'


// 2번 풀이 slice + lastIndexOf
const solution2 = (str, part) => {
  return str.slice(0, str.lastIndexOf(part)) + part;
};
console.log(solution2('AbCdEFG', 'dE')); // 'AbCdE'
console.log(solution2('AAAAaaaa', 'a')); // 'AAAAaaaa'


// 3번 풀이 match
const solution3 = (str, part) => str.match(new RegExp('.*' + part))[0];
console.log(solution3('AbCdEFG', 'dE')); // 'AbCdE'
console.log(solution3('AAAAaaaa', 'a')); // 'AAAAaaaa'
/*
배열의 첫 번째 요소는 매칭된 전체 문자열.
이 방식은 문자열에서 특정 부분 문자열 part가 등장하는 위치까지의 모든 문자열을 추출할 때 사용
*/
