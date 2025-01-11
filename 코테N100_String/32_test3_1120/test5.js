
// n개의 2진수가 주어질때,
// 이를 or 연산한 결과를 10진수 숫자로 변환하여 출력하는 프로그램.
// arr['10110', '1010', '11110']가 있을때,
// or 연산한 결과는 2진수로 '11110'이고, 10진수로 변환하면 30.
const solution = (arr) => {
  // 모든 2진수를 OR 연산
  const result = arr.reduce((acc, binary) => acc | parseInt(binary, 2), 0);

  return result; // 10진수로 반환

};

console.log(solution(['10110', '1010', '11110'])); // 30
