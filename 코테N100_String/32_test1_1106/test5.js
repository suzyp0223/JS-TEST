// https://velog.io/@devjade/%ED%94%BC%EB%B3%B4%EB%82%98%EC%B9%98-%EC%88%98%EC%97%B4-%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9C%BC%EB%A1%9C-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0Dynamic-programming
// https://velog.io/@polynomeer/%EB%8F%99%EC%A0%81-%EA%B3%84%ED%9A%8D%EB%B2%95Dynamic-Programming

// 첫 번째, 두 번째 항이 1이고 그 뒤의 모든 항은 바로 앞
// 두 항의 합인 피보나치 배열에서 n번재 항의 값을 출력하는 함수
const solution = n => {
  //일단 초기 배열이 [0, 1]에서 시작하여 배열의 요소를 누적해 나가는 방법
  //그리고 이미 구해놓은 것은 배열의 요소로 저장해놓기..!!! 그래야 런타임이 초과되지 않는다

  let newArr = [0, 1]; //0번째 1번째 요소는 고정시켜두고


  let fib = (n) => { //함수 한개를 선언해주고
    if (newArr[n] !== undefined) {
      return newArr[n]; //이미 있는 건 그대로 리턴
    }
    newArr[n] = fib(n - 1) + fib(n - 2); //없는 건 새로 만들어서 저장!!!*****
    return newArr[n];
  };

  return fib(n);
};

console.log(solution(6)); // n = 6 일때, 배열은 [1, 1, 2, 3, 5, 8], 결과는 8