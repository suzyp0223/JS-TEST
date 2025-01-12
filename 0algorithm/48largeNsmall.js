/*** 1. 대소비교 ***/
// 두 정수 입력 받아 문자열 형태의 대소비교 부등호 반환
// 첫번째 수가 두번째 수보다 크면 >
// 첫번째 수가 두번째 수보다 작으면 <
// 첫번째 수와 두번째 수가 같으면 =
/* user code */
function answer(x, y) {
  let result = "";

  if (x > y) result = '>';
  if (x < y) result = '<';
  if (x === y) result = '=';
  return result;
}


function answer2(x, y) {
  let result = "";

    if (x > y) {
      result = '>';
    } else if (x < y) {
      result = '<';
    } else result = '=';

    return result;
}


/* main code */
let input = [
  // TC: 1
  [3, 5],
  // TC: 2
  [7, 4],
  // TC: 3
  [2, 2],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
  console.log(`#@#@${i + 1} ${answer2(input[i][0], input[i][1])}`);
}
// 출력 값
// #1 <
// #2 >
// #3 =
