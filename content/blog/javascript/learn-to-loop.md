---
title: 반복문에 대해 알아보자
date: 2020-07-20 19:07:63
category: JavaScript
draft: false
---

개발을 하던도중 Loop문을 작성해야 하는데 어떤 것이 더 나은 선택인질 헷갈릴 때가 많다. 오늘도 프로그래머스를 풀던 도중 해시를 구현 하는데 `forEach`가 나을지 `reduce`가 나을지 헷갈렸다. `Go`에서는 `for`문 밖에 없기에 그냥 무작정 다 `for`문으로 도배하는 것 같은데 JavaScript에는 굳이 왜 이렇게 분류 해놓았을까? 그 이유에 대해서 궁금해져서 이렇게 찾아보았다. 

## for, forEach, filter, map, reduce 비교하기

<!-- ![쳇바퀴냥](https://drive.google.com/uc?id=15VQoQf6p22_bvUmN1Cu_Yr5UmuJRoavz) -->

초기 값

```js
const posts = [ 
  {id: 1, upVotes: 2},
  {id: 2, upVotes: 18}, 
  {id: 3, upVotes: 1}, 
  {id: 4, upVotes: 30}, 
  {id: 5, upVotes: 50} 
];
```

### `for`

```js
sum = 0;

for(let i = 0; i < posts.length; i++) {
    sum += posts[i].upVotes;
}
```

우선 가장 심플한 반복문이다. 중간에 `continue`나 `break`를 통해 반복문을 빠져나올 수도 있고 가산방식에 대한 조건을 자신이 컨트롤 할 수 있다. 또한 특정 데이터에 대한 반복문이 아니기에 범용성이 높다. 
    
### `filter`

```js
sum = 0;

posts.filter(v => {
    sum += v.upVotes;
});
```

특정 조건에 대하여 `true` 값인 것들을 배열로 만들어 `return` 해준다. 배열에 사용가능하며 아래와 같이 체인 형식으로 사용할 수도 있다.

```js
const array = [1, 2, 3, 4, 5, 6]

const result = tempInstrumentsObj
        .filter(v => v % 2 === 0)
        .map(v => {
            return v === 4 ? 'Good' : 'Bad'
        })
console.log(result) // ['Bad', 'Good', 'Bad']
```

### `forEach`

```js
sum = 0;

posts.forEach(element => {
    sum += element.upVotes;
});
```

배열에 적용할 수 있고 각 값에 대하여 특정 프로세스를 한번씩 다 적용해준다. 첫번째 인자로는 각 값이 들어오고 두번째 인자로는 index의 값 등등이 있다. 특징으로는 반환되는 값이 없다.

### `map`

```js
sum = 0;

posts.map(v => { 
    sum += v.upVotes;
})
```

위의 `forEach`와 사용 방법이 매우 비슷하지만 return 되는 값이 모여 마지막에 그 값들이 array로 반환 되는 차이점이 있다.

### `reduce`

```js
sum = 0

sum = posts.reduce((acc, item)=> {
    return acc += item.upVotes
}, 0);
```

처음에 초기 값을 설정하고 첫번째 인자로 accumulator라고 누산 값이 온다. return 되는 값을 계속 전달하여 값을 이어갈 수 있는 장점이 있다.

## 결론

<!-- ![loop test](https://drive.google.com/uc?id=1GVXTq8VDxF97x35aweSe6mEYJoMazL_s) -->

`reduce` -> `forEach` -> `for` -> `filter` -> `map`

위에 코드를 돌려보았을 때 위의 결과가 나왔다. 개인적으로 `for`이 가장 빠를거라고 생각했기에 조금은 예상과는 다른 결과였다. 물론 이런걸 처음 해보는거라 제대로 된 방법으로 못한 것일 수도 있지만 어쨌든 이번 기회에 반복문을 다시 한번 정리할 수 있는 기회였다.

#### 참고 자료

- [dslooppf](https://jsperf.com/dslooppf)
- [Javascript-map()과 forEach()의 비교 및 분석](https://pewww.tistory.com/12)

