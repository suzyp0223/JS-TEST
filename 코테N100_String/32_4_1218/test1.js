
// 순서는 1부터 1씩 증가
// 취소될 경우 해당 번호는 배열에서 제거
// 취소된 내열이 주어질 경우, n번째 취소된 번호를 구하는 함수
// orders- 정수배열 , n- 찾고자 하는 번호 차례의 정수
// 1번째 취소 번호는 1
// 2번째 취소 번호는 3
// 3번째 취소 번호는 6
const solution = (orders, n) => {
  let canceled = 0;  // 취소된 번호를 세는 변수
  let currentNumber = 1;  // 번호는 1부터 시작
  let canceledNumbers = [];  // 취소된 번호들

  // n번째 취소된 번호를 찾을 때까지 반복
  while (canceledNumbers.length < n) {
    // orders 배열에 현재 번호가 없다면 취소된 번호로 간주
    if (!orders.includes(currentNumber)) {
      canceled++;  // 취소된 번호 카운트
      canceledNumbers.push(currentNumber);  // 취소된 번호 저장
    }
    currentNumber++;  // 번호 1씩 증가
  }

  return canceledNumbers[n - 1];  // n번째 취소된 번호를 반환
};

console.log(solution([2, 4, 5, 7], 3)); //결과는: 6

// ---------------------------------
function solution(orders, n) {
  const minTotal = orders.length + n
  const initialOrders = Array.from({ length: minTotal }, (_, i) => i + 1)
  const cancelledOrders = initialOrders.filter(num => !orders.includes(num));
  return cancelledOrders[n - 1]
}