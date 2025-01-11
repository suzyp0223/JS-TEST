// https://coding-prep.notion.site/694a268c45384794950c183355d4b09b
// 약수 구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120897


// 입출력 예 #1
//   - 24의 약수를 오름차순으로 담은 배열[1, 2, 3, 4, 6, 8, 12, 24]를 return합니다.
// 입출력 예 #2
//   - 29의 약수를 오름차순으로 담은 배열[1, 29]를 return합니다.

//  n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수.
const findDivisors = n => {
  const set = new Set(n);
  console.log(set);

};

console.log(findDivisors(1)); // [1]
console.log(findDivisors(15)); // [1, 3, 5, 15]
console.log(findDivisors(16)); // [1, 2, 4, 8, 16]
console.log(findDivisors(24)); // [1, 2, 3, 4, 6, 8, 12, 24]
console.log(findDivisors(29)); // [1, 29]


// const findDivisors1 = n => {

// };

// console.log(findDivisors1(1)); // [1]
// console.log(findDivisors1(15)); // [1, 3, 5, 15]
// console.log(findDivisors1(16)); // [1, 2, 4, 8, 16]
// console.log(findDivisors1(24)); // [1, 2, 3, 4, 6, 8, 12, 24]
// console.log(findDivisors1(29)); // [1, 29]