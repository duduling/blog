# MaxProductOfThree (Lesson 6)

## Instructions

A non-empty array A consisting of N integers is given. The product of triplet (P, Q, R) equates to A[P] _ A[Q] _ A[R] (0 ≤ P < Q < R < N).

For example, array A such that:

```
A[0] = -3
A[1] = 1
A[2] = 2
A[3] = -2
A[4] = 5
A[5] = 6
```

contains the following example triplets:

- (0, 1, 2), product is −3 _ 1 _ 2 = −6
- (1, 2, 4), product is 1 _ 2 _ 5 = 10
- (2, 4, 5), product is 2 _ 5 _ 6 = 60

Your goal is to find the maximal product of any triplet.

Write a function:

function solution(A);

that, given a non-empty array A, returns the value of the maximal product of any triplet.

For example, given array A such that:

```
A[0] = -3
A[1] = 1
A[2] = 2
A[3] = -2
A[4] = 5
A[5] = 6
```

the function should return 60, as the product of triplet (2, 4, 5) is maximal.

Write an efficient algorithm for the following assumptions:

- N is an integer within the range [3..100,000];
- each element of array A is an integer within the range [−1,000..1,000].

##### Copyright 2009–2022 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

---

### Translate to Korean

배열에서 3개의 수를 곱해서 나올 수 있는 가장 큰 값을 구하면 된다.

## Solution

```js
function solution(A) {
  const sortList = [...A].sort((a, b) => a - b);
  const lastIdx = sortList.length - 1;

  return Math.max(
    sortList[0] * sortList[1] * sortList[lastIdx],
    sortList[lastIdx] * sortList[lastIdx - 1] * sortList[lastIdx - 2]
  );
}
```

## Review

`sort`를 해준 뒤 나오는 가장 큰 3개의 값을 곲하면 가장 큰 수가 나온다. (이하 `standardMaxNum`)

-> 하지만 음수 2개 + 양수 1개를 했을 경우 `standardMaxNum` 보다 큰 값이 나올 수도 있다.

### References

- [Codillity - MaxProductOfThree (Lesson 6)](https://app.codility.com/programmers/lessons/5-prefix_sums/genomic_range_query)
