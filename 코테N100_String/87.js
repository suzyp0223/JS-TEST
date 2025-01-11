// [87]toggleCompletedAll

// const toggleCompletedAll = todos87 =>
// todos87.map(todo => {
//      return {...todo, completed: true}
//  });











// map풀이
const toggleCompletedAll = todos =>  todos.map(todo => {
    return { ...todo, completed: true }
  });


// // for문 풀이
// const toggleCompletedAll = todos => {
//   let result = [];
//   for (let i = 0; i < todos.length; i++) {
//     const newCompleted = { ...todos[i], completed: true };
//     result.push(newCompleted)
//   }
//   return result;
//  };


const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];
console.log(">>>: ", toggleCompletedAll(todos));
console.log("원본? ", todos);
/*
[
  { id: 3, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: true }
]
*/
