// https://coding-prep.notion.site/c0cd04f3cc3241d6bdc42f9b8e3a4897
// 이어 붙인 수

// nums의 홀수만 순서대로 이어 붙인 수와
// 짝수만 순서대로 이어 붙인 수의 합을 return
const solution = nums => {
  let even = [];
  let odd = [];
  nums.map((num) => num % 2 !== 0 ? odd.push(num) : even.push(num));
  let stringEven = even.join('');
  let stringOdd = odd.join('');

  return stringEven + stringOdd;
};
console.log(solution([3, 4, 5, 2, 1])); // 393
console.log(solution([5, 7, 8, 3])); // 581


const solution1 = nums => {
  // filter 메서드를 사용하여 짝수와 홀수를 분리합니다.
  //  join('')을 사용하여 배열을 문자열로 변환합니다.
  const even = nums.filter(num => num % 2 === 0).join('');
  const odd = nums.filter(num => num % 2 !== 0).join('');

  return Number(even) + Number(odd);
};
console.log(solution1([3, 4, 5, 2, 1])); // 393
console.log(solution1([5, 7, 8, 3])); // 581



const solution2 = nums => {
  // ([evens, odds]): 현재까지의 누적 값
  // (num): 현재 배열에서 처리하고 있는 요소
  const [even, odd] = nums.reduce(([evens, odds], num) =>
    num % 2 === 0 ? [evens + num, odds] : [evens, odds + num],
    ['', '']
  );

  return Number(even) + Number(odd);
};
console.log(solution2([3, 4, 5, 2, 1])); // 393
console.log(solution2([5, 7, 8, 3])); // 581

/* ----설명----
삼항 연산자를 사용하여 짝수와 홀수를 구분할 수는 있지만,
배열의 필터링과 문자열 합치기를 삼항 연산자로 처리하는 것은
가독성이 떨어질 수 있습니다.
그래도 다음과 같이 삼항 연산자를
활용해 짝수와 홀수를 구분할 수는 있습니다:
여기서는 reduce를 사용하여 배열을 순회하며 짝수와 홀수를 구분합니다:

num % 2 === 0 ? [evens + num, odds] : [evens, odds + num] 부분에서 삼항 연산자를 사용하여 num이 짝수인지 홀수인지에 따라 evens와 odds를 업데이트합니다.
초기 값으로 ['', '']를 사용하여 각각의 문자열을 빈 문자열로 시작합니다.
이 방법으로 삼항 연산자를 활용하면서도 코드가 간결하게 유지됩니다.


***삼항 연산자와 배열 업데이트***
삼항 연산자 num % 2 === 0 ? [evens + num, odds] : [evens, odds + num]는 현재 값(num)이 짝수인지 홀수인지에 따라 누적 값을 업데이트합니다.

짝수 (num % 2 === 0):

evens + num: 현재 짝수 값을 문자열로 변환하여 기존의 evens 문자열에 추가합니다.
odds는 변경되지 않고 그대로 유지됩니다.
결과적으로 [evens + num, odds]가 됩니다.
홀수 (num % 2 !== 0):

odds + num: 현재 홀수 값을 문자열로 변환하여 기존의 odds 문자열에 추가합니다.
evens는 변경되지 않고 그대로 유지됩니다.
결과적으로 [evens, odds + num]가 됩니다.
결과
이 과정이 배열의 모든 요소에 대해 반복됩니다. 마지막에는 짝수 문자열과 홀수 문자열이 각각 even과 odd로 저장됩니다.

예시
예를 들어, 배열 [3, 4, 5, 2, 1]에 대해 이 코드는 다음과 같이 작동합니다:

초기값: ['', '']
3 (홀수): ['', '3']
4 (짝수): ['4', '3']
5 (홀수): ['4', '35']
2 (짝수): ['42', '35']
1 (홀수): ['42', '351']
*/


const solution3 = nums => {
  const { even, odd } = nums.reduce((acc, num) => {
    return num % 2 === 0
      ? { even: acc.even + num, odd: acc.odd }
      : { even: acc.even, odd: acc.odd + num };
  }, { even: '', odd: '' });
  return Number(even) + Number(odd); // 짝수 문자열과 홀수 문자열을 결합
};
console.log(solution3([3, 4, 5, 2, 1])); // 393
console.log(solution3([5, 7, 8, 3])); // 581

/* ----설명----
객체로 설정되며, even과 odd라는 두 개의 빈 문자열을 가지고 있다.
첫 번째 요소: 3
acc = { even: '', odd: '' }, num = 3
num % 2 === 0: 3은 홀수이므로 조건문은 false가 됨
  { even: acc.even, odd: acc.odd + num }가 실행되고
acc.even은 그대로 유지되고, acc.odd는 acc.odd + 3으로 업데이트되어 odd는 "3"이 됩니다.
새로운 객체는 { even: '', odd: '3' }가 됩니다.

두 번째 요소: 4
acc = { even: '', odd: '3' }, num = 4
num % 2 === 0: 4는 짝수이므로 조건문이 true입니다.
  { even: acc.even + num, odd: acc.odd }가 실행되고
acc.even은 acc.even + 4로 업데이트되어 "4"가 되고, acc.odd는 그대로 유지됩니다.
새로운 객체는 { even: '4', odd: '3' }가 됩니다.

세 번째 요소: 5
acc = { even: '4', odd: '3' }, num = 5
num % 2 === 0: 5는 홀수이므로 false가 됩니다.
  { even: acc.even, odd: acc.odd + num }가 실행되고
acc.even은 그대로 유지되고, acc.odd는 "3"에서 "35"로 업데이트됩니다.
새로운 객체는 { even: '4', odd: '35' }가 됩니다.

네 번째 요소: 2
acc = { even: '4', odd: '35' }, num = 2
num % 2 === 0: 2는 짝수이므로 true가 됩니다.
  { even: acc.even + num, odd: acc.odd }가 실행되고
acc.even은 "4"에서 "42"로 업데이트되고, acc.odd는 "35"로 유지됩니다.
새로운 객체는 { even: '42', odd: '35' }가 됩니다.

다섯 번째 요소: 1
acc = { even: '42', odd: '35' }, num = 1
num % 2 === 0: 1은 홀수이므로 false가 됩니다.
  { even: acc.even, odd: acc.odd + num }가 실행되고
acc.even은 그대로 유지되고, acc.odd는 "351"로 업데이트됩니다.
최종적으로 누적된 객체는 { even: '42', odd: '351' }가 됩니다.

*/