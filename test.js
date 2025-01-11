// const set = new Set([1, 2, 3]);
// set.clear();
// console.log(set); // Set(0) {}

// const arr = [1, 2, 3];
// const [one, two, three] = arr;

// console.log(one, two, three);
// console.log(typeof (arr));
// console.log(typeof (one));

// let [x, y] = [1, 2];
// console.log(x, y);


// const [c, d] = [1];
// console.log(c, d); // 1 undefined
// const [e, f] = [1, 2, 3];
// console.log(e, f); // 1 2
// const [g, , h] = [1, 2, 3];
// console.log(g, h);

// const user = { firstName: 'Ungmo', lastName: 'Lee' };
// const { lastName, firstName } = user;
// console.log(firstName, lastName); // Ungmo Lee




// [예제 36 - 20]
const todos = [
  { id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: false },
  { id: 3, content: 'JS', completed: false }
];

// todos 배열의 두 번째 요소인 객체로부터 id 프로퍼티만 추출한다.
//  {} 빈 객체 안쓰고 ,컴마로 대체함
// const [ { id }] = todos; // 1
// const [, { id }] = todos;  // 2
const [{ } , , { id }] = todos; // 3
const [ , , {content}] = todos; // 3
// console.log(id); // 2
// console.log(content); // JS

