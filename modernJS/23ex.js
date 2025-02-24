   [예제 23-01]
   var x;
   x = 1;
   [예제 23-02]
   // 전역 변수 선언
   const x = 1;
   const y = 2;

   // 함수 정의
   function foo(a) {
     // 지역 변수 선언
     const x = 10;
     const y = 20;

     // 메서드 호출
     console.log(a + x + y); // 130
   }

   // 함수 호출
   foo(100);

   // 메서드 호출
   console.log(x + y); // 3
   [예제 23-03]
   const x = 1;

   function foo() {
     const y = 2;

     function bar() {
       const z = 3;
       console.log(x + y + z);
     }
     bar();
   }

   foo(); // 6
   23-04
   var x = 1;
   const y = 2;

   function foo(a) {
     var x = 3;
     const y = 4;

     function bar(b) {
       const z = 5;
       console.log(a + b + x + y + z);
     }
     bar(10);
   }

   foo(20); // 42
   23-05
   // Object.prototype.toString
   window.toString(); // -> "[object Window]"

   window.__proto__.__proto__.__proto__.__proto__ === Object.prototype; // -> true
   23-06
   var x = 1;
   const y = 2;

   function foo(a) {
   ...
  23-07
  let foo = 1; // 전역 변수

  {
    // let, const 키워드로 선언한 변수가 호이스팅되지 않는다면 전역 변수를 참조해야 한다.
    // 하지만 let 키워드로 선언한 변수도 여전히 호이스팅이 발생하기 때문에 참조 에러(ReferenceError)가 발생한다.
    console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
    let foo = 2; // 지역 변수
  }
  23 -08
  var x = 1;
  const y = 2;

  function foo(a) {
    var x = 3;
    const y = 4;

    function bar(b) {
      const z = 5;
      console.log(a + b + x + y + z);
    }
    bar(10);
  }

  foo(20); // ← 호출 직전
  23 -09
  var x = 1;
  const y = 2;

  function foo(a) {
    var x = 3;
    const y = 4;

    function bar(b) {
      const z = 5;
      console.log(a + b + x + y + z);
    }
    bar(10); // ← 호출 직전
  }

  foo(20);
  23 - 10
  console.hasOwnProperty('log'); // -> true
  23 - 11
  let x = 1;

  if (true) {
    let x = 10;
    console.log(x); // 10
  }

  console.log(x); // 1