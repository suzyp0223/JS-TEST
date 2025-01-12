// /* 8. 배열 회전 */ 반복문, Array
// 순서를 역으로 만들어 반환
// reverse함수 사용하지 않고 반복문으로 구현
/* user code */
function answer(user) {
  let reverse = [];
  for (let i = 0; i < user.length; i++) {
    if (user[0] > user[1]) {
      reverse.push(user[1])
    } else {
      reverse.push(user[0])
    }
    // user[0] > user[1] ? reverse.push(user[1]) : reverse.push(user[0]);
  }


  return reverse;
}

/* main code */
let input = [
  // TC: 1
  [1, 2, 3, 4],
  // TC: 2
  [-1, 6, "hello", -15],
  // TC: 3
  ["apple", "banana", "mango"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
// 출력 값
// #1 [4,3,2,1]
// #2 [-15, 'hello', 6, -1]
// #3 ['mango', 'banana', 'apple']
