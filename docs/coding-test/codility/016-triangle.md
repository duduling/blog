# Triangle (Lesson 6)

## Instructions

An array A consisting of N integers is given. A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:

- A[P] + A[Q] > A[R],
- A[Q] + A[R] > A[P],
- A[R] + A[P] > A[Q].

For example, consider array A such that:

A[0] = 10 A[1] = 2 A[2] = 5
A[3] = 1 A[4] = 8 A[5] = 20
Triplet (0, 2, 4) is triangular.

Write a function:

```js
function solution(A);
```

that, given an array A consisting of N integers, returns 1 if there exists a triangular triplet for this array and returns 0 otherwise.

For example, given array A such that:

```
A[0] = 10 A[1] = 2 A[2] = 5
A[3] = 1 A[4] = 8 A[5] = 20
```

the function should return 1, as explained above. Given array A such that:

```
A[0] = 10 A[1] = 50 A[2] = 5
A[3] = 1
```

the function should return 0.

Write an efficient algorithm for the following assumptions:

- N is an integer within the range [0..100,000];
- each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].

##### Copyright 2009–2022 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

---

### Translate to Korean

A 배열이 주어질때 `0 ≤ P < Q < R < N` 이다.

`A[P] + A[Q] > A[R] && A[Q] + A[R] > A[P] && A[R] + A[P] > A[Q]`

위 조건을 모두 만족하면 1 만족하지 않으면 0 `return` 한다.

## Solution

```js
function solution(A) {
  const sortAscList = [...A].sort((a, b) => a - b);

  for (
    let i = 0, sortAscListLength = sortAscList.length;
    i < sortAscListLength;
    i++
  ) {
    if (sortAscList[i - 2] + sortAscList[i - 1] > sortAscList[i]) return 1;
  }
  return 0;
}
```

## Review

`sort`를 해준 뒤 나오는 가장 큰 3개의 값을 곲하면 가장 큰 수가 나온다. (이하 `standardMaxNum`)

-> 하지만 음수 2개 + 양수 1개를 했을 경우 `standardMaxNum` 보다 큰 값이 나올 수도 있다.

### References

- [Codillity - MaxProductOfThree (Lesson 6)](https://app.codility.com/programmers/lessons/5-prefix_sums/genomic_range_query)
