
// 1. 반복문
// 별찍기
const star = (num) => {
  let sum = '';
  for (let i = 0; i < num; i++) {
    sum += '*';
  }
  return sum;
}

console.log(star(5));  //  *****
console.log(star(7));  //  *******
console.log(star(12)); //  ************
