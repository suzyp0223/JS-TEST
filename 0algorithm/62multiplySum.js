// /* 10. 2차원 배열의 곱셈 합 */ 반복문, Array
// 2차원 배열의 모든 요소를 곱한 값을 반환

function answer(arr) {
  let product = 1;


  // 방법1. 이중 for문
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }

  //   // 방법2. flat, for문
  //   const flatArr = arr.flat();
  //   for (let i = 0; i < flatArr.length; i++) {
  //     product *= flatArr[i];
  //   }
  //   return Math.floor(product);

  // // 방법3. reduce 모든요소 곱하기
  // flatArr.reduce((acc, curr) => acc * curr, 1); // 1로 초기값 설정

  return product;
}

let input = [
  // TC: 1
  [[1], [2], [3]],
  // TC: 2
  [
    [1, 2],
    [3, 4],
    [5, 6, 7],
  ],
  // TC: 3
  [
    [5, 1],
    [0.2, 4, 0.5],
    [3, 9],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
// 출력 값
// #1 6
// #2 5040
// #3 53



let user = {
  name: 'kim',
  age: 20,
  sizes: {
    height: 185,
    weight: 77,
  },
};

function copyObj(obj) {
  let result = {};
  for (const key in obj) {
    if (typeof obj[key] === 'object') result[key] = copyObj(obj[key]);
    else result[key] = obj[key];
  }
  return result;
}
let admin = copyObj(user);

admin.sizes.weight++;

console.log("admin.sizes.weight: ", admin.sizes.weight); // 78
console.log("user.sizes.weight: ", user.sizes.weight); // 77
