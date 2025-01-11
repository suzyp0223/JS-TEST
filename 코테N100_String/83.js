// // sortBy

// const sortBy = (todos, key) => { /* Do something */ }

// const todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false },
// ];

// const sortedTodos1 = sortBy(todos, 'id');
// console.log(sortedTodos1);
// /*
// [
//   { id: 1, content: 'Javascript', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 3, content: 'HTML', completed: false }
// ]
// */
// console.log(todos === sortedTodos1); // false

// const sortedTodos2 = sortBy(todos, 'content');
// console.log(sortedTodos2);
// /*
// [
//   { id: 2, content: 'CSS', completed: true },
//   { id: 3, content: 'HTML', completed: false },
//   { id: 1, content: 'Javascript', completed: false }
// ]
// */
// console.log(todos === sortedTodos2); // false


// const sortedTodos3 = sortBy(todos, 'completed');
// console.log(sortedTodos3);
// /*
// [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 1, content: 'Javascript', completed: false },
//   { id: 2, content: 'CSS', completed: true }
// ]
// */
// console.log(todos === sortedTodos3); // false





// let newTodos = [];
// for (let i = 0; i < todos.length; i++) {
//   newTodos.push(todos[i]);
// }
// console.log(0,newTodos);





// sortBy
// todos 배열과 todos 배열의 요소인 todo 객체의 프로퍼티 키(id, content, completed)
// 중 하나를 문자열로 전달하면 해당 프로퍼티 키로 todos 배열의 요소를 정렬해 todos 배열을 반환한다.
// a - b에서 같은 숫자면 0, a가 크면 양수-내림차순, b가 크면 음수-오름차순.
const sortBy = (todos, key) => {
  // return todos.sort((a, b) => {a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0)
  // //   // console.log(todos);
  // //   // console.log(answer);  // -1-1   -1 1    1-1
  // //   // console.log("a[key], ", a[key]); //2 1
  // //   // console.log("b[key], ", b[key]); //3 2
  // });

  // return  todos.sort((a, b) => { a[key] - b[key] > 0 ? 1 : -1 });


  const newObject = todos[0];
  console.log(0,newObject);


  for (let i = 0; i < todos.length; i++) {
    for (let j = 0; j < todos.length; j++) {
      
      

      
    }
  }

}
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

const sortedTodos1 = sortBy(todos, 'id');
console.log(sortedTodos1);
/*
[
  { id: 1, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false }
]
*/
console.log(todos === sortedTodos1); // false

const sortedTodos2 = sortBy(todos, 'content');
console.log(sortedTodos2);
/*
[
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/
console.log(todos === sortedTodos2); // false


const sortedTodos3 = sortBy(todos, 'completed');
console.log(sortedTodos3);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true }
]
*/
console.log(todos === sortedTodos3); // false





// const todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false },
// ];

// const sortedTodos1 = sortBy(todos, 'id');
// console.log("1>>>> ", sortedTodos1);
// /*
// [
//   { id: 1, content: 'Javascript', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 3, content: 'HTML', completed: false }
// ]
// */
// console.log("1? ", todos === sortedTodos1); // false

// const sortedTodos2 = sortBy(todos, 'content');
// console.log("2>>>>> ", sortedTodos2);
// /*
// [
//   { id: 2, content: 'CSS', completed: true },
//   { id: 3, content: 'HTML', completed: false },
//   { id: 1, content: 'Javascript', completed: false }
// ]
// */
// console.log("2? ", todos === sortedTodos2); // false


// const sortedTodos3 = sortBy(todos, 'completed');
// console.log("3>>>> ", sortedTodos3);
// /*
// [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 1, content: 'Javascript', completed: false },
//   { id: 2, content: 'CSS', completed: true }
// ]
// */
// console.log("3? ", todos === sortedTodos3); // false