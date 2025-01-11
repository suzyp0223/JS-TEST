
// 팰린드롬 palindrome - 회문 문자열
// 문자열 S는 하나의 단어.
// 단어를 거꾸로 뒤집어도 똑같은 것을 회문이라 하는데,
// 주어진 단어가 회문인 경우 1, 아니면 0을 리턴하는 함수.

// 힌트 맨앞과 맨뒤 문자부터 순서대로 비교하고 중간에 for문을
//11523 빠져나오지 않고 반복문을 모두 실행하면 회문이므로 true 반환.
const solution = (S) => {
  const cha = [...S].join('');
  console.log("cha:", cha);

  // const aa = cha.charAt(0);
  // const bb = cha.charAt(cha.length - 1);
  // console.log("abagb", aa, bb);
  if (cha.charAt(0) === cha.charAt(cha.length - 1)) {
    return 1;
  }
  return 0;
};

console.log(solution("MAMA")); // 결과: 0

// ---------------------------------
function solution(S) {
  let isEqual = true;
  const count = parseInt(S.length / 2);
  for (let i = 0; i < count; i++) {
    if (S[i] !== S[S.length - 1 - i]) {
      isEqual = false;
      break;
    }
  }
  return isEqual ? 1 : 0
}

// ================================
const solution = S => +([...S].reverse().join('') === S);


// ================================
function solution(S) {
  return ([...S].reverse().join('')) === S ? 1 : 0;
}


// ================================