let input = ['a', 'b', 'c'];
let count = 0;

// , 시작할위치, 목표인덱스
const permutation = (arr, s, r) => {
  // 1. 재귀함수를 멈춰야할 조건
  if (s === r) {
    count++;
    console.log(arr.join(''));
    return; 
  }


  // 2. 재귀를 돌면서 변경되어야 될 부분/메인로직
  for (let i = s; i < arr.length; i++) {
    // s + 1 첫번째 요소 다음 요소 선택.
    [arr[s], arr[i]] = [arr[i], arr[s]];  // 배열 인덱스 위치 swap
    permutation(arr, s + 1, r);
    [arr[s], arr[i]] = [arr[i], arr[s]];  // 원상복귀

  }
}

console.log(permutation(input, 0, 2));
console.log(count);