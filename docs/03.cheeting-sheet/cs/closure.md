# Closure(클로저)

## 설명

- 클로저는 함수와 그 함수가 선언된 렉시컬 환경의 조합
- 주요 특징으로는 내부 함수가 외부 함수의 변수에 접근할 수 있으며, 외부 함수가 반환 된 후에도 해당 접근이 유지
- 데이터 은닉, 함수 팩토리 생성, 모듈 패턴 구현 등 다양한 용도로 활용 가

## 예시

- 데이터 은닉 - 클로저를 사용하여 변수를 보호하고 제어된 접근을 제공

  ```tsx
  function createCounter() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }

  const counter = createCounter();
  console.log(counter()); // 1
  console.log(counter()); // 2
  ```

- 함수 팩토리 - 클로저를 사용하여 특정 상태나 동작을 "기억하는" 새로운 함수를 생성

  ```tsx
  function multiply(a, b) {
    return a * b;
  }

  function partial(fn, a) {
    return function (b) {
      return fn(a, b);
    };
  }

  const multiplyBy5 = partial(multiply, 5);
  console.log(multiplyBy5(3)); // 15
  ```

- 모듈 패턴 - 클로저를 사용하여 private와 public 스코프를 구분하고, 정보 은닉을 구현

  ```tsx
  const module = (function () {
    let privateVariable = 0;

    function privateFunction() {
      console.log("Private function");
    }

    return {
      publicMethod: function () {
        privateVariable++;
        privateFunction();
      },
      getPrivateVariable: function () {
        return privateVariable;
      },
    };
  })();

  module.publicMethod();
  console.log(module.getPrivateVariable()); // 1
  ```
