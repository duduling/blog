# FrogRiverOne (Lesson 4)

## Instructions

A non-empty array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2

is a permutation, but array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3

is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:

```js
function solution(A);
```

that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

For example, given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2

the function should return 1.

Given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3

the function should return 0.

Write an efficient algorithm for the following assumptions:

- N is an integer within the range [1..100,000];
- each element of array A is an integer within the range [1..1,000,000,000].

##### Copyright 2009–2022 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

## Solution

```js
function solution(A) {
  let totalSum = ((A.length + 1) * A.length) / 2;
  const removeOverlapList = new Set(A);

  removeOverlapList.forEach((num) => {
    totalSum -= num;
  });

  return totalSum === 0 ? 1 : 0;
}
```

1. 총 합을 구한다.
2. `Set`을 이용해 중복 값을 제거한다.
3. 총 합에서 2번에서 나온 값들을 빼준다.
4. 나머지 값이 `0`이라면 순열이기에 `1`을 반환하고 아니라면 `0`을 반환한다.

## Review

.

### References

- [Codillity - FrogRiverOne (Lesson 4)](https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one)
