// console.log("첫번째 study:", study);
// var study = "good job";  // 변수 선언과 값의 할당
// console.log("두번째 study:", study);
// study = "nice";  // 값의 재할당
// console.log("세번째 study:", study);


// console.log(study);  // undefined

// var study; // 변수 선언

// console.log("------");
// console.log(a);
// a = 10;
// var a;
// console.log(a);


// console.log("----2--");
// console.log(ab);
// let ab = 30;
// console.log(ab);


// const number = 3;
// let day = "";
// switch (number) {
//   case 1:
//     day = "월요일"; break;
//   case 2:
//     day = "화요일"; break;
//   case 3:
//     day = "수요일"; break;
//   case 4:
//     day = "목요일"; break;
//   case 5:
//     day = "금요일"; break;
//   case 6:
//     day = "토요일"; break;
//   case 7:
//     day = "일요일"; break;
//   default:
//     day = "error"; break;
// }
// console.log(day);   //수요일


// const UNTIL_NUM = 10;
// let sum = 0;
// for (let i = 0; i <= UNTIL_NUM; i++) {
//   if (i % 2 == 0) sum += i;
// }
// console.log(sum); //30


// for (let i = 2; i <= 19; i++) {
//   for (let j = 1; j <= 19; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }


// function MAX(x, y) {
//   return x > y ? x : y;
// }
// console.log(MAX(0, 3));  // 3
// console.log(MAX(-1, 5));  // 5
// console.log(MAX(100, 7)); // 100


// let nums = [1, -1, 4, 0, 10, 20, 12];

// console.log(nums.sort()); 
// console.log(nums.reverse());
// [ -1, 0, 1, 10, 12, 20, 4 ]
// [ 4, 20, 12, 10, 1, 0, -1 ]

// x=1 - y=(-1) = 2  ->  x=-1  y=1
// let ascending_order = function (x, y) {
//   return x - y;
// };

// let descending_order = function (x, y) {
//   return y - x;
// };

// console.log(nums.sort(ascending_order));
// console.log(nums.sort(descending_order));
// [ -1, 0, 1, 4, 10, 12, 20 ]
// [ 20, 12, 10, 4, 1, 0, -1 ]

// let fruits = ["apple", "Orange", "orange", "banana"];
// console.log(fruits.sort());
// console.log(fruits.reverse());

// let ascending_order = function (x, y) {
//   x = x.toUpperCase();
//   y = y.toUpperCase();

//   return x > y ? 1 : -1;

//   if (x > y) return 1;
//   else if (y > x) return -1;
//   else return 0;
// };
// console.log(fruits.sort(ascending_order));
// console.log(fruits.reverse(ascending_order));

// let descending_order = function (x, y) {
//   x = x.toUpperCase();
//   y = y.toUpperCase();
//   return x < y ? 1 : -1;
// };

// console.log(fruits.sort(ascending_order));
// console.log(fruits.reverse(ascending_order));

// [1 2 3 4 5]
// [2 4 6 8 10]
// let num = [1, 2, 3, 4, 5];
// let ex_map = num.map(function (item) {
//   return item * 2;
// });
// // console.log(ex_map);
// console.log("------");

// function Car(key) {
//   console.log(new.target);
//   this.key = key;
// }

// let result1 = Car("Silver Car");
// console.log(result1);
// let result2 = new Car("Red Car");
// console.log(result2);

// let date_new = new Date();
// let date =  Date();
// let date_utc = new Date(Date.UTC(2024, 0, 1));  //utc시간으로 나와서 +9 계산하는 함수-Date.UTC

// console.log(date_new);
// console.log(date);
// console.log(date_utc);

// let array = [
//   [101, 102, 103],
//   [2001, 2002, 2003, 2004, 2005],
//   [301, 302, 303, 304]
// ];

// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array[i].length; j++) {
//     console.log(array[i][j]);
//   }
// }



// *document.querySelector(선택자) - 선택자로 검색한 요소 하나를 반환.
// 검색 결과가 없으면 'null' 반환.

// *document.querySelectorAll(선택자) - 선택자로 검색한 모든 요소를 NodeList 객체로 반환.
// NodeList 객체는 유사배열이며 '.forEach()' 메소드만 사용 가능.
// NodeList 객체는 'Array.from()' 메소드를 통해 배열로 변환 가능.

// *document.getElementById(아이디)
// HTML 'id' 속성(Attributes) 값으로 검색한 요소를 하나 반환.
// 검색 결과가 없으면 'null' 반환. 

