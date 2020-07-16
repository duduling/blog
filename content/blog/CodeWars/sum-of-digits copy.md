---
title: Multiples of 3 or 5 (6 kyu) 🧗🏻
date: 2020-07-16 23:22:16
category: CodeWars
draft: false
---

## Instructions

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

> Note: If the number is a multiple of both 3 and 5, only count it once.

## Description

특정 수에 대해서 3의 배수의 합과 5의 배수의 합을 더하고 3과 5의 공배수는 중복으로 더해지는 것을 조심한다.

## Solution

```js
function solution(number){
  let accumulatorNumber = 0;
  
  for(var i = 1; i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      accumulatorNumber += i
    }
  }
  return accumulatorNumber;
}
```

## Comment

1부터 1씩 올라가면서 3의 배수이거나 5의 배수일 때에 누산하며 공배수에도 한번만 누산할 수 있도록 접근했다.

#### 출처

https://www.codewars.com/kata/514b92a657cdc65150000006/javascript
