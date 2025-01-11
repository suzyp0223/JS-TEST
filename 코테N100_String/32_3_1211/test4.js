
// 마피아 게임
/*
  게임 규칙
  N명의 멤버는 같은 숫자 카드,
  2명만 다른 숫자 카드를 받음.
  멤버는 최소 5명, 매 게임마다 무조건 마피아는 2명.
  이때, 마피아인 멤버의 인덱스를 찾아서
  오름차순으로 출력할것.

  예로, 배열members가 [4, 4, 10, 4, 10]
  5명의 멤버들 가운데 10의 카드를가진 멤버가 마피아이고
  출력해야 할 결과는 [2, 4].

  배열members엔 최소 5개 이상의 원소가 포함, 원소는 양수.
  마피아는 항상 2명.
*/
function solution(members) {
  // 1. 배열의 숫자 빈도 계산
  const frequency = {};
  for (let num of members) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  // 2. 빈도가 적은 숫자(마피아) 찾기
  const mafiaNumbers = Object.keys(frequency).filter(key => frequency[key] !== members.length - 2).map(Number);

  // 3. 마피아 숫자의 인덱스 찾기
  const result = [];
  mafiaNumbers.forEach(num => {
    members.forEach((value, index) => {
      if (value === num) result.push(index);
    });
  });

  // 4. 결과 정렬하여 반환
  return result.sort((a, b) => a - b);
}
function solution2(members) {
  let count = 0;
  members.slice(1).forEach(number => {
    if (number === members[0]) count++
  })
  let entries = members.map((number, i) => ([number, i]));
  entries = entries.filter(([number, _]) =>
    count > 1 ? number !== members[0] : number === members[0]
  ).map(([_, i]) => i)
  return entries
}

const solution3 = (members) => {
/*
고차함수로 오름차순
let sortNum = function (x, y) { return x - y; };
console.log(sortNum);
*/
  let answer = [];
  let a = 0;
  let b = 0;

  console.log("members", members);

  const num = members.reduce((acc, cur) => {
    console.log("acc", acc);
    console.log("cur", cur);
    // console.log("i", i);

    let canceled = 0;  // 취소된 번호를 세는 변수
    let currentNumber = 1;  // 번호는 1부터 시작
    let canceledNumbers = [];  // 취소된 번호들

    // n번째 취소된 번호를 찾을 때까지 반복
    while (canceledNumbers.length < n) {
      // orders 배열에 현재 번호가 없다면 취소된 번호로 간주
      if (!orders.includes(currentNumber)) {
        canceled++;  // 취소된 번호 카운트
        canceledNumbers.push(currentNumber);  // 취소된 번호 저장
      }
      currentNumber++;  // 번호 1씩 증가
    }

    return canceledNumbers[n - 1];  // n번째 취소된 번호를 반환
    if (acc === cur) {
      return a++;
    }
    return b++;
  }, '');
  console.log("num",num);
  console.log("a",a);
  console.log("b",b);




  return answer;

};

console.log(solution([11, 13, 11, 11, 13])); // 결과: [1, 4]



// ------------------------------
function solution(members) {
  let count = 0;
  members.slice(1).forEach(number => {
    if (number === members[0]) count++
  })
  let entries = members.map((number, i) => ([number, i]));
  entries = entries.filter(([number, _]) =>
    count > 1 ? number !== members[0] : number === members[0]
  ).map(([_, i]) => i)
  return entries
}

const solution = members => {
  const map = new Map();

  for (const member of members) {
    if (map.has(member)) map.set(member, map.get(member) + 1);
    else map.set(member, 1);
  }

  const countTwo = [...map].filter(([_, count]) => count === 2).map(([n]) => n);
  return members.map((member, i) => (countTwo.includes(member) ? i : null)).filter(i => i !== null);
};

function solution(members) {
  var answer = members[0];
  let count = 0;
  for (let i = 0; i < members.length; i++) {
    if (answer === members[i]) count++;
  }
  if (count !== 2) {
    answer = members.filter((n) => n !== answer);
  } else {
    answer = members.filter((n) => n === answer);
  }
  const realAnswer = [];
  realAnswer.push(members.indexOf(answer[0]));
  realAnswer.push(members.lastIndexOf(answer[0]));
  return realAnswer;
}