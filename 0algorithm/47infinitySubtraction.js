/*** 5. 무한 뺄셈 ***/
// 앞 숫자 - 뒷 숫자 반복 연산
// 단, 뺀 값이 음수일 때 프로그램 종료
// 초기 입력된 수를 포함, 뺄셈을 통해 나온 수를 모두 배열에 저장하여 반환
// 6-3=3, 3-3=0, 3-0=3, 0-3=-3. -3종료.
// [6,3,3,0,3]반환.
/* user code */
function answer(s, e) {
  let sequence = [];
  sequence.push(s);
  sequence.push(e);

  let sum;
  while (1) { //1=true true일때까지 계속 반복.
    sum = s - e;
    s = e;
    e = sum;

    if (e < 0) break;
    sequence.push(e);
  }
  /*
  [13, 7, 6, 1, 5]
  13  7   6    1    5   -4
  s   e  sum
      s   e   sum
          s    e   sum
               s    e   sum
                    s    e
  */

  return sequence;
}


function answer(s, e) {
  let sequence = [];
  sequence.push(s);
  sequence.push(e);

  while (true) {
    let diff = sequence[sequence.length - 2] - sequence[sequence.length - 1]; // 마지막 두 값의 차이
    if (diff < 0) break; // 결과가 음수면 반복 종료
    sequence.push(diff); // 결과를 배열에 추가
  }

  return sequence;
}

function answer(s, e) {
  let sequence = []; // 결과를 저장할 배열
  sequence.push(s); // 초기 숫자 s를 배열에 추가
  sequence.push(e); // 초기 숫자 e를 배열에 추가

  for (let i = 2; ; i++) { // i는 sequence 배열의 다음 인덱스
    let diff = sequence[i - 2] - sequence[i - 1]; // 마지막 두 값의 차이
    if (diff < 0) break; // 결과가 음수면 반복 종료
    sequence.push(diff); // 결과를 배열에 추가
  }

  return sequence;
}


/* main code */
let input = [
  // TC: 1
  [9, 3],
  // TC: 2
  [6, 3],
  // 6-3=3 3-3=0 3-0=3 0-3=-3
  // TC: 3
  [13, 7],
  // 13-7=6 7-6=1 6-1=5 1-5=-4
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
// 출력 값
// #1 [9, 3, 6]
// #2 [6, 3, 3, 0, 3]
// #3 [13, 7, 6, 1, 5]
