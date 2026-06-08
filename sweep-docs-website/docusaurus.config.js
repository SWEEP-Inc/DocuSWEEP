const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'SWEEP Documentation',
  tagline: 'Automate your development workflows with AI-powered pull requests',
  url: 'https://docs.sweep.run/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/sweep/logo.png',
  organizationName: 'SWEEP-Inc',
  projectName: 'DocuSWEEP',
  themeConfig: {
    navbar: {
      title: 'SWEEP Documentation',
      logo: {
        alt: 'SWEEP Logo',
        src: 'img/sweep/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://github.com/SWEEP-Inc/sweep',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Product',
          items: [
            {
              label: 'SWEEP Website',
              href: 'https://sweep.run/',
            },
            {
              label: 'Documentation',
              to: '/',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/SWEEP-Inc/DocuSWEEP',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/dotmotelabs',
            },
            {
              label: 'Email',
              href: 'mailto:hello@sweep.run',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Changelog',
              href: 'https://github.com/SWEEP-Inc/sweep/releases',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              href: 'https://sweep.run/privacy',
            },
            {
              label: 'Terms of Service',
              href: 'https://sweep.run/terms',
            },
            {
              label: 'Contact',
              href: 'mailto:contact@sweep.run',
            },
          ],
        },
      ],
      copyright: `© 2026 Dotmote Labs. All rights reserved.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/SWEEP-Inc/DocuSWEEP/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/SWEEP-Inc/DocuSWEEP/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
