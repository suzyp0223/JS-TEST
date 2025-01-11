// https://eager-muscari-f51.notion.site/string-solution-bee21c3e6c9341baba2c54bbc242a835?pvs=4
//문자열 섞기
// https://school.programmers.co.kr/learn/courses/30/lessons/181942
// const strObj = new String('문자');
// console.log(strObj[0]);

// console.log(str1); // aaaaa
// console.log([...str1]);  //   [ 'a', 'a', 'a', 'a', 'a' ]
// console.log([...str2[i]]);  //   [ 'b', 'b', 'b', 'b', 'b' ]

// const solution = (str1, str2) => {
  // // 이중포문 원리
  //   let result = '';
  //   for (let i = 0; i < str1.length; i++) { // 1ab1ab1ab1ab1ab, 2ab2ab2ab2ab2ab
  //     for (let j = 0; j < str2.length; j++) {
  //       console.log(1, [i]); // [0] [1] [2]
  //       console.log(2, [j]); // [0] [0] [0]
  //       console.log("str1[i]: ", str1[i]); // 1 2 3
  //       console.log("str2[j]: ",str2[j]); //6 6 6
  //       console.log("str2[i][j]: ",str2[i][j]); //6 7 8

  //       console.log("result : " , str1[i] + str2[i][j]);  //16  27  38
  //       result += str1[i] + str2[i][j];
  //      // result += str1[i] + str2[j];
  //     }
  //   }
  //   return result;
  //   }
  // console.log(solution('123', '678')); // 'ababababab'



// //이중 포문 최종
// //1번풀이   2중for문풀이.
const solution1 = (str1, str2) => {
  let result = '';
  for (let i = 0; i < str1.length; i++) { // 1ab1ab1ab1ab1ab, 2ab2ab2ab2ab2ab
    for (let j = 0; j < str2[i].length; j++) {
      result += str1[i] + str2[i][j];
    }
  }
  return result;
};


// //2번풀이 for문 풀이 2중 포문 아니어도 결과 나옴.
const solution2 = (str1, str2) => {
  let result = '';
  for (let i = 0; i < str1.length; i++) {
      result += str1[i] + str2[i];
  }
  return result;
};


//3번풀이 고차배열함수 map풀이2개
const solution3 = (str1, str2) => {
  console.log('solution3-concat: ', [...str1].map((c, i) => c.concat([...str2[i]])).join(''));
  return [...str1].map((c, i) => c + str2[i]).join('');
  };

//4번풀이 고차배열함수 reduce풀이
const solution4 = (str1, str2) => {
  return [...str1].reduce((acc, cur, i) => acc + cur + str2[i], '');
};


console.log('solution1: ', solution1('aaaaa', 'bbbbb')); // 'ababababab'
console.log('solution2: ', solution2('aaaaa', 'bbbbb')); // 'ababababab'
console.log('solution3: ', solution3('aaaaa', 'bbbbb')); // 'ababababab'
console.log('solution4: ', solution4('aaaaa', 'bbbbb')); // 'ababababab'
// console.log(solution('aaaaa', 'bbbbb')); // 'ababababab'
