// 자연수를 입력 받아 해당 수만큼 별을 찍는 문자열을 반환.

/* user code */
const answer = (num) => {
  let result = '';

  for (let i = 0; i < num; i++) {
    result += '*';
  }
  return result;

  // // while문
  // let i = 0; // 초기화
  // while (i < num) {
  //   result += '*';
  //   i++; // 증가
  // }
  // // 코드 구현 종료 영역
  // return result;

}


/* main code */
let input = [
  // TC: 1
  5,
  // TC: 2
  7,
  // TC: 3
  12,

];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
// #1 *****
// #2 *******
// #3 ************