---
title: Stop gninnipS My sdroW! 🧗🏻
date: 2020-12-28 23:47:02
category: 프로그래머스
draft: false
---

## 문제

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

#### 제한 조건

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

#### 입출력 예

```js
spinWords("Welcome") // emocleW
spinWords("Hey fellow warriors") // Hey wollef sroirraw
spinWords("This is a test") // This is a test
spinWords("This is another test") // This is rehtona test
spinWords("You are almost to the last test") // You are tsomla to the last test
spinWords("Just kidding there is still one more") // Just gniddik ereht is llits one more
spinWords("Seriously this is the last one") // ylsuoireS this is the last one"
```

## Solution

#### My Solution

```js
function spinWords(words){
  return words.split(' ').map(word => word.length >= 5 ? word.split('').reverse().join('') : word).join(' ')
}
```

## Reference

#### 문제 출처 - [더 보기](https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript)