// // // [88] filter
// // 1-1풀이. map, reduce
// // const countCompletedTodos3 = todos88 => {
// //   const completedNum = todos88.map(value => value.completed);
// //   console.log(completedNum);  // [ false, true, false ]
// //   return completedNum.reduce((sum, n) =>  sum + n);  // 1
// // }

// // // 1-2풀이.
// // const countCompletedTodos1 = todos88 =>  todos88.map(value => value.completed).reduce((sum, n) =>  sum + n);  // 1

// // //2풀이. filter
// // // todo 의 뭘 갖고 필터를 하나?
// // todo.completed
// // const countCompletedTodos2 = todos88 => todos88.filter(todo => todo.completed).length;


// console.log(toggleCompletedAll(todos)); // 1
// console.log(countCompletedTodos2(todos88)); // 1
// console.log(countCompletedTodos3(todos88)); // 1


// // for문 풀이-true 갯수 구하기 카운트
// // todos 배열에서 완료(completed: true)한 할일의 갯수를 구해 반환
const countCompletedTodos = todos => {
  let result = 0;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].completed) {
      result++;
    }
  }
 return result;
 };


const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];
console.log(countCompletedTodos(todos)); // 1
