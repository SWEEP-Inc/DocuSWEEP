# DocuSWEEP
SWEEP Documentation powered by Docusaurus  
Link for production site: [https://sweep-inc.github.io/DocuSWEEP/](https://sweep-inc.github.io/DocuSWEEP/)  
Link for Docusaurus documentation: [https://docusaurus.io/docs](https://docusaurus.io/docs)

### Creating a new docs page in Docusaurus
1\. Open up the repository in your local editor and navigate to the **my-website** folder.  

2\. Navigate to the section you want to create your page in. If you want to create a new section, add a new folder under **docs** and add a new file called **_category_.json**. Name the folder the section name. Within this json file, add the label and the position of your new section in the sidebar. For example,
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
