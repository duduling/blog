# Calculating with Functions (5kyu)

## Instructions

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

#### Examples

```text
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
```

Requirements:

- There must be a function for each number from 0 ("zero") to 9 ("nine")
- There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
- Each calculation consist of exactly one operation and two numbers
- The most outer function represents the left operand, the most inner function represents the right operand
- Division should be integer division. For example, this should return 2, not 2.666666...:

```text
eight(dividedBy(three()));
```

## Sample Tests

```js
describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(seven(times(five())), 35);
    Test.assertEquals(four(plus(nine())), 13);
    Test.assertEquals(eight(minus(three())), 5);
    Test.assertEquals(six(dividedBy(two())), 3);
  });
});
```

## Solution

### Solution A

```js
const zero = (calc) => (calc ? calc(0) : 0);
const one = (calc) => (calc ? calc(1) : 1);
const two = (calc) => (calc ? calc(2) : 2);
const three = (calc) => (calc ? calc(3) : 3);
const four = (calc) => (calc ? calc(4) : 4);
const five = (calc) => (calc ? calc(5) : 5);
const six = (calc) => (calc ? calc(6) : 6);
const seven = (clac) => (clac ? clac(7) : 7);
const eight = (calc) => (calc ? calc(8) : 8);
const nine = (calc) => (calc ? calc(9) : 9);

const plus = (preNum) => (nextNum) => preNum + nextNum;
const minus = (preNum) => (nextNum) => nextNum - preNum;
const times = (preNum) => (nextNum) => preNum * nextNum;
const dividedBy = (preNum) => (nextNum) => parseInt(nextNum / preNum, 10);
```

### Solution B

```js
const functionalCalc = (num) => (clac) => clac ? clac(num) : num;

const zero = functionalCalc(0);
const one = functionalCalc(1);
const two = functionalCalc(2);
const three = functionalCalc(3);
const four = functionalCalc(4);
const five = functionalCalc(5);
const six = functionalCalc(6);
const seven = functionalCalc(7);
const eight = functionalCalc(8);
const nine = functionalCalc(9);

const plus = (preNum) => (nextNum) => preNum + nextNum;
const minus = (preNum) => (nextNum) => nextNum - preNum;
const times = (preNum) => (nextNum) => nextNum * preNum;
const dividedBy = (preNum) => (nextNum) => parseInt(nextNum / preNum, 10);
```

## Review

이번 문제는 별 생각없이 A의 솔루션으로 풀었다. 근데 뭔가 좀 더 생각했다면 B의 방법이 좀 더 Functional 한 느낌이지 않았을까?

### 참고 자료

[CodeWars - Calculating with Functions (5kyu)](https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript)
