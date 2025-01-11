
// 0 이상의 정수 n이 주어질 때, n의 이진 표현에서 인접한
// 두 1사이의 가장 긴 거리를 출력하는 함수완성.
// n:5, n의 이진표현: 101, 결과:2
// n:11, n의 이진표현: 1011, 결과:2

const solution = (n) => {
  const bi = n.toString(2);
  console.log("bi",bi);

  // const decimal1 = parseInt(n, 2);
  // console.log("decimal1", decimal1);
  // console.log("decimal1", typeof(decimal1));

  const first = bi.charAt(0);
  const last = bi.charAt(bi.length-1);
  console.log("first:",first);
  console.log("last:", last);
  const sum = Number(first) + Number(last);
  console.log(typeof (sum));
  return sum;


};

console.log(solution(11)); // 2


const solution2 = (n) => {
  const binary = n.toString(2); // n의 이진 표현
  let maxDistance = 0; // 가장 긴 거리 저장
  let prevIndex = -1; // 이전 1의 인덱스 저장

  // 이진 문자열을 순회하며 인접한 1의 거리를 계산
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1') {
      if (prevIndex !== -1) {
        // 현재 1과 이전 1 사이의 거리 계산
        maxDistance = Math.max(maxDistance, i - prevIndex);
      }
      // 이전 1의 인덱스를 현재로 업데이트
      prevIndex = i;
    }
  }

  return maxDistance;
};

console.log("정답은?", solution2(11)); // 2

// ============================
const solution3 = n => {
  const binary = n.toString(2);
  const arr = binary.split('1');
  if (arr.length === 0 || arr.every(a => a === '')) return 0;
  let answer = Math.max(...arr.map(a => a.length + 1));

  return answer;
}