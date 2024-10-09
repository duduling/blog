# Distinct (Lesson 6)

## Instructions

Write a function

```js
function solution(A);
```

that, given an array A consisting of N integers, returns the number of distinct values in array A.

For example, given array A consisting of six elements such that:

```
A[0] = 2 A[1] = 1 A[2] = 1
A[3] = 2 A[4] = 3 A[5] = 1
```

the function should return 3, because there are 3 distinct values appearing in array A, namely 1, 2 and 3.

Write an efficient algorithm for the following assumptions:

- N is an integer within the range [0..100,000];
- each element of array A is an integer within the range [−1,000,000..1,000,000].

##### Copyright 2009–2022 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

### Translate to Korean

N개의 정수로 구성된 배열 A가 주어지면 배열 A에 있는 고유한 값의 수를 반환합니다.

예를 들어 주어진 배열 A는 다음과 같은 6개의 요소로 구성됩니다.

```
A[0] = 2 A[1] = 1 A[2] = 1
A[3] = 2 A[4] = 3 A[5] = 1
```

배열 A에 1, 2, 3이라는 3개의 고유한 값이 나타나기 때문에 함수는 3을 반환해야 합니다.

다음 가정에 대한 효율적인 알고리즘을 작성하십시오.

- N은 [0..100,000] 범위 내의 정수입니다.
- 배열 A의 각 요소는 [−1,000,000..1,000,000] 범위 내의 정수입니다.

-> N의 배열에서 중복 값을 제외한 값의 개수를 반환하면 된다.

## Solution

```js
function solution(A) {
  return new Set(A).size;
}
```

## Review

별 다른 리뷰가 없다. 그냥 JavaScript에서는 `new Set()`을 이용하면 별 다른 로직 없이 실행 할 수 있다.

-> 다른 방법으로는 객체를 만들어서 `true` 값을 넣어주면서 그 객체의 사이즈를 구해도 될 것 같다.

### References

- [Codillity - GenomicRangeQuery (Lesson 6)](https://app.codility.com/programmers/lessons/5-prefix_sums/genomic_range_query)
