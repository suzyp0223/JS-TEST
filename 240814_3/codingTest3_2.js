


const solution = s => {
  let arr = [...s];
  arr.splice(12, 2);

  let str = arr.join('');
  console.log(222, str);

  let replaceArr = str.replaceAll(/Hello, World/g, 'olleH dlroW');
  console.log(replaceArr);
  console.log(replaceArr.split(" "));

}
console.log(solution("Hello, World!?")); // {"olleH dlroW"}


const solution2 = (s) => {
  const cha = s.split(/[,.?! ]/);
  console.log("cha: ", cha);
  const result = cha.map(c => c.split('').reverse().join('')).filter(c => c.trim() !== '');
  console.log(result);
}
console.log(solution2("Hello, World!?")); //결과: ["olleH", "dlroW"]
