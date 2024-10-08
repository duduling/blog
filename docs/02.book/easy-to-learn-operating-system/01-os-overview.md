# 01. 운영체제의 개요

## 1. 운영체제 소개

### 1-1. 생활 속 운영체제

#### 컴퓨터란?

프로그래밍이 가능한 기계

#### 임베디드 시스템이란?

웹서핑, 문서 작성, 영화 감상, 게임과 같은 다양한 작업에 사용되는 범용 컴퓨터가 아닌 스마트 시계, 스마트 TV, 스마트 자동차 등에 탑재된 컴퓨터

### 1-2. 운영체제의 정의

- 컴퓨터는 데이터를 통해 작업이 이루어짐 크게 처리하고 결과를 출력하거나 저장 함
  데이터(Data) → Processing(처리) → 정보(Information) / IT(Information Technology)
- 소프트웨어 → 명령 → 하드웨어 / 소프트웨어는 정해진 절차에 따라 하드웨어를 사용하여 데이터를 처리 하는데 크게 응용 프로그램(워드, 한글, 곰플레이어 등)과 시스템 소프트웨어(운영체제, 유틸리티 등)이 있다.
- 운영체제(Operating System)란?
  - 운영체제는 모든 소프트웨어 위에 존재하는 최고의 소프트웨어
  - 응용 프로그램과 사용자로부터 모든 컴퓨터 자원을 숨김
    → 대신 Interface를 제공해 사용 할 수 있도록 해줌
  - 컴퓨터 자원을 효율적으로 관리하는 소프트웨어
  - 하드웨어를 조정하고 관리하기 위해 존재
  - 소프트웨어와 하드웨어의 특성 모두 갖춘 형태로 운영 되며 이를 펌웨어(Firmware)라고 함

#### 1-3. 컴퓨터 구조와 운영체제

