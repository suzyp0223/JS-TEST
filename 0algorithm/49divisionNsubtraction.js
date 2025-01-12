/*** 2. 나누기와 대소비교 ***/
// 4개의 수를 입력 받아 나누기 연산을 통해 대소를 판단하는 함수
// 1000이하의 자연수 a,b,c,d
// a/b > c/d 일때1 , a/b = c/d 일때0, a/b < c/d 일때-1 반환.

function answer(a, b, c, d) {
  let result;

  if (a / b > c / d) {
    result = 1;
  } else if (a / b < c / d) {
    result = -1;
  } else {
    result = 0;
  }

  return result;
}


let input = [
  // TC: 1
  [14, 2, 6, 6],
  // TC: 2
  [6, 7, 8, 9],
  // TC: 3
  [18, 2, 36, 4],
];

for (let i = 0; i < input.length; i++) {
  console.log(
    `#${i + 1} ${answer(input[i][0], input[i][1], input[i][2], input[i][3])}`
  );
}
// 출력 값
// #1 1
// #2 -1
// #3 0
