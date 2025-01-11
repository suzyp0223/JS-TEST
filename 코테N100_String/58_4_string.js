// https://coding-prep.notion.site/0e5c3ed487b64fe1a5c5761e9aa10577
// 글자 이어 붙여 문자열 만들기

/*
 입출력 예 #1
- 예제 1번의 `str`에서 인덱스 3, 5, 6, 11, 12, 14, 16, 17에 해당하는 글자는
    각각 g, o, r, m, r, a, p, e이므로 `str`에서 `indices`에 들어있는 원소에 해당하는
    인덱스의 글자들은 각각 순서대로 p, r, o, g, r, a, m, m, e, r, s입니다.
    따라서 "programmers"를 return 합니다.

입출력 예 #2
- 예제 2번의 `str`에서 인덱스 0, 1, 2, 3에 해당하는 글자는 각각 z, p, i, a이므로 
    `str`에서 `indices`에 들어있는 원소에 해당하는 인덱스의 글자들은 각각 순서대로
    p, i, z, z, a입니다. 따라서 "pizza"를 return 합니다.
 */
// str:인덱스  |  indices지수:숫자,값  /  indices순서대로 출력
//  str인덱스가 indices의 숫자로 나와있음.
/*
문자열 str에서 indices 배열에 있는 각 숫자에 해당하는 인덱스의 글자를 순서대로 추출한 후,
그 글자들을 이어 붙여 새로운 문자열을 만들어야 합니다. 이를 map과 join을 활용
*/

// 1번 풀이- map
const solution1 = (str, indices) => {
  return indices.map(num => str[num]).join('');
};
console.log(solution1('cvsgiorszzzmrpaqpe', [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7]));
// 'programmers'
console.log(solution1('zpiaz', [1, 2, 0, 0, 3]));
'pizza'



// 2번 풀이 - reduce()
const solution2 = (str, indices) => {
  return indices.reduce((acc, num) => acc + str[num], '');
};
console.log(solution2('cvsgiorszzzmrpaqpe', [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7]));
// 'programmers'
console.log(solution2('zpiaz', [1, 2, 0, 0, 3]));
// 'pizza'



