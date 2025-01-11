/*** 4. 헨드폰 판매 ***/

/* user code */
function answer(employee) {
  let employee_id;

  const MaxValue = Math.max(...employee);  //Math.max로 배열에서 최대값을 찾는 경우 스프레드사용.
  employee_id = employee.indexOf(MaxValue);

  return employee_id + 1;
}

function answer2(employee) {
  let employee_id;
  let max = 0;

  for (let i = 0; i < employee.length; i++) {
    if (employee[i] > max) {
      max = employee[i];
      employee_id = i + 1;
    }
  }
  return employee_id;
}

/* main code */
let input = [
  // TC: 1
  [3, 7, 9, 6, 1],
  // TC: 2
  [2, 7, 1, 4, 3, 0, 5],
  // TC: 3
  [7, 5, 0, 1, 2, 12, 6],
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
  console.log(`##${i + 1} ${answer2(input[i])}`);
}
// 출력 값
// #1 3
// #2 2
// #3 6
