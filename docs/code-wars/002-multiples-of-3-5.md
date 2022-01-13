# 6kyu - Multiples of 3 or 5

## Instructions

> If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.  
> Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).  
> Note: If the number is a multiple of both 3 and 5, only count it once.  
> Courtesy of projecteuler.net (Problem 1)

- n으로 숫자가 입력되면 n미만의 3의 배수와 5의 배수의 합을 구하면 된다.
- 3과 5의 공배수는 중복으로 계산하지 않는다. 또한 0 미만의 숫자가 들어오면 0을 반환한다.

## Sample Tests

```js
const { assert } = require("chai")

function test(n, expected) {
  let actual = solution(n)
  it(`Expected ${expected}, got ${actual}`, () => {  
  assert.strictEqual(actual, expected)
    })
}

describe("basic tests", function(){
  test(10,23)
})
```

## Solution

```js
function solution(number){
  var sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}
```

큰 특이사항은 없는 문제이다. 앞으로도 꾸준히 코테하자!