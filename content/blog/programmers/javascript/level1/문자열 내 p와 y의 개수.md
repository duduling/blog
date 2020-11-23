---
title: 문자열 내 p와 y의 개수 🧗🏻
date: 2020-11-23 23:30:45
category: 프로그래머스
draft: false
---

## 문제

대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 pPoooyY면 true를 return하고 Pyy라면 false를 return합니다.

#### 제한 조건

- 문자열 s의 길이 : 50 이하의 자연수
- 문자열 s는 알파벳으로만 이루어져 있습니다.


### 입출력 예

| s       	| answer 	|
|---------	|--------	|
| pPoooyY 	| true   	|
| Pyy     	| false  	|

##### 입출력 예 #1
'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

##### 입출력 예 #2
'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.

## Solution

#### My Solution

```js
function solution(s) {
    const answer = s.split('').reduce((acc, word) => {
        return {
            p: word === 'p' || word === 'P' ? acc.p + 1 : acc.p,
            y: word === 'y' || word === 'Y' ? acc.y + 1 : acc.y
        }
    }, { p: 0, y: 0 })

    return Boolean(answer.p === answer.y)
}
```

> 제일 단순하게 문자열을 `splite`(한개 단위)으로 배열로 쪼갠후 `reduce`를 이용해 `p`와 `y`를 누적한 후에 비교한 값을 도출

#### Other Solution

```js
function solution(s) {
    const toLowerString = s.toLowerCase()
    
    return toLowerString.split('p').length === toLowerString.split('y').length;
}
```

> 문자열을 소문자로 통일 시킨 후에 `splite`(p와 y를 기준으로)을 통해 분리 시키후에 분할 된 배열의 수로 비교한 값을 도출

##### 출처

https://programmers.co.kr/learn/courses/30/lessons/12916
