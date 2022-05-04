const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const DOCS_OPTIONS = [
  {
    label: "Coding Test",
    to: "docs/coding-test/intro",
  },
  // {
  //   label: "Computer Science",
  //   to: "docs/cs/data-structure-algorithm/big-o",
  // },
  // {
  //   label: "Online Lecture",
  //   to: "docs/online-lecture/intro",
  // },
];

const POST_OPTIONS = [
  {
    label: "POST in 2022",
    to: "post/2022",
  },
];

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Let's Duduling",
  tagline: "Between Googling And Doodle",
  url: "https://blog-duduling.vercel.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Duduling", // Usually your GitHub org/user name.
  projectName: "blog", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Let's Duduling",
      logo: {
        alt: "Duduling Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          label: "Docs",
          position: "left",
          items: DOCS_OPTIONS,
        },
        {
          label: "Logs",
          position: "left",
          items: POST_OPTIONS,
        },
        {
          label: "TIL in Notion",
          href: "https://duduling.notion.site/f4817fcbd97b4c41961127588c0b17d8?v=48ec8beb2d054f1aaf4ec24825bb0286",
          position: "left",
        },
        {
          label: "GitHub",
          href: "https://github.com/duduling",
          position: "left",
        },
        {
          label: "Email",
          href: "mailto:duduling20@gmail.com",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: DOCS_OPTIONS,
        },
        {
          title: "POST",
          items: POST_OPTIONS,
        },
        {
          title: "Personal Links",
          items: [
            {
              label: "TIL in Notion",
              href: "https://duduling.notion.site/f4817fcbd97b4c41961127588c0b17d8?v=31f8ddbbbd0c48d79acb32018d4a86db",
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
        googleAnalytics: {
          trackingID: "UA-159221164-1",
          anonymizeIP: true,
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "postTwoZeroTwoTwo",
        path: "./post/2022",
        routeBasePath: "post/2022",
        editUrl: "https://github.com/duduling/blog/tree/main/post",
      },
    ],
  ],
};
