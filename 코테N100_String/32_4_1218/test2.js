
// 정수배열 arr 중 0에서 가장 가까운 값을 구하는 함수
console.time("결과1 타임은: ");
const solution = (arr) => {
  console.timeEnd("결과1 타임은: ");
  return Math.min.apply(null, arr);
};

console.log(solution([5, 2, 1, 3])); //결과는: 1

// --------------------
const solution2 = (arr) => {
  console.time("결과2 타임은: ");
  arr.sort((a, b) => a - b);
  console.timeEnd("결과2 타임은: ");
  return arr[0]
}
console.log(solution2([5, 2, 1, 3])); //결과는: 1