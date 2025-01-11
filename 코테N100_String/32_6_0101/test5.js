
// 문자열 배열 arr의 공통된 문자를 오름차순으로 출력하는 함수
// 예로 arr['0326', '0508']은
// ['0']이 공통된 문자.
// 단, 공통된 문자는 중복 없이 출력.
// s는 숫자로 이루어짐.

/**
 * @param arr {string[]}
 * @returns {string[]}
 */
const solution = (arr) => {
  const [num1, num2] = arr;
  const set1 = new Set(num1);
  const set2 = new Set(num2);

  return [...set1].filter(letter => set2.has(letter));
};

console.log(solution(["0326", "0508"]));  //결과는:["0"]



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
console.log(solution2(["0326", "0508"]));  //결과는:["0"]
// ----------------------------------------------------
function solution(arr) {
  const commonChars = new Set(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    const currentChars = new Set(arr[i]);
    for (const char of commonChars) {
      if (!currentChars.has(char)) {
        commonChars.delete(char);
      }
    }
  }

  const result = Array.from(commonChars).sort();

  return result;
}


// ----------------------------------------------------
const solution4 = arr => {
  let set = new Set(arr[0].split(''));

  for (let i = 1; i < arr.length; i++) {
    let currentSet = new Set(arr[i].split(''));
    set = new Set([...set].filter(c => currentSet.has(c)));
  }

  return [...set].sort();
};



// ----------------------------------------------------