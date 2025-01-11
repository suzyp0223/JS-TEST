//   var notNumber = /[^(0-9)]/gi;
// var special_char = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/;
// var number = /[0-9]/;
//   const ab = s.split(special_char);
//   console.log(ab);
//   const cd= s.split(number);
//   console.log(cd);


//계산식의 계산 결과를 출력하는 프로그램
const solution = (s) => {
  const answer = s.split(/\D/);  //  [ '', '3', '26', '7' ]
  // const answer = s.split(/(\D)/);
  // const answer = s.split(/[\-+]/); // [ '', '3', '26', '7' ]
  // const answer = s.split(/[^가-힣\w\s]/g); // [ '', '3', '26', '7' ]
  // const answer = s.split(/\d/); // [ '-', '+', '', '-', '' ]
  // const answer = s.split(/\d/); // [ '', '3+26', '7' ]
  console.log(1111, answer);
  let sum = 0;
  let odd = 0;
  let even = 0;
  sum = answer.flatMap((v) => {
    if (v !== '' && Number(v) / 2 === 0) {  // isNaN(Number(v))

      even = Number(v)
    } else {
      odd = Number(v)
      // console.log(23,sum);
      console.log(">> ", even);


    }

  });




  // const joins = s.join('');
  // console.log(joins);

  // const result = [...s].map(v =>
  // isNaN(v) ? sum++ : 0);

  // console.log(answer);
  // console.log(result);
  for (let i = 0; i < s.length; i++) {
    // console.log(s[i]);
    if (s[i] === Number) {
      // console.log([i]);
      sum += s[i];
    }
    // console.log(sum);

  }

  // return result;
}


//
console.log(solution("-3+26-7")); //16