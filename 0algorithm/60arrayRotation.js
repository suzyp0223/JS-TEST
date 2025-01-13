// /* 8. 배열 회전 */ 반복문, Array
// 내림차순
// 순서를 역으로 만들어 반환
// reverse함수 사용하지 않고 반복문으로 구현
// 배열을 반으로 나눠 앞뒤 자리 교환 해서 내림차순 구현
// 배열을 반으로 나눠 반복하므로, 중복으로 교환되지 않도록 보장: 조건: i < user.length / 2

function answer(user) {
  let reverse = [];

  // for문 내림차순, 인덱스0부터라 -1/ 양수일때만 참 / --하면서 작게
  // for (let i = user.length -1; i >= 0; i--) { // 내림차순
  // for (let i = 0; i < user.length; i++) {  // 오름차순. 일반적이고 가독성이 더 나음.
  // for (let i = 0; i <= user.length - 1; i++) {  // 오름차순
  //   reverse.push(user[i]);
  // }

  // length를 반으로 줄여 반복
  let tmp;
  // 반복문은 배열의 앞쪽 절반 요소와 뒤쪽 절반 요소를 교환
  for (let i = 0; i < user.length / 2; i++) {
    // console.log('user[i]: ', user[i]);

    // user[i] /  i = 0  / 0번째 인덱스 값1/ tmp = user[0] = 1
    tmp = user[i];
    // 대칭값을 교차해서 각각 요소에 저장.
    user[i] = user[user.length - 1 - i];  // user[0] = user[4 - 1 - 0]; user[0] = user[3];
    user[user.length - 1 - i] = tmp; // user[3] 자리에 tmp 값인 user[3]인덱스 즉 값1을 저장
    // 0: 1, 3: 4
    // [4 2 3 1]
    // 1: 2, 2: 3
    // [4 3 2 1]

  }


  return reverse;
}




// map + 인덱스 / 내림차순
function reverseArray(arr) {
  return arr.map((_, i) => arr[arr.length - 1 - i]);
}
// reduce()
function reverseArray(arr) {
  return arr.reduce((acc, curr) => [curr, ...acc], []);
}
// 재귀함수 내림차순
function reverseArray(arr) {
  if (arr.length === 0) return [];
  return [arr[arr.length - 1]].concat(reverseArray(arr.slice(0, arr.length - 1)));
}
// while
function reverseArray(arr) {
  let reversed = [];
  let i = arr.length - 1;
  while (i >= 0) {
    reversed.push(arr[i]);
    i--;
  }
  return reversed;
}
// 스택구조 pop() 내림차순
function reverseArray(arr) {
  let reversed = [];
  let temp = [...arr]; // 원본 배열 복사
  while (temp.length > 0) {
    reversed.push(temp.pop());
  }
  return reversed;
}






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