// * 노드.parentElement - 노드(요소, 주석, 텍스트)의 부모 요소를 반환. 
  
// *요소.previousElementSibling - 요소의 이전 형제 요소를 반환.
// *요소.nextElementSibling - 요소의 다음 형제 요소를 반환.

// *요소.children - 요소의 모든 자식 요소를 반환.
// *요소.firstElementChild - 요소의 첫 번째 자식 요소를 반환.
// *요소.lastElementChild - 요소의 마지막 자식 요소를 반환.



// *document.createElement(태그이름) - HTML 요소를 메모리상에 생성해 반환.
// * document.body.append(createElement에 적은 태그이름) - 실제 화면에 출력.

// *요소.prepend(노드1, 노드2, ...) - 하나 이상의 노드를 요소의 첫 번째 자식으로 삽입.
// *요소.append(노드1, 노드2, ...) - 하나 이상의 노드를 요소의 마지막 자식으로 삽입.
// *노드.appendChild(노드1) - 하나의 노드를 노드의 마지막 자식으로 삽입하고 삽입한 노드를 반환.

// *요소.remove() - 요소를 제거.

// *노드.contains(노드) - 주어진 노드가 대상 노드를 포함한(자신도 확인) 후손인지 확인. 즉, 자신과 후손- true / 조상- false .

// *노드.textContent - 노드의 모든 텍스트를 확인(Get) 하거나  지정(Set덮어씀).

// *요소innerHTML - 요소의 내부 HTML을 확인(Get)하거나 지정(Set덮어씀).

// *요소.dataset - 요소의 `data- <div data-number="123">` 속성을 확인(Get)하거나 지정(Set덮어씀). 숫자도 문자로 변환되서 저장됨.
// 숫자변환 : JSON.parse(문자) / Number(문자)
// 찾을때: document.querySelector('[data-age').dataset.age

// const users = [
//   {name: 'nana', age: 10},
//   {name: 'tom', age: 20},
//   {name: 'jake', age: 30},
// ]
// const userEls = users.map(user => {
//   const divEl = document.createElement('div')
//   divEl.textContent = user.name
//   divEl.textContent = user.age
//   return divEl
// });
// document.querySelector('.parent').append(...userEls);

// console.Console(Number(document.querySelector('[data-age').dataset.age));



// *요소.classlist -요소의 'class' 속성을 제어.
// *요소.classList.add() - 값을 추가
// *요소.classList.remove() - 값을 제거
// *요소.classList.toggle() - 값을 토글 (있으면 제거 없으면 추가)
// *요소.classList.contains() - 값을 확인

// const el = document.querySelector('.child');

// el.classList.add('active');
// console.log(el.classList.contains('active'));

// el.classList.remove('active');
// console.log(el.classList.contains('active'));

// el.addEventListener('click', () => {
//   el.classList.toggle('active');
//   console.log(el.classList.contains('active'));
// })


// *요소.getAttribute(속성) - 요소의 속성을 확인.
// *요소.setAttribute(속성, 값) - 요소에 속성과 값을 지정.
// *요소.hasAttribute(속성) - 요소에 속성 여부를 확인.
// *요소.removeAttribute(속성) - 요소에서 속성을 제거.




  

  
  

// *window.innerWidth - 화면(Viewport)의 너비.
// *window.innerHeight - 화면의 높이.
// *window.scrollX - 화면에서 스크롤된 X축의 위치. X축 - 수평 왼 -> 오
// *window.screenY - 화면에서 스크롤된 Y축의 위치. Y축 - 수직 위 -> 아래

// window.scrollTo(), 요소.scrollTo()
// 지정된 좌표로 대상을 스크롤.
// 대상.scrollTo(X좌표, Y좌표)
// 대상.scrollTo({
//   left: X좌표,
//   top: Y좌표,
//   behavior: 'smooth'
// });


// *요소.offsetWidth - 테두리 선을 포함한 요소의 너비를 얻음.
// *요소.offsetHeight - 테두리 선을 포함한 요소의 높이를 얻음.
// *요소.clientWidth - 테두리 선을 제외한 요소의 너비를 얻음.
// *요소.clientHeight - 테두리 선을 제외한 요소의 높이를 얻음.
// *요소.scrollWidth - 테두리 선을 제외한 요소의 스크롤 영역 너비를 얻음.
// *요소.scrollHeight - 테두리 선을 제외한 요소의 스크롤 영역 높이를 얻음.




