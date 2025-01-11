
// 문자열 s. 가장 많이 등장하는 문자를 출력.
// 가장 많이 등장하는 문자열이 여러 개라면 사전순으로 정렬 후 맨앞 문자 출력
const solution = (s) => {
  let answer = [...new Set([...s].filter((c, i) => s.indexOf(c) !== i))];
  console.log(answer);

  // let answer = [...s].filter((c, i) => s.indexOf(c) !== i);
  // console.log(answer.sort());

  const result = [...answer.sort()].shift();
  // const result = [...answer];
  console.log(result);
  return result;


};

console.log(solution("google")); // "g" / g, o가 2번씩 등장하나 사전순으로 g가 먼저.



// ------------------------------------------------------------------------------------

function solution2(s2) {
  // 중복 문자만 하나씩 남기고 배열에 저장
  const duplicates = [...new Set([...s2].filter((c, i) => s2.indexOf(c) !== i))];

  // 중복 문자 중 사전 순으로 가장 먼저 나온 문자 선택
  const firstDuplicate = duplicates.sort()[0];

  console.log(444, firstDuplicate);
  // 첫 번째 중복 문자의 첫 번째 인덱스 반환
  return firstDuplicate;
}

console.log("solution2>> ", solution2("google")); // 결과는 0 ('g'가 사전 순으로 가장 먼저 나온 중복 문자이며, 인덱스는 0)



// ------------------------------------------------------------------------------------

function solution3(s3) {
  // 중복된 문자만 하나씩 남기고 배열에 저장
  const duplicates = [...new Set([...s3].filter((c, i) => s3.indexOf(c) !== i))];

  // 중복 문자 중 사전 순으로 가장 먼저 나온 문자 선택
  const firstDuplicate = duplicates.sort()[0];

  // 첫 번째 중복 문자의 첫 번째 인덱스 반환
  return s3.indexOf(firstDuplicate);
}

console.log("solution3>>> ", solution3("google")); // 결과는 0 ('g'가 사전 순으로 가장 먼저 나온 중복 문자이며, 인덱스는 0)



// function solution4(s4) {
//   var answer = ''; //가장 많이 등장하는 문자
//   let arr = new Array(26).fill(0);
//   // 알파벳 소문자 26개에 대한 배열

//   for (let char of s) {
//     arr[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
//   }

//   let max = Math.max(...arr); // 최대 빈도수 찾기

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === max) {
//       answer = String.fromCharCode(i + 'a'.charCodeAt(0)); // 가장 많이 등장한 문자
//       break; // 최대 빈도수를 가진 문자를 찾았으므로 반복문 종료
//     }
//   }
//   return answer;
// }
// console.log("solution4>>> ", solution4("google")); // 결과는 0 ('g'가 사전 순으로 가장 먼저 나온 중복 문자이며, 인덱스는 0)

function solution5(s5) {
  const fre = {};
  for (const char of s5) {
    fre[char] = (fre[char] || 0) + 1;
  }
  const duplicates = Object.keys(fre).filter(char => fre[char] >= 2).sort();
  const answer = duplicates[0];
  return answer;
}
console.log("solution5", solution5("google"));

function solution(s) {
  var answer = '';

  let charCount = {};

  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }


  let maxCount = Math.max(...Object.values(charCount));


  let mostFrequentChars = Object.keys(charCount)
    .filter(char => charCount[char] === maxCount)
    .sort();

  answer = mostFrequentChars[0];

  return answer;
}
