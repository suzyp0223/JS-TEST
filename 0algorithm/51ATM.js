/*** 4. ATM 기기 ***/
// 인출할 금액과 계좌의 총 금액을 입력 받아 계좌의 남은 금액을 반환
// 첫번째 값은 인출할 금액, 두번째 값은 계좌금액, 만원단위
// 단, 정상출금 불가할 경우 돈은 출금되지 않고 통장의 원래 금액을 반환.
// 5의 배수만 취급, 인출 수수료 0.5만원(5천원)
/* user code */
function answer(withdraw, total) {
  let result;
  const fee = 0.5;

  if (withdraw % 5 !== 0) {
    result = total;
  } else if (withdraw + 0.5 > total) {
    result = total;
  } else {
    result = total - withdraw - fee;
  }

  return result;
}

let input = [
  // TC: 1
  [40, 130.0],
  // TC: 2
  [33, 130.0],
  // TC: 3
  [300, 300.0],
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}
// 출력 값
// #1 89.5
// #2 130
// #3 300
