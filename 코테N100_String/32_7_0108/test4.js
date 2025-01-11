
// 연결된 부분1, 연결되지 않은 부분0
// 가장 많은 수의 갯수 출력
// 0-1이 연결되어 있고
// 2, 3번은 독립되어  총 3개가 표시됨.
// 이중 0-1이 가장 길게 연결되어 있어 최대 개수는 2개
const solution = (A) => {
  let answer = 0;




  return answer;


};

console.log("solution", solution([[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]])); //결과는:2
// -----------------------------
// 11541
function solution(A) {

  const landNum = A.map(land => land.filter(connect => connect).length);

  return Math.max(...landNum);

}
//--------------------
function solution(A) {
  var answer = 0;
  for (let i = 0; i < A.length; i++) {
    A[i]
  }
  return answer;
}