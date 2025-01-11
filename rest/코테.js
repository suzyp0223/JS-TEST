// 빈배열인지 확인
const checkArr = arr => {

  return Array.isArray(arr) && arr.length === 0 ? true : false;
}

console.log(checkArr([]));  // true
console.log(checkArr([1, 2]));   // false
console.log(checkArr({}));
console.log(checkArr(""));
console.log(checkArr(1, 2));





// // console.time("결과1 타임은: ");
// // let n = 5; //120
// function solution(n) {
//   let answer = 0;
//   for (let i = 1; i <= n; i++) {
//     console.log(1, n);
//     // console.log(2, n.length);
//     answer = n.length * i++;
//     console.log(22,answer);
//     console.log(i++);
//   }
//   return answer;
// }
// console.log("결과 120?: ", solution(5));
// // console.timeEnd("결과1 타임엔드: ");


// //문자열 확인
// function solution(s, target) {
//   // let s = "ka";
//   // let target = "kakao";
//   var answer = true;
//   console.log(111);
//   if ((s.length <= 100) && (target.length <= 100)) {
//     console.log(2222, s);
//     if (target.includes(s)) {
//       console.log(333, target);

//       return answer;
//     };
//   };
// };

// console.log("", solution("ka", "kakao"));






//재귀함수

// let memo = {};
// function five(n) {
//   if (n in memo) {
//     result = memo[n];
//   } else {
//     if (n == 1 || n == 2) {
//       result = 1;
//     } else {
//       result = five(n - 1) + five(n - 2);
//     }
//     memo[n] = result;
//   }
//   return result;
// };
// console.log("답은?: ", five(6));  //8


// function five(n) {
//   if ( n === 0 || n === 1) {
//     return n;
//   }
//   return five(n - 1) + five(n - 2);
// };
// console.log("답은?: ", five(6));  //8