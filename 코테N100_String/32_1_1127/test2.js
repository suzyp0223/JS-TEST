
// p1, p2
// 1이면 끝.
// 1,2,3
//
// num = 5
// p1 = 1 : p2 = 3  / 1  / p1 = false
// p1 = 2 : p2 = 2  / 1  / p1 = false
// p1 = 3 : p2 = 1  / 1  / p1 = false
// p1 = 3 : p2 = 1 이면 1이 남아서 p1이 false
const solution = (num) => {
  // 4의 배수면 p1 승리
  // 4의 배수가 아니면,
  return num % 4 !== 1;
};
console.log(solution(4)); // true  / p1 = 3 : p2 = 1 / p1 = true

// =======================
const solution2 = num => !(num % 4 === 1);

// =======================
// =======================