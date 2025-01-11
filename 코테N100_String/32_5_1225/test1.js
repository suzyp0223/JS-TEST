
// // 문자열에 연속한 2개의 같은 문자가 존재하지 않게 만들고 싶음.
// // 연속한 2개의 문자가 존재하면 이 문자를 지우고
// // 남은 문자열을 이어 붙임.
// // 이 과정을 연속한 2개의 같은 문자가 없을때까지 반복.
// // 문자열 s가 주어질때 나오는 결과는?
// const solution = (s) => {
//   // let answer = '';
//   const set = new Set(s);
//   // for (const c of s) {
//   //   if (!s.includes(c))
//   //     answer += c;
//   // }
//   // return answer;

//   // console.log('result: ', result);
//   // return result;



//   const array = [...s].filter((c, _, cha) => cha.indexOf(c) === cha.lastIndexOf(c)).join(''); //cefg
//   const array2 = [...s].filter(c => s.indexOf(c) === s.lastIndexOf(c)).join(''); //cefg
//   console.log(array);

// };

// console.log(solution("aacddefg")); //결과는: "cefg"



// const solution2 = (s) => {
//   console.time("결과 타임은: ");

//   const charCount = [...s].reduce((count, char) => {
//     count[char] = (count[char] || 0) + 1;
//     return count;
//   }, {});

//   console.timeEnd("결과 타임은: ");
//   return [...s].filter(char => charCount[char] === 1).join('');
// };
// console.log("solution2:", solution2("aacddefg")); //결과는: "cefg"


// const solution3 = (s) => {
//   console.time("결과 타임은: ");
//   const charCount = {};

//   // 1. 문자열의 각 문자의 빈도 계산
//   for (let char of s) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }

//   // 2. 빈도가 1인 문자만 결과에 추가
//   let result = '';
//   for (let char of s) {
//     if (charCount[char] === 1) {
//       result += char;
//     }
//   }
//   console.timeEnd("결과 타임은: ");
//   return result;
// };
// console.log("solution3:", solution3("aacddefg")); //결과는: "cefg"

function solution(s) {
  let c = [];
  for (let char of s) {
    if (c.length === 0 || c[c.length - 1] !== c) {
      c = c.concat(char);
    } else {
      c = c.slice(0, c.length - 1);
    }
  }

  return c.join('');
}
console.log("solution:", solution("aacddefg")); //결과는: "cefg"