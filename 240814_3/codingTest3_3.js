


const solution = (A) => {
  let sum = 0;
  console.log(A);
  let a = A;
  console.log(...a);

  for (let i = 0; i < A.length; i++) {
    sum = A / A[i];
    console.log(sum);
  }

  
  
}


console.log(solution([6, 12, 4])); // "2"
