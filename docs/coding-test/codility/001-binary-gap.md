# Binary Gap (Lesson 1)

## Instructions

binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

```js
funaction solution(N);
```

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

- N is an integer within the range [1..2,147,483,647].

##### Copyright 2009–2022 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

## Solution

```js
function solution(N) {
  const lastZepCleanBinary = N.toString(2).replace(/[0]*$/, "");

  return Math.max(...lastZepCleanBinary.split("1").map((num) => num.length));
}
```

1. N을 2진법으로 바꾼다.
2. 0의 가장 긴 수의 혼성을 방지하기 위해서 정규식으로 뒤에 0으로 끝나는 경우를 제거했다.
3. 1로 split을 하고 나온 배열 중에 가장 큰 0의 길이를 가진 수를 반환한다.

## Review

처음에 문제를 슥 보고 풀 때는 금방 풀 수 있을 것 같았는데 생각보다 조건이 성가셨다.

### References

- [Codillity - BinaryGap (Lesson 1)](https://app.codility.com/programmers/lessons/1-iterations/binary_gap)
