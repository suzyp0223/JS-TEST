// 평균 소득액 계산, 최상위와 최하위 1건 제외
// 소수점 아래 절삭하여 반환
/**
 * 예시1, [2, 3, 3, 3, 20]
 * 최상위 20과 최하위 2를 제외한 평균은 3.
 *
 * 예시2, [9, 4, 7, 5, 10, 4]
 * 최상위 10과 최하위 4를 제외한
 * 평균은 6.25이고 소수점 아래두자리 절삭해, 6.
 */
const solution = (arr) => {
  // 최소값, 최대값 구하기 1
  // const max =  Math.max(...arr);
  // const min = Math.min(...arr);
  // console.log('max: ', max);
  // console.log('min: ', min);
  // 최소값, 최대값 구하기 2
  // let max = -Infinity;
  // let min = Infinity;
  // for (const num of numbers) {
  //   max = Math.max(max, num);
  // min = Math.min(min, num);
  // }
  // console.log("최대값:", max);
  // console.log("최소값:", min);


  const max = Math.max(...arr);
  const min = Math.min(...arr);
  let sum = 0;
  let count = 0;


  let maxRemoved = false;
  let minRemoved = false;

  for (const num of arr) {
    if (num === max && !maxRemoved) {
      maxRemoved = true;
    } else if (num === min && !minRemoved) {
      minRemoved = true;
    } else {
      sum += num;
      count++;
    }
  }
  let average = count > 0 ? sum / count : 0;
  console.log('average: ', average);

  return Math.floor(average);
};

console.log("solution", solution([2, 3, 3, 3, 20])); //결과는: 3
console.log("solution", solution([9, 4, 7, 5, 10, 4])); //결과는: 6
