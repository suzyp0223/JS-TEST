
// 문자열 배열 arr의 공통된 소문자를 오름차순으로 출력하는 함수
// 예로, arr['apple', 'naver']의
// 공통된 문자는 ['a', 'e']
// 단, 공통문자는 중복 없이 출력.

/**
 * @param arr {string[]}
 * @returns {string[]}
 */
const solution = (arr) => {
  const [str1, str2] = arr;
  const common = [];

  for (let cha of str1) {
    if (str2.includes(cha) && !common.includes(cha)) {
      common.push(cha);
    }
  }

  // const set1 = new Set(arr[0]);
  // const set2 = new Set(arr[1]);
  // const common = [...set1].filter(letter => set2.has(letter));

  return common;

};
console.log(solution(["apple", "naver"])); //결과는:["a", "e"]



const solution2 = (arr) => {
  const [str1, str2] = arr;
  const common = new Set();

  // str1의 각 문자에 대해 str2에 포함되어 있으면 common에 추가
  for (let char of str1) {
    if (str2.includes(char)) {
      common.add(char);
    }
  }

  // Set을 배열로 변환하여 반환
  return [...common];


}
console.log(solution2(["apple", "naver"])); //결과는:["a", "e"]



const solution3 = (arr) => {
  const [str1, str2] = arr;
  const set1 = new Set(str1);
  const set2 = new Set(str2);
  return [...set1].filter(letter => set2.has(letter));
}
console.log(solution3(["apple", "naver"])); //결과는:["a", "e"]




// -----------------------------------------------------
const solution4 = arr => {
  let set = new Set(arr[0].split(''));

  for (let i = 1; i < arr.length; i++) {
    let currentSet = new Set(arr[i].split(''));
    set = new Set([...set].filter(c => currentSet.has(c)));
  }

  return [...set].sort();
};
console.log(solution4(["apple", "naver"])); //결과는:["a", "e"]



// -----------------------------------------------------
