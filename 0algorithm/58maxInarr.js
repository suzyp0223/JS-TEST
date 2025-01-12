// /* 6. 배열 내 최대값 구하기 */ 반복문

/* user code */
function answer(arr) {
  let max;
  // Math.max(...arr);

  max = arr[0]; // i를 1로 설정해서 for문돌기
  // max = Number.MIN_SAFE_INTEGER; // 음수의 최대값 // i를 0으로
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

/* main code */
let input = [
  // TC: 1
  [1, 6, 5, 2, 3],
  // TC: 2
  [19, 41, 23, -4, 17],
  // TC: 3
  [-64, -27, -41, -33, -59],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
// 출력 값
// #1
// #2
// #3
