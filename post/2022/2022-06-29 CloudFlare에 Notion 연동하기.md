---
slug: connect-notion-to-cloudflare
title: "[개발 블로그 만들기 3탄] CloudFlare에 Notion 연동하기"
author: Duduling
author_title: Front-end Web Developer
author_url: https://github.com/duduling
author_image_url: https://avatars.githubusercontent.com/u/60775011?v=4
tags: [DevOps, CloudFlare, Notion, ETC]
---

![Thumbnail](https://til.duduling.dev/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb0832787-f24c-4c2d-b235-90848e7c093d%2FUntitled.png?table=block&id=cae38670-8af1-4895-a2e6-977719037ce8&spaceId=8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce&width=2000&userId=&cache=v2)

## Intro

Domain이 있어서 블로그 도메인과 통합할 생각으로 노션 페이지에 서브 도메인을 연결하다가 기록한 내용이다.

## Contents

### Notion Page 공유

![setting-1-picture](https://til.duduling.dev/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F98cb900a-4266-44c5-bc2c-1974e69e289a%2FUntitled.png?table=block&id=db6529b5-a645-4278-a0a3-6a7b45fa3cc9&spaceId=8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce&width=2000&userId=&cache=v2)

먼저 Notion page를 공개 페이지로 변경해야 한다.

### CloudFlare 설정

[Fruition - Build Your Next Website With Notion, For Free](https://fruitionsite.com/)

위에 링크로 접속해 나온 Step에 따라 진행하면 된다.

![cloudFlare-1-picture](https://til.duduling.dev/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F46d5b849-1d61-42d4-8c70-7ece38639f9e%2F%EC%A0%9C%EB%AA%A9_%EC%97%86%EC%9D%8C.png?table=block&id=0ad53ffa-97ee-4268-933e-2dd2f4f5e4fe&spaceId=8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce&width=2000&userId=&cache=v2)

이미 클라우드 플레어가 구축 되어 있다면 위 사진과 같이 저 부분만 채워서 `COPY THE CODE` 누르면 아래와 같이 코드가 나온다.

#### Example Code

```js
/* CONFIGURATION STARTS HERE */

/* Custom - Start */

/* Step 1: enter your domain name like fruitionsite.com */
const MY_DOMAIN = "";

/*
 * Step 2: enter your URL slug to page ID mapping
 * The key on the left is the slug (without the slash)
 * The value on the right is the Notion page ID
 */
const SLUG_TO_PAGE = {
  "": "", // When it comes in by key, it routes to the value.
};

/* Step 3: enter your page title and description for SEO purposes */
const PAGE_TITLE = "";
const PAGE_DESCRIPTION = "";

/* Step 4: enter a Google Font name, you can choose from https://fonts.google.com */
const GOOGLE_FONT = "";

/* Step 5: enter any custom scripts you'd like */
const CUSTOM_SCRIPT = ``;

/* Custom - End */

/* CONFIGURATION ENDS HERE */
// #region
const PAGE_TO_SLUG = {};
const slugs = [];
const pages = [];

// ... Blah Blah Skip

async function appendJavascript(res, SLUG_TO_PAGE) {
  return new HTMLRewriter()
    .on("title", new MetaRewriter())
    .on("meta", new MetaRewriter())
    .on("head", new HeadRewriter())
    .on("body", new BodyRewriter(SLUG_TO_PAGE))
    .transform(res);
}
```

Custom 이 부분만 변수에 맞게 수정하면 된다.

### Worker 생성하기

![worker-1-picture](https://til.duduling.dev/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2ac82954-d038-4bcb-a8fb-5af1bb5fc204%2FUntitled.png?table=block&id=a2420891-ae1d-4948-ba76-8c88e94903a4&spaceId=8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce&width=2000&userId=&cache=v2)

1. Worker 관리로 들어간다.

![worker-2-picture](https://til.duduling.dev/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc98e24bf-ce35-4974-bcc6-1883a3c87158%2FUntitled.png?table=block&id=ec9f1675-261b-48b2-a620-93d3847b8f90&spaceId=8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce&width=2000&userId=&cache=v2)

2. 서비스 생성을 클릭한다. → 이름을 적당히 지어주고 생성을 누른다. (스타터는 기본으로 하면 된다.)

![worker-3-picture](https://til.duduling.dev/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fefb58157-0dbf-4737-882c-02cfac02b508%2FUntitled.png?table=block&id=c5b01024-ac9e-4af3-b014-6e1ddf4ab351&spaceId=8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce&width=2000&userId=&cache=v2)

3. 생성이 완료되면 해당 서비스에 들어가 빠른 편집을 통해 위에서 만든 코드를 삽입 해준다.

![worker-4-picture](https://til.duduling.dev/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc489c8b0-7070-4ce1-906f-b05cf87a3ed5%2FUntitled.png?table=block&id=1b2c1c53-a5f6-4f75-8d1d-31337306bf52&spaceId=8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce&width=2000&userId=&cache=v2)

4. 다시 1번 페이지로 돌아와 해당 워커 편집을 눌러주고 `서브 도메인.메인 도메인/*`을 적어 주고 아래에는 해당 워커랑 연결해주면 된다.

### DNS 연결하기

![dns-1-picture](https://til.duduling.dev/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbf17d53b-dbcb-4e5b-95cd-0b4e42536239%2FUntitled.png?id=537336ac-5953-4af7-971a-a9e5f9758e8f&table=block&spaceId=8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce&width=1900&userId=&cache=v2)

DNS에 기존 루트 도메인은 위와 같이 연결해주고 서브 도메인은 이름에 서브도메인을 넣고 Vercel의 아이피와 함께 Proxy 상태로 연결해주면 마무리가 된다.

## Outro

![complete-picture](https://til.duduling.dev/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F979fa16f-e2cb-476a-a5cf-ccbdcecf5cae%2FUntitled.png?table=block&id=c17d93c5-b874-42c8-a389-ed9f9876ccc0&spaceId=8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce&width=2000&userId=&cache=v2)

짜잔! 완성!!! 👍👍👍👍

중간 중간 자료가 없어서 헤매기도 했지만 찾다보니 뭐 어찌어찌 했다. 🥲

# Reference

[https://fruitionsite.com](https://fruitionsite.com/)

[https://vercel.com/support/articles/using-cloudflare-with-vercel](https://vercel.com/support/articles/using-cloudflare-with-vercel)
