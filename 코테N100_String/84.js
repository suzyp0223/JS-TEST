// addTodo

const addTodo = (todos, newTodo) => { 
  return [...[newTodo], ...todos];
 };

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

console.log(addTodo(todos, { id: 4, content: 'Test', completed: false }));
/*
[
  { id: 4, content: 'Test', completed: false },
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
]
*/
