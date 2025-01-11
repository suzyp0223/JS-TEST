













// // [85]
// // todos 배열과 todos 배열에서
// // 삭제할 요소의 id를 인수로 전달하면 해당 요소를 삭제해 todos 배열을 반환한다.
// // todos 배열 요소의 id 프로퍼티 값은 절대 중복되지 않는다.
// // - for 문, for…in 문, for…of 문, Array#forEach, Array#unshift는 사용하지 않는다.
// // - todos 배열을 변경하지 않는다.

// // const removeTodo = (todos1, id) => todos1.filter(index => index.id !== id);
// const removeTodo = (todos1, id) => {
//   const change = todos1.filter(index => index.id !== id);
//   console.log(change);
//   return change;
// };
// const todos1 = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false },
// ];
// console.log(removeTodo(todos1, 2));
// console.log(todos1);
// /*
// [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 1, content: 'Javascript', completed: false }
// ]
// */


// /*
// // prettier-ignore
// `<li id="${todos.id}">
//     <label><input type="checkbox" ${checked}>${todos.content}</label>
// </li >`
// */


// // [81]
// //  todos 배열을 전달받아 html 형식의 문자열을 생성해 반환한다.
// const render = todos => {
//  };
// const todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];
// console.log(render(todos));
// /*
// '<li id="3">
//   <label><input type="checkbox">HTML</label>
// </li>
// <li id="2">
//   <label><input type="checkbox" checked>CSS</label>
// </li>
// <li id="1">
//   <label><input type="checkbox">Javascript</label>
// </li>'
// */


// // [86]
// const toggleCompletedById = (todos86, id) => {

//  };
// const todos86 = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];
// console.log(toggleCompletedById(todos86, 2));
// /*
// [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: false },
//   { id: 1, content: 'Javascript', completed: false }
// ]
// */
// const animals = [
//   { name: 'doggo', age: 0 },
//   { name: 'catch', age: 3 },
//   { name: 'bir', age: 1 },
// ];
// const map = new Map(animals.map(animal => [animal.name, animal.age]));
// console.log(map);






// const maxId = Math.max(...orderArr);
// const arrLength = orderArr.length;
// // return orderArr[0] === maxId ? maxId : (arrLength === 0 ? 0 : maxId);



// 240808목 여기서 부터 과제

// [89]
// const getMaxId = todos89 => Math.max(...todos89.map((todos89) => todos89.id), 0);

// const orderArr = todos1.map(ids => ids.id).sort(a, b => b - a);
// return orderArr.length === 0 ? 0 : Math.max(...orderArr);

// const todos89 = [
//   { id: 2, content: 'CSS', completed: true },
//   { id: 3, content: 'HTML', completed: false },
//   { id: 1, content: 'Javascript', completed: false }
// ];
// console.log(getMaxId(todos89)); // 3
// console.log(getMaxId([])); // 0







// [88] filter
// const countCompletedTodos = todos88 =>  todos88.map(value => value.completed).reduce((sum, n) =>  sum + n);  // 1

// 최종코드
// todo 의 뭘 갖고 필터를 하나?
// todo.completed
// const countCompletedTodos = todos88 => todos88.filter(todo => todo.completed).length;


  //1.
// const countCompletedTodos = todos88 => {
//   const completedNum = todos88.map(value => value.completed);
//   console.log(completedNum);  // [ false, true, false ]
//   return completedNum.reduce((sum, n) =>  sum + n);  // 1

// }

//   const todos88 = [
//     { id: 3, content: 'HTML', completed: false },
//     { id: 2, content: 'CSS', completed: true },
//     { id: 1, content: 'Javascript', completed: false }
//   ];
//   console.log(countCompletedTodos(todos88)); // 1
  


// [87]
// const toggleCompletedAll = todos87 =>
// todos87.map(todo => {
//      return {...todo, completed: true}
//  });
// const todos87 = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];
// console.log("87>: ", toggleCompletedAll(todos87));
// console.log("원본? ", todos87);
// /*
// [
//   { id: 3, content: 'HTML', completed: true },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: true }
// ]
// */



// [86]
// const toggleCompletedById = (todos86, id86) => {
//   return todos86.map(todo =>
//     todo.id === id86 ? { ...todo, completed: !todo.completed } : todo);
// };
// const todos86 = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];
// console.log(toggleCompletedById(todos86, 2));
// console.log(101010, todos86);
/*
[
  -> [
        { id: 3, content: 'HTML', completed: false },
        { id: 2, content: 'CSS', completed: true },
        { id: 1, content: 'Javascript', completed: false }
  -> ]
]
*/




// [85]
// const removeTodo = (todos, id) => {
//   return todos.filter(todo => todo.id !== id)};
// const todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false },
// ];
// console.log(removeTodo(todos, 2));
// console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/

// const filter = (arr, callback) => {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i], i, arr)) result.push(arr[i]);
//   }

//   return result;
// }
// console.log(filter([1, 2], n => n % 2 !== 0));  // [1, 3]



// const strObj = new String('문자');
// console.log(strObj[0]);

