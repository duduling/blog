# RGB To Hex Conversion (5kyu)

## Instructions

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

#### Examples

```text
rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
```

## Sample Tests

```js
describe("Tests", () => {
  it("Basic Tests", () => {
    Test.assertEquals(rgb(0, 0, 0), '000000')
    Test.assertEquals(rgb(0, 0, -20), '000000')
    Test.assertEquals(rgb(300,255,255), 'FFFFFF')
    Test.assertEquals(rgb(173,255,47), 'ADFF2F')
  });
});
```

## Solution

```js
function convertHex (number) {
  if(number <= 0) return '00'
  if(255 <= number) return 'FF'
  
  const toUpperCaseHexNumber = number.toString(16).toUpperCase();
  
  return toUpperCaseHexNumber.length === 1 
    ? `0${toUpperCaseHexNumber}`
    : toUpperCaseHexNumber
}

function rgb(r, g, b){
  return `${convertHex(r)}${convertHex(g)}${convertHex(b)}`
}
```

## Review

`toString`만 잘 알고 있다면 크게 어려움 없이 풀 수 있다.

### References

[CodeWars - RGB To Hex Conversion (5kyu)](https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript)  
[MDN - Number.prototype.toString()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)
