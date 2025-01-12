// /* 3. 놀이기구 입장 제한 */ 조건문
// height 150 이상만 true. 아니면 false
/* user code */
function answer(user) {
  let permit;

  permit = user.height >= 150;

  // // 조건문 없이 비교연산자만으로 true, false 가능.
  // if (user.height >= 150) permit = true;
  // else permit = false;

  return permit;
}

/* main code */
let input = [
  // TC: 1
  { name: "john", age: 27, height: 181 },
  // TC: 2
  { name: "alice", age: 12, height: 148 },
  // TC: 3
  { name: "bob", age: 14, height: 156 },
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
// 출력 값
// #1 true
// #2 false
// #3 true
