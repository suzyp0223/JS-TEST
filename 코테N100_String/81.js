// render

// todos 배열을 전달받아 html 형식의 문자열을 생성해 반환한다.
// - for 문, for…in 문, for…of 문은 사용하지 않는다.
const render = todos => {
  const result1 = todos
    .map(todo =>
      ` 
      <li id=${todo.id}>
         <label><input type="checkbox" ${todo.completed}>${todo.content}</label>
      </li> `
    ).join('')
  console.log(result1);
};

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

console.log(render(todos));
/*
'<li id="3">
  <label><input type="checkbox">HTML</label>
</li>
<li id="2">
  <label><input type="checkbox" checked>CSS</label>
</li>
<li id="1">
  <label><input type="checkbox">Javascript</label>
</li>'
*/


// 반환된 html 문자열의 태그 간 공백 문자는 html로서 동일하게
// 동작한다면 위 문제의 console.log 출력과 다소 상이해도 무방하다.
// 예를 들어, 아래 두 html은 동일하게 동작한다.

// '<li id="3">
//   < label > <input type="checkbox">HTML</>
// </li >
// <li id="2">
//   <label><input type="checkbox" checked>CSS</label>
// </li>
// <li id="1">
//   <label><input type="checkbox">Javascript</label>
// </li>'


/*
'<li id="3">
 <label label > <input type="checkbox" >HTML</label>
       </li ><li id="2">
         <label><input type="checkbox" checked>CSS</label>
       </li><li id="1">
         <label><input type="checkbox" >Javascript</label>
       </li>'

const render = todos => {
  const result1 = todos
    .map(todo =>
      ` <li id=${todo.id}>
         <label><input type="checkbox" ${todo.completed}>${todo.content}</label>
      </li> `
    ).join('')
  console.log(result1);
};
*/