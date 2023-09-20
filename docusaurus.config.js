// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Sebastian Scherer",
  tagline: "Welcome to my home on the internet!",
  url: "https://scherersebastian.github.io/",
  baseUrl: "/home/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "scherersebastian", // Usually your GitHub org/user name.
  projectName: "home", // Usually your repo name.
  deploymentBranch: "gh-pages",

  presets: [
    [
      "classic",
      {
        docs: {
          remarkPlugins: [
            [require("mdx-mermaid"), { mermaid: { theme: "neutral" } }],
          ],
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/scherersebastian/home/blob/main/",
        },
        blog: {
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/scherersebastian/home/blob/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Sebastian Scherer",
        logo: {
          alt: "Sebastian Scherer Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "/docs/lets-hack",
            position: "left",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/scherersebastian",
            label: "GitHub",
            position: "right",
          },
          {
            type: "dropdown",
            label: "Apps",
            position: "left",
            items: [
              {
                to: "/YourCustomPage1",
                label: "Custom Page 1",
              },
              /*
              {
                to: "/YourCustomPage2",
                label: "Custom Page 2",
              },
              */
            ],
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            label: "Docs",
            to: "/docs/lets-hack",
          },
          {
            label: "Blog",
            to: "/blog",
          },
          {
            label: "Github",
            href: "https://github.com/scherersebastian",
          },
          {
            label: "LinkedIn",
            href: "https://de.linkedin.com/in/sebastian-scherer-9039a3201",
          },
        ],
        copyright: `© ${new Date().getFullYear()} Sebastian Scherer`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
