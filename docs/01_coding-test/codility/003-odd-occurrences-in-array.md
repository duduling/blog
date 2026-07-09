# Odd Occurrences In Array (Lesson 2)

## Instructions

A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

For example, in array A such that:

A[0] = 9 A[1] = 3 A[2] = 9
A[3] = 3 A[4] = 9 A[5] = 7
A[6] = 9

- the elements at indexes 0 and 2 have value 9,
- the elements at indexes 1 and 3 have value 3,
- the elements at indexes 4 and 6 have value 9,
- the element at index 5 has value 7 and is unpaired.

Write a function:

```js
function solution(A);
```

that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

For example, given array A such that:

A[0] = 9 A[1] = 3 A[2] = 9
A[3] = 3 A[4] = 9 A[5] = 7
A[6] = 9
the function should return 7, as explained in the example above.

Write an efficient algorithm for the following assumptions:

- N is an odd integer within the range [1..1,000,000];
- each element of array A is an integer within the range [1..1,000,000,000];
- all but one of the values in A occur an even number of times.

##### Copyright 2009–2022 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

## Solution

```js
function solution(A) {
  const answer = Object.keys(
    A.reduce((acc, cur) => {
      if (acc[cur]) {
        delete acc[cur];
      } else {
        acc[cur] = true;
      }
      return acc;
    }, {})
  )[0];

  return Number(answer);
}
```

1. A를 순회하면서 `acc`에 값이 없다면 넣어주고 이미 있다면 제거하면서 개수가 짝수인 값들을 제거한다.
2. 반한 되는 `Object`의 첫번째 키 값을 `answer`에 담아준다.
3. 값이 `String`이기 때문에 `Number`로 바꿔준다.

## Review

.

### References

- [Codillity - Odd Occurrences In Array (Lesson 2)](https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array)
