// // [예제 24-05]
// const x = 1;

// // ①
// console.log(1);
// function outer() {

//   console.log(2);
//   const x = 10;

//   console.log(3);
//   const inner = function () {
//     console.log("펑션 안");
//     console.log("평션안 x >>>", x);
//     console.log("펑션 나가기 전");
//   }; // ②

//   console.log(4);
//   return inner;

// }

// console.log(5);
// // outer 함수를 호출하면 중첩 함수 inner를 반환한다.
// // 그리고 outer 함수의 실행 컨텍스트는 실행 컨텍스트 스택에서 팝되어 제거된다.
// const innerFunc = outer(); // ③

// console.log(6);
// innerFunc(); // ④ 10
// console.log("innerFunc() 다음 흐름");
// // 1
// // 5
// // 2
// // 3
// // 4
// // 6
// // 펑션 안
// // 평션안 x >>> 10
// // 펑션 나가기 전
// // innerFunc() 다음 흐름



// [예제 24-06]
// function foo() {
//   const x = 1;
//   const y = 2;

//   // 일반적으로 클로저라고 하지 않는다.
//   console.log(1);
//   function bar() {
//     console.log(2);
//     const z = 3;

//     console.log(3);
//     debugger;
//     // 상위 스코프의 식별자를 참조하지 않는다.
//     console.log(4);
//     console.log("z >>>", z);
//     console.log(5);
//   }

//   console.log(6);
//   return bar;
// }

// console.log(7);
// const bar = foo();

// console.log(8);
// bar();
// console.log("bar() 다음 흐름~~");
// 7
// 1
// 6
// 8
// 2
// 3
// 4
// z >>> 3
// 5
// bar() 다음 흐름~~


// // [예제 24-07]
// function foo() {
//   const x = 1;

//   // 일반적으로 클로저라고 하지 않는다.
//   // bar 함수는 클로저였지만 곧바로 소멸한다.
//   console.log(1);
//   function bar() {
//     console.log(2);
//     debugger;
//     // 상위 스코프의 식별자를 참조한다.
//     console.log(3);
//     console.log("x >>>", x);
//     console.log(4);
//   }
//   console.log(5);
//   bar();
//   console.log(5);
// }
// console.log(7);
// foo();
// console.log("foo() 다음 흐름~~");
// // 7 1 5 2 3 1 4 5 다음
// 7
// 1
// 5
// 2
// 3
// x >>> 1
// 4
// 5
// foo() 다음 흐름~~








// [예제 25-74]
// 수퍼클래스
console.log(1);
class Rectangle {
  constructor(width, height) {
    console.log(2);
    this.width = width;
    this.height = height;
    console.log(3);
  }

  getArea() {
    console.log(4);
    return this.width * this.height;
  }

  toString() {
    console.log(5);
    return `width = ${this.width}, height = ${this.height}`;
  }
}

// 서브클래스
console.log(6);
class ColorRectangle extends Rectangle {
  constructor(width, height, color) {
    console.log(7);
    super(width, height); //super 호출후 인스턴스 생성
    this.color = color;  //인스턴스 초기화
    console.log(8);
  }

  // 메서드 오버라이딩
  toString() {
    console.log(9);
    return super.toString() + `, color = ${this.color}`;
  }
}

console.log(10);
const colorRectangle = new ColorRectangle(2, 4, 'red');
console.log("11, 컬러렉탱글>>> ", colorRectangle); // ColorRectangle {width: 2, height: 4, color: "red"}

// 상속을 통해 getArea 메서드를 호출
console.log("12, getArea", colorRectangle.getArea()); // 8
// 오버라이딩된 toString 메서드를 호출
console.log("13, toString", colorRectangle.toString()); // width = 2, height = 4, color = red
// 
// 1
// 6
// 10
// 7
// 2
// 3
// 8
// 11, 컬러렉탱글 >>> ColorRectangle { width: 2, height: 4, color: 'red' }
// 4
// 12, getArea 8
// 9
// 5
// 13, toString width = 2, height = 4, color = red








