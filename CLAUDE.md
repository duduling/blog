# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Korean-language personal blog and wiki site ("Let's Duduling") built with **Docusaurus 3.9** (React 19, TypeScript). Uses Yarn 4 (Berry) with PnP as the package manager.

Production URL: https://blog.duduling.dev

## Commands

- `yarn dev` — local dev server with hot reload (ko locale, port 3030)
- `yarn dev:en` — local dev server for the en locale only (port 3031). **Content preview only** — `docusaurus start --locale en` serves the en site at `/`, not `/en/`, so it cannot verify the locale dropdown or cross-locale links.
- `yarn preview` — production build + `docusaurus serve` (port 3040), serving **all locales at their real paths** (`/`, `/en/`). This is the only local environment that matches production's routing — use it to verify the locale dropdown actually switches languages.
- `yarn build` — production build to `build/` directory
- `yarn serve` — serve production build locally
- `yarn typecheck` — run TypeScript type checking (`tsc`)
- `yarn clear` — clear Docusaurus cache (useful when builds behave unexpectedly)

**Trap:** `docusaurus start` serves only one locale at a time, and falls back to that locale's `index.html` with **HTTP 200** for any nonexistent path (e.g. `/en/` while running the ko dev server). This looks like a working page but isn't — always verify with `curl -o /dev/null -w '%{http_code}' <url>/some-nonexistent-path` (expect `404`) before trusting a route works, or use `yarn preview` instead.

## Architecture

### Routing

- **Blog posts** are served at the root (`/`) — configured via `routeBasePath: "/"` in `docusaurus.config.ts`
- **Wiki/Docs** are served at `/wiki` — configured via `routeBasePath: "/wiki"`
- Sidebars are auto-generated from the `docs/` folder structure

### Content Structure

- `blog/` — Blog posts as Markdown files, named `YYYY-MM-DD title.md` with YAML frontmatter (`slug`, `title`, `author`, `author_title`, `author_url`, `author_image_url`, `tags`). Use `<!--truncate-->` for post excerpts.
  - **`slug` is required, not optional.** Without it, Docusaurus only strips the date prefix from the filename — any space or Korean text after the date leaks into the URL unencoded (e.g. a filename like `2026-07-18 나의 개발기.md` produces a URL with a raw leading space). Always set an explicit kebab-case `slug`.
  - For translated posts (`i18n/en/docusaurus-plugin-content-blog/<same-folder-name>/index.md`), the `slug` in the ko original and the en translation **must be byte-for-byte identical**. The locale dropdown builds its cross-locale link by prefixing the current pathname with `/en`, not by reading the translated file's `slug` — a mismatch builds successfully but makes the dropdown 404 silently.
- `docs/` — Wiki documentation organized by numbered category prefixes:
  - `01.coding-test/` — Coding test solutions (baekjoon, programmers, codility, code-wars)
  - `02.book/` — Book notes
  - `03.cheeting-sheet/` — Cheat sheets (cs, react, etc.)
  - `04.online-lecture/` — Online lecture notes
  - Each category has a `_category_.json` for sidebar metadata and an `intro.md`

### Source Code

- `src/css/custom.css` — Global CSS overrides (currently the only file under `src/` — no `src/pages/`, `src/components/`, or theme swizzles exist)
- `docusaurus.config.ts` — Main config (site metadata, navbar, footer, i18n, Algolia search, Google Analytics)

### Environment

- `.env` file holds `ALGOLIA_API_KEY` (loaded via `dotenv/config` in docusaurus config)
- Google Analytics tracking ID is configured inline in `docusaurus.config.ts`

## Work Conventions

- 태스크 진행 시 커밋을 단계별로 쪼개서 진행할 것 (변경 빠짐없이 커밋)
- 커밋 메시지 타입은 소문자로 작성할 것 (예: `fix:`, `chore:`, `docs:`)
- 작업이 길어지면 중간에 `/compact` 또는 `/clear`를 적극 활용하여 컨텍스트 정리할 것
- 코드 탐색 시 `.yarn/`, `yarn.lock`, `build/`, `static/img/` 등 대용량 파일은 읽지 말 것
- 블로그 글 관련 작업 시 전체 목록을 읽지 말고 필요한 파일만 타겟팅할 것
