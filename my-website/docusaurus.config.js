const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'SWEEP Documentation',
  tagline: 'Documentation for the SWEEP website',
  url: 'https://SWEEP-Inc.github.io',
  baseUrl: '/DocuSWEEP/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/sweep/logo.png',
  organizationName: 'SWEEP-Inc', // Usually your GitHub org/user name.
  projectName: 'DocuSWEEP', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'SWEEP Documentation',
      logo: {
        alt: 'My Site Logo',
        src: 'img/sweep/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'SWEEP',
          items: [
            {
              label: 'SWEEP Website',
              to: 'https://sweep.run/',
            },
            {
              label: 'Docs',
              to: '/'
            },
            {
              label: 'Blog',
              to: '/blog'
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/dotmotelabs',
            },
            {
              label: 'Dotmote Labs',
              href: 'https://dotmotelabs.com/'
            }
          ],
        },
      ],
      copyright: `Copyright © Dotmote Labs ${new Date().getFullYear()}`,
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
          routeBasePath: '/',
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
