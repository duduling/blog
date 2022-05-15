---
slug: google-analytics-4
title: "[개발 블로그 만들기 2탄] Docusaurus에 Google Analytics 4 연동하기 (너는 누구냐)"
tags: [Blog, Front-end, Google Analytics, ETC]

author: Duduling
author_title: Front-end Web Developer
author_url: https://github.com/duduling
author_image_url: https://avatars.githubusercontent.com/u/60775011?v=4
---

![Thumbnail](https://til.duduling.dev/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F31bcd817-67d2-426a-af94-651650dab4f7%2FUntitled.png?table=block&id=08f347ab-5457-4d74-9796-38e0a063c980&spaceId=8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce&width=2000&userId=&cache=v2)

# Intro

`Universal Analytics`가 아닌 `Analytics 4`가 나온지 꽤 됐지만 적용을 못 했었는데 이번 기회에 적용하게 되었다.근데 막상 붙이고 보니 기능이 많은 것 같은데 아직 디테일 한 컨트롤 보다는 연결에 의의를 두고 진행했다. 크게 다른 점은 세션 방식의 추적에서 이벤트 방식의 추적으로 바꼈다는 것이다. 자세한 내용은 [_Universal Analytics versus Google Analytics 4 data_](https://support.google.com/analytics/answer/9964640?hl=en#zippy=%2Cin-this-article) 에서 확인하면 된다.

# Contents

Google Analytics4로 새롭게 업데이트 되면서 태그 방식도 바꼈다.

```jsx
googleAnalytics: {
	trackingID: `${trackingID}`, // trackingID 입력
	anonymizeIP: true,
},
```

기존의 docusaurus에 있던 Google Analytics 설정

```jsx
// /static/js/googleAnalytics.js
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", `${trackingID}`); // trackingID 삽입
```

위와 같은 파일을 생성해준다.

```jsx
// docusaurus.config.js
{
  ...
  scripts: [
    {
      // trackingID 삽입
      src: `https://www.googletagmanager.com/gtag/js?id=${trackingID}`,
      async: true,
    },
    {
      src: "/js/googleAnalytics.js",
      async: true,
    },
  ],
}
```

이렇게 `docusaurus.config.js`에 적용하면 완료!

# Reference

- [analytics.google.com](http://analytics.google.com/)
