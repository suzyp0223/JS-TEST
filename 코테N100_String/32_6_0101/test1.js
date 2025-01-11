
// 문자열 계산식을 입력받는 계산기 만들기
// 계산식은 덧셈 +, 뺄셈 -, 숫자로만 이루어짐.
// 계산식s 의 계산 결과를 출력하는 함수
const solution = (s) => {
  return eval(s);


};

console.log(solution("-3+26-7")); //결과는: 16





// -----------------------------------------------------
function solution(s) {
  const numbers = s.match(/[\d]+|[-+]/g);

  let result = 0;
  let currentSign = 1;

  for (let i = 0; i < numbers.length; i++) {
    const num = parseInt(numbers[i]);

    if (!isNaN(num)) {
      result += currentSign * num;
    } else {
      currentSign = (numbers[i] === '+') ? 1 : -1;
    }
  }

  return result;
}



// -----------------------------------------------------
