# 특정 포트의 프로세스 찾기 및 종료하기

특정 포트를 사용 중인 프로세스를 찾아 종료하는 방법을 알아봅시다.

## 프로세스 찾기

```bash
lsof -i tcp:{PORT}
```

- `{PORT}`에 찾고자 하는 포트 번호를 입력합니다.
- 해당 포트를 사용 중인 프로세스의 정보가 표시됩니다.

## 프로세스 종료

```bash
kill -9 {PID}
```

- `{PID}`에 종료하고자 하는 프로세스의 ID를 입력합니다.
- `-9` 옵션은 강제 종료를 의미합니
