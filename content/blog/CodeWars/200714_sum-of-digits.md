---
title: Sum of Digits / Digital Root (6 kyu) 🧗🏻
date: 2020-07-14 21:03:01
category: CodeWars
draft: false
---

![duduling preview image](./images/200714_sum-of-digits.jpg)

## Sum of Digits / Digital Root (6 kyu)

### Instructions

In this kata, you must create a `digital root` function.

A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

Here's how it works:

```dummy
digital_root(16)
=> 1 + 6
=> 7

digital_root(942)
=> 9 + 4 + 2
=> 15 ...
=> 1 + 5
=> 6

digital_root(132189)
=> 1 + 3 + 2 + 1 + 8 + 9
=> 24 ...
=> 2 + 4
=> 6

digital_root(493193)
=> 4 + 9 + 3 + 1 + 9 + 3
=> 29 ...
=> 2 + 9
=> 11 ...
=> 1 + 1
=> 2
```

각 자리 숫자의 합이 한 자리 숫자가 되는 값을 구해라.  
-> 한 자리의 숫자가 될 때까지 반복하는 구조 -> 재귀 함수로 접근

### Solution

```js
function digital_root(n) {
  if (n < 9) return n;

  let asnwer = 0;
  let splitNumberArray = String(n).split('');

  while (splitNumberArray.length > 1) {
    answer = splitNumberArray.reduce((acc, number) => {
      return acc + Number(number);
    }, 0);

    splitNumberArray = String(answer).split('');
  }

  return answer;
}
```

##### Comment

처음에 `return` 함수로 재귀를 하다가 stack overflow가 발생했다. 그래서 while문으로 안에서 반복하도록 변경하였다. 풀이 과정은 처음에 n이 한 자리 숫자일 때 바로 return 하고 `answer`과 `splitNumberArray를` 초기화 한다. 그 후 `splitNumberArray의` 배열의 자리 수가 1(한 자리) 이상이면 while문 안에서 재귀 하면서 답을 찾는다. 그 후 배열의 자리 수가 1(한 자리)가 되면 조건문을 빠져나와 `answer`을 return 한다.

### Other Solution

```js
function digital_root(n) {
  return ((n - 1) % 9) + 1;
}
```

##### Comment

두번째 풀이는 다른 사람의 풀이인데 독특하게 접근해서 같이 올려봤다. 나의 부족한 필력으로 최대한 노력해서 풀이해보겠다.
우선 9의 배수의 공식을 알아야 한다. 각 자리의 숫자의 합이 9로 나누어지면 9의 배수이다.

```dummy
n = 1532790

1번 시도     1 + 5 + 3 + 2 + 7 + 9 + 0 = 27
2번 시도     2 + 7 = 9
3번 시도     9

답 = 9
```

결과적으로 각 자리의 숫자의 합이 9로 나누어진다면 9의 배수이다. 그렇다면 1번 시도 때 각 자리의 합이 9로 나누어 떨어진다면 이미 이 수는 9의 배수이기에 몇번을 아래로 내려가도 그 각 자리의 합은 9의 배수일 것이다. 그러한 방식으로 접근했을 때에 n이 9로 나누었을 때의 나머지 값은 각 자리 숫자의 합의 한 자리 숫자인 것이다. 근데 여기서 변수가 9가 나왔을 때에는 9또한 나누어져 0이 되는 것을 방지해 처음에 -1을 하고 계산이 끝난뒤 +1을 하는 것이다.

최대한 설명은 해보았지만 혹여 저의 부족한 필력에 이해가 잘 되지 않거나 하는 부분이 있으면 편하게 메일이나 댓글로 남겨주시면 열심히 설명해보겠습니다. 이 또한 경험이 되기를 바라며.. 👨🏻‍💻

##### 출처

- https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
