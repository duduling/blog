# Extract the domain name from a URL (5kyu)

## Instructions

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

#### Examples

```text
domainName("http://github.com/carbonfive/raygun") == "github"
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
```

## Sample Tests

```js
const { assert } = require("chai");

describe("Sample test", () => {
  it("Should pass sample tests", () => {
    assert.equal(domainName("http://google.com"), "google");
    assert.equal(domainName("http://google.co.jp"), "google");
    assert.equal(domainName("www.xakep.ru"), "xakep");
    assert.equal(domainName("https://youtube.com"), "youtube");
  });
});
```

## Solution

```js
function domainName(url) {
  return url.replace(/((http:\/\/)|(https:\/\/))|(www.)/gm, "").split(".")[0];
}
```

## Review

정규식 정리

`/((http:\/\/)|(https:\/\/))|(www.)/gm` : `http://` or `https://`로 시작하거나 `www.`는 선택인(있어도 되고 없어도 됨) 정규식

그리고 `.` 뒤를 전부 제거 하고 나머지 문자를 뱉음

### References

[CodeWars - Extract the domain name from a URL (5kyu)](https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript)
