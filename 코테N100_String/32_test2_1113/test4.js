
// 자연수 n이 1과 자기 자신으로만 나누어지는지 여부를 출력하는 함수
const solution = (n) => {
  // 1은 소수가 아니다.
  if (n === 1) return false;
  // 2부터 N-1까지의 수로 N을 나눴을 때
  for (let i = 2; i <= n - 1; i++) {
    // 나누어 떨어지는 경우가 한 번이라도 있으면 N은 소수가 아니다.
    if (n % 2 === 0) return false;
  }
  // 모두 나누어 떨어지지 않으면 N은 소수이다.
  return true;
};

console.log("solution>>> ", solution(7)); // true / 7은 소수이므로 1과 자기 자신으로만 나뉨.

function isPrime(N) {
  // 1은 소수가 아니다.
  if (N === 1) return false;
  // 2부터 N제곱근까지의 수로 N을 나눴을 때
  for (let i = 2; i <= Math.sqrt(N); i++) {
    // 나누어 떨어지는 경우가 한 번이라도 있으면 N은 소수가 아니다.
    if (N % i === 0) return false;
  }
  // 모두 나누어 떨어지지 않으면 N은 소수이다.
  return true;
}
console.log("isPrime: ", isPrime(6));