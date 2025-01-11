

// function solution(s) {
//   var answer = '';
//   return answer;
// }

/**
 * @param arr {string[]}
 * @returns {string[]}
 */
function solution(arr) {
  // const chaArr = arr.toString();
  // console.log(chaArr);
  const c1 = arr[0];
  const c2 = arr[1];
  // console.log(c1, typeof(c2));
  // const newArr = [...chaArr];
  // console.log(newArr);

  // let answer = [...arr];
  // console.log(answer);

  // cha =  [...new Set(arr.filter((c, i) => newArr.indexOf(c) !== i ))].join('');
  // console.log(cha);

  // 객체에서 찾기
  // const cha = [...new Set(c1.split('').filter((v) => c2.includes(v)))];
  const cha = c1.split('').filter((v) => c2.includes(v));
  console.log(cha);
  const arr = [];


}

// arr ['apple', 'naver']일때
// 공통된 문자 ['a', 'e'] 출력
// 공통된 문자 중복없이 출력
console.log(solution(['apple', 'naver'])); //공통된 문자를 오름차순 출력