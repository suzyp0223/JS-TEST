// 접미사 배열
// https://coding-prep.notion.site/d739bbda78f44879bae2ec4a2a2eeb9f

// 배열 반복적으로 돌면서 문자 하나씩 잘라 더한 후 빈배열에 추가.
// for문 풀이
const solution = str => {
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    // newArr.push(str.slice(i));  //push함수- 배열원본이 변경되서 권장하지 않음.
    newArr = newArr.concat(str.slice(i));
  }
  return newArr.sort();
};
console.log(solution('banana')); // ['a', 'ana', 'anana', 'banana', 'na', 'nana']
console.log(solution('programmers')); // ['ammers', 'ers', 'grammers', 'mers', 'mmers', 'ogrammers', 'programmers', 'rammers', 'rogrammers', 'rs', 's']



// map 풀이
const solution1 = str => {
  console.log("?? ", [...str]);
  return [...str].map((_, i) => str.slice(i)).sort();
};
console.log(solution1('banana')); // ['a', 'ana', 'anana', 'banana', 'na', 'nana']
console.log(solution1('programmers')); // ['ammers', 'ers', 'grammers', 'mers', 'mmers', 'ogrammers', 'programmers', 'rammers', 'rogrammers', 'rs', 's']

// ----설명----
// 문자열의 각 인덱스에서 시작하는 접미사를 map 함수로 배열로 생성하고, 정렬
// map 함수에서 첫 번째 인자로 _(underscore)를 사용한 이유는,
// 해당 인자는 map 함수에서 값 자체에 접근하지 않고 인덱스(i)만 필요하기 때문.
// str.slice(i)는 인덱스 i부터 끝까지의 문자열을 추출.
/* NOTE
  for문을 돌면서 하나씩 추가 하는 코드를 짤때는
  [배열].map((_, i) => 변수명.slice(index));
  를 쓰는것이 좋다.
  !첫번째 인자에 언더스코어_ 를 쓴 이유는 값 자체에 접근하지 않고 인덱스(i)만 필요하기 때문.
*/



// reduce 풀이
const solution2 = str => {
  return [...str].reduce((acc, _, i) => {
    const newArr = str.slice(i); // i부터 끝까지의 접미사 생성
    // 현재 접미사를 배열에 추가한 새로운 배열을 반환
    return acc.concat(newArr);
  }, []).sort(); // 접미사 배열을 알파벳 순으로 정렬
};
console.log(solution2('banana')); // ['a', 'ana', 'anana', 'banana', 'na', 'nana']
console.log(solution2('programmers')); // ['ammers', 'ers', 'grammers', 'mers', 'mmers', 'ogrammers', 'programmers', 'rammers', 'rogrammers', 'rs', 's']

/*
----설명----
1. reduce 함수는 문자열의 각 문자 인덱스에서 접미사를 생성하여 acc 배열에 누적.
2. const newArr = str.slice(i)로 현재 인덱스 i부터 끝까지의 접미사를 생성.
3. return acc.concat(newArr)는 acc 배열에 현재 접미사 newArr를 추가한 새로운 배열을 반환.
이 방식으로 배열을 직접 수정하지 않고 새로운 배열을 생성.
4. 최종적으로 sort()를 호출하여 접미사 배열을 알파벳 순으로 정렬.
*/



// reduce 풀이2
const solution3 = str => {
  return [...str].reduce((acc, _, i) => {
    acc.push(str.slice(i)); // i부터 끝까지의 접미사를 acc에 추가
    return acc;
  }, []).sort(); // 접미사 배열을 반환하고, 마지막에 알파벳 순으로 정렬
};
console.log(solution3('banana')); // ['a', 'ana', 'anana', 'banana', 'na', 'nana']
console.log(solution3('programmers')); // ['ammers', 'ers', 'grammers', 'mers', 'mmers', 'ogrammers', 'programmers', 'rammers', 'rogrammers', 'rs', 's']

// ----설명----
// 1. acc는 접미사들을 담는 배열.
// 2. map과 비슷하게, reduce의 두 번째 인자인 _는 문자열의 각 문자를 의미하지만
// 실제로 사용하지 않으므로, 해당 자리에 _를 넣음.
// 3. i는 현재 인덱스를 의미하며, str.slice(i)를 사용하여 인덱스 i부터 문자열의 끝까지의 접미사를 추출.
// 4. 추출된 접미사를 acc 배열에 push하여 누적.
// 5. 마지막으로 접미사들이 담긴 acc 배열을 반환하며, sort()로 정렬하여 알파벳 순서로 배열을 반환.
