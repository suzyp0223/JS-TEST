
// 높이 n이 주어질때 이진 트리의 모든 노드 개수를 출력하는 프로그램
// 결과를 1,000,000,007로 나눈 나머지 값을 반환
// 높이 1~5까지 각각 노드 개수가 1, 2, 4,8,16으로
// 모두 더하면 31.
const solution = (n) => {
  let sum = 1;
  const num = 1_000_000_007;

  for (let i = 1; i <= n; i++) {
    console.log('n: ', n);
    // sum *= 2;
    // sum % num;

    sum = (sum * 2) % num;
    // sum을 계산 후 바로 나머지 구하기
    // sum의 값이 num보다 커지는 것을 방지. (오버플로우방지, 효율적계산)
    console.log('sum: ', sum);
  }
  return (sum - 1 + num) % num; // 최종 결과에서 1을 빼고 나머지 구하기

};

console.log("solution", solution(5)); //결과는:31


// ----------------------------------





// ----------------------------------
function solution(n) {
  let a = 1;
  for (let i = 0; i < n; i++) {
    a = (2 * a) % 1000000007;
  }
  return a - 1;
}
//--------------------

function solution(n) {
  return ((2 ** n) - 1) % 1000000007;
}