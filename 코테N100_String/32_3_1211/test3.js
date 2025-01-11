
// 정수 배열 A에는 0보다 큰 숫자 N개가 있음.
// N개의 모든 숫자를 아우르는 최대 공양수를 구하기.
// 모든 세 숫자의 최대 공양수는 2.
const solution = (A) => {




};

console.log(solution([6, 12, 4])); // 결과: 2


// ----------------------------

function solution(A) {
  function getDivisors(n) {
    let divisors = new Set();
    for (let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        divisors.add(i);
        divisors.add(n / i);
      }
    }
    return [...divisors].sort()
  }

  return A.reduce((acc, cur) => {
    const accDivisors = getDivisors(acc);
    const curDivisors = getDivisors(cur);
    return accDivisors.filter((ad) => curDivisors.includes(ad)).slice(-1)[0]
  })
}


const solution = A => {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

  return A.reduce((acc, num) => gcd(acc, num));
};