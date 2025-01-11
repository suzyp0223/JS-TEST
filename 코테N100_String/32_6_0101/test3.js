
// 정수 배열 arr에서 3개의 숫자를 골라
// 숫자들을 변의 길이로 삼각형을 만듬.
// 가장 둘레가 긴 삼각형의 둘레를 정수로 반환.
// 삼각형의 조건 - 각 두 변의 길이를 더한 값이 나머지 한 변의 길이보다 커야 함.
// 즉, 두수의 합이 다른 한 수보다 작으면 안됨.
const solution = (arr) => {

  if (x + y > z) {
    y + z > x
    z + x > y
  }





};

console.log(solution([6, 2, 12, 8, 5, 9]));  //결과는:29
console.log(solution([5, 19, 4, 23, 198, 34]));  //결과는:76
console.log(solution([1, 2, 5, 60, 50, 7]));  //결과는:0




// -----------------------------------------------------
function solution(arr) {
  arr.sort((a, b) => b - a);

  for (let i = 0; i < arr.length - 2; i++) {
    const a = arr[i];
    const b = arr[i + 1];
    const c = arr[i + 2];

    if (a < b + c) {
      return a + b + c;
    }
  }

  return 0;
}




// -----------------------------------------------------
const solution = arr => {
  const sorted = [...arr].sort((a, b) => b - a);
  for (let i = 0; i < sorted.length - 2; i++) {
    if (sorted[i] < sorted[i + 1] + sorted[i + 2]) return sorted[i] + sorted[i + 1] + sorted[i + 2];
  }
  return 0;
};



// -----------------------------------------------------
