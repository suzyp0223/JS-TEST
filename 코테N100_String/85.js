// removeTodo

// filter풀이
// const removeTodo = (todos, id) => { todos.filter(todo => todo.id !== id) };

// for문 풀이
const removeTodo = (todos, id) => {
  let result = [];
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id !== id) {
      result.push(todos[i]);
    }
  }
  return result;
};

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

console.log(removeTodo(todos, 2));
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/