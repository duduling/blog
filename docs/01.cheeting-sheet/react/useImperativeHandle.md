# useImperativeHandle

## 설명

- 부모 컴포넌트에서 자식 컴포넌트의 특정 기능을 직접 호출해야 할 때
- 라이브러리나 재사용 가능한 컴포넌트를 만들 때, 특정 API를 외부에 노출시키고 싶을 때
- DOM 요소를 직접 조작해야 하는 경우

## 포인트

- useImperativeHandle은 부모 컴포넌트에 노출할 메서드나 속성을 객체로 반환
- 이 Hook을 통해 노출된 메서드들은 부모 컴포넌트에서 ref를 통해 직접 호출 가능
- 내부 상태(count)나 DOM 요소(input)에 대한 접근과 조작이 가능

## 문제점

- 과도한 사용은 컴포넌트 간 결합도를 높여 유지보수를 어렵게 만들 수 있음
- 가능한 props와 state를 통한 선언적 방식을 우선적으로 사용하고, useImperativeHandle은 필요한 경우에만 권장
- 성능 최적화나 특수한 DOM 조작이 필요한 경우에 유용하게 사용 가능

## 예시

- useImperativeHandle 관련 Code

  ```tsx
  import React, {
    useRef,
    useImperativeHandle,
    forwardRef,
    useState,
    RefObject,
  } from "react";

  // 자식 컴포넌트에 대한 ref 타입 정의
  interface ChildComponentHandle {
    focus: () => void;
    getValue: () => string;
    increment: () => void;
    getCount: () => number;
    reset: () => void;
  }

  // 더 복잡한 자식 컴포넌트
  const AdvancedChildComponent = forwardRef<ChildComponentHandle, {}>(
    (props, ref) => {
      const [count, setCount] = useState(0);
      const inputRef = useRef<HTMLInputElement>(null);

      useImperativeHandle(ref, () => ({
        focus: () => {
          inputRef.current?.focus();
        },
        getValue: () => {
          return inputRef.current?.value || "";
        },
        increment: () => {
          setCount((prevCount) => prevCount + 1);
        },
        getCount: () => count,
        reset: () => {
          setCount(0);
          if (inputRef.current) {
            inputRef.current.value = "";
          }
        },
      }));

      return (
        <div>
          <input ref={inputRef} />
          <p>Count: {count}</p>
        </div>
      );
    }
  );

  // 부모 컴포넌트
  const ParentComponent: React.FC = () => {
    const childRef = useRef<ChildComponentHandle>(null);

    const handleFocus = () => {
      childRef.current?.focus();
    };

    const handleIncrement = () => {
      childRef.current?.increment();
      console.log(`New count: ${childRef.current?.getCount()}`);
    };

    const handleReset = () => {
      childRef.current?.reset();
      console.log(`Input value: ${childRef.current?.getValue()}`);
      console.log(`Count: ${childRef.current?.getCount()}`);
    };

    return (
      <div>
        <AdvancedChildComponent ref={childRef} />
        <button onClick={handleFocus}>Focus Input</button>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    );
  };

  export default ParentComponent;
  ```

- 선언적 방식, 명령적 방식 예제 Code

  ```tsx
  import React, {
    useState,
    useRef,
    useImperativeHandle,
    forwardRef,
  } from "react";

  // 선언적 접근 (React의 일반적인 방식)
  interface DeclarativeCounterProps {
    count: number;
    onIncrement: () => void;
  }

  const DeclarativeCounter: React.FC<DeclarativeCounterProps> = ({
    count,
    onIncrement,
  }) => (
    <div>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );

  const DeclarativeParent: React.FC = () => {
    const [count, setCount] = useState(0);

    return (
      <DeclarativeCounter
        count={count}
        onIncrement={() => setCount((prevCount) => prevCount + 1)}
      />
    );
  };

  // 명령적 접근 (useImperativeHandle 사용)
  interface CounterHandle {
    increment: () => void;
    getCount: () => number;
  }

  const ImperativeCounter = forwardRef<CounterHandle, {}>((props, ref) => {
    const [count, setCount] = useState(0);

    useImperativeHandle(ref, () => ({
      increment: () => setCount((prevCount) => prevCount + 1),
      getCount: () => count,
    }));

    return <p>Count: {count}</p>;
  });

  const ImperativeParent: React.FC = () => {
    const counterRef = useRef<CounterHandle>(null);

    const handleIncrement = () => {
      if (counterRef.current) {
        counterRef.current.increment();
        console.log(counterRef.current.getCount());
      }
    };

    return (
      <div>
        <ImperativeCounter ref={counterRef} />
        <button onClick={handleIncrement}>Increment</button>
      </div>
    );
  };

  export { DeclarativeParent, ImperativeParent };
  ```
