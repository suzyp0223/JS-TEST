// const arr = [
//   { name: 'apple', price: 2570, id: 'PROD_523' },
//   { name: 'banana', price: 1110, id: 'PROD_222' },
//   { name: 'tomato', price: 300, id: 'PROD_378' },
//   { name: 'grape', price: 1600, id: 'PROD_027' },
// ];

// // price만 제외한 객체를 값으로 갖는 배열 반환
// const newArr = arr.map(({ price, ...rest }) => rest);
// console.log(newArr);



// getValues
const getValues = (todos, key) => {
  // //문법@ 객체그룹을 감싼 배열 제거.
  // for (const key of Object.keys(todos)) {
  //   console.log(todos[key]);
  // }

  // //문법@ 배열안 객체의 첫번째 키가져오기
  // const keyId = Object.keys(todos[0])[0] //id
  // console.log(keyId);
  // const keyCon = Object.keys(todos[0])[1] //content
  // const keyComple = Object.keys(todos[0])[2] //completed
  // console.log(Object.values(todos)[0].id); //3



  



  // const valuesArray =  todos.map((todo) => {
  //   // if문 통과하고 todo.~에서 배열에 안담김.
  //   if (typeof (todo.id) === 'number' && key === 'id') {
  //     todo.id;
  //     console.log(key === 'id');
  //   } else if (typeof (todo.content) === 'string' && key === 'content') {
  //       todo.content;
  //     } else (typeof (todo.completed) === 'boolean' && key === 'completed')
  //     todo.completed;

      
  //     //안됨. 
  //     typeof(todo.id) === 'number' ? todo.id : 
  //     (typeof(todo.content) === 'string') ? todo.content :
  //     (typeof(todo.completed) === 'boolean') ? todo.completed : todo;
      
    
  //     // 들어오는 값 확인
  //     console.log("todo.id: ", todo.id );  // 3 2 1 * 3 
  //     console.log("todo: ", todo);  //  { id: 3, ..., ... } 객체 한줄씩 출력  총 3회
  //     console.log("key>>> ", key ); // id*3, content*3, completed*3
  //     console.log(" typeof(todo.content) ", typeof (todo.content));  // string
  //     console.log(" typeof(todo.completed) ", typeof (todo.completed));  // boolean
  // });
  // // console.log(valuesArray);
  // // return valuesArray;

  
  // //최종풀이코드1
  // // const result = todos.flatMap(todo => key === 'id' ? [todo.id] :
  // //   (key === 'content' ? [todo.content]: key === 'completed' ? [todo.completed] : key) );
  // // console.log(result); //[ 3, 2, 1 ]
  
  // //최종풀이코드2
  // const result2 = todos.map((todo) => {
  //   key === 'id' ? todo.id :
  //   (key === 'content' ? todo.content : key === 'completed' ? todo.completed : key)
  //   console.log(todo);   // 객체3개만 출력
  // });
  // // console.log(key);  // 'id' 'content' 'completed'
  //   // console.log(result2); 
  // // return result2;




}

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

// console.log(getValues(todos, 'id')); // [3, 2, 1]
// console.log(getValues(todos, 'content')); // ['HTML', 'CSS', 'Javascript']
// console.log(getValues(todos, 'completed')); // [false, true, false]

const obj = Object.entries(todos);
const ki = Object.keys(todos);
const va = Object.values(todos);

// console.log(obj);
// console.log(ki);
// console.log(va);

const arrToObj = Object.fromEntries(todos);
console.log(arrToObj);
