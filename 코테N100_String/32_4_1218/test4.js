
// history: 출입한사람번호 배열
// 들어오면 양수, 나가면 음수
// infected: 감연된사람
// 감염된 사람과 동선이 겹친사람을 찾는 함수
// 오름차순 배열로 출력.
// IDEA: infected인자 양,음수 사이의 숫자를 양수로 출력 하면됨.
const solution = (history, infected) => {
  // 실행 시간 측정 시작
  console.time("Execution Time");


  let result = new Set();
  let isState = false;

  for (let i = 0; i < history.length; i++) {
    const str = Math.abs(history[i]);

    if (str == infected) {
      isState = !isState;
    } else if (isState) {
      result.add(str);
    }
  }



  // 실행 시간 측정 종료
  console.timeEnd("Execution Time");

  return [...result].sort((a, b) => a - b); // 결과 오름차순 정렬
}



console.log(solution([3, 2, -3, 1, -1, -2, 4, -4, 1, -1], 2)); //결과는:[1, 3]


// -----------------------------------
function solution(history, infected) {
  function getExistingTime(person) {
    const timeLine = [...history]
    let existing = [];
    let startPoint = 0
    while (timeLine.indexOf(person, startPoint) > -1) {
      const start = timeLine.indexOf(person, startPoint);
      const end = timeLine.indexOf(-1 * person, start);
      existing = existing.concat(Array.from({ length: end - start + 1 }, (_, i) => start + i));
      startPoint = end + 1
    }
    return existing
  }


  const infectedTime = getExistingTime(infected);
  const people = history.filter(p => p !== infected && p > 0)
    .reduce((acc, cur) => { if (!acc.includes(cur)) acc.push(cur); return acc }, []);
  let affected = [];

  people.forEach(p => {
    const existingTime = getExistingTime(p);
    for (let i = 0; i < existingTime.length; i++) {
      if (infectedTime.includes(existingTime[i])) {
        affected.push(p);
        break
      }
    }
  })

  return affected.sort((a, b) => a - b)
}
