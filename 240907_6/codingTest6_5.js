

// function solution(s) {
//   var answer = '';
//   return answer;
// }

/**
 * @param arr {string[]}
 * @returns {string[]}
 */
function solution(arr) {
  let answer = [];
  const newArr1 = arr.slice(0,1).join('');
  const newArr2 = arr.slice(1,2).join('');
  console.log(newArr1);
  console.log(newArr2);
  const cha = newArr1.split('').filter((v) => newArr2.includes(v));
  console.log(cha);





    // return answer;
}

// arr ['0326', '0508']일때
// 공통된 문자 ['0'] 출력
// 공통된 문자 중복없이 출력
console.log(solution(['0326', '0508'])); //공통된 문자를 오름차순 출력