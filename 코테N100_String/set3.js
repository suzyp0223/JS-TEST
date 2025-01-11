// // https://coding-prep.notion.site/ed63ff53252a4b00a5e9c5f21707c87f
// // 외계어 사전
// // https://school.programmers.co.kr/learn/courses/30/lessons/120869



// // 입출력 예 #1
// //   - "p", "o", "s" 를 조합해 만들 수 있는 단어가 `dic`에 존재하지 않습니다.따라서 2를 return합니다.
// // 입출력 예 #2
// //   - "z", "d", "x" 를 조합해 만들 수 있는 단어 "dzx"가 `dic`에 존재합니다.따라서 1을 return합니다.
// // 입출력 예 #3
// //   - "s", "o", "m", "d" 를 조합해 만들 수 있는 단어가 `dic`에 존재하지 않습니다.따라서 2을 return합니다.



// // spell을 정렬한 다음 연결해 하나의 문자열을 생성한다.
// // dic을 순회하면서 각 문자열 요소를 정렬해 앞에서 생성한 문자열과 동일한지 확인한다.
// // 만약 동일하다면 spell에 담긴 알파벳을 한번씩만 모두 사용한 단어다.
// const solution = (spell, dic) => {
//   // const str = spell.sort().join('');
//   // console.log(str);

//   // const [...aa] = spell.join('');
//   // console.log(aa);

//   // const dicStr = [...dic];
//   // console.log(dicStr);
//   // let arr = [];
//   // for (let i = 0; i < dic.length; i++) {
//   //   arr = [...arr, dic.slice(1*i, 1*i+1)]
//   // }
//   // console.log(arr);

//   // const result = new Set(arr);
//   // console.log(result);
//   // let num = 0;
//   // let includeStr = result.has(spell);
//   // console.log(includeStr);

// // -----------------------------------------------------------------


//   // for (const cha of dic) {
//   //   const set = new Set(cha);
//   //   if (cha.length === spell.length && spell.every((c) => set.has(c))) {
//   //     return 1;
//   //   }
//   // }
//   // return 2;

//   // sort



//   // include



//   //has




//   // counter



//   //코딩할때 먼저 해야할것
//   // 1번 해야할것을 한국말로 쓰기
//   // 2. 메서드를 떠올리기
//   // 3. 코드로 구현하기




//   // 외계어인지 아닌지 확인해야함.
//   //1. spell을 문자열로 변경 오름차순으로 spell, dic 정렬해서 같은지 아닌지 확인

//   //2. 포오브문으로 dic을 돌아서 word랑 spell 길이가 같은지 확인.
//   // spell의 모든every 요소가 word에 있는지 확인.


//   for (const word of dic) {
//     console.log([...word].sort().join());

//   }



// };

// console.log(solution(['p', 'o', 's'], ['sod', 'eocd', 'qixm', 'adio', 'soo'])); // 2
// console.log(solution(['z', 'd', 'x'], ['def', 'dww', 'dzx', 'loveaw'])); // 1
// console.log(solution(['s', 'o', 'm', 'd'], ['moos', 'dzx', 'smm', 'sunmmo', 'som'])); // 2
let a;
//  spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1,
// 존재하지 않는다면 2를 return하도록 solution 함수.
const solution1 = (spell, dic) => {
  // dic에 spell이 존재하는지 확인
  const set = new Set(dic);
  // console.log(set);
  // for (const c of set) {
  //   console.log(c);
  // }
  const regExp = new RegExp(spell, 'g');

  return [...dic].filter(c => c.replace(regExp, '') );

};

console.log(solution1(['p', 'o', 's'], ['sod', 'eocd', 'qixm', 'adio', 'soo'])); // 2
console.log(solution1(['z', 'd', 'x'], ['def', 'dww', 'dzx', 'loveaw'])); // 1
console.log(solution1(['s', 'o', 'm', 'd'], ['moos', 'dzx', 'smm', 'sunmmo', 'som'])); // 2



const solution2 = (spell, dic) => {
  // spell을 Set으로 변환 (중복 알파벳 제거)
  const spellSet = new Set(spell);

  // dic의 각 단어를 순회하며 spellSet과 동일한 알파벳으로 구성된 단어가 있는지 확인
  for (const word of dic) {
    const wordSet = new Set(word);

    // 단어의 알파벳 개수가 spellSet과 같고, spellSet의 모든 알파벳을 포함하는지 확인
    if (wordSet.size === spellSet.size && [...spellSet].every(char => wordSet.has(char))) {
      return 1;
    }
  }

  // 일치하는 단어가 없으면 2 반환
  return 2;
};
console.log(solutio2(['p', 'o', 's'], ['sod', 'eocd', 'qixm', 'adio', 'soo'])); // 2
console.log(solutio2(['z', 'd', 'x'], ['def', 'dww', 'dzx', 'loveaw'])); // 1
console.log(solutio2(['s', 'o', 'm', 'd'], ['moos', 'dzx', 'smm', 'sunmmo', 'som'])); // 2
/*
new Set(spell):

spell 배열을 집합(Set)으로 변환합니다. 이로써 중복된 알파벳이 있으면 제거됩니다.
new Set(word):

dic의 각 단어를 Set으로 변환하여, 단어 내 중복 알파벳을 제거합니다.
조건 확인:

먼저, wordSet.size === spellSet.size로 두 집합의 크기가 같은지 확인합니다. 알파벳 개수가 다르면 바로 다음 단어로 넘어갑니다.
그 다음, every() 메서드를 사용하여 spellSet의 모든 문자가 wordSet에도 있는지 확인합니다.
결과 반환:

일치하는 단어가 있으면 1을 반환하고, 모든 단어를 확인해도 없으면 2를 반환합니다.
이 방식은 Set을 사용하여 중복된 알파벳을 처리하고, 비교 과정을 간결하게 만들어 줍니다.
*/



const solution3 = (spell, dic) => {
  // spell을 알파벳 순으로 정렬한 문자열로 변환
  const sortedSpell = spell.sort().join('');

  // dic의 각 단어를 알파벳 순으로 정렬하고, spell과 일치하는지 확인
  for (const word of dic) {
    if (word.split('').sort().join('') === sortedSpell) {
      return 1;
    }
  }

  // 일치하는 단어가 없으면 2 반환
  return 2;
};
console.log(solution3(['p', 'o', 's'], ['sod', 'eocd', 'qixm', 'adio', 'soo'])); // 2
console.log(solution3(['z', 'd', 'x'], ['def', 'dww', 'dzx', 'loveaw'])); // 1
console.log(solution3(['s', 'o', 'm', 'd'], ['moos', 'dzx', 'smm', 'sunmmo', 'som'])); // 2
/*
spell.sort().join(''):

spell 배열을 알파벳 순으로 정렬한 뒤 문자열로 변환합니다.
예를 들어, ['p', 'o', 's']는 정렬 후 'ops'가 됩니다.
word.split('').sort().join(''):

dic에서 각 단어를 알파벳 순으로 정렬한 후 문자열로 변환합니다.
예를 들어, 'sod'는 'dos', 'dzx'는 'dxz'가 됩니다.
비교:

정렬된 spell과 정렬된 dic의 단어가 같은지 비교합니다.
같으면 1을 반환하고, 모두 다르면 2를 반환합니다.
이 코드로 주어진 조건을 만족하는 단어가 있는지 확인할 수 있습니다.
*/

