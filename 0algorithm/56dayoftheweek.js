// /* 4. 요일 구하기 */ Array, Date
// 입력값 문자형 날짜-datestring, 문자형 형태의 요일 반환.
/* user code */
function answer(str) {
  let week = new Array(
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  );
  let day;

  // 1. getDay
  const date = new Date(str);

  day_num = date.getDay(); // Number
  day = week[day_num];
  // day = week[date.getDay()]; // 한줄로 줄임


  // // 방법2.
  // switch (day_num) {
  //   case 0:
  //     day = "일요일";
  //     break;
  //   case 1:
  //     day = "월요일";
  //     break;
  //   case 2:
  //     day = "화요일";
  //     break;
  //   case 3:
  //     day = "수요일";
  //     break;
  //   case 4:
  //     day = "목요일";
  //     break;
  //   case 5:
  //     day = "금요일";
  //     break;
  //   case 6:
  //     day = "토요일";
  //     break;
  // }

  return day;
}

/* main code */
let input = [
  // TC: 1
  "2021-01-27",
  // TC: 2
  "2021-02-27",
  // TC: 3
  "2021-03-14",
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
// 출력 값
// #1 수요일
// #2 토요일
// #3 일요일
