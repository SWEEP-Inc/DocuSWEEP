# DocuSWEEP

Official documentation for [SWEEP](https://sweep.run) - Automate your development workflows with AI-powered pull requests.

Built with [Docusaurus 2](https://docusaurus.io/) for fast, responsive documentation.

## 🔗 Links

- **Live Site**: [https://docs.sweep.run](https://docs.sweep.run)
- **GitHub Pages**: [https://sweep-inc.github.io/DocuSWEEP/](https://sweep-inc.github.io/DocuSWEEP/)
- **SWEEP Website**: [https://sweep.run](https://sweep.run)

## 🚀 Quick Start

### Prerequisites
- Node.js 14.0 or higher
- Yarn or npm

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/SWEEP-Inc/DocuSWEEP.git
cd DocuSWEEP
```

2. Navigate to the website directory:
```bash
cd sweep-docs-website
```

3. Install dependencies:
```bash
yarn install
```

4. Start the development server:
```bash
yarn start
```

The site will open at [http://localhost:3000](http://localhost:3000) with hot reload enabled.

## 🏗️ Build and Deploy

### Build for Production
```bash
cd sweep-docs-website
yarn build
```

This generates a static build in the `build/` directory.

### Test Production Build Locally
```bash
yarn serve
```

Access the production build at [http://localhost:3000](http://localhost:3000)

### Deploy to GitHub Pages

**For Windows:**
```bash
cmd /C "set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy"
```

**For Linux/macOS:**
```bash
GIT_USER=<GITHUB_USERNAME> yarn deploy
```

The site will be deployed to the `gh-pages` branch.

## 📝 Creating Documentation Pages

### 1. Create a New Section
To create a new documentation section, create a folder under `docs/` and add a `_category_.json` file:

```json
{
  "label": "Getting Started",
  "position": 1
}
```

### 2. Create a Documentation Page
Create a Markdown file (e.g., `installation.md`) with optional frontmatter:

```markdown
---
id: installation
title: Installation Guide
sidebar_position: 1
---

# Installation Guide

Your content here...
```

### 3. Frontmatter Options
Common frontmatter properties:
- `id` - Unique document identifier
- `title` - Document title
- `sidebar_label` - Custom sidebar label
- `sidebar_position` - Position in sidebar
- `description` - SEO meta description
- `keywords` - SEO keywords
- `hide_title` - Hide the title header
- `hide_table_of_contents` - Hide the table of contents

See [Docusaurus Documentation](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-frontmatter) for complete options.

## 🎨 Customization

### Styling
Global styles are located in `src/css/custom.css`. Modify CSS variables to change the site appearance:

```css
:root {
  --ifm-color-primary: #1ca4e8;
  /* ... other variables ... */
}
```

### Navigation Bar
Edit the navbar configuration in `docusaurus.config.js` under `themeConfig.navbar`.

### Footer
Customize the footer in `docusaurus.config.js` under `themeConfig.footer`.

## 📁 Project Structure

```
sweep-docs-website/
├── docs/                  # Documentation files
├── blog/                  # Blog posts
├── src/
│   ├── components/       # React components
│   ├── css/             # Stylesheets
│   └── pages/           # Custom pages
├── static/              # Static assets
├── docusaurus.config.js # Configuration
├── sidebars.js          # Sidebar configuration
└── package.json
```

## 🔧 Available Scripts

- `yarn start` - Start development server
- `yarn build` - Build for production
- `yarn serve` - Serve production build locally
- `yarn swizzle` - Customize Docusaurus components
- `yarn clear` - Clear cache and build
- `yarn write-translations` - Generate translation files
- `yarn write-heading-ids` - Generate heading IDs

## 📚 Resources

- [Docusaurus Documentation](https://docusaurus.io)
- [Markdown Guide](https://www.markdownguide.org/)
- [SWEEP Documentation](https://docs.sweep.run)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](https://github.com/SWEEP-Inc/sweep/blob/main/CONTRIBUTING.md).

## 📄 License

This documentation is part of SWEEP. See the [LICENSE](LICENSE) file for details.

## 💬 Support

- **GitHub Issues**: [Report issues](https://github.com/SWEEP-Inc/DocuSWEEP/issues)
- **Discord**: [Join our community](https://discord.gg/sweep)
- **Email**: [contact@sweep.run](mailto:contact@sweep.run)

---

Made with ❤️ by [SWEEP, Inc.](https://sweep.run)
