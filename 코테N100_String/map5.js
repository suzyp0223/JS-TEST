// https://coding-prep.notion.site/54d9241f6dbe4b8f806fa90eacac633d
// 로그인 성공?
// https://school.programmers.co.kr/learn/courses/30/lessons/120883


// 입출력 예 #1
//   - `db`에 같은 정보의 계정이 있으므로 "login"을 return합니다.
// 입출력 예 #2
//   - `db`에 아이디는 같지만 패스워드가 다른 계정이 있으므로 "wrong pw"를 return합니다.
// 입출력 예 #3
//   - `db`에 아이디가 맞는 계정이 없으므로 "fail"을 return합니다.

const solution = (id_pw, db) => {
  // do something
};

console.log(
  solution(
    ['meosseugi', '1234'],
    [
      ['rardss', '123'],
      ['yyoom', '1234'],
      ['meosseugi', '1234'],
    ]
  )
); // "login"
console.log(
  solution(
    ['programmer01', '15789'],
    [
      ['programmer02', '111111'],
      ['programmer00', '134'],
      ['programmer01', '1145'],
    ]
  )
); // "wrong pw"
console.log(
  solution(
    ['rabbit04', '98761'],
    [
      ['jaja11', '98761'],
      ['krong0313', '29440'],
      ['rabbit00', '111333'],
    ]
  )
); // "fail"
