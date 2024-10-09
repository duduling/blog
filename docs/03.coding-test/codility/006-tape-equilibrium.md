# TapeEquilibrium (Lesson 3)

## Instructions

A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.

Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

For example, consider array A such that:

A[0] = 3
A[1] = 1
A[2] = 2
A[3] = 4
A[4] = 3
We can split this tape in four places:

- P = 1, difference = |3 − 10| = 7
- P = 2, difference = |4 − 9| = 5
- P = 3, difference = |6 − 7| = 1
- P = 4, difference = |10 − 3| = 7

Write a function:

```
function solution(A);
```

that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.

For example, given:

A[0] = 3
A[1] = 1
A[2] = 2
A[3] = 4
A[4] = 3
the function should return 1, as explained above.

Write an efficient algorithm for the following assumptions:

- N is an integer within the range [2..100,000];
- each element of array A is an integer within the range [−1,000..1,000].

##### Copyright 2009–2022 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

## Solution

```js
function solution(A) {
  let totalSum = 0;
  let versusSum = A.reduce((acc, cur) => acc + cur, 0);
  let answer = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < A.length - 1; i++) {
    totalSum += A[i];
    versusSum -= A[i];

    if (totalSum === versusSum) {
      answer = 0;
      break;
    }

    answer = Math.min(answer, Math.abs(totalSum - versusSum));
  }

  return answer;
}
```

1. totalSum에 0을 넣고 versusSum에 A 배열의 총 합을 넣는다.
2. 앞에서부터 진행하면서 totalSum에는 현재의 값을 더하고 versusSum에는 현재의 값을 빼준다.
3. 그 값의 차이가 현재 answer와 비교해 작은 값을 answer에 넣는다. **그러나 totalSum의 값과 versusSum의 값이 같으면 answer에 0을 넣고 그 즉시 로직을 종료한다.**

## Review

이번에 문제를 풀면서 처음에는 `const answer = Infinity`를 사용했는데 `Number.MAX_SAFE_INTEGER` 라는 것을 알게됐다. 그러면서 기존에 알고 있던 `Number.MAX_VALUE`와 차이점도 검색해봤다.

##### Number.MAX_SAFE_INTEGER

- JS에서 온전하게 나타 낼 수 있는 최대의 정수 값
- 그 이하의 값까지는 데이터의 손실 없이 컨트롤 가능

##### Number.MAX_VALUE

- JS가 표현할 수 있는 최대의 `Number` 값
- 그 이상의 값을 컨트롤 하려고 하면 테이터 손실이 발생 할 수 있고 `Infinity`가 발생한다.

### References

- [Codillity - TapeEquilibrium (Lesson 3)](https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium)
- [MDN - Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)
- [MDN - Number.MAX_VALUE](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE)
- [Stack Overflow - Whats the difference between JS Number.MAX_SAFE_INTEGER and MAX_VALUE?](https://stackoverflow.com/questions/34799226/whats-the-difference-between-js-number-max-safe-integer-and-max-value)
