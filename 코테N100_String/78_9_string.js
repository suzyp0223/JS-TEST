// https://coding-prep.notion.site/sum-matrix-263eab49987946ea9c5ca3256f8a1e95
// sum matrix


// 2차원 정수 배열 matrix가 주어지면 모든 요소의 합을 반환하는 함수를 구현
// 1번 풀이 map
const sumMatrix1 = matrix => {
  const arr = matrix.map(row => row.reduce((sum, num) => sum + num, 0)).reduce((acc, rowSum) => acc + rowSum, 0);
  console.log("arr: ", arr);
  return arr;
};
console.log(sumMatrix1([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // 45
console.log(sumMatrix1([])); // 0



// 2번 풀이 reduce
const sumMatrix2 = matrix => {
  return matrix.flat().reduce((num, cur) => num + cur, 0);
};
console.log(sumMatrix2([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));  // 45
console.log(sumMatrix2([]));  // 0



// 3번 풀이 forEach문
const sumMatrix3 = str => {
  let sum = 0;
  str.flat().forEach(num => {
    sum += num
  });

  return sum;
};
console.log(sumMatrix3([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));  // 45
console.log(sumMatrix3([]));  // 0



// 4번 풀이 for문
const sumMatrix4 = matrix => {
  const flatMatrix = matrix.flat();
  let sum = 0;
  for (let i = 0; i < flatMatrix.length; i++) {
    sum += flatMatrix[i];
  }
  return sum;
};
console.log(sumMatrix4([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // 45
console.log(sumMatrix4([])); // 0



// 5번 풀이 2중포문
//2차원 정수 배열 matrix가 주어지면 모든 요소의 합을 반환하는 함수를 구현한다.
const sumMatrix = matrix => {
  let sum = 0;  // 합계를 저장할 변수
  for (let i = 0; i < matrix.length; i++) {   // 첫 번째 for문: 행(row)을 순회
    for (let j = 0; j < matrix[i].length; j++) {   // 두 번째 for문: 각 행의 열(column)을 순회
      sum = sum + matrix[i][j];   // 현재 요소를 sum에 더함
      console.log("matrix.length: ", matrix.length);  // 3
      console.log("matrix[i][j]: ", matrix[i][j]);  //1, 2, 3, 4, 5, 6, 7, 8, 9
      console.log("matrix[i]: ", matrix[i]);  // [1, 2, 3]*3, [4, 5, 6]*3, [7, 8, 9]*3
      console.log("matrix[j]>>>>>>: ", matrix[j]);  // [1, 2, 3], [4, 5, 6], [7, 8, 9] *3
      console.log("matrix[j].length: ", matrix[j].length);  // [1, 2, 3]... 배열안 값이 모두 3개라서 3만 나옴.
    }
  };
  return sum;  // 최종 합계를 반환
};
console.log(sumMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // 45
console.log(sumMatrix([])); // 0
