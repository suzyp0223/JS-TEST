// https://blacklobster.tistory.com/13

// 문자열에서 제일 처음으로 두번 등장하는 문자 출력 함수
// 'google'에서 처음 두번 등장하는 문자는 'o'
// 못찾을경우 빈문자열 반환
/**
 * @param s {string}
 * @returns {string}
 */
const solution = (s) => {

  let answer = '';
  let findC = '';
  let lastC = '';
  // findC = s.indexOf(s);
  // console.log(findC);
  // const answer = [...s].filter((arr, i) => s.indexOf(arr) )
  // }
  // console.log(findC);

  const [doubleC] = new Set([...s].filter((c, i) => {
    s.indexOf(c) !== i
    console.log(s.indexOf(c)); // 0 1 1 0 4 5 
    console.log("i? ",i);      // 0 1 2 3 4 5
 } ));
  console.log(typeof(doubleC));

  // return answer;

}

console.log(solution('google')); // 제일 처음으로 두번 등장하는 문자 구하기

