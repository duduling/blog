# Your order, please (6kyu)

## Instructions

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

#### Examples

```text
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
```

## Sample Tests

```js
const { assert } = require("chai");

describe("order", () => {
  it("should work corectly", () => {
    assert.strictEqual(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
    assert.strictEqual(
      order("4of Fo1r pe6ople g3ood th5e the2"),
      "Fo1r the2 g3ood 4of th5e pe6ople"
    );
    assert.strictEqual(order(""), "", "empty input should return empty string");
  });
});
```

## Solution

```js
function order(words) {
  if (!words) return words;

  return words
    .split(" ")
    .sort((a, b) => a.match(/[1-9]/g) - b.match(/[1-9]/g))
    .join(" ");
}
```

## Review

이번 문제도 정규식을 활용한 문제인데 sort를 이용하여 풀었다.

### References

[CodeWars - Your order, please (6kyu)](https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript)

[MDN - Array.prototype.sort()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
