
// n 정수배열에서 가장 높은 수를 두 사람이 한 장씩 뽑음.
// x === y 카드 소멸
// x > y,  y 카드 소멸 x는 y의 정수만큼 수가 차감된 후 남은 정수는 배열에 반환
// y > x,  x 카드 소멸 y는 x의 정수만큼 수가 차감된 후 남은 정수는 배열에 반환
// 마지막에 배열에 남은 정수를 출력하는 프로그램. 즉 최대공약수를 구하는 함수.
// 단, 모든 정수가 소멸되면 0 반환.
/**
 * 예시, [4, 8, 6, 1, 2]
 * 8, 6 은 2 배열은 [4, 1, 2, 2]
 * 4, 2 는 2 배열은 [1, 2, 2]
 * 2, 2 는 소멸 배열은 [1]
 */
const solution = (n) => {
  while (n.length > 1) {
    n.sort((a, b) => a - b);
    const x = n[0];
    const y = n[1];

    if (x === y) {
      n.splice(0, 2);
    } else if (x > y) {
      // x > y일 때, y는 소멸하고 x는 x - y 만큼 차감
      n[0] = x - y;  // x 카드 갱신
      n.splice(1, 1); // y 카드 삭제
    } else {
      // y > x일 때, x는 소멸하고 y는 y - x 만큼 차감
      n[1] = y - x;  // y 카드 갱신
      n.splice(0, 1); // x 카드 삭제
    }

    // 마지막에 남은 카드가 없으면 0을 반환하고, 있으면 그 값 반환
    return n.length > 0 ? n[0] : 0;
  }
};

console.log("solution", solution([4, 8, 6, 1, 2])); //결과는: 1


// 큐 (Queue) 사용
function solution2(cards) {
  // cards를 내림차순으로 정렬
  cards.sort((a, b) => b - a);

  // 배틀 진행
  while (cards.length > 1) {
    // 가장 큰 카드 두 장 꺼내기
    const x = cards.shift();
    const y = cards.shift();

    // 배틀 후 남은 카드 계산
    if (x === y) {
      continue; // 두 카드가 같으면 두 카드는 소멸
    }

    const life = x - y;
    cards.push(life);  // 남은 라이프를 다시 넣기

    // 매번 정렬 (배틀 후에 가장 큰 값을 다시 배열 앞에 오게 함)
    cards.sort((a, b) => b - a);
  }

  // 남은 카드가 있으면 반환, 없으면 0 반환
  return cards.length ? cards[0] : 0;
}

console.log("solution2", solution2([4, 8, 6, 1, 2]));  // 출력: 1



// stack스택사용
function solution(cards) {
  // 카드들을 내림차순 정렬
  cards.sort((a, b) => b - a);

  // 배틀 진행
  while (cards.length > 1) {
    const x = cards.pop();
    const y = cards.pop();

    if (x === y) {
      continue; // 두 카드가 같으면 소멸
    }

    const life = x - y;
    cards.push(life);  // 남은 라이프를 다시 스택에 넣기

    // 스택을 내림차순으로 다시 정렬
    cards.sort((a, b) => b - a);
  }

  // 남은 카드가 있으면 그 값을 반환, 없으면 0 반환
  return cards.length ? cards[0] : 0;
}

console.log(solution([4, 8, 6, 1, 2]));  // 출력: 1
