
// 문자열 s. 문자열을 역으로 출력하는 함수
// s: 영문 대,소문자로 이루어진 문자열
// reverse()함수는 원본배열 변형, [...spread]전개연산자로 복사해서 원본배열 유지하는 방법.
const solution = (s) => {
  return [...s].reverse().join('');
};

console.log(solution("apple")); // "elppa"  / 문자열을 거꾸로 뒤집어 출력

// for문
const arr = ['Apple', 'Banana', 'Orange'];
const reverse = [];
for (let i = arr.length - 1; i >= 0; i--) {
  reverse.push(arr[i]);
}
console.log(reverse);