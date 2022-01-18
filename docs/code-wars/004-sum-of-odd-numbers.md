# Sum of odd numbers (7kyu)

## Instructions

Given the triangle of consecutive odd numbers:

```text

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
```

> Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

```text
1 -->  1
2 --> 3 + 5 = 8
```

## Sample Tests

```js
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(rowSumOddNumbers(1), 1);
    assert.strictEqual(rowSumOddNumbers(42), 74088);
  });
});
```

## Solution

### A Solution

```js
function rowSumOddNumbers(n) {
  let startNumber = 1;

  // 해당 n번째 시작 숫자를 구함
  for (let i = 1; i < n; i++) {
    startNumber += 2 * i;
  }

  return startNumber * (n + 1) - 1;
}
```

> n번째 시작 값을 구한 뒤 n \* n을 한 뒤에 나머지 값을 더해주면 된다.

```
ex) n = 4

13 + 13 + 13 + 13 => 13 * 4 (n * n)
 0 +  2 +  4 +  6 =>  6 * 2 (n - 1)
----------------------------
13 + 15 + 17 + 19 =>     84

=> (n * n) + (n - 1)
=> (n * (n + 1)) - 1
```

엄청 복잡하게 푼 것 같다. 그래서 더 생각하던 중에 다음 방법이 떠 올랐다.

### B Solution

```js
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}
```

> `n * n`을 하면 해당 줄의 평균 값이 나온다. 그 상태에서 n번째 줄은 n개가 있으니 n을 더 곱해주면 된다. 결국 `n * n * n` 으로 n의 3승이 된다. `Math.pow`를 이용하여 n의 3승을 `return` 해주면 간단하게 해결된다.

## Review

이번 문제는 그 계산식을 파악한다면 구현 자체는 오히려 쉬웠던 것 같다.
