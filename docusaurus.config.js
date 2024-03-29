const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const DOCS_OPTIONS = [
  {
    label: "Coding Test",
    to: "docs/coding-test/intro",
  },
  // {
  //   label: "Online Lecture",
  //   to: "docs/online-lecture/intro",
  // },
];

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Let's Duduling",
  tagline: "Between Googling And Doodle",
  url: "https://duduling.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Duduling", // Usually your GitHub org/user name.
  projectName: "blog", // Usually your repo name.
  scripts: [
    {
      src: "https://www.googletagmanager.com/gtag/js?id=G-DZG5X3LG5P",
      async: true,
    },
    {
      src: "/js/googleAnalytics.js",
      async: true,
    },
  ],
  themeConfig: {
    metadata: [
      {
        name: "title",
        content: "Let's Duduling",
      },
      {
        name: "description",
        content:
          "프론트엔드 개발자 Duduling 입니다. 크고 작은 문제들의 대한 포스팅과 코딩 테스트를 기록하기 위해 틈틈히 작성하는 공간입니다.",
      },
      {
        name: "keywords",
        content:
          "Duduling, duduling, duduling blog, dudu, derek, docusaurus, front-dev, front, blog, dev, 프론트, 개발자",
      },
      // Meta Tag for Web
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://duduling.dev",
      },
      {
        property: "og:title",
        content: "Let's Duduling",
      },
      {
        property: "og:description",
        content:
          "프론트엔드 개발자 Duduling 입니다. 크고 작은 문제들의 대한 포스팅과 코딩 테스트를 기록하기 위해 틈틈히 작성하는 공간입니다.",
      },
      {
        property: "og:image",
        content: "img/open_graph_image.png",
      },
      // Meta Tag for Twitter
      {
        property: "twitter:card",
        content: "summary_large_image",
      },
      {
        property: "twitter:url",
        content: "https://duduling.dev",
      },
      {
        property: "twitter:title",
        content: "Let's Duduling",
      },
      {
        property: "twitter:description",
        content:
          "프론트엔드 개발자 Duduling 입니다. 크고 작은 문제들의 대한 포스팅과 코딩 테스트를 기록하기 위해 틈틈히 작성하는 공간입니다.",
      },
      {
        property: "twitter:image",
        content: "img/open_graph_image.png",
      },
    ],
    navbar: {
      title: "Let's Duduling",
      logo: {
        alt: "Duduling Logo",
        src: "img/favicon.ico",
      },
      items: [
        {
          label: "Docs",
          position: "left",
          items: DOCS_OPTIONS,
        },
        {
          to: "/post",
          label: "Post",
          position: "left",
        },
        { to: "/post/archive", label: "Archive", position: "left" },
        { to: "/post/tags", label: "Tags", position: "left" },
        {
          label: "TIL in Notion",
          href: "https://til.duduling.dev",
          position: "right",
        },
        {
          label: "GitHub",
          href: "https://github.com/duduling",
          position: "right",
        },
        {
          label: "Email",
          href: "mailto:duduling20@gmail.com",
          position: "right",
        },
      ],
    },
    colorMode: {
      defaultMode: "dark",
    },
    algolia: {
      indexName: "blog",
      appId: "Q1DJWSUVZO",
      apiKey: "bd6ce8dfaf1ccc04e945639abb88abf5",
      contextualSearch: true,
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: DOCS_OPTIONS,
        },
        {
          title: "Logs",
          items: [
            { label: "Post", to: "/post" },
            { label: "Archive", to: "/post/archive" },
            { label: "Tags", to: "/post/tags" },
          ],
        },
        {
          title: "Personal Links",
          items: [
            {
              label: "TIL in Notion",
              href: "https://til.duduling.dev",
            },
            {
              label: "GitHub",
              href: "https://github.com/duduling",
            },
            {
              label: "Email",
              href: "mailto:duduling20@gmail.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Duduling, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/duduling/blog/tree/main/docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        // googleAnalytics: {
        //   trackingID: "G-DZG5X3LG5P",
        //   anonymizeIP: true,
        // },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "postTwoZeroTwoTwo",
        path: "./post",
        routeBasePath: "post",
        editUrl: "https://github.com/duduling/blog/tree/main/post",
      },
    ],
  ],
};
