
//11502 S는 이진수로 표현된 양의 정수.
// 1번- 만약 숫자가 짝수인 경우 해당 값을 2로 나눈다.
// 2번- 만약 숫자가 홀수인 경우 1을 뺀다.
// 연산의 결과가 0이 될 때까지 1,2번 동작을 반복 수행시,
// 필요한 연산 횟수를 정수로 반환하는 프로그램.
// 입력형식: 이진수로 이루어진 문자열S
const solution = (S) => {
  let cha = parseInt(S, 2);

  let count = 0;
  // while (cha > 0) {
  //   if (cha % 2 === 1) {
  //     cha -= 1;
  //   } else {
  //     cha /= 2;
  //   }
  //   count++;
  // }

  // 초기화: let cha = parseInt(S, 2); 로 이미함.
  // 종료조건: cha > 0;
  // 반복식: count++; 연산 횟수 누적.
  for (; cha > 0; count++) {
    // 홀수일 때 -1
    if(cha % 2 === 1) {
          cha -= 1;
          // 짝수 일때(cha % 2 === 0) 2 나누기
        } else {
          cha /= 2;
        }
    // 포문 돌때마다 count 1씩 증가
        count++;

    }
    return count;
  };

  console.log(solution("1101")); // 답안: 6
// 설명: "1101"은 십진수로 13이며, 아래와 같은 순서로 6번 동작한 후에 종료됨.
// 13 -> 12 -> 6 -> 3 -> 2 -> 1 -> 0

// --------------------------------------
function solution(S) {
  let num = 0;
  for (let i = 0; i < S.length; i++) {
    num += S[i] * (2 ** (S.length - 1 - i))
  }

  let count = 0;
  while (num > 0) {
    count += 1
    if (num % 2 === 0) {
      num /= 2
    } else {
      num -= 1
    }
  }

  return count
}

// ===========================
const solution = S => {
  let intNum = parseInt(S, 2);
  let count = 0;
  while (intNum > 0) {
    if (intNum % 2 !== 0) intNum -= 1;
    else if (intNum % 2 === 0) intNum /= 2;
    count += 1;
  }
  return count;
}

// ===========================
function solution(S) {
  let number = parseInt(S, 2);

  return (function counter(count) {
    if (number === 0) return count;
    number = number % 2 === 0 ? number / 2 : number - 1;
    return counter(count + 1);
  })(0);
}

// ===========================