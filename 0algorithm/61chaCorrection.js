// /* 9. 문자 교정 */ 반복문, Array
//  단어 앞 글자만 모두 대문자로 표기

function answer(str) {
  let fix_str = "";

  // fix_str = words.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');

  let words = str.split(' ');
  for (const item of words) {
    fix_str += item[0].toUpperCase() + item.slice(1) + ' ';
  }

  // let words = str.toString();
  // for (const item of words) {
  //   fix_str += item[0].toUpperCase() + item.slice(1);
  // }


  return fix_str;
}


let input = [
  // TC: 1
  "Hello, My name is john",
  // TC: 2
  "This week is closed due to COVID-19",
  // TC: 3
  "fifty percent off this week",
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
// 출력 값
// #1 Hello, My Name Is John
// #2 This Week Is Closed Due To COVID-19
// #3 Fifty Percent Off This Week
