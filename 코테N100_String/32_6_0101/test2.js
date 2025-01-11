// 5명 제한시간내 성공시 혜택, 상금 150
// 첫번째 성공시 두번재 도전가능, 혜택, 상금 동일제공
// 3번 성공한 1공 우승함.
// 한번도 성공못한 사람 없음.
// 참가자 bj, 한번성공 one, 두번성공 tow,
// 총금액과 우승자 이름 출력
// 출력결과 설명
// 하밥을 제외한 혁준, 양상 1그릇,
// 심심이, 소스왕 2그릇,
// 하밥 3그릇,
// 총 상금은 다먹은 짜장면 9개에 대한 1350만원
// 결과는 "1350만원(하밥)" 이됨.
const solution = (bj, one, two) => {
  // 배열을 문자열로 변경
  // let result = '';
  // for (let i = 0; i < arr.length; i++) {
  //   result += arr[i] + (i < arr.length - 1 ? ',' : '');
  // }
  // const arrReduce = arr.reduce((acc, curr) => acc + ',' + curr);

  const bjs = bj.join(',');
  // console.log('bjs: ', bjs);
  const arrOne = one.join(',');
  // console.log('arrOne: ', arrOne);
  const arrTwo = two.join(',');
  // console.log('arrTwo: ', arrTwo);

  // let sum = 0;
  // const result = '';

  let sum = 0;

  bj.forEach((c) => {
    sum = one.includes(c) ? sum += 150 : two.includes(c) ? sum += 300 : sum += 450;
  });
    const winner = bj.filter(person => ![...one, ...two].includes(person));

    return `${sum}만원(${winner})`;
};
console.log("solution", solution(

  ["혁준", "하밥", "양상", "심심이", "소스왕"],
  ["혁준", "양상"],
  ["심심이", "소스왕"]
));  //결과는:"1350만원(하밥)"



function solution2(bj, one, two) {
  let sum = 0;
  let winner = '';
  bj.forEach((c) => {
    if (one.includes(c)) {
      sum += 150;
    } else if (two.includes(c)) {
      sum += 300;
    } else {
      sum += 450;
      console.log('sum: ', sum);
      winner = c;
      console.log('winner: ', winner);
    }
  });
};
console.log("solution2", solution2(

  ["혁준", "하밥", "양상", "심심이", "소스왕"],
  ["혁준", "양상"],
  ["심심이", "소스왕"]
));  //결과는:"1350만원(하밥)"



function solution3(bj, one, two) {
  let sum = 0;
  let winner = '';

  // Set으로 변환하여 포함 여부를 더 빠르게 확인
  const oneSet = new Set(one);
  const twoSet = new Set(two);

  bj.forEach((c) => {
    if (oneSet.has(c)) {
      sum += 150;
    } else if (twoSet.has(c)) {
      sum += 300;
    } else {
      sum += 450;
      winner = c; // 3번 성공한 사람은 우승자
    }
  });

  return `"${sum}만원(${winner})"`;
}
console.log("solution2", solution3(

  ["혁준", "하밥", "양상", "심심이", "소스왕"],
  ["혁준", "양상"],
  ["심심이", "소스왕"]
));  //결과는:"1350만원(하밥)"




// -----------------------------------------------------
function solution(bj, one, two) {
  let totalPrize = 0;

  totalPrize += one.length * 150;

  totalPrize += two.length * 300;

  const winner = bj.find(name =>
    !one.includes(name) && !two.includes(name)
  );
  totalPrize += 450;

  return `${totalPrize}만원(${winner})`;
}



// -----------------------------------------------------

const solution = (bj, one, two) => {
  const money = 150;
  const prize = one.length * money + two.length * money * 2 + money * 3;
  const filtered = bj.filter(x => ![...one, ...two].includes(x));

  return `${prize}만원(${filtered})`;
};


// -----------------------------------------------------
