// /* 5. 중복 단어 제거 */ Array, Date
// 입력값은 문자형배열, 중복단어가 제거된 배열반환.

function answer(arr) {
  let new_arr = [];

  // new Set(arr).forEach(str => new_arr.push(str));
  // new_arr = arr.filter((str, i) => arr.indexOf(str) === i);
  new_arr = Array.from(new Set(arr));

  return new_arr;
}


let input = [
  // TC: 1
  ["john", "alice", "alice"],
  // TC: 2
  ["Hello", "hello", "HELLO", "hello"],
  // TC: 3
  ["kiwi", "banana", "mango", "kiwi", "banana"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
// 출력 값
// #1 ["john", "alice"]
// #2 ["Hello", "hello", "HELLO"]
// #3 ["kiwi", "banana", "mango"]
