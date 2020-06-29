---
title: ESLint? Babel? Webpack? 🤷🏻‍♂️
tags: ['ESlint', 'Prettier', 'Babel', 'Webpack', 'Tech Interview']
cover: cover.jpg
author: Duduling
---

##### 잊지 않기 위해 스스로 보관하기 위한 포스팅으로 편한 말로 적었습니다. 양해 부탁드립니다. 🙇🏻‍♂️

![duduling preview image](cover.jpg)

## ESLint? Babel? Webpack? 🤷🏻‍♂️

면접 질문으로도 많이 나오고 내가 개발을 할 때 초반에 많이 헷갈렸던 내용이였다. `ESlint`, `Perttier`, `Babel`, `Webpack` 하나 하나 간단하게 정리해보자

### ESLint

> ESLint는 JavaScript 코드에서 발견 된 문제 패턴을 식별하기위한 정적 코드 분석 도구입니다. ESLint의 규칙은 구성 가능하며 사용자 정의 된 규칙을 정의하고로드 할 수 있습니다.

`ESLint`는 우선 구글에 검색해보니 이렇게 적혀있었다. 쉽게 설명하면 크게 2가지의 의미가 담겨있다.

1. 모두 생각의 관점과 습관이 다른 것처럼 코드도 각자의 색이 묻어나기 마련이다. 하지만 우리는 마치 한명이 짠 것과 같이 코드를 작성해야 모두가 함께 이해하고 개발의 중요한 포인트인 유지보수(비용)이 많이 소모되지 않는다. 그러한 관점에서 공통된 규칙을 정해 최소한의 그 틀 안에서 지키면서 코드를 작성하자는 의미가 있다. 

2. 우리는 기계가 아니기에 실수를 한다. 같은 변수명을 적는가하면 사용하지도 않는 변수를 써 놓고 잊을 때가 있다. 하지만 `ESLint` 그러한 문제들에 대해서 미리 체크하고 알려준다. 그러므로 인해 우리는 굳이 코드를 실행해서 오류 메세지를 확인하면서 하나하나 찾는 수고를 덜 수 있는 것이다. 

### Prettier

`Prettier`는 Code Style Formater이다. 
쉽게 ESlint가 체크하고 관리를 해주면 Prettier는 실제 코드를 정해 놓은 규칙에 맞게 자동으로 변경해주고 바꿔주는 VSCode의 Extention이다. (ESlint와 세트로 많이 사용함)

### Babel

> Babel은 ECMAScript 2015+ 코드를 이전 JavaScript 엔진에서 실행할 수있는 이전 버전과 호환되는 JavaScript 버전으로 변환하는 데 주로 사용되는 무료 오픈 소스 JavaScript 트랜스 컴파일러입니다.

`Babel`은 특정 브라우저에서 작동하지 않는 모던한 JavaScript를 지원하게끔 예전버전으로 바꿔주는 트랜스 컴파일러이다. 

### Parcel

### Webpack

### Comment 

