
// function solution(S) {
// }
// S는 소문자로만.
// 중복을 모두 제거한 문자열 반환하기.
const solution = (s) => {
  // const set = new Set(s);
  // console.log(set);

  // const result =  [...s].filter(v => );
  // console.log(result);
  // const sSiz = s.length;
  // const resulSiz = result.length;
  // console.log(sSiz)
  // console.log(resulSiz);




  const obj = {};
  for (const c of s) {
    obj[c] = obj[c] ? obj[c] + 1 : 1;
    if (2 > Object.values(obj[c])) {

      console.log(c);
      // let abc = Object.values(obj);
      // console.log(555,abc);
      // console.log(222,Object.keys(obj));
    }
  }



  console.log(">>>> ", obj);



  // const array = [...s].filter((c, i, cha) => cha.indexOf(c) !== i); // [ 'a', 'd' ]
  // const array = [...s].filter((c, _, cha) => cha.indexOf(c) === cha.lastIndexOf(c)).join(''); // "cefg"

  // console.log(array);

//   테스트 1 〉 통과(0.05ms, 33.4MB)
// 테스트 2 〉 통과(0.06ms, 33.4MB)
// 테스트 3 〉 통과(0.05ms, 33.4MB)
// 테스트 4 〉 실패(0.20ms, 33.4MB)
// 테스트 5 〉 실패(0.15ms, 33.4MB)

}



console.log(solution("aacddefg")); //입력: "aacddefg"
// 출력: "cefg"
// 설명: 중복되는 문자열 a, d를 제거하면 답안 얻음.