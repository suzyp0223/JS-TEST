
// 먼저 사고 팔기
// 매수와 매도를 1회씩 진행했을 때 가능한 최대 수익 구하는 함수
// 매도는 항상 매수 이후에 이루어져야 하며,
// 수익을 내 수 없는 경우 0을 리턴.
const solution = (A) => {
  // 최소값일때 사기  매수+
  // 최대값일때 팔기  매도-

  const min =  Math.min(...A);
  const max =  Math.max(...A);
  console.log("min: ",min);
  console.log("max: ",max);
  // if ( min - max)
  const buy = A;
  console.log(buy);



};

// 결과는 0 => 설명: 수익을 낼 수 없음.
console.log(solution([100000, 99000, 99000, 98000, 97000]));

// 결과는 3000 => 설명: 95000원인 시점에 구매하고
// 98000원인 시점에 판매하면됨.
console.log(solution([100000, 98000, 95000, 98000, 92000]));



function solution2(A) {
  // 초기값 설정: 최대 수익은 0으로 시작
  let maxProfit = 0;
  // 매수 가격을 최대값으로 초기화
  let minPrice = Infinity;

  // 가격을 순차적으로 돌면서 최대 수익을 계산
  for (let i = 0; i < A.length; i++) {
    // 현재 가격에서 최대 수익을 계산
    maxProfit = Math.max(maxProfit, A[i] - minPrice);

    // 매수 가격을 최소값으로 업데이트
    minPrice = Math.min(minPrice, A[i]);
  }

  return maxProfit;
}

// 테스트 케이스
console.log(solution2([100000, 99000, 99000, 98000, 97000])); // 0
console.log(solution2([100000, 98000, 95000, 98000, 92000])); // 3000


// ====================
const solution3 = A => {
  let answer = [];

  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] < A[j]) {
        answer.push(A[j] - A[i]);
      }
    }
  }

  return answer.length == 0 ? 0 : Math.max(...answer);
}
