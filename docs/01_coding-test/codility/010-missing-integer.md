# MissingInteger (Lesson 4)

## Instructions

This is a demo task.

Write a function:

```js
function solution(A);
```

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

- N is an integer within the range [1..100,000];
- each element of array A is an integer within the range [−1,000,000..1,000,000]. range [1..N + 1].

##### Copyright 2009–2022 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

## Solution

```js
function solution(A) {
  let answer = 1;
  const removeOverlapSet = new Set(A);

  for (const value of removeOverlapSet) {
    if (!removeOverlapSet.has(answer)) break;
    answer += 1;
  }
  return answer;
}
```

1. 중복 제거 된 `removeOverlapSet`을 순회하면서 1부터 있는지 없는지 체크한다.
2. 없는 순간 그 값을 뱉어낸다.

## Review

.

### References

- [Codillity - MissingInteger (Lesson 4)](https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer)
