# Convert string to camel case (6kyu)

## Instructions

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

#### Examples

```text
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
```

## Sample Tests

```js
describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(
      toCamelCase(""),
      "",
      "An empty string was provided but not returned"
    );
    Test.assertEquals(
      toCamelCase("the_stealth_warrior"),
      "theStealthWarrior",
      "toCamelCase('the_stealth_warrior') did not return correct value"
    );
    Test.assertEquals(
      toCamelCase("The-Stealth-Warrior"),
      "TheStealthWarrior",
      "toCamelCase('The-Stealth-Warrior') did not return correct value"
    );
    Test.assertEquals(
      toCamelCase("A-B-C"),
      "ABC",
      "toCamelCase('A-B-C') did not return correct value"
    );
  });
});
```

## Solution

### A Solution

```js
function toCamelCase(str) {
  return str.replace(/[-_][a-zA-Z]/g, (match) => match.slice(-1).toUpperCase());
}
```

## Review

이번 문제는 정규식과 replace를 이용한 문제이다.

#### String.prototype.replace()

```js
var newStr = str.replace(regexp|substr, newSubstr|function)
```

> 단순히 문자를 받을 수도 있지만 첫번째 인자로는 정규식이 두번째 인자로는 함수가 들어갈 수 있다.

### 참고 자료

[CodeWars - Convert string to camel case (6kyu)](https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript)

[MDN - replace()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
