// https://coding-prep.notion.site/7-eff01e176c014912accd79b081a5c6cc
// 7의 개수

/**
 * @param {number[]} nums
 * @return {number}
 */
const solution = nums => {
  const splitNums = nums.join('').split('');
  // console.log(splitNums);
  const count = splitNums.filter(num => num === '7').length;
  // console.log("count: ", count);

  const result = [...nums.join('')].filter(num => num === '7').length;
  // console.log("result: ", result);

  const result2 = nums.join('').match(/7/g)?.length || 0;
  console.log("result2: ", result2);

  let cnt = 0;
  for (const c of nums) {
    if (c === '7') cnt++;   // cnt += 1; // 같은 의미
  }
  return cnt;
  // };


}
console.log(solution([7, 77, 17])); // 4
console.log(solution([10, 29])); // 0

const solution10 = nums => {
  // 배열에 있는 요소를 문자열로 변경
  const numStr = [...nums].join('');
  console.log(numStr);  // 77717
  console.log(typeof (numStr));  //  string

  // 배열에 있는 요소를 문자배열로 변경.
  const numStr2 = [...nums.join('')];
  console.log(numStr2);  // [ '7', '7', '7', '1', '7' ]
  console.log(typeof (nums)); // object
};

console.log(solution10([7, 77, 17])); // 4
console.log(solution10([10, 29])); // 0

const array = [3, 4, 5, 2, 1];
const stringArray = [...array.join('')];
console.log(stringArray);
const stringArray2 = array.map(v => v.toString());
console.log(stringArray2);
