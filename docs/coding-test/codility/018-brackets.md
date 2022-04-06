# Brackets (Lesson 7)

## Instructions

A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

- S is empty;
- S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
- S has the form "VW" where V and W are properly nested strings.

For example, the string "{[()()]}" is properly nested but "([)()]" is not.

Write a function:

```js
function solution(S);
```

that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.

Write an efficient algorithm for the following assumptions:

- N is an integer within the range [0..200,000];
- string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".

##### Copyright 2009–2022 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

---

### Translate to Korean

괄호를 열고 닫을 떄 수가 맞게 모두 닫히면 1을 반환하고 그렇지 않으면 0을 반환한다.

```
ex)
A[0] = 4
-> (-4,0), (0, 4)
```

## Solution

```js
function solution(S) {
  const START_BRACKET_OBJ = {
    "[": "]",
    "{": "}",
    "(": ")",
  };

  const splitS = S.split("");
  const bracketStack = [];

  for (let i = 0, splitSLength = splitS.length; i < splitSLength; i++) {
    const bracket = splitS[i];

    if (START_BRACKET_OBJ[bracket]) {
      bracketStack.push(bracket);
    } else {
      const popBracket = bracketStack.pop();

      if (START_BRACKET_OBJ[popBracket] !== bracket) {
        return 0;
      }
    }
  }
  return bracketStack.length ? 0 : 1;
}
```

## Review

### References

- [Codillity - Brackets (Lesson 7)](https://app.codility.com/programmers/lessons/7-stacks_and_queues/brackets)
