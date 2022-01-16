# 6kyu - Take a Ten Minute Walk

## Instructions

You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

> "Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!)."

## Sample Tests

```js
describe("Tests", () => {
    it("test", () => {
//some test cases for you...
        Test.expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
        Test.expect(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
        Test.expect(!isValidWalk(['w']), 'should return false');
        Test.expect(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');

    });
});
```

## Solution

```js
function isValidWalk(walk) {
  if(walk.length !== 10) return false
    
  const { x, y } = walk.reduce(({x, y}, action) => {
      switch(action){
          case 'e': x -= 1; break;
          case 'w': x += 1; break;
          case 's': y += 1; break;
          case 'n': y -= 1; break;
          default: break;
      }
      return { x, y }
    }, { x: 0, y: 0 })
    
  return x === 0 && y === 0
}
```

- 먼저 한번의 걷기(액션)당 1분이 소요되고 정확히 10분에 돌아와야 하기 때문에 10개 미만의 액션은 `false` 처리 했다.
- 그리고 제자리로 돌아와야 하기 때문에 동서남북을 x축 y축 이라고 생각하고 각각 계산을 통해 두 값이 모두 0이 된다면 제자리로 돌아왔다는 뜻이다.

## Review

앞으로는 문제를 조금 더 많이 풀어야겠다. 앞으로도 꾸준히!