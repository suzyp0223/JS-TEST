
// 2,8,10,16 진수 변환 함수
// n을 8진수로 변환하여 출력하는 함수
const solution = n => {
  const answer = n.toString(8);
  const binary = n.toString(2);	// 2진수로
  const octal = n.toString(8);	// 8진수로
  const hex = n.toString(16);		// 16진수로


  var binary2 = "1111111111";
  var decimal1 = parseInt(binary2, 2);	// 2진수에서 10진수로
  var octal2 = "1777";
  var decimal2 = parseInt(octal2, 8);	// 8진수에서 10진수로
  var hex2 = "3ff";
  var decimal3 = parseInt(hex2, 16);	// 16진수에서 10진수로

  // n진수에서 n진수로
  // n진수에서 10진수로 변환 후, 다시 원하는 n 진수로 변환함.
  var binary16 = "1111111111";
  var hex16 = parseInt(binary16, 2).toString(16);	// 2진수에서 16진수로
  var hex8 = "3ff";
  var octal8 = parseInt(hex8, 16).toString(8);	// 16진수에서 8진수로

  return answer;
};

console.log(solution(299)); // n의 값이 299일때 결과는 '453'