

//확진자와 동선이 겹치는 사람번호 오름차순으로 출력
//확진자 번호 infected
// 출입한 사람번호 배열 history 들어오면양수, 나가면음수
// 
// 동선겹치는이가 없으면 빈배열 출력
const solution = (history, infected) => {
  const array = history.filter((num) => num > 0 ? true : false);
  // console.log(array);


  //찾은 인덱스 앞뒤 번호 찾아서 출력 하면 끝.
  let findNum = 0;
  for (let i = 0; i < array.length; i++) {
    if (infected === array[i]) {
     findeNum =  array[i]++ 
      console.log(findNum);
    }
  }
  // const result = history.indexOf(infected);
  // const newarr = [];
  // newarr.pop(result)
  

  // console.log(result);

}




console.log(solution([3, 2, -3, 1, -1, -2, 4, -4, 1, -1], 2))  // [1, 3]동선겹치는이
console.log(solution([3, 2,  1,  4, 1], 2))  // [1, 3]동선겹치는이