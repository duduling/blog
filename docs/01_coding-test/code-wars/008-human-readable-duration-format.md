# Human readable duration format (4kyu)

## Instructions

Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

#### Examples

```text
formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
```

formatDuration(62) // returns "1 minute and 2 seconds"
formatDuration(3662) // returns "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

#### Detailed rules

The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

## Sample Tests

```js
describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(formatDuration(1), "1 second");
    Test.assertEquals(formatDuration(62), "1 minute and 2 seconds");
    Test.assertEquals(formatDuration(120), "2 minutes");
    Test.assertEquals(formatDuration(3600), "1 hour");
    Test.assertEquals(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
  });
});
```

## Solution

```js
const TIME_CONFIG = [31536000, 86400, 3600, 60, 1];
const TIME_UNIT_CONFIG = ["year", "day", "hour", "minute", "second"];

function formatDuration(seconds) {
  if (seconds === 0) return "now";

  const answer = [];

  TIME_CONFIG.reduce((acc, time, idx) => {
    const resultTime = Math.floor(acc / time, 10);

    if (resultTime) {
      answer.push(
        `${resultTime} ${TIME_UNIT_CONFIG[idx]}${1 < resultTime ? "s" : ""}`
      );
    }

    return acc % time;
  }, seconds);

  return answer.length > 1
    ? answer.join(", ").replace(/,([^,]*)$/, " and" + "$1")
    : answer[0];
}
```

## Review

이 부분은 2가지 로직이 있어야 한다.

1. 숫자를 시간으로 분류하는 부분  
   -> 위에 처음에 `reduce`를 사용한 부분이 1번의 로직이다. 값을 넘겨주면서 순차적으로 각 부분에 대해서 계산하고 값이 있을 때만 보관한다.

2. 분류한 숫자를 글자로 규칙에 맞게 합치는 부분  
   -> 숫자 반환이 1개면 바로 반환하고 2개 이상이면 마지막의 브릿지에만 `and`로 표시한다. 이 부분은 `replace`와 정규식을 사용했다.

### References

[CodeWars - Human readable duration format (4kyu)](https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript)
