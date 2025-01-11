// 두 수 사이의 자연수를 배열로 반환해 출력
/*** 2. 두 수 사이 숫자 ***/
/* user code */
function answer(x, y) {
  let result = [];

  // // 방법1. if..else
  // if (x > y) {
  //   for (let i = y; i <= x; i++) {
  //     result.push(i);

  //   }
  // } else {
  //   for (let i = x; i <= y; i++) {
  //     result.push(i);
  //   }
  // }


  // 방법 2. x를 항상 작게 만듬
  if (x > y) {
    let t = x;
    x = y;
    y = t;
  }

  for (let i = x; i <= y; i++) {
    result.push(i);
  }

  // // 방법 3. 시작과 끝을 작은 값과 큰값으로 설정해 숫자를 항상 오름차순 정리.
  // const start = Math.min(x, y);
  // const end = Math.max(x, y);

  // // 단일 for문으로 처리
  // for (let i = start; i <= end; i++) {
  //   result.push(i);
  // }


  return result;
}

// for문을 하나만 쓰는방법
// 항상 x가 y보다 작게 만들어서 계산하는 방법
// x < y    x를 t에 저장해서 값이 변경되지 않게 함.
// if (x > y) { x가 클때만 if 들어감 결국 y를 x보다 크게 만듬.
//   let t = x;
//   x = y;
//   y = t;
// }

// for (let i = x; i < y; i++) {
//   result.push(i);
// }


/* main code */
let input = [
  // TC: 1
  [3, 7],
  // TC: 2
  [8, 3],
  // TC: 3
  [12, 10],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}

// 출력 값
// #1 [3, 4, 5, 6, 7]
// #2 [3, 4, 5, 6, 7, 8]
// #3 [10, 11, 12]