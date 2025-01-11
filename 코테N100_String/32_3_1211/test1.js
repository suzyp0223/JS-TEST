
// 크기n: 5, 노출s: "Snowball", 시간t: 0초 전광판: .....
// 크기: 5, 노출: "Snowball", t: 1초 전광판: ....S
// 크기: 5, 노출: "Snowball", t: 0초 전광판: Snowb
// 크기: 5, 노출: "Snowball", t: 10초 전광판: all..
// 크기: 5, 노출: "Snowball", t: 15초 전광판: ...Sn
// 전광판 크기n과 전광판에 노출할 문자 s, 시간 t가 주어질때,
// t초 후에 전광판에 표시될 문구를 구현하는 프로그램.
const solution = (n, s, t) => {
  const time = t % (n + s.length);

  const result = '.'.repeat(n) + s + '.'.repeat(n - 1);

  return result.slice(time, time + n);
};
function solution(n, s, t) {
  // 반복 주기
  const repeatDuration = n + s.length;

  // 반복되는 주기를 제외하고 남은 시간 계산
  const optimizeTime = t % repeatDuration;

  // 남은 시간이 흐른 후의 전광판 출력
  const text = '.'.repeat(n) + s + '.'.repeat(n - 1);
  return text.substring(optimizeTime, n);

  // // 전광판 문자열에 공백 추가
  // const marquee = '.'.repeat(n) + s + '.'.repeat(n - 5);
  // console.log("marquee", marquee);

  // // 총 길이
  // const length = marquee.length;
  // console.log("length: ", length);

  // // 현재 시간 t에 맞는 시작 인덱스 계산
  // const start = t % length;
  // console.log("start", start);

  // // 결과 문자열 계산 (순환)
  // const result = marquee.slice(start, start + n);
  // console.log("result", result);
  // return result;
}

// 테스트 케이스
console.log(solution(5, "Snowball", 0));  // 결과: "Snowb"
console.log(solution(5, "Snowball", 1));  // 결과: "...S"
console.log(solution(5, "Snowball", 10)); // 결과: "all.."
console.log(solution(5, "Snowball", 15)); // 결과: "...Sn"
console.log(solution(5, "Snowball", 18)); // 결과: "Snowb"



const solution2 = (n, s, t) => {
  // 반복 주기
  const repeatDuration = n + s.length;

  // 반복되는 주기를 제외하고 남은 시간 계산
  const optimizeTime = t % repeatDuration;

  // 남은 시간이 흐른 후의 전광판 출력
  const text = '.'.repeat(n) + s + '.'.repeat(n - 1);
  return text.substring(optimizeTime, n);




};

console.log(solution2(5, "Snowball", 18)); // 결과: "Snowb"


// -----------------------------------
function solution(n, s, t) {
  const chars = Array(n).fill().map(() => '.').concat(s.split(''));
  const start = t % chars.length;
  let text = '';
  for (let i = 0; i < n; i++) {
    const index = (start + i) % chars.length
    text += chars[index]
  }
  return text
}
