
// 문장이 알파벳 대/소문자, 숫자, 구분자인 마침표(.),
// 쉼표(,), 느낌표(!).물음표(?), 스페이스( )로 이뤄짐.
// 문장 내에는 구분자를기중으로 단어를 구분함.
// 문장 s가 주어질 때, 각 단어를 거꾸로 뒤집어
// 모은 문자열 배열을 출력하는 프로그램 구현
// 단, 구분자가 연속으로 나타난 경우,
// 그 안에 단어가 없다고 가정(빈 단어는 없음).
const solution = (s) => {
  const cha = s.split(/[,.?! ]/);
  console.log("cha: ", cha);
  const result = cha.map(c => c.split('').reverse().join('')).filter(c => c.trim() !== '');
  console.log(result);

};

console.log(solution("Hello, World!?")); //결과: ["olleH", "dlroW"]

// ---------------------
function solution(s) {
  const dividers = ['.',',','!','?',' '];
  let words = [s];
  dividers.forEach((divider)=>{
    let newWords = words.map(word => word.split(divider));
    newWords = newWords.reduce((acc,curr)=>acc.concat(curr),[]).filter((word) => word)
    words = newWords
  })
  words = words.map(word => word.split('').reverse().join(''))
  return words
}
// ---------------------
const solution = s =>
  s
.split(/[^A-Za-z0-9]/g)
.filter(c => c !== '')
.map(w => [...w].reverse().join(''));

// ---------------------