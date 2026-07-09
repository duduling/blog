# Range Extraction (4kyu)

## Instructions

A format for expressing an ordered list of integers is to use a comma separated list of either

- individual integers
- or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"

Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

#### Examples

```text
solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
```

## Sample Tests

```js
describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(
      solution([
        -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
      ]),
      "-6,-3-1,3-5,7-11,14,15,17-20"
    );
  });
});
```

## Solution

```js
function solution(list) {
  const answer = [];

  list.reduce((acc, num, idx, arr) => {
    if (num + 1 === arr[idx + 1]) {
      return acc === null ? num : acc;
    }
    if (acc + 1 === num) {
      answer.push(acc);
      answer.push(num);
    } else {
      answer.push(acc === null ? num : `${acc}-${num}`);
    }
    return null;
  }, null);

  return answer.join(",");
}
```

### References

[CodeWars - Range Extraction (4kyu)](https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript)
