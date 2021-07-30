# DocuSWEEP
SWEEP Documentation powered by Docusaurus  
Link for production site: [https://sweep-inc.github.io/DocuSWEEP/](https://sweep-inc.github.io/DocuSWEEP/)  
Link for Docusaurus documentation: [https://docs.sweep.run](https://docs.sweep.run)

### Running Docusaurus on your local machine
1\. If needed, clone the remote repository to your computer with
```shell
git clone https://github.com/SWEEP-Inc/DocuSWEEP.git
```

2\. Go to the folder **sweep-docs-website**.
```shell
cd sweep-docs-website
```

3\. Use
```shell
yarn start
```
and the website should be up and running at [http://localhost:3000](http://localhost:3000)!

### Deploying to GitHub Pages
1\. Run
```shell
cd sweep-docs-website
yarn build
```
to build your project to the **build** directory.

2\. Run
```shell
yarn serve
```
to run the build directory on your local machine at [http://localhost:3000](http://localhost:3000) at ensure that it works. If there are errors, please fix them before deploying.

3\. If you are are Windows, use
```shell
cmd /C "set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy"
```
to deploy to GitHub pages. If you are using Linux, use
```shell
GIT_USER=<GITHUB_USERNAME> yarn deploy
```
to deploy to GitHub pages and you should be done! The link should either be the default one that starts with http://sweep-inc.github.io/[project_name_here] or the one specified in **static/CNAME**.

### Creating a new docs page in Docusaurus
1\. Open up the repository in your local editor and navigate to the **sweep-docs-website** folder.  

2\. Navigate to the section you want to create your page in. If you want to create a new section, add a new folder under **docs** and add a new file called **\_category\_.json**. Name the folder the section name. Within this json file, add the label and the position of your new section in the sidebar. For example,
```json
{
  "label": "Code Examples",
  "position": 4
}
```
is means that the section is called "Code Examples" and the section will appear as the fourth one down the list.  

3\. Now, within the folder you just created, create a new markdown file (ex. this-is-my-file.md). If needed, create frontmatter at the top of the file to specify sidebar position, the slug (file path), etc. Make sure you include the three dashes (---) to denote frontmatter properties. For example,
```
---
id: doc-markdown
title: Docs Markdown Features
hide_title: false
hide_table_of_contents: false
sidebar_label: Markdown
sidebar_position: 3
pagination_label: Markdown features
custom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md
description: How do I find you when I cannot solve this problem
keywords:
  - docs
  - docusaurus
image: https://i.imgur.com/mErPwqL.png
slug: /myDoc
---
```
specifies a list of properties for the doc. See [https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-frontmatter](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-frontmatter) for more details.

4\. Create your markdown file! All of the normal markdown rules apply.
