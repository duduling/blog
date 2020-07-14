---
title: More Zeros than Ones (6 kyu) 🧗🏻
date: 2020-07-13 00:12:24
category: CodeWars
draft: false
---

## Instructions

Create a moreZeros function which will receive a string for input, and return an array (or null terminated string in C) containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

You should remove any duplicate characters, keeping the first occurence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.

Examples

```dummy
'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
               True       True       False      True       False

        --> ['a','b','d']

'DIGEST'--> ['D','I','E','T']
```

All input will be valid strings of length > 0. Leading zeros in binary should not be counted.

> 들어오는 하나의 문자열이 있다. 그 문자열의 각 자리 문자를 ASCII 값으로 변환 했을 때에 2진수 값이 '1'보다 '0'이 많은 글자의 값만 배열로 `reuturn`
>
> ##### \* 중복된 값이 없어야 함

## Solution

```js
function moreZeros(s) {
  const notOverlapArray = [...new Set(s.split(''))];

  const notOverlapArrayToString = notOverlapArray.join('');

  return notOverlapArray.filter((item, idx) => {
    const calcItem = notOverlapArrayToString
      .charCodeAt(idx)
      .toString(2)
      .split('');

    return (
      parseInt(calcItem.length / 2) + 1 <=
      calcItem.filter(item => item === '0').length
    );
  });
}
```

## Comment

초반에 작성한 코드보다 `[...new Set(array)]`로 중복된 배열을 제거하는 것으로 코드를 많이 줄였다.

###### 출처 : https://www.codewars.com/kata/5d41e16d8bad42002208fe1a
