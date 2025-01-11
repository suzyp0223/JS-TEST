
// n개의 정수 배열 arr내 짝수의 개수 출력하는 함수
const solution = (arr) => {
  return arr.filter(num => num % 2 === 0).length;

};

console.log(solution([1, 9, 9, 1, 3, 2, 6])); // 짝수의 개수: 2


// const solution2 = (arr) => {
//   let answer = 0;
//   for (const num of arr) {
//     if (arr % 2 === 0) {
//       answer++;
//     }
//     console.log(answer);
//   }
//   return answer;
// }
// console.log(solution2([1, 9, 9, 1, 3, 2, 6])); // 짝수의 개수: 2


// const solution3 = (arr) => {
//   return arr.reduce((count, num) => num % 2 === 0 ? count + 1 : count, 0);

// }
// console.log(solution3([1, 9, 9, 1, 3, 2, 6])); // 짝수의 개수: 2