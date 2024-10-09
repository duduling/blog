# FrogJmp (Lesson 3)

## Instructions

A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.

Count the minimal number of jumps that the small frog must perform to reach its target.

Write a function:

```js
function solution(X, Y, D);
```

that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.

For example, given:

X = 10
Y = 85
D = 30
the function should return 3, because the frog will be positioned as follows:

- after the first jump, at position 10 + 30 = 40
- after the second jump, at position 10 + 30 + 30 = 70
- after the third jump, at position 10 + 30 + 30 + 30 = 100

Write an efficient algorithm for the following assumptions:

- X, Y and D are integers within the range [1..1,000,000,000];
- X ≤ Y.

##### Copyright 2009–2022 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

## Solution

```js
function solution(X, Y, D) {
  return Math.ceil((Y - X) / D);
}
```

1. 가야 하는 거리를 구해서 한번에 건너 가는만큼 나눠서 소수점 첫번째에서 올림을 해준다.

## Review

.

### References

- [Codillity - Odd Occurrences In Array (Lesson 3)](https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp)
