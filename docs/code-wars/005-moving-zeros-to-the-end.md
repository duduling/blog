# Moving Zeros To The End (5kyu)

## Instructions

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

```text
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
```

## Sample Tests

```js
describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(
      JSON.stringify(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])),
      JSON.stringify([1, 2, 1, 1, 3, 1, 0, 0, 0, 0])
    );
  });
});
```

## Solution

### A Solution

```js
var moveZeros = function (arr) {
  let zeroCount = 0;

  // 0을 제외한 나머지 배열을 따로 만들고 그 때에 0의 개수를 카운트한다.
  const notZeroList = arr.filter((el) => {
    if (el === 0) {
      zeroCount += 1;
      return false;
    }
    return true;
  });
  // 0의 개수만큼 배열을 만든다.
  const zeroList = new Array(zeroCount).fill(0);

  // 두개의 배열을 합친다.
  return notZeroList.concat(zeroList);
};
```

### B Solution

```js
var moveZeros = function (arr) {
  // 배열의 끝에서부터 순서대로 로직을 실행한다.
  return arr.reduceRight((acc, cur) => {
    // 0을 기준으로 배열의 앞으로 뒤로 추가한다.
    return cur !== 0 ? [cur, ...acc] : [...acc, cur];
  }, []);
};
```

## Review

이번 문제의 유용했던 함수는 `concat()`과 `reduceRight()`이다.

#### `Array.prototype.concat()`

> 배열끼리 합치는 함수이다. (참고로 String에도 concat이 있다.)

#### `Array.prototype.reduceRight()`

> 배열의 끝에서부터 순차적으로 callback 함수를 실행한다.

### 참고 자료

[CodeWars - Moving Zeros To The End (5kyu)](https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript)

[MDN - concat](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

[MDN - reduceRight](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight)
