
// 0 <= a < b < n 과 같다고 할 때, 아래 규칙을 만족하는 a, b 쌍의 개수 출력하는 함수.
// nums[a] == nums[b] 이면서 nums[a]가 d로 나누어 떨어짐
// nums가 [4, 1, 2, 1, 4]이고, d가 2 일 때,
// nums[0] == nums[4], 4는 2로 나누어 떨어짐.
// nums[1] == nums[3], 1은 2로 나누어 떨어지지 않음.
// 결과는 1.

const solution = (nums, d) => {
  let answer = 0;

  // nums 배열에서 모든 (a, b) 쌍 확인 (0 <= a < b < nums.length)
  for (let a = 0; a < nums.length; a++) {
    for (let b = a + 1; b < nums.length; b++) {
      // nums[a]와 nums[b]가 같고 nums[a]가 d로 나누어 떨어질 경우
      if (nums[a] === nums[b] && nums[a] % d === 0) {
        answer++;
      }
    }
  }

  return answer;
};

console.log(solution([4, 1, 2, 1, 4], 2)); // 1

// ==============================
const solution2 = (nums, d) => {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[i] === nums[j] && (nums[i] % d) === 0) {
        answer += 1;
      }
    }
  }
  return answer;
}