const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const DOCS_OPTIONS = [
  {
    label: 'Algorithms',
    to: 'docs/algorithms/intro',
  },
  {
    label: 'CS',
    to: 'docs/cs/intro',
  },
  { to: 'docs/frontend/intro', label: 'Front-End' },
  {
    label: 'DevOps',
    to: 'docs/devOps/intro',
  },
  {
    label: 'ETC',
    to: 'docs/etc/intro',
  },
]

const TIL_OPTIONS = [
  {
    label: 'TIL in 2021',
    to: 'til/2021',
  },
]

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Let's Duduling",
  tagline: "Between Googling And Doodle",
  url: 'https://blog-duduling.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Duduling', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Let's Duduling",
      logo: {
        alt: 'Duduling Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'Docs',
          position: 'left',
          items: DOCS_OPTIONS,
        },
        {
          label: 'Logs',
          position: 'left',
          items: TIL_OPTIONS,
        },
        {
          label: 'Resume',
          href: 'https://duduling.notion.site/Derek-ff75b4ba66ee437bbd576d2d3098f4f4',
          position: 'left',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/duduling',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: DOCS_OPTIONS,
        },
        {
          title: 'Blog',
          items: TIL_OPTIONS,
        },
        {
          title: 'Personal Links',
          items: [
            {
              label: 'Resume',
              href: 'https://duduling.notion.site/Derek-ff75b4ba66ee437bbd576d2d3098f4f4',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/duduling',
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
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/duduling/blog/tree/main/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'tilTwoZeroTwoOne',
        path: './til/2021',
        routeBasePath: 'til/2021',
        editUrl: 'https://github.com/duduling/blog/tree/main/til',
      },
    ],
  ],
};
