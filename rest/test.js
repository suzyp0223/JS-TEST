
// const s1 = "552342501"
// const s = "17477117"

// function solution(s) {
//   let array = [];
//   for (let i = 0; i < s.length; i++) {
//     array.push(s[i]);
//     console.log(array);
//   }

// }
// console.log("답: ", solution("17477117"));


const getMaxId = todos => {
  const todo = [...todos].filter(items => {
    for (let i = 0; i < todo.length; i++){
      const maxNum = Math.max(items.id);
      console.log(maxNum);
    }

    // items.id.map(maxNum > 0 ? maxNum : );
  
  
  });
  // console.log(todo.id);
 };

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];
console.log(getMaxId(todos)); // 3
console.log(getMaxId([])); // 0






let arr = [
  ['bob', 1],
  ['a', 1],
  ['ball', 2],
  ['the', 1],
  ['flew', 1],
  ['far', 1],
  ['after', 1],
  ['it', 1],
  ['was', 1]
]

let map = new Map(arr);

console.log([...map.entries()].reduce((a, b) => a[1] > b[1] ? a : b)[0]);

// ball


console.log([...map.entries()]);


// map, filter, reduce 내부동작, 폴리필 구현코드
// const map = (arr, callback) => {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i], i, arr));
//   }
  
//   return result;
// }
// console.log(map([1, 2, 3], n => n ** 2));  // [1, 4, 9]


// const filter = (arr, callback) => {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i], i, arr)) result.push(arr[i]);
//   }
  
//   return result;
// }
// console.log(filter([1, 2], n => n % 2 !== 0));  // [1, 3]


// const reduce = (arr, callback, initial) => {
//   for (let i = 0; i < arr.length; i++) {
//     initial = callback(initial, arr[i], i, arr);
//   }
  
//   return result;
// }
// console.log(reduce([1, 2, 3], (sum, n) => sum + n, 0));  // 6

const getid = todos => todos.length === 0 ? 0 : Math.max(...todos.map(todo => todo.id));














