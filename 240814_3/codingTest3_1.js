

// n 전광판의 크기의 정수 값
// s 전광판에 노출할 문자열
// t 전광판의 상태를 출력하려는 시각의 정수 값
// t 초 후에 전광판에 표시될 문구는?

// 조건에 맞는 전광판의 상태를 문자열로 반환
// 문자열 한번 지나가고, 두번째 흘러가는 상황.
const solution = (n, s, t) => {
  let newArr = new Array(n);
  // console.log(newArr);


  // s문자열을 n 길이만큼 돈다.
  const arr = [".", ".", ".", ".", "."].concat([...s]).join('');
  console.log(arr);




  let result = 0;
  // for (let i = 0; arr <= t; i++) {
  //   result = result +

  // }




  // return '';
}


console.log(solution(5, "Snowball", 18)); // "Snowb"

//   1          15
// ['.....Snowball']


// 5 .....  0
// 5 ....1  1
// 5 12345  5
// 5 678..  10
// 5 ...12  15