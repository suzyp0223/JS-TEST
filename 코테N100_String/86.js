
// map풀이
// const toggleCompletedById = (todos, id) => {
//   return todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
// };


// for문 풀이
const toggleCompletedById = (todos, id) => { 
  let result = [];
  for (let i = 0; i < todos.length; i++) {
   const newArray = todos[i].id === id ? { ...todos[i], completed: !todos[i].completed } : todos[i];
    result.push(newArray);
  }
  return result;
 };

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

console.log(toggleCompletedById(todos, 2));
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/