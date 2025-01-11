// 옹알이(1)
// 컴퓨터한테 먼저 할수 있는걸 알려줘야함.
// "aya", "ye", "woo", "ma"
// 배열에 담아야함.

// 우리는 가설을 세우고 다양한 실험을 해서
// 단 한번의 예외없이 성공해야함.
//
// '원본문자'.replace('바꿀문자', '없으면 이문자로');

// https://coding-prep.notion.site/1-7d88637ab83d430393b9c7ad2ee374d4
// https://school.programmers.co.kr/learn/courses/30/lessons/120956

/*
  const str = "apple orange banana apple";
  문자열에서
    첫 번째로 일치하는 패턴만 찾아서 배열로 반환합니다.
  const pattern = /apple/;
  const result = str.match(pattern);

  console.log(result); // 출력: ["apple"]
  console.log(result.length); // 출력: 1
  console.log(result[0]); // 출력: "apple"
*/

/*
조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해
조합한(이어 붙인) 발음밖에 하지 못합니다. 문자열 배열 babbling이 매개변수로 주어질 때,
머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

입출력 예 #1
- ["aya", "yee", "u", "maa", "wyeoo"]에서 발음할 수 있는 것은
"aya"뿐입니다.
따라서 1을 return합니다.

입출력 예 #2
- ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]에서 발음할 수 있는 것은
"aya" + "ye" = "ayaye", "ye", "ye" + "ma" + "woo" = "yemawoo"로 3개입니다.
따라서 3을 return합니다.
*/

/* IDEA
 * 1. 옹알이를 배열에서 빼거나 빈문자열로 바꿈.
 * 2. trim으로 앞 뒤 공백 제거 후 공백으로만 이뤄진 요소의 길이를 찾아 반환.
 * forEach, map, filter
 * 배열 메서드, 정규 표현식, 조건문을 결합해서 문제를 해결할 수 있음.
 */
// 1번 풀이 forEach + 정규표현식
// const solution1 = babbling => {
//   const word = ["aya", "ye", "woo", "ma"];
//   const regExp = /^(aya|ye|woo|ma)+$/;

//  // 중복된 음절 금지.
//  // 단순히 어디든지 ()안의 패턴이 연속적으로 등장하는지 확인 시작^, 끝$ 표시 없어도 됨.
//   const noRepeatRegex = /(ayaaya|yeye|woowoo|mama)/;
//   let count = 0;
//   babbling.forEach(word => {
//     if (regExp.test(word) && !noRepeatRegex.test(word)) {
//       count++;
//     }
//   });
//   return count;
// };
// console.log(solution1(['aya', 'yee', 'u', 'maa', 'wyeoo'])); // 1
// console.log(solution1(['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa'])); // 3


const solution2 = babbling => {
  const arr = [];

  for (const c of babbling) {
    arr.push(
      c.replace('aya', '').replace('ye', '').replace('woo', '').replace('ma', '')  // [' ', ' e', 'u', ' a', 'w oo']
    );
  }
  return arr.filter(c => c.trim() === '').length; // 공백으로만 이뤄진 요소의 길이를 찾아 반환.
};
console.log(solution2(['aya', 'yee', 'u', 'maa', 'wyeoo'])); // 1
console.log(solution2(['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa'])); // 3


const solution3 = babbling => {
  let count = 0;

  for (const str of babbling) {
    if (str.replace(/aya|ye|woo|ma/g, '') === '') count += 1;
  }
  return count;
};
console.log(solution3(['aya', 'yee', 'u', 'maa', 'wyeoo'])); // 1
console.log(solution3(['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa'])); // 3

const solution4 = babbling => {
  return babbling.filter(c => c.replace(/aya|ye|woo|ma/g, '') === '').length;
};
console.log(solution4(['aya', 'yee', 'u', 'maa', 'wyeoo'])); // 1
console.log(solution4(['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa'])); // 3


/**
 * filter: 유효한 단어만 필터링하고 그 개수를 센다.
 * map: 각 단어의 유효성을 true/false로 변환한 후, true만 필터링하여 개수를 센다.
 * reduce: 유효한 단어의 개수를 누적해서 반환한다.
*/
// 5번 풀이 filter , map, reduce
// const solution5 = (babbling) => {
//   // 사용할 수 있는 유효한 음절 배열
//   const validSyllables = ["aya", "ye", "woo", "ma"];

//   // 단어가 유효한지 검사하는 함수
//   const isValidWord = (word) => {
//     let previousSyllable = ""; // 이전 음절을 저장할 변수
//     let isValid = true;        // 단어의 유효성을 추적하는 플래그

//     // 단어가 남아 있고 유효할 때까지 반복
//     while (word.length > 0 && isValid) {
//       let found = false; // 유효한 음절을 찾았는지 여부를 나타내는 플래그

//       // 유효한 음절 리스트(validSyllables)에서 음절을 하나씩 검사
//       for (const syllable of validSyllables) {
//         // 단어가 현재 음절(syllable)로 시작하는지 확인
//         if (word.startsWith(syllable)) {
//           // 같은 음절이 연속으로 사용되었는지 검사, 중복방지
//           if (syllable === previousSyllable) {
//             isValid = false; // 연속된 음절이면 유효하지 않다고 판단
//             break;           // 반복문 탈출
//           }
//           // 유효한 음절을 발견한 경우
//           // 현재 단어에서 해당 음절을 제거하고(word를 자르고)
//           word = word.slice(syllable.length);
//           // 이전 음절을 현재 음절로 업데이트
//           previousSyllable = syllable;
//           found = true; // 유효한 음절을 찾았으므로 true로 설정
//           break; // 반복문 탈출 (한 번에 하나의 음절만 처리)
//         }
//       }

//       // 유효한 음절을 찾지 못한 경우, 더 이상 유효하지 않은 단어로 판단
//       if (!found) {
//         isValid = false;
//       }
//     }

//     // 단어가 비어 있고, 유효한 상태이면 true 반환
//     return isValid && word.length === 0;
//   };

//   // 유효한 단어만 필터링하여 개수를 반환
//   return babbling.filter(isValidWord).length;
//   // return babbling.map(isValidWord).filter(Boolean).length;
//   // return babbling.reduce((count, word) => count + (isValidWord(word) ? 1 : 0), 0);
// };
// console.log(solution5(['aya', 'yee', 'u', 'maa', 'wyeoo'])); // 1
// console.log(solution5(['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa'])); // 3
