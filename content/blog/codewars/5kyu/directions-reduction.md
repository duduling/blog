---
title: Directions Reduction (5 kyu) 🧗🏻
date: 2020-07-15 23:20:00
category: CodeWars
draft: false
---

## Instructions

Once upon a time, on a way through the old wild mountainous west,…
… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

How I crossed a mountain desert the smart way.

```dummy
["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
```

You can immediatly see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

```dummy
["WEST"]
```

Other examples:
In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

Notes
Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
if you want to translate, please ask before translating.

## Description

간단히 문제를 설명하면 동쪽으로 갔다가 서쪽으로 다시 이동하면 제자리이기 떄문에 생략을 한다는 것이다.
-> 연속된 양극 방향 제외시키기

## Solution

```js
let opposite = {
  EAST: 'WEST',
  WEST: 'EAST',
  SOUTH: 'NORTH',
  NORTH: 'SOUTH',
};

return plan.reduce((dirs, dir) => {
  dirs[dirs.length - 1] === opposite[dir] ? dirs.pop() : dirs.push(dir);
  return dirs;
}, []);
```

## Comment

우선 각자 양극 방향을 값으로 객체를 생성했다. (제외해야 하는 방향인지 체크를 위함)
그 후에 `reduce` 함수를 통해 기본적으로 `push`하고 자신의 뒤에 있는 방향과 비교하면서 양극 방향이면 이전 내용을 `pop`하고 자신은 `push`없이 넘어간다.

##### 출처

https://www.codewars.com/kata/550f22f4d758534c1100025a/javascript
