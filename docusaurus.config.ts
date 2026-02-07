import "dotenv/config";

import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const TEXT_CONFIG = {
  title: "Let's Duduling",
  description:
    "프론트엔드 개발자 Duduling 입니다. 크고 작은 문제들에 대한 포스팅과 각종 정보를 기록하기 위해 틈틈이 작성하는 공간입니다.",
} as const;

const DOCS_OPTIONS = [
  {
    label: "Book",
    to: "wiki/book/intro",
  },
  {
    label: "Coding Test",
    to: "wiki/coding-test/intro",
  },
  {
    label: "Online Lecture",
    to: "wiki/online-lecture/intro",
  },
];

const config: Config = {
  title: TEXT_CONFIG.title,
  tagline: TEXT_CONFIG.description,
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://duduling.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  organizationName: "duduling",
  projectName: "blog",

  onBrokenLinks: "throw",

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        gtag: {
          trackingID: "G-NPJGX7492V",
          anonymizeIP: true,
        },
        docs: {
          routeBasePath: "/wiki",
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          routeBasePath: "/",
          showReadingTime: false,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: "title",
        content: TEXT_CONFIG.title,
      },
      {
        name: "description",
        content: TEXT_CONFIG.description,
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
        content: "https://blog.duduling.dev",
      },
      {
        property: "og:title",
        content: TEXT_CONFIG.title,
      },
      {
        property: "og:description",
        content: TEXT_CONFIG.description,
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
        content: "https://blog.duduling.dev",
      },
      {
        property: "twitter:title",
        content: TEXT_CONFIG.title,
      },
      {
        property: "twitter:description",
        content: TEXT_CONFIG.description,
      },
      {
        property: "twitter:image",
        content: "img/open_graph_image.png",
      },
    ],
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Let's Duduling",
      logo: {
        alt: "Duduling Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Wiki",
        },
        { to: "/archive", label: "Archive", position: "left" },
        { to: "/tags", label: "Tags", position: "left" },
        {
          label: "TIL in Notion",
          href: "https://til.duduling.dev",
          position: "right",
        },
        {
          href: "https://github.com/duduling",
          label: "GitHub",
          position: "right",
        },
      ],
      hideOnScroll: false,
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Widi",
          items: DOCS_OPTIONS,
        },
        {
          title: "Logs",
          items: [
            { label: "Post", to: "/" },
            { label: "Archive", to: "/archive" },
            { label: "Tags", to: "/tags" },
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
      copyright: `Copyright © 2022 Duduling, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [],
      magicComments: [],
    },
    algolia: {
      appId: "0LL6ZKO2WI",
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: "blog",
      contextualSearch: true,
      searchPagePath: "search",
      insights: false,
      searchParameters: {},
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
