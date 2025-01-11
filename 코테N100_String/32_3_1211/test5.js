
// 두개의 수를 소인수 분해 했을때
// 공통된 소수의 집합을 가지고 있는지 판단하는 함수
/*
  예로, 12, 6은 두 수 모두 2,3으로만 이루어져
  공통된 소수 집합을 가지고 있음.
  9, 18의 경우 0는 3으로 이루어져 있고,
  18은 2, 3으로 이루어져 있어 공통 소수 집합이 아님.
  true: 1, false: 0 출력.
*/
const solution = (A, B) => {
  if (A === 1) return 0;
  // 2부터 N-1까지의 수로 N을 나눴을 때
  for (let i = 2; i <= n - 1; i++) {
    // 나누어 떨어지는 경우가 한 번이라도 있으면 N은 소수가 아니다.
    if (A % B === 0) return 0;
  }
  // 모두 나누어 떨어지지 않으면 N은 소수이다.
  return 1;


};

console.log(solution(12, 6)); // 결과: 1


// -----------------------------
function solution(A, B) {
  function getPrimes(n) {
    const set = new Set();
    while (n % 2 === 0) {
      n /= 2
      set.add(2)
    }

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      while (n % i === 0) {
        n /= i;
        set.add(i)
      }
    }
    if (n > 2) set.add(n)
    return set
  }

  const primesA = getPrimes(A);
  const primesB = getPrimes(B);

  if (primesA.size !== primesB.size) return 0


  for (let prime of primesA) {
    if (!primesB.has(prime)) return 0
  }

  return 1
}