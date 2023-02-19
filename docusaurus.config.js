const repoUrl = "https://github.com/lamaau";

module.exports = {
  title: "docs",
  tagline: "SiSekolah Docs",
  url: "https://sisekolah.lamaau.space/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "sisekolah",
  projectName: "docs",
  themeConfig: {
    navbar: {
      title: "Doc",
      logo: {
        alt: "Sisekolah Logo",
        src: "img/sisekolah.svg",
      },
      items: [
        {
          href: "https://sisekolah.lamaau.space",
          label: "Home",
          position: "right",
        },
        {
          href: repoUrl,
          label: "GitHub",
          position: "right",
          className: "github",
        },
      ],
    },
    footer: {
      style: "light",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Sisekolah`,
    },
    colorMode: {
      respectPrefersColorScheme: false,
      defaultMode: "light",
      disableSwitch: true,
    },
    prism: {
      theme: require("./themes/livekit"),
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      },
    ],
  ],
  // plugins: [
  //   [
  //     "@docusaurus/plugin-client-redirects",
  //     {
  //       redirects: [
  //         {
  //           to: "/",
  //           from: ["/guides/deploy/prepare", "/guides/deploy"],
  //         },
  //       ],
  //     },
  //   ],
  // ],
};
