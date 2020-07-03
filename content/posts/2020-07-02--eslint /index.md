---
title: 크레인 인형뽑기 게임 👨🏻‍💻
tags: ['Algorithm', '2019 카카오 개발자 겨울 인턴십']
cover: cover.jpg
author: Duduling
---

##### 잊지 않기 위해 스스로 보관하기 위한 포스팅으로 편한 말로 적었습니다. 🙇🏻‍♂️

![duduling preview image](cover.jpg)

## 크레인 인형뽑기 게임

### Instructions

[문제 보러가기](https://programmers.co.kr/learn/courses/30/lessons/64061)

### Solution

```js
function solution(board, moves) {
    let answer = 0;
    let boardSize = board.length;
    let getDollList = [];
    
    moves.forEach(move=>{
        let cnt = 0;

        while(true){
            const getDoll = board[cnt][move-1]
            const getDollListLength = getDollList.length

            if (getDoll !== 0){
                if (getDollListLength !== 0 && getDollList[getDollListLength - 1] === getDoll){
                    getDollList.pop();
                    answer += 2;
                }else{
                    getDollList.push(getDoll);
                }
                
                board[cnt][move-1] = 0;
                break;
            }
            
            cnt ++;
            if(cnt === boardSize)
                break;
        }
    })
    return answer;
}
```

##### Comment

포인트가 2가지 있는데 첫번쨰 포인트는 비교를 하면서 `getDollList`에 담지 않는 것이고, 두번째는 0을 만나게 됐을 때 다시 시도하는 것이다.

##### 출처

- https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
