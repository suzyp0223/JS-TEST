   [예제 34-01]
   const isIterable = v => v !== null && typeof v[Symbol.iterator] === 'function';
   
   // 배열, 문자열, Map, Set 등은 이터러블이다.
   isIterable([]);        // -> true
   isIterable('');        // -> true
   isIterable(new Map()); // -> true
   isIterable(new Set()); // -> true
   isIterable({});        // -> false
   [예제 34-02]
   const array = [1, 2, 3];
   
   // 배열은 Array.prototype의 Symbol.iterator 메서드를 상속받는 이터러블이다.
   console.log(Symbol.iterator in array); // true
   
   // 이터러블인 배열은 for...of 문으로 순회 가능하다.
   for (const item of array) {
     console.log(item); // 1 2 3
   }
   
   // 이터러블인 배열은 스프레드 문법의 대상으로 사용할 수 있다.
   console.log([...array]); // [1, 2, 3]
   
   // 이터러블인 배열은 배열 디스트럭처링 할당의 대상으로 사용할 수 있다.
   const [a, ...rest] = array;
   console.log(a, rest); // 1, [2, 3]
   [예제 34-03]
   const obj = { a: 1, b: 2 };
   
   // 일반 객체는 Symbol.iterator 메서드를 구현하거나 상속받지 않는다.
   // 따라서 일반 객체는 이터러블 프로토콜을 준수한 이터러블이 아니다.
   console.log(Symbol.iterator in obj); // false
   
   // 이터러블이 아닌 일반 객체는 for...of 문으로 순회할 수 없다.
   for (const item of obj) { // -> TypeError: obj is not iterable
     console.log(item);
   }
   
   // 이터러블이 아닌 일반 객체는 배열 디스트럭처링 할당의 대상으로 사용할 수 없다.
   const [a, b] = obj; // -> TypeError: obj is not iterable
   [예제 34-04]
   const obj = { a: 1, b: 2 };
   
   // 스프레드 프로퍼티 제안(Stage 4)은 객체 리터럴 내부에서 스프레드 문법의 사용을 허용한다.
   console.log({ ...obj }); // { a: 1, b: 2 }
  [예제 34-05]
   // 배열은 이터러블 프로토콜을 준수한 이터러블이다.
   const array = [1, 2, 3];
   
   // Symbol.iterator 메서드는 이터레이터를 반환한다.
   const iterator = array[Symbol.iterator]();
   
   // Symbol.iterator 메서드가 반환한 이터레이터는 next 메서드를 갖는다.
   console.log('next' in iterator); // true
  [예제 34-06]
   // 배열은 이터러블 프로토콜을 준수한 이터러블이다.
   const array = [1, 2, 3];
   
   // Symbol.iterator 메서드는 이터레이터를 반환한다. 이터레이터는 next 메서드를 갖는다.
   const iterator = array[Symbol.iterator]();
   
   // next 메서드를 호출하면 이터러블을 순회하며 순회 결과를 나타내는 이터레이터 리절트 객체를
   // 반환한다. 이터레이터 리절트 객체는 value와 done 프로퍼티를 갖는 객체다.
   console.log(iterator.next()); // { value: 1, done: false }
   console.log(iterator.next()); // { value: 2, done: false }
   console.log(iterator.next()); // { value: 3, done: false }
   console.log(iterator.next()); // { value: undefined, done: true }
  [예제 34-07]
   for (const item of [1, 2, 3]) {
     // item 변수에 순차적으로 1, 2, 3이 할당된다.
     console.log(item); // 1 2 3
   }
  [예제 34-08]
   // 이터러블
   const iterable = [1, 2, 3];
   
   // 이터러블의 Symbol.iterator 메서드를 호출하여 이터레이터를 생성한다.
   const iterator = iterable[Symbol.iterator]();
   
   for (; ;) {
     // 이터레이터의 next 메서드를 호출하여 이터러블을 순회한다. 이때 next 메서드는 이터레이터 리절트 객체를 반환한다.
     const res = iterator.next();
   
     // next 메서드가 반환한 이터레이터 리절트 객체의 done 프로퍼티 값이 true이면 이터러블의 순회를 중단한다.
     if (res.done) break;
   
     // 이터레이터 리절트 객체의 value 프로퍼티 값을 item 변수에 할당한다.
     const item = res.value;
     console.log(item); // 1 2 3
   }
   [예제 34-09]
   // 유사 배열 객체
   const arrayLike = {
     0: 1,
     1: 2,
     2: 3,
     length: 3
   };
   
   // 유사 배열 객체는 length 프로퍼티를 갖기 때문에 for 문으로 순회할 수 있다.
   for (let i = 0; i < arrayLike.length; i++) {
     // 유사 배열 객체는 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있다.
     console.log(arrayLike[i]); // 1 2 3
   }
   [예제 34-10]
   // 유사 배열 객체는 이터러블이 아니기 때문에 for...of 문으로 순회할 수 없다.
   for (const item of arrayLike) {
     console.log(item); // 1 2 3
   }
   // -> TypeError: arrayLike is not iterable
   [예제 34-11]
   // 유사 배열 객체
   const arrayLike = {
     0: 1,
     1: 2,
     2: 3,
     length: 3
   };
   
   // Array.from은 유사 배열 객체 또는 이터러블을 배열로 변환한다
   const arr = Array.from(arrayLike);
   console.log(arr); // [1, 2, 3]
   [예제 34-12]
   // 피보나치 수열을 구현한 사용자 정의 이터러블
   const fibonacci = {
     // Symbol.iterator 메서드를 구현하여 이터러블 프로토콜을 준수한다.
     [Symbol.iterator]() {
       let [pre, cur] = [0, 1]; // "36.1. 배열 디스트럭처링 할당" 참고
       const max = 10; // 수열의 최대값
   
       // Symbol.iterator 메서드는 next 메서드를 소유한 이터레이터를 반환해야 하고
       // next 메서드는 이터레이터 리절트 객체를 반환해야 한다.
       return {
         next() {
           [pre, cur] = [cur, pre + cur]; // "36.1. 배열 디스트럭처링 할당" 참고
           // 이터레이터 리절트 객체를 반환한다.
           return { value: cur, done: cur >= max };
         }
       };
     }
   };
   
   // 이터러블인 fibonacci 객체를 순회할 때마다 next 메서드가 호출된다.
   for (const num of fibonacci) {
     console.log(num); // 1 2 3 5 8
   }
   [예제 34-13]
   // 이터러블은 스프레드 문법의 대상이 될 수 있다.
   const arr = [...fibonacci];
   console.log(arr); // [ 1, 2, 3, 5, 8 ]
   
   // 이터러블은 배열 디스트럭처링 할당의 대상이 될 수 있다.
   const [first, second, ...rest] = fibonacci;
   console.log(first, second, rest); // 1 2 [ 3, 5, 8 ]
   [예제 34-14]
   // 피보나치 수열을 구현한 사용자 정의 이터러블을 반환하는 함수. 수열의 최대값을 인수로 전달받는다.
   const fibonacciFunc = function (max) {
     let [pre, cur] = [0, 1];
   
     // Symbol.iterator 메서드를 구현한 이터러블을 반환한다.
     return {
       [Symbol.iterator]() {
         return {
           next() {
             [pre, cur] = [cur, pre + cur];
             return { value: cur, done: cur >= max };
           }
         };
       }
     };
   };
   
   // 이터러블을 반환하는 함수에 수열의 최대값을 인수로 전달하면서 호출한다.
   for (const num of fibonacciFunc(10)) {
     console.log(num); // 1 2 3 5 8
   }
   [예제 34-15]
   // fibonacciFunc 함수는 이터러블을 반환한다.
   const iterable = fibonacciFunc(5);
   // 이터러블의 Symbol.iterator 메서드는 이터레이터를 반환한다.
   const iterator = iterable[Symbol.iterator]();
   
   console.log(iterator.next()); // { value: 1, done: false }
   console.log(iterator.next()); // { value: 2, done: false }
   console.log(iterator.next()); // { value: 3, done: false }
   console.log(iterator.next()); // { value: 5, done: true }
   [예제 34-16]
   // 이터러블이면서 이터레이터인 객체. 이터레이터를 반환하는 Symbol.iterator 메서드와
   // 이터레이션 리절트 객체를 반환하는 next 메서드를 소유한다.
   {
     [Symbol.iterator]() { return this; },
     next() {
       return { value: any, done: boolean };
     }
   }
   [예제 34-17]
   // 이터러블이면서 이터레이터인 객체를 반환하는 함수
   const fibonacciFunc = function (max) {
     let [pre, cur] = [0, 1];
   
     // Symbol.iterator 메서드와 next 메서드를 소유한 이터러블이면서 이터레이터인 객체를 반환
     return {
       [Symbol.iterator]() { return this; },
       // next 메서드는 이터레이터 리절트 객체를 반환
       next() {
         [pre, cur] = [cur, pre + cur];
         return { value: cur, done: cur >= max };
       }
     };
   };
   
   // iter는 이터러블이면서 이터레이터다.
   let iter = fibonacciFunc(10);
   
   // iter는 이터러블이므로 for...of 문으로 순회할 수 있다.
   for (const num of iter) {
     console.log(num); // 1 2 3 5 8
   }
   
   // iter는 이터러블이면서 이터레이터다
   iter = fibonacciFunc(10);
   
   // iter는 이터레이터이므로 이터레이션 리절트 객체를 반환하는 next 메서드를 소유한다.
   console.log(iter.next()); // { value: 1, done: false }
   console.log(iter.next()); // { value: 2, done: false }
   console.log(iter.next()); // { value: 3, done: false }
   console.log(iter.next()); // { value: 5, done: false }
   console.log(iter.next()); // { value: 8, done: false }
   console.log(iter.next()); // { value: 13, done: true }
   [예제 34-18]
   // 무한 이터러블을 생성하는 함수
   const fibonacciFunc = function () {
     let [pre, cur] = [0, 1];
   
     return {
       [Symbol.iterator]() { return this; },
       next() {
         [pre, cur] = [cur, pre + cur];
         // 무한을 구현해야 하므로 done 프로퍼티를 생략한다.
         return { value: cur };
       }
     };
   };
   
   // fibonacciFunc 함수는 무한 이터러블을 생성한다.
   for (const num of fibonacciFunc()) {
     if (num > 10000) break;
     console.log(num); // 1 2 3 5 8...4181 6765
   }
   
   // 배열 디스트럭처링 할당을 통해 무한 이터러블에서 3개의 요소만 취득한다.
   const [f1, f2, f3] = fibonacciFunc();
   console.log(f1, f2, f3); // 1 2 3