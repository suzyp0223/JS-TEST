
//11434 문자열 s에서 0~9 정수중 가장 많이 등장한 수 중 가장 작은 수 반환.
const solution = (s) => {
  let num = 0;
  // [...s].filter((num, i) => num.includes(i) ?
  let map = new Map();

  // 숫자 등장 횟수를 저장할 배열 (0~9)
  const count = Array(10).fill(0);

  // 문자열 순회하며 각 숫자의 등장 횟수 증가
  for (let char of s) {
    count[parseInt(char)]++;
    console.log("count:", count);
  }

  // 최대 등장 횟수 찾기
  const maxFrequency = Math.max(...count);

  // 등장 횟수가 최대인 숫자 중 가장 작은 숫자 반환
  const resu =  count.findIndex(freq => freq === maxFrequency);

  console.log("resu:", resu);

  // for (let i = 0; i <= s.length; i++) {
  //   // const sum = s[i];




  //   switch ([...s]) {
  //     case value: 1;
  //     let one =

  //     break;

  //     default:
  //       break;
  //     }

  //   }


};

console.log(solution("174771177")); // 답안: 7
console.log(solution("552342502")); // 답안: 2

// ------------------------------
function solution(s) {
  const numberObj = {};
  s.split('').forEach(num => {
    numberObj[num] ? numberObj[num] += 1 : numberObj[num] = 1
  });
  const entries = Object.entries(numberObj);
  entries.sort(([k1, v1], [k2, v2]) => {
    if (v1 !== v2) {
      return v2 - v1
    } else {
      return parseInt(k1) - parseInt(k2)
    }
  })
  return parseInt(entries[0][0])
}

//===========================================
const solution = s => {
  const count = new Array(10).fill(0);

  for (const c of s) {
    if (c >= '0' && c <= '9') {
      count[c] += 1;
    }
  }
  return count.indexOf(Math.max(...count));
}


//===========================================
function solution(s) {
  const count = Array(10).fill(0);

  s.split('').forEach(num => {
    count[Number(num)]++;
  });

  const maxCount = Math.max(...count);
  return count.findIndex(c => c === maxCount);
}


//===========================================