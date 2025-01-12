/*** 5. 네번째 좌표 ***/
// 평행한 직사각형을 만들기위해 3점을 선택한 후 네번째 점을 구하는 함수
// 네번째 점 [x, y] 산출하여 반환
// 한번만 등장하는 값을 찾아 배열 요소에 저장.
function answer(x_arr, y_arr) {
  let result = [];

  if (x_arr[0] === x_arr[1]) result[0] = x_arr[2];
  else if (x_arr[0] === x_arr[2]) result[0] = x_arr[1];
  else if (x_arr[1] === x_arr[2]) result[0] = x_arr[0];

  if (y_arr[0] === y_arr[1]) result[1] = y_arr[2];
  else if (y_arr[0] === y_arr[2]) result[1] = y_arr[1];
  else result[1] = y_arr[0];

  return result;
}

let input = [
  // TC: 1
  [
    [5, 5, 8],
    [5, 8, 5],
  ],
  // TC: 2
  [
    [3, 1, 1],
    [2, 1, 2],
  ],
  // TC: 3
  [
    [7, 7, 3],
    [4, 1, 1],
  ],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
// 출력 값
// #1 [8, 8]
// #2 [3, 1]
// #3 [3, 4]
