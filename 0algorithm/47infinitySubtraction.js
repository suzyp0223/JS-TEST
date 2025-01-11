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

  let x = 0;
  let y = 0;
  let z = 0;
  // 포문으로 x-y=z 를 z가 음수가 될때까지 반복.
  // for (let i = 0; i < sequence.length; i++) {
  // console.log('[i]: ', sequence[i]);

  x = sequence[0];
  y = sequence[1];

  if (sequence[0] - sequence[1] > -1) {
    z = x - y;
    sequence.push(x, y, z);
    // console.log("z:", z);
    console.log('sequence: ', sequence);
  } else if (z - y < -1) {
    z = z - y;
    sequence.push(x, y, z);
    // console.log("z:>>>", z);
    console.log('sequence:>>> ', sequence);
  }

  for (const num of sequence) {
    z = num[0] - num[1] > -1 ? sequence.push(z) : z = num[1] - z < -1;
  }


  // 배열에 첫x,y,z 와 음수 전의 z값 배열에 저장해서 반환



  return sequence;
}
// 9-3=6 3-6=-3
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
// #1
// #2
// #3
