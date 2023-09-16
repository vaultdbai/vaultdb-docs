// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// produced by redirect-config.py based on redirect-urls.csv
const REDIRECTS = []

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "VaultDB",
  url: "https://docs.vaultdb.ai",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "vaultdb.ai", // Usually your GitHub org/username.
  projectName: "vaultdb-docs", // Usually your repo name.
  trailingSlash: false,

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: REDIRECTS
      }
    ]
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // remarkPlugins: [[remarkCodeHike, { theme }]],
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.dev/vaultdbai/vaultdb-docs/blob/master",
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),

        },
        gtag: {
          trackingID: "G-EYFXNGNGB6",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:

    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/og-vaultdb.png",
      metadata: [{name: "og:width", content: "200"}, {name: "og:height", content: "126"}],
      navbar: {
        logo: {
          alt: "vaultdb Logo",
          srcDark: "img/logo.png",
          src: "img/logo.png",
          href: "/",
          height: 30,
        },
        items: [
          {
            type: "doc",
            position: "left",
            docId: "index",
            label: "VaultDB",
          }
        ],
        hideOnScroll: true,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true
        }
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "0P1VWNW4MR",

        // Public API key: it is safe to commit it
        apiKey: "7704f2f0fbe2321deda36ae78b0236dc",

        indexName: "vaultdb-docs",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: false,

        //... other Algolia params
      },
    }),
};

module.exports = config;
