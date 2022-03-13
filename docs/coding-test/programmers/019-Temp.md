# 이상한 문자 만들기 (Level 1)

## Solution

### My Solution

```js
function solution(s) {
  return s
    .toUpperCase()
    .replace(/(\w)(\w)/g, (word) => word[0] + word[1].toLowerCase());
}
```

## Review

.

### References

- [Programmers - 이상한 문자 만들기 (Level 1)](https://programmers.co.kr/learn/courses/30/lessons/12930)
