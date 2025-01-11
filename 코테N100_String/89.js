// // [89] getMixId
// // id 최대값, []은 0 구하기.

// // //  1풀이.
// // const getMaxId = todos => Math.max(...todos.map((todo) => todo.id), 0);

// // 2풀이. 객체배열에서 id만 배열로만들기
// // const getMaxId = todos => {
// // const orderArr = todos.map(todo => todo.id);
// // return orderArr.length === 0 ? 0 : Math.max(...orderArr);
// // }

// // 3풀이
// // const getMaxId = todos => {
// //   const orderArr = todos.map(todo => todo.id);
// //   const maxId = Math.max(...orderArr);
// //   const arrLength = orderArr.length;
// //   return orderArr[0] === maxId ? maxId : (arrLength === 0 ? 0 : maxId);
// // };

// // 4풀이.
// // for문 풀이 - id 프로퍼티 값 중에서 최대값 구하기, 빈배열=0
// const getMaxId = todos => {
//   if (todos.length === 0) {
//     return 0;
//   }

//   let result = 0;
//   for (let i = 0; i < todos.length; i++) {
// if (todos[i].id > result) {
//       result = todos[i].id;
//     }
//   }
//   return result;
// }
// const todos = [
//   { id: 2, content: 'CSS', completed: true },
//   { id: 3, content: 'HTML', completed: false },
//   { id: 1, content: 'Javascript', completed: false }
// ];
// console.log(getMaxId(todos)); // 3
// console.log(getMaxId([])); // 0


const arr = [ 10,20,30,50,100];

console.log("Math.max.apply: ",  Math.max.apply(null, arr)); //100
console.log("Math.max스프레드문법: ", Math.max(...arr)); //100