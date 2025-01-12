// /* 7. 스팸 메일 */ String
// 대소문자 구분없이 Advert로 시작하는 메일 제목은 스팸 처리
// 스팸은 true, 아니면 false
/* user code */
function answer(str) {
  let spam_flag;
  // 스팸 키워드 정의
  const spamKeyword = "advert";
  // 입력 문자열을 소문자로 변환 후 키워드 포함 여부 확인
  spam_flag = str.toLowerCase().includes(spamKeyword);
  // 1. 대소문자 변환
  // 2. advert 단어가 메일 제목 내 포함되는지 판단

  return spam_flag;
}

/* main code */
let input = [
  // TC: 1
  "RE: Request documents",
  // TC: 2
  "[Advertisement] free mobile!",
  // TC: 3
  "50% off this week (advertising)",
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
// 출력 값
// #1 false
// #2 true
// #3 true



// ------------ 키워드 2개
function answer(str) {
  // 스팸을 나타내는 키워드를 정의
  const spamKeywords = ["advertisement", "advertising"];

  // 입력 문자열을 소문자로 변환 후, 키워드 중 하나라도 포함되어 있는지 확인
  const isSpam = spamKeywords.some(keyword =>
    str.toLowerCase().includes(keyword)
  );

  return isSpam;
}
// some() 메서드
// 배열의 각 요소(spamKeywords)에 대해 includes()로 확인하며, 하나라도 조건에 만족하면 true를 반환
