

// BJ =   참가자 5명          ["혁준", "하밥", "양상", "심심이", "소스왕"]
// one =  한그릇씩2명 150     ["혁준", "양상"]
// two =  두그릇씩 2명        ["심심이", "소스왕"]

// 하밥 3개, 나머지 1나 2개 총9개 상금 1350원
const solution = (bj, one, two) => {
  var answer = '';

  // console.log( 150 * 9);
  const food = 9;
  const money = 150;
  let winner = 3;
  let jun = 1;
  let sang = 1;
  let sim = 2;
  let king = 2;

  switch (bj) {
    case one:
     let a =  one.map((v, i) => [i] * 150);
      console.log(a);
      break;
    case two:
      one.map(v => v * 150);
      break;
      default:
      one.map(v => v * 150);

      break;
  }

  return answer;

}



console.log(solution(
  ["혁준", "하밥", "양상", "심심이", "소스왕"],
  ["혁준", "양상"],
  ["심심이", "소스왕"]
));  //"1350만원(하밥)"