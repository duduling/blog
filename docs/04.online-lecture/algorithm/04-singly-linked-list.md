# Singly Linked Lsit (단일 연결 리스트)

![Singly Linked List Cover](<https://til.duduling.dev/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F25f6fe3d-83f2-4467-977d-e68f92aa3752%2FOnline_Lecture-001_(1).png?table=block&id=94d4caae-54dc-4ebc-b75f-70ca97d722d6&spaceId=8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce&width=2000&userId=&cache=v2>)

## Intro

### Goal

- Sngly Linked List에 대해서 정의
- 배열을 사용하여 연결 목록 비교 및 대조
- Singly Linked Lists에서 삽입, 제거 및 순회 메서드 구현

### Singly Linked List(단일 연결 리스트)란?

![ex) Linked List](https://til.duduling.dev/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff8e28d01-e798-448d-8963-cd177bf00542%2FUntitled.png?table=block&id=23ccad0c-5151-43f6-8f4b-8f1c2dd6e6b9&spaceId=8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce&width=2000&userId=&cache=v2)

- 하나의 개체를 이루는 노드가 연결되어 리스트를 이루는 구조를 말한다.
- `head`, `tail`및 `length`속성 을 포함하는 데이터 구조입니다 .
- 연결 목록은 노드로 구성되며 각 노드 에는 값 과 다른 `node`또는 `null`에 대한 포인터 가 있습니다.

## **Comparison of Linked List and Array**

### Linked List

- 인덱스가 없다.
- 다음 포린터가 있는 노드를 통해 연결 된다.
  → 어느 곳에 값을 삽입 및 삭제를 하더라도 시간 복잡도가 동일하다.
- 랜덤 엑세스는 허용이 되지 않는다.
  → 특정 값에 접근하려면 Head에서 부터 연결되어 있는 모든 Node를 확인 해야 한다.

### Array

- 순서대로 인덱싱한다.
- 삽입 및 삭제에 대한 비용이 많이 들 수 있다.
  → 맨 뒤가 아닌 값에 삽입을 한다면 순차적으로 모든 데이터가 뒤로 밀린다.
- 랜덤 엑세스가 가능하다.
  → 인덱싱이 되어 있기에 특정 값에 O(1)로 접근 가능하다.

## Javascript 구현

### **Basic structure (기본 구조)**

```jsx
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
```

- 의사 코드
  1.  이 함수는 인자값을 받아들여야 합니다.
  2.  함수에 전달된 값을 사용하여 새 노드 생성
  3.  목록에 `head` 속성이 없으면 `head`와 `tail`을 새로 생성된 노드로 설정
  4.  그렇지 않으면 꼬리의 `next` 속성을 새 노드로 설정하고 목록의 꼬리 속성을 새로 생성된노드로 설정합니다.
  5.  길이를 1씩 증가
  6.  연결 리스트 반환

### push(val) - Linked List 끝에 새로운 노드 추가

```jsx
push(val){
    var newNode = new Node(val);
    if(!this.head){
        this.head = newNode;
        this.tail = this.head;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.length++;
    return this;
}
```

- 의사 코드
  1.  이 함수는 값을 받아들여야 합니다.
  2.  함수에 전달된 값을 사용하여 새 `node` 생성
  3.  목록에 `head` 속성이 없으면 `head`와 `tail`을 새로 생성된 `node`로 설정
  4.  그렇지 않으면 꼬리의 `next` 속성을 새 `node`로 설정하고 목록의 꼬리 속성을 새로 생성된 `node`로 설정합니다.
  5.  길이를 1씩 증가
  6.  연결 리스트 반환

### pop() - **연결 목록의 끝에서 노드 제거**

```jsx
pop(){
    if(!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while(current.next){
        newTail = current;
        current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0){
        this.head = null;
        this.tail = null;
    }
    return current;
}
```

- 의사 코드
  1.  목록에 `node`가 없으면 `undefined`를 반환합니다.
  2.  `tail`에 도달할 때까지 목록을 반복합니다.
  3.  두 번째에서 마지막 `node`의 `next` 속성을 `null`로 설정
  4.  꼬리를 마지막 `node`에서 두 번째로 설정합니다.
  5.  목록의 길이를 1만큼 감소
  6.  제거된 `node`의 값을 반환

### shift() - **연결 목록의 시작 부분에서 새 노드 제거**

```jsx
shift(){
    if(!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if(this.length === 0){
        this.tail = null;
    }
    return currentHead;
}
```

- 의사 코드
  1.  `node`가 없으면 undefined 반환
  2.  기존 `head` 속성을 변수에 저장
  3.  새로 설정 되는 `head` 속성을 기존 `head`의 다음 `node`으로 설정
  4.  길이를 1 감소
  5.  제거된 `node`의 값을 반환

### unshift(val) - **연결 목록의 시작 부분에 새 노드 추가**

```jsx
unshift(val){
    var newNode = new Node(val);
    if(!this.head) {
        this.head = newNode;
        this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
}
```

- 의사 코드
  1.  이 함수는 값을 받아들여야 합니다.
  2.  함수에 전달된 값을 사용하여 새 `node` 생성
  3.  목록에 `head` 속성이 없으면 `head`와 `tail`을 새로 생성된 노드로 설정
  4.  그렇지 않으면 새로 생성된 `node`를 `next` 속성을 목록의 현재 `head` 의 `node`으로 설정합니다.
  5.  목록의 `head` 속성을 새로 생성된 노드로 설정합니다.
  6.  목록의 길이를 1만큼 증가
  7.  연결 리스트 반환

### get(index) - \***\*연결 목록에서 노드의 위치로 노드 검색\*\***

```jsx
get(index){
    if(index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while(counter !== index){
        current = current.next;
        counter++;
    }
    return current;
}
```

- 의사 코드
  1.  이 함수는 인덱스를 받아들여야 합니다.
  2.  인덱스가 0보다 작거나 목록의 길이보다 크거나 같으면 `null`을 반환합니다.
  3.  인덱스에 도달할 때까지 목록을 반복하고 해당 특정 인덱스의 `node`를 반환합니다.

### set(index, val) - **연결 목록에서 위치에 따라 노드  변경**

```jsx
set(index, val){
    var foundNode = this.get(index);
    if(foundNode){
        foundNode.val = val;
        return true;
    }
    return false;
}
```

- 의사 코드
  1.  이 함수는 값과 인덱스를 받아들여야 합니다.
  2.  `get` 함수를 사용하여 특정 `node`를 찾습니다.
  3.  `node`를 찾을 수 없으면 `false`를 반환합니다.
  4.  `node`가 발견되면 해당 `node`의 값을 함수에 전달된 값으로 설정하고 `true`를 반환합니다.

### insert(index, val) - \***\*특정 위치의 Linked List에 노드 추가\*\***

```jsx
insert(index, val){
    if(index < 0 || index > this.length) return false;
    if(index === this.length) return !!this.push(val);
    if(index === 0) return !!this.unshift(val);

    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
}
```

- 의사 코드
  1.  인덱스가 0보다 작거나 길이보다 크면 `false`를 반환합니다.
  2.  인덱스가 길이와 같으면 목록의 끝으로 새 `node`를 푸시합니다.
  3.  인덱스가 0이면 새 `node`를 목록의 시작 부분으로 이동 해제합니다.
  4.  그렇지 않으면 `get` 메서드를 사용하여 인덱스 - 1의 `node`에 액세스합니다.
  5.  해당 `node`의 `next` 속성을 새 `node`로 설정합니다.
  6.  새 `node`의 `next` 속성을 이전 `next`으로 설정합니다.
  7.  길이 증가
  8.  참을 반환

### remove(index) - \***\*특정 위치의 연결 목록에서 노드 제거\*\***

```jsx
remove(index){
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();
    var previousNode = this.get(index - 1);
    var removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
}
```

- 의사 코드
  1.  인덱스가 0보다 작거나 길이보다 크면 `undefined`를 반환합니다.
  2.  인덱스가 length-1과 같으면 `pop`
  3.  인덱스가 0이면 `shift`
  4.  그렇지 않으면 `get` 메서드를 사용하여 인덱스 - 1의 `node`에 액세스합니다.
  5.  해당 노드의 `next` 속성을 그 다음에 올 `node` 의 `next`으로 설정합니다.
  6.  길이 감소
  7.  제거된 `node`의 값을 반환

### reverse() - Liked List 순서 모두 반전 (Head ↔ Tail)

```jsx
reverse(){
  var node = this.head;
  this.head = this.tail;
  this.tail = node;
  var next;
  var prev = null;
  for(var i = 0; i < this.length; i++){
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return this;
}
```

- 의사 코드
  1. 머리와 꼬리를 바꿉니다
  2. `next`라는 변수를 생성합니다.
  3. `prev`라는 변수를 생성합니다.
  4. `node`라는 변수를 만들고 `head` 속성으로 초기화합니다.
  5. 목록 반복
  6. 다음은 `node`가 무엇이든 `next` 속성으로 설정합니다.
  7. `node`드의 다음 속성을 `prev`가 무엇이든 설정하십시오.
  8. `prev`를 노드 변수의 값으로 설정
  9. `node` 변수를 다음 변수의 값으로 설정
  10. Loop가 모두 완료 되면 목록을 반환하십시오.

## 시간 복잡도

### Insertion(삽입) → O(1)

Head나 Tail에 원하는 노드를 생성 한 후에 Head나 Tail에 맞게 업데이트만 해주면 된다.

### Removal(제거) → O(1) || O(N)

Head의 경우에는 바로 삭제가 가능하지만 Tail의 경우에는 Head 부터 시작해 순회해야 한다.

### Searching(탐색) → O(N)

최악의 경우 모든 Linked List를 검색해야 한다.

### Access(접근) → O(N)

최악의 경우 모든 Linked List를 검색해야 한다.

## Outro

- Singly Linked Lists는 처음에 삽입과 삭제가 자주 필요한 경우 배열에 대한 훌륭한 대안입니다.
- 배열에는 기본 제공 인덱스가 포함되어 있는 반면 연결 목록에는 포함되지 않습니다.
- 노드로 구성된 목록 데이터 구조의 아이디어는 스택 및 큐와 같은 다른 데이터 구조의 기초입니다.

## Reference
