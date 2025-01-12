/*** 3. 윤년 판별기 ***/
// 윤년true, 아니면false 반환
// 윤년이란 아래 둘 중 하나라도 참인경우,
// 4의 배수이고 100의 배수가 아닐 때
// 400의 배수일 때.
/* user code */
function answer(year) {
  let result;

  if (year % 4 === 0 && year % 100 !== 0) {
    result = true;
  } else if (year % 400 === 0) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  4,
  // TC: 2
  100,
  // TC: 3
  124,
  // TC: 4
  247,
  // TC: 5
  400,
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
// 출력 값
// #1 true
// #2 false
// #3 true
// #4 false
// #5 true
