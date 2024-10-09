# PermMissingElem (Lesson 3)

## Instructions

An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

```js
function solution(A);
```

that, given an array A, returns the value of the missing element.

For example, given array A such that:

A[0] = 2
A[1] = 3
A[2] = 1
A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

- N is an integer within the range [0..100,000];
- the elements of A are all distinct;
- each element of array A is an integer within the range [1..(N + 1)].

##### Copyright 2009–2022 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

## Solution

```js
function solution(A) {
  const totalNum = A.length + 1;
  const totalSum = ((totalNum + 1) * totalNum) / 2;

  return A.reduce((acc, cur) => acc - cur, totalSum);
}
```

1. 원하는 순열의 총 합 - A의 총합 = 빠진 숫자

## Review

.

### References

- [Codillity - PermMissingElem (Lesson 3)](https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem)
