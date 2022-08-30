---
slug: docusaurus-algolia
title: "[Window] Docusaurus에 Algolia 끼얹기 with Window"
author: Duduling
author_title: Front-end Web Developer
author_url: https://github.com/duduling
author_image_url: https://avatars.githubusercontent.com/u/60775011?v=4
tags: [Window, Blog, Setting, ETC]
---

# [Window] Docusaurus에 Algolia 끼얹기 with Window

![Cover](https://til.duduling.dev/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8888736b-4a5e-4a79-a067-faae34688a6a%2FUntitled.png?table=block&id=5332ca67-642c-4424-a863-2878dff2ecb6&spaceId=8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce&width=1920&userId=&cache=v2)

## Intro

항상 개발은 맥북이라고 이야기하는 이야기 들을 때마다 '뭐 그렇긴하지..' 했는데 이번 기회에 제대로 윈도우한테 뒤통수 맞았다..

자 일단 Docusaurus에 검색 기능인 Algolia를 추가 해보도록 하자!! (인터넷에 Mac 기준은 너무 많아서 Window 기준으로 포스팅 해봤다.)

## Contents

### Algolia란?

Docusaurus는 Algolia DocSearch와 연결하여 검색 기능을 추가할 수 있다.

Algolia DocSearch는 일정 시간(24시간) 마다 크롤링하여 Algoria에 인덱스에 저장하고 그를 이용해 해당 웹사이트에서 검색 기능을 사용할 수 있게 도와주는 서비스이다.

하지만 DocSearch의 지원을 받기 위해서는 승인을 받은 기술 문서여야 하고 오픈소스여야 하는 기준이 있다. 승인을 받는다면 손쉽게 이용이 가능할 테지만 그게 아니라면 직접 크롤링을 해서 데이터를 업데이트시켜야 한다.

[Run your own | DocSearch by Algolia](https://docsearch.algolia.com/docs/legacy/run-your-own/)

Algolia Docsearch 수동 크롤링 공식 문서

### Algolia Setting & Data Crawling

1. [Algolia](https://www.algolia.com/)에 가입을 한다.

   ![Algolia - Sign Up](https://til.duduling.dev/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9364e7a6-ee05-478d-b0e8-3e8a2c56c788%2FUntitled.png?table=block&id=fc7f5fa1-e3d5-4b4e-a136-e668c083c92b&spaceId=8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce&width=1920&userId=&cache=v2)

   > 왼쪽 위에 Create Application을 해준다.

2. `NAME YOUR APPLICATION` 을 입력하고 `FREE` 를 선택해 생성한다.

   ![Creat Apllication](https://til.duduling.dev/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd65a8e76-6faf-4091-aa54-6d24fdbbd5f2%2FUntitled.png?table=block&id=3765b6ad-61fb-41e9-a98f-93711ea2062d&spaceId=8259e9c1-b7e6-4ae4-9d6b-d6e45ea177ce&width=1920&userId=&cache=v2)

   > Region을 선택 후 다시 Overview 화면으로 가자 데이터는 따로 넣지 않아도 된다.

3. Overview 화면으로 와서 API Keys를 클릭 해 `Application ID`와 `Admin API Key` 를 복사해서 루트 디렉토리에 `.env` 파일로 만들어주자

   ```
   APPLICATION_ID={APPLICATION_ID}
   API_KEY={API_KEY}
   ```

4. 루트 디렉토리에 `config.json` 을 만들어주자.

   ```json
   {
     "index_name": "{알고리아에서 만든 INDEX NAME}",
     "start_urls": ["{자신의 사이트 주소}"],
     "sitemap_urls": ["{자신의 사이트 사이트맵 주소}"],
     "sitemap_alternate_links": true,
     "stop_urls": ["/tests"],
     "selectors": {
       "lvl0": {
         "selector": "(//ul[contains(@class,'menu__list')]//a[contains(@class, 'menu__link menu__link--sublist menu__link--active')]/text() | //nav[contains(@class, 'navbar')]//a[contains(@class, 'navbar__link--active')]/text())[last()]",
         "type": "xpath",
         "global": true,
         "default_value": "Documentation"
       },
       "lvl1": "header h1",
       "lvl2": "article h2",
       "lvl3": "article h3",
       "lvl4": "article h4",
       "lvl5": "article h5, article td:first-child",
       "lvl6": "article h6",
       "text": "article p, article li, article td:last-child"
     },
     "strip_chars": " .,;:#",
     "custom_settings": {
       "separatorsToIndex": "_",
       "attributesForFaceting": [
         "language",
         "version",
         "type",
         "docusaurus_tag"
       ],
       "attributesToRetrieve": [
         "hierarchy",
         "content",
         "anchor",
         "url",
         "url_without_anchor",
         "type"
       ]
     },
     "conversation_id": ["833762294"],
     "nb_hits": 46250
   }
   ```

5. 그 후에 Docker와 jq를 설치해주자! (필자는 `choco` 를 이용해서 설치했다.)

   → [Chocolatey 공식 문서](https://www.notion.so/Docusaurus-Algolia-with-Window-29c7329978dc4f3d99830a8ffdfe04c4)

   ```powershell
   choco install docker-desktop
   choco install jq
   ```

6. 자 이제 기대를 갖고 Shell에 입력 해주면 된다!

```bash
docker run -it --env-file=.env -e "CONFIG=$(cat ./config.json | jq -r tostring)" algolia/docsearch-scraper
```

:::warningError

- `cat: The term 'cat' is not recognized as a name of a cmdlet, function, script file, or executable program`
- `ValueError: CONFIG is not a valid JSON`

:::

> 갑자기 이런 오류가 막 뜰 것이다… 😂

7. 자 보통은 Mac은 여기서 끝난다. 하지만 우리는 윈도우 이기에 불 필요한 작업들을 더 해줘야 한다..! 일단 오류에 대해서 일단 윈도우 터미널에는 cat이 없다. 그러므로 git bash를 열어서 해줘야 한다.

8. 자 Git bash를 켜서 실행하니 오류가 또 발생했다…. 😒 `the input device is not a TTY. If you are using mintty, try prefixing the command with 'winpty'` 이런 오류가 발생할수도있다. 당황하지 않고 맨 앞에 `winpty` 를 붙여주고 다시 실행하면 잘 될 것이다!

9. 크롤링 완료 후에 검색 기능을 사용하면 잘 작동할 것이다. 👍

## Outro

생각보다 요즘 윈도우로 개발하면서 생각보다 예전보다 많이 좋아진 것을 느낀다. (이쁜 것도 많이 나오고? 😊) 하지만 그럼에도 아직도 WSL가 너무 느리다던지 이런 리눅스 기반의 커맨드나 문서 위주의 문서 때문에 생각보다 이상 한 곳에서 당활 할 떄가 많다. 🥲

## Reference

[Docusaurus로 문서 관리하기 - 2](https://younho9.dev/docusaurus-manage-docs-2)
