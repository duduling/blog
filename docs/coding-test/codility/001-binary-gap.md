# BinaryGap (Lesson 1)

## Solution

```js
function solution(N) {
  const lastZepCleanBinary = N.toString(2).replace(/[0]*$/, "");

  return Math.max(...lastZepCleanBinary.split("1").map((num) => num.length));
}
```

## Review

1. N을 2진법으로 바꾼다.
2. 0의 가장 긴 수의 혼성을 방지하기 위해서 정규식으로 뒤에 0으로 끝나는 경우를 제거했다.
3. 1로 split을 하고 나온 배열 중에 가장 큰 0의 길이를 가진 수를 반환한다.

### References

- [Codillity - BinaryGap (Lesson 1)](https://app.codility.com/c/run/training9R3FZW-242/)
