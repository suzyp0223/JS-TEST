// /* 2. 제곱 구현 */ 반복문
// x의 y제곱 값을 반환 (**) 제곱 연산자 사용금지.
function answer(x, y) {
  let result = 1;
  for (let i = 0; i < y; i++) {
    result *= x ;
  }
  return result;
}


let input = [
  // TC: 1
  [2, 3],
  // TC: 2
  [4, 6],
  // TC: 3
  [1, 100],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}
// 출력 값
// #1 8
// #2 4096
// #3 1
