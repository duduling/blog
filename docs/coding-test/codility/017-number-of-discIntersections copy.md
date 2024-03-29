# NumberOfDiscIntersections (Lesson 6)

## Instructions

We draw N discs on a plane. The discs are numbered from 0 to N − 1. An array A of N non-negative integers, specifying the radiuses of the discs, is given. The J-th disc is drawn with its center at (J, 0) and radius A[J].

We say that the J-th disc and K-th disc intersect if J ≠ K and the J-th and K-th discs have at least one common point (assuming that the discs contain their borders).

The figure below shows discs drawn for N = 6 and A as follows:

```
  A[0] = 1
  A[1] = 5
  A[2] = 2
  A[3] = 1
  A[4] = 4
  A[5] = 0
```

![Example Image](https://codility-frontend-prod.s3.amazonaws.com/media/task_static/number_of_disc_intersections/static/images/auto/0eed8918b13a735f4e396c9a87182a38.png)

There are eleven (unordered) pairs of discs that intersect, namely:

- discs 1 and 4 intersect, and both intersect with all the other discs;
- disc 2 also intersects with discs 0 and 3.

Write a function:

```js
function solution(A);
```

that, given an array A describing N discs as explained above, returns the number of (unordered) pairs of intersecting discs. The function should return −1 if the number of intersecting pairs exceeds 10,000,000.

Given array A shown above, the function should return 11, as explained above.

Write an efficient algorithm for the following assumptions:

- N is an integer within the range [0..100,000];
- each element of array A is an integer within the range [0..2,147,483,647].

##### Copyright 2009–2022 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

---

### Translate to Korean

N개의 배열에 각 디스크의 반지름 크기가 주어진다. Index가 원의 중심이 되고 해당 Index에 들어 있는 값이 반지름이 된다. 원의 좌표가 다른 원 안에 포함하는 개수를 찾는다.

```
ex)
A[0] = 4
-> (-4,0), (0, 4)
```

## Solution

```js
function solution(A) {
  const sortA = A.map((radius, idx) => {
    return {
      startPoint: idx - radius,
      endPoint: idx + radius,
    };
  }).sort((a, b) => {
    return a.startPoint - b.startPoint;
  });

  let answer = 0;

  for (let i = 0, sortALength = sortA.length; i < sortALength; i++) {
    const { startPoint, endPoint } = sortA[i];

    for (let l = i + 1; l < sortALength; l++) {
      if (answer > 10000000) {
        return -1;
      }

      const { startPoint: targetStartPoint } = sortA[l];

      if (targetStartPoint > endPoint) {
        break;
      }

      if (startPoint <= targetStartPoint && targetStartPoint <= endPoint) {
        answer += 1;
      }
    }
  }
  return answer;
}
```

## Reviewㅇ

좀 코드가 길어서 헷갈리긴 했지만 차근차근 풀어나가면 풀 수 있다. 먼저 원들의 각 끝점들을 구하고 그 중복된 값을 구하지 않기 위해 정렬한다. 그 후에 해당 조건에 맞춰서 하나씩 점검하면 된다.

### References

- [Codillity - NumberOfDiscIntersections (Lesson 6)](https://app.codility.com/programmers/lessons/6-sorting/number_of_disc_intersections)
