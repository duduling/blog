# Git: feature 브랜치 일괄 삭제

## 명령어

```bash
git branch -r | grep -Eo '{KEY_WORD}' | xargs -I {} git push origin :{}
```

KEY_WORD = `feature/.*`, `hotfix/.*`

## 기능

- 원격 저장소의 모든 `'{KEY_WORD}'` 브랜치를 한 번에 삭제

## 주의사항

- 영구 삭제되므로 신중히 사용
- 팀 프로젝트시 사전 협의 필요
- 실행 전 중요 정보 백업 권장

## 안전 확인

삭제 전 브랜치 목록 확인:

```bash
git branch -r | grep -Eo '{KEY_WORD}'
```
