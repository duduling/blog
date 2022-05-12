---
slug: connect-utteranc
title: "[개발 블로그 만들기 1탄] Docusaurus에 Utterance 연동하기 (댓글이 필요해)"
author: Duduling
author_title: Front-end Web Developer
author_url: https://github.com/duduling
author_image_url: https://avatars.githubusercontent.com/u/60775011?v=4
tags: [Blog, Front-end, ETC]
---

![Thumbnail](https://duduling.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff668dc04-1acc-4959-8c1c-b25a76d73b54%2FUntitled.png?table=block&id=408a77de-cba5-462d-9f95-09dda43af223&spaceId=8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce&width=2000&userId=&cache=v2)

## Intro

원래 기존에는 `Utterance`가 UI 적으로 이쁘기도 하고 사용하고 싶었지만 Repository를 공개로 해야 한다는 부분 때문에 `Disqus`를 사용하려고 했다. 하지만 `Algoria`를 사용하려면 어차피 Repository를 Public으로 해야 하기에 다시 `Utterance`로 연동했다. 그냥 연동하면 될 것 같았는데 중간에 생긴 작은 문제 몇 가지가 있어서 다른 분들에게 도움을 주기 위해 포스팅한다.

## Utterance

먼저 `Utterances`는 GitHub Issue 기반으로 댓글을 작성하는 방식이다.

### Utterances의 장점

1. 관리하는 사람이나 이용하는 사람이나 사용 방법에 대해서 자연스럽게 익힐 수 있다. (Github Issue를 기반으로 하기 때문)
2. 댓글을 Markdown 문법으로 작성할 수 있다.
3. 연동이 간단하다. (제가 밑에서 자세히 설명할 예정이기 때문에 더 쉽쥬?)
4. Github이라는 플랫폼에 종속되어 있기 때문에 댓글에 대한 알림 및 웹훅(WebHook) 처리도 가능하다.
5. **제일 중요한 이유 -> 이쁘다.**

뭐 다양한 의견들이 있지만 인터넷에 나온 여러 사용자의 의견과 나의 의견을 종합하면 이 정도가 되는 것 같다.

## Connect the Utterance to Docusaurus

### 1. Utterance에 레포지토리 권한 위임하기

Docusaurus에 붙이려면 조금 다르다.

먼저 [Go to Utterance](https://utteranc.es/)에 들어가서 Utterance에 나의 Repository의 권한을 위임한다.

### 2. Comment Component 생성하기

```js
// src/components/Comment.js
import React, { useEffect, useRef } from "react";

const REPOSITORY_NAME = `username/example`;

function Comment() {
  const containerRef = useRef(null);

  useEffect(() => {
    (function () {
      const script = document.createElement("script");

      script.src = "https://utteranc.es/client.js";
      script.setAttribute("repo", REPOSITORY_NAME);
      script.setAttribute("issue-term", "title");
      script.setAttribute("label", "comment");
      script.setAttribute("theme", `github-light`); // OPTIONAL [github-light, github-dark]
      script.crossOrigin = "anonymous";
      script.async = true;

      containerRef.current.appendChild(script);
    })();
  }, []);

  return <div ref={containerRef} />;
}

export default Comment;
```

### 3. Eject Blog & Docs Component

자신의 템플릿에 맞게 해주면 된다. (`BlogPostPage`와 `DocItem` 둘 다 할 필요는 없다.)

아래에 명령어를 하나씩 입력해준다.

```bash
> yarn run swizzle @docusaurus/theme-classic DocItem --danger

> yarn run swizzle @docusaurus/theme-classic BlogPostPage --danger
```

그러면 아래와 같은 화면이 나오는데 **Eject**를 해준다.

```bash
--- Example View
? Which swizzle action do you want to do? › - Use arrow-keys. Return to submit.
    Wrap (Unsafe)
❯   Eject (Unsafe)
    [Exit]
---
```

### 4. Custom BlogPostPage & DocItem

원하는 부분에 `<Comment>` 컴포넌트를 삽입해 주면 된다.

### 5. Responsive Theme

사용하다 보니 내 홈페이지는 Light와 Dark가 있어서 댓글의 테마가 안 어울리는 변수가 있었다. 그래서 Comment 부분을 조금 수정했다.

```js
import React, { useEffect, useRef } from "react";
import { useColorMode } from "@docusaurus/theme-common";

function Comment() {
  const containerRef = useRef(null);
  const { colorMode } = useColorMode();

  useEffect(() => {
    (function () {
      const script = document.createElement("script");

      script.src = "https://utteranc.es/client.js";
      script.setAttribute("repo", "duduling/blog");
      script.setAttribute("issue-term", "title");
      script.setAttribute("label", "comment");
      script.setAttribute("theme", `github-${colorMode}`);
      script.crossOrigin = "anonymous";
      script.async = true;

      containerRef.current.appendChild(script);
    })();
  }, []);

  // #region - 현재 테마에 따른 utterances 테마 변경
  useEffect(() => {
    const utterancesFrameEl = document.querySelector(".utterances-frame");

    if (utterancesFrameEl) {
      utterancesFrameEl.src = utterancesFrameEl.src.replace(
        `github-${colorMode === "light" ? "dark" : "light"}`,
        `github-${colorMode}`
      );
    }
  }, [colorMode]);
  // #endregion

  return <div ref={containerRef} />;
}

export default Comment;
```

Utterance의 Iframe을 찾아서 Theme을 변경하는 방식으로 구현했다.

### Error @theme/hooks/useThemeContext

```js
// Legacy Code
import useThemeContext from "@theme/hooks/useThemeContext";
const { isDarkTheme } = useThemeContext();

// Current
import { useColorMode } from "@docusaurus/theme-common";
const { colorMode } = useColorMode();
```

중간에 isDarkTheme를 사용하면서 계속 오류가 났는데 찾다 보니 변경된 부분이 있어서 같이 올린다.

### Outro

혹시 하면서 궁금한 부분 있으면 댓글로 남겨주세요! 같이 고민해 보겠습니다! 🔥

## Reference

[https://younho9.dev/docusaurus-manage-docs-2](https://younho9.dev/docusaurus-manage-docs-2)