![Untitled](https://til.duduling.dev/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce%2Ff6e1f295-1bc6-43d1-b9e0-870ec9b63447%2FUntitled.png?table=block&id=291abafc-9810-4991-85e4-a1809ea7d5d9&spaceId=8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce&width=1310&userId=&cache=v2)

- UI(User Interface) - 사용자가 조작하여 컴퓨터를 컨트롤 함
- GUI(Graphical User Interface) - 마우스의 클릭, 드래그 같은 직관적인 작업으로 컴퓨터 컨트롤이 가능해짐

#### 1-4. 운영체제의 역할

![Untitled](https://til.duduling.dev/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce%2Fb5089451-b7d2-4960-9bff-806478840b62%2FUntitled.png?table=block&id=dc53935d-1e71-4a4d-b4c6-7b5d034ebad1&spaceId=8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce&width=1310&userId=&cache=v2)

- 자원 관리 - 자원들의 배분과 적절한 시점에 회수하여 여러 응용 프로그램의 원할한 작업을 돕는다.
- 자원 보호 - 특정 응용 프로그램이 남의 영역을 침범할 때 해당 자원을 보호 함
- 하드웨어 인터페이스 제공 - 다양한 하드웨어에 대한 자동 설치 지원으로 종류에 상관 없이 사용 가능
- 사용자 인터페이스 제공 - 기존에는 텍스트로 인터페이스를 조작 했다면 현재는 Graphical로 통해 마우스 또는 손을 이용해서 사용

#### 1-5. 운영체제의 목표

- 효율성 - 같은 자원으로 더 많은 일을 처리하거나 적은 자원으로 같은 양을 처리 하는 것을 추구
- 안정성 - 운영체제가 가장 바닥이 되는 소프트웨어로 안정성이 없다면 모든 프로그램이 불안정하게 됨
- 확장성 - 다양한 시스템 자원을 추가 및 제거가 용이해야 함
- 편리성 - 물론 GUI나 편리성을 위한 것들은 줄인다면 효율이 올라갈 수도 있지만 사용자의 편리성 또한 버리면 안 됨

## 2. 운영체제의 발전

![Untitled](https://til.duduling.dev/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce%2F21242728-80fe-424f-b9a8-e97c59641542%2FUntitled.png?table=block&id=6327ba3d-56a0-4b22-a3b3-29494c1f3700&spaceId=8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce&width=1310&userId=&cache=v2)

### 2-1. 초창기 컴퓨터

- 존 모클리와 존에커트가 만들었다.
- 에니악 30톤 규모 거대한 계산기로 미사일 탄도를 계산하기 위해 제작
- 진공관이 켜지면 1, 꺼지면 0이라고 판단 (이는 컴퓨터가 2진법을 사용하는 계기가 됨)
- 주변 장치가 없었음
- 진공관을 전선으로 연결해 프로그램을 대신 함 (하드와이어링 방식)

### 2-2. 일괄 작업 시스템

- 기술 발전을 거쳐 IC(Integrated Circuit)칩 만듦

```
- 천공카드 리더(Input) - 카드에 구멍을 뚫어 문자를 입력하는 방식 (Optical Mark Reader)
- 라인 프린터(Output) - 한 번에 한 줄씩 문자만 출력하는 프린터
```

- 기존과 다르게 리더만 교체하면 다른 작업이 가능
- 천공카드 시스템은 필요한 프로그램과 데이터를 동시에 입력해야 작업이 가능
  → 일괄 작업 시스템(Batch Job System) or 일괄 처리 시스템(Batch Processing System)
- 일괄 작업 시스템에서는 작기는 하지만 운영체제가 사용 됨
  → 메인메모리가 운영체제 영역과 사용자 영역으로 나뉨

### 2-3. 대화형 시스템

- 키보드와 모니터가 개발됨으로서 작업 중간에 입력하거나 중간 결과 값 확인이 가능해짐
- 중간에 값을 입력하면 작업의 흐름을 바꾸는 것도 가능
- 컴퓨터와 사용자의 대화를 통해 작업이 이루어지는 시스템을 대화형 시스템(Interactive System)이라고 한다.
- 작업 시간을 예측하기 어려움

### 2-4. 시분할 시스템

- 한번에 한가지 일만 수행하여 낭비가 큼
  → 효율적으로 사용하기 위해 멀티프로그래밍 기술이 개발 됨
- 시분할 시스템 - 여러 작업을 조금씩 처리하여 작업이 동시에 이루어지는 것처럼 보이게 하는 것 → 번외로 다중 사용자 시스템도 있음
- 타이이 때 잘게 나뉜 시간 한 조각을 타임 슬라이스 또는 타임 퀀텀이라고 함
- 단점으로는 사용자 메모리 정리하는 추가 작업 그리고 여러개를 동시에 처리 하면서 작업 소요 시간이 불분명해짐 (우선 순위의 문제)
- 실시간 시스템 (우선 순위 문제 해결책)
  - 경성 실시간 시스템 (Hard Real-Time System) - 지정한 응답 시간을 정확히 지키는 시스템으로 원자력 발전소의 원자로 온도 제어나 미사일 요격과 같은 작업에 이용.
  - 연성 실시간 시스템 (Soft Real-Time System) - 지정한 응답 시간을 최대한 지키지만 어느 정도 융통성이 허용된 시스템. 동영상 재생기의 경우, 응답 시간 안에 작업이 처리되지 않으면 끊김 현상이 발생하지만, 치명적인 결과를 낳지 않음.

### 2-5. 분산 시스템

- 분산 시스템 - 메인프레임이라는 고가의 대형 컴퓨터를 사용하기 힘들기에 작은 개인용 컴퓨터 여러대를 하나로 묶어 이용하는 시스템

### 2-6. 클라이언트/서버 시스템

- 모든 컴퓨터의 지위가 동일한 분산 시스템과 달리 작업을 요청하는 클라이언트 그리고 응답하여 요청받은 작업을 처리하는 서버의 이중 구조로 나뉨
  - 클라이언트 - 서비스를 요청하는 컴퓨터
  - 서버 - 데몬(Daemon)이 설치된 컴퓨터
    → 아차피(Apache), 톰캣(Tomecat), IIS(Internet Information Service)
- 클라이언트/서버 구조가 일반인에게 알려진 것은 웹 시스템이 보급된 이후이다.
- 문제점은 서버 과부하이다. 모든 요청이 서버로 집중되기 때문이다.

### 2-7. P2P 시스템

- 클라이언트 / 서버 구조의 단점인 서버 과부하를 해결하기 위해 만든 시스템
- 사용자는 해당 파일을 누가 가지고 있는지 위치 정보를 갖고 서버를 거치지 않고 사용자와 사용자를 직접 연결(Peer-to-Peer)
- 예시로는 모바일 메신저, 카카오톡 같은 것들이 있다. 사용자가 서버에서 인증을 마치면 상대방과 P2P로 직접 연결 된다.
- 블록체인
  - 서버가 없는 완전한 P2P 시스템
  - 현재 컴퓨팅 기술로는 해킹이 불가능한 시스템
  - 대체 불가 토큰 또는 NFT(Non-Fungible-Token)로 불리는 디지털 자산의 유일성을 증명하는 데 블록체인 사용

### 2-8. 클라우드 컴퓨팅

- 클라우드 컴퓨팅은 하드웨어와 소프트웨어를 클라우드라는 중앙 시스템에 숨기고 사용자는 필요한 서비스만 쉽게 이용하는 컴퓨팅 환경
- 클라우드 컴퓨팅의 하드웨어 구현에 그리드 컴퓨팅 기술 사용
- 그리드 컴퓨팅은 슈퍼컴퓨터와 맞먹는 높은 수준의 컴퓨팅 파워를 제공하는 것, 클라우드 컴퓨팅은 서비스 중심의 환경이라는 것이 가장 큰 차이점

### 2-9. 사물 인터넷

- 사물(thing)이 인터넷에 연결된 시스템을 사물 인터넷(Internet of Things)
- 다양한 사물이 센서와 통신 기능을 내장하여 스스로 통신하며 지능적인 서비스를 제공하는 기술
- 자동차에 무선 인터넷이 연결되면서 소프트웨어 업그레이드나 설정 변경 등을 무선으로 배포하는데 이를 OTA(Over-The-Air)라고 한다.
  → 테슬라, 현대자동차 등에 이용

## 3. 운영체제의 구성

### 3-1. 커널과 인터페이스

![Untitled](https://til.duduling.dev/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce%2F32923689-3441-4cb6-a729-0502f93293e1%2FUntitled.png?table=block&id=7ff19d8e-c6b3-4271-b52a-11c806f27240&spaceId=8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce&width=1310&userId=&cache=v2)

- 운영체제는 커널과 인터페이스로 분리되어 있다.
  → 같은 커널 다른 인터페이스 ⇒ 다른 운영체제 - 커널 - 프로세스 관리, 메모리 관리, 저장장치 관리 등 운영체제의 핵심 기능을 구현한 프로그램이다. - 인터페이스 - 사용자와 응용 프로그램에 인접하여 커널에 명령을 전달하고 싱행 결과를 사용자와 응용 프로그램에 돌려준다.
- 사용자는 더 좋은 커널보다 좋은 인터페이스의 컴퓨터를 선호 함

### 3-2. 시스템 호출과 디바이스 드라이버

- 시스템 호출 - 커널이 자신을 보호하기 위해 만든 인터페이스이다. 커널은 사용자가 응용 프로그램으로부터 자원을 보호하기 위해 직접 접근을 차단한다.
  - 직접 접근 - 두 응용 프로그램이 직접 데이터를 저장하면 서로에 의해 데이터 저장에 영향을 받을 수 있다.
  - 시스템 호출을 통한 접근 - 커널이 제공하는 `write()` 그리고 `read()` 이용해 데이터를 저장해 달라고 요청을 하면 커널이 전적으로 책임을 지기에 자원을 관리하기 수월해 진다.
- 시스템 호출 정리
  - 시스템 호출은 커널이 제공하는 시스템 자원의 사용과 연관된 함수다.
  - 응용 프로그램이 하드웨어 자원에 접근하거나 운영체제가 제공하는 서비스를 이용하려 할 때는 시스템 호출을 사용해야 한다.
  - 운영체제는 커널이 제공하는 서비스를 시스템 호출로 제한하고 다른 방법으로 커널에 들어오지 못하게 막아 컴퓨터 자원을 보호한다.
  - 시스템 호출은 커널이 제공하는 서비스를 이용하기 위한 인터페이스이며 사용자가 자발적으로 커널 영역에 진입할 수 있는 유일한 수단이다.
  - 시스템 호출과 유사한 용어
    - 응용 프로그램 인터페이스(Application Programming Interface) - 응용 프로그램이 자신과 연관된 프로그램을 개발할 수 있도록 제공하는 인터페이스다.
    - 시스템 개발자용 키드(System Developer's Kit) - 프로그램 개발자를 위해 API 및 API 매뉴얼뿐 아니라 프로그램 개발에 필요한 모든 것을 하나로 묶어서 배포하는 개발 툴이다.
- 디바이스 드라이버 - 커널과 하드웨어의 인터페이스를 담당하며 드라이버라고도 불린다. 표준을 따르는 마우스 같은 간단한 제품은 드라이버를 커널이 가지고 있으나 표준 외의 기능을 제공하는 그래픽카드 같은 복잡한 하드웨어의 경우 제작자가 드라이버를 제공한다.

### 3-3. 커널의 역할과 종류

![스크린샷 2024-04-29 오후 8.40.25.png](https://til.duduling.dev/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce%2F3723ab3e-c70b-4748-a546-09e26c071db3%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-04-29_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_8.40.25.png?table=block&id=498179d4-8537-4bec-a8cb-f68e210a9e7f&spaceId=8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce&width=1310&userId=&cache=v2)

- 단일형 구조 커널
  - 단일형 구조(Monolithic Architecture) 커널은 초창기 운영체제의 구조이다.
  - 커널의 핵심 기능을 구현하는 모듈이 구분 없이 하나로 구성되어 있다.
  - 대표적으로 MS-DOS, VMS, 초기의 유닉스
  - 장점 - 모듈이 거의 분리되지 않았기 때문에 모듈 간의 통신 비용이 줄어들어 효율적인 운영이 가능하다.
  - 단점
    - 모듈이 하나로 묶여 버그나 오류 처리가 힘들다.
    - 서로 연결되어 상호 의존성이 높기에 작은 결함이 전체의 결함으로 확산의 가능성이 있다.
    - 수정이 어려워 다양한 환경 시스템에 적용이 어렵다.
    - 현대의 운영체제는 크고 복잡해 단일형 구조의 OS를 구현하기 어렵다.

![Untitled](https://til.duduling.dev/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce%2F24a24bff-bc2d-42fd-9ba7-0ee085d2f1d8%2FUntitled.png?table=block&id=628f081b-f875-47f3-9879-e826a939a2c5&spaceId=8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce&width=1310&userId=&cache=v2)

- 계층형 구조 커널
  - 단일형 구조 커널이 발전된 형태로 비슷한 기능을 가진 모듈을 묶어서 하나의 계층으로 만들고 계층간의 통신을 통해 운영체제를 구현하는 방식이다.
  - 비슷한 기능을 모아 모듈화 했기에 버그나 오류가 발생하면 계층별로 나눠져 있기에 쉽게 처리할 수 있다.
  - 오늘 날의 대부분의 OS는 해당 구조로 이루어져 있다.

![Untitled](https://til.duduling.dev/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce%2F0ee4b400-3568-4b25-b8a8-a5f4704a1de0%2FUntitled.png?table=block&id=cc0bbdf4-4960-4194-95a8-278983fd00da&spaceId=8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce&width=1310&userId=&cache=v2)

- 마이크로 구조 커널
  - 커널의 크기가 계속 커져 방대해진 문제를 해결하기 위해 계층형 구조의 접근 방식과 반대되는 접근 방식으로 개발된 것이 마이크로 구조 커널이다.
  - 프로세스 관리, 메모리 관리, 프로세스 간 통신 관리 등 가장 기본적인 기능만 제공한다.
  - 커널의 각 모듈은 세분화되어 존재하고 모듈 간의 정보 교환은 프로세스 간 통신을 이용하여 이루어진다.
  - 각 모듈의 독립적으로 작동해 하나의 모듈의 실패해도 전체 운영체제가 멈추지 않는다.
  - 대표적인 운영체제인 마하(Mach)는 OS X(애플의 PC OS), IOS(Iphone OS)

![Untitled](https://til.duduling.dev/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce%2Fd678a41c-46bb-416a-9b9b-ade5c4d08b7b%2FUntitled.png?table=block&id=3cac0848-e71b-41bc-8e42-ef64dd6ddf15&spaceId=8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce&width=1310&userId=&cache=v2)

- 가상머신
  - 운영체제와 응용 프로그램 사이에서 작동하는 프로그램이다.
  - 가상머신을 설치하면 응용 프로그램이 모두 동일 환경에서 작동하는 것처럼 보인다.
  - 자바는 유닉스와 윈도우에서 작동하는 다양한 가상머신을 만들어 배포하는데 이를 자바 가상머신(Java Virtual Machine)이라고 한다.
  - 단점 - 응용 프로그램이 가상머신을 통해서만 작동하기에 느려진다는 점이다.

## Review

OS의 발전은 결국 기존에 가진 이슈를 좀 더 편하게 효율적이게 해결하면서 발전했고 보다 보면 OS도 결국 좀 더 크고 복잡한 프로그램이기에 현재 내가 개발하는 서비스의 구조 같은 문제와 유사한 부분도 많은 것 같다. 특히 커널의 종류를 보면서 서비스의 아키텍처와 비슷하다는 생각을 많이 했다.
