# Cyclic Rotation (Lesson 2)

## Instructions

An array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place).

The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.

Write a function:

class Solution { public int[] solution(int[] A, int K); }

that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.

For example, given

    A = [3, 8, 9, 7, 6]
    K = 3

the function should return [9, 7, 6, 3, 8]. Three rotations were made:

    [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
    [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
    [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]

For another example, given

    A = [0, 0, 0]
    K = 1

the function should return [0, 0, 0]

Given

    A = [1, 2, 3, 4]
    K = 4

the function should return [1, 2, 3, 4]

Assume that:

- N and K are integers within the range [0..100];
- each element of array A is an integer within the range [−1,000..1,000].

##### Copyright 2009–2022 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

## Solution

```js
function solution(A, K) {
  const loopCount = K % A.length;

  return A.length < 2 || loopCount === 0
    ? A
    : [...A.slice(-loopCount), ...A.slice(0, A.length - loopCount)];
}
```

1. 먼저 K의 개수만큼 돌아 다시 제자리가 되는 경우를 미리 연산한다. => loopCount
2. 그리고 A가 2개 미만이거나 loopCount가 0인 경우는 A를 그대로 반환한다.
3. 그게 아니라면 loopCount를 기준점으로 잡고 잘라서 앞에 붙인다.

## Review

큰 어려움 없이 풀었다.

### References

- [Codillity - CyclicRotation (Lesson 2)](https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation)
