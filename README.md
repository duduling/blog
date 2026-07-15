# 나 듀듀링 해보고 있어 (blog.duduling.dev)

[Docusaurus 3](https://docusaurus.io/) (React 19, TypeScript) 기반으로 만든 개인 블로그 & 위키 사이트입니다. 패키지 매니저는 Yarn 4(Berry) + PnP를 사용합니다.

Production: https://blog.duduling.dev

## Requirements

- Node.js >= 18
- Yarn 4 (Berry, PnP) — Corepack으로 자동 관리됨

## Installation

```bash
$ yarn
```

## Local Development

```bash
$ yarn start       # 개발 서버 (hot reload)
$ yarn dev         # PORT=3030 으로 개발 서버 실행
```

대부분의 변경사항은 서버 재시작 없이 브라우저에 바로 반영됩니다.

## Build

```bash
$ yarn build       # build/ 디렉터리로 정적 사이트 빌드
$ yarn serve       # 빌드 결과물 로컬에서 서빙
```

## 기타 스크립트

```bash
$ yarn typecheck   # TypeScript 타입 체크 (tsc)
$ yarn clear       # Docusaurus 캐시 초기화 (빌드가 이상하게 동작할 때)
$ yarn to-webp     # static 이미지들을 webp로 변환 (png2webp.sh)
```

## Deployment

Using SSH:

```bash
$ USE_SSH=true yarn deploy
```

Not using SSH:

```bash
$ GIT_USER=<Your GitHub username> yarn deploy
```

GitHub Pages를 호스팅으로 사용하는 경우, 위 명령으로 사이트를 빌드하고 `gh-pages` 브랜치에 푸시할 수 있습니다.

## 프로젝트 구조

- `blog/` — 블로그 글 (`/` 경로). 파일명은 `YYYY-MM-DD 제목.md` 형식
- `docs/` — 위키/문서 (`/wiki` 경로), 카테고리별 숫자 접두사로 정리 (`01.coding-test`, `02.book` 등)
- `src/pages/` — 커스텀 페이지 (홈페이지 등)
- `src/components/` — React 컴포넌트
- `src/css/custom.css` — 전역 CSS
- `docusaurus.config.ts` — 사이트 메타데이터, 네비게이션, Algolia 검색, GA 설정 등
