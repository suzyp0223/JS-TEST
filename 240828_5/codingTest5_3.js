

// https://velog.io/@rkio/Javascript-%EB%B0%B0%EC%97%B4%EB%AC%B8%EC%9E%90%EC%97%B4%EC%97%90%EC%84%9C-%EC%97%B0%EC%86%8D%EB%90%98%EB%8A%94-%EC%9B%90%EC%86%8C-%EC%A7%80%EC%9A%B0%EA%B8%B0

// 2회 연속 동일한 문자 제거
// 빈문자열 나오면 1반환,
// 알파벳 남으면 0반환

// 전략
// 앞, 뒤가 같은지 판단. 같으면 제거

const solution = (S) => {
  // const answer = [...new Set(S)]; //[ 'A', 'B' ]
  // console.log(answer);
  const reg = /(.)\1+/;
  const same = reg.test(S);
  console.log(same);
  // const samec = [...S].indexOf()

  const match  = /[A-z]{2}/;
  console.log(match.test(S));

  // return
  const a = [...S];
  console.log(a);
}
console.log(solution("ABBA")); //입력: S = "ABBA" => "AA"
// 출력:  1