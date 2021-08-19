"use strict";(self.webpackChunksweep_docs_website=self.webpackChunksweep_docs_website||[]).push([[103],{6165:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(9756),r=a(7294),l=a(6010),i=a(261),s=a(6742),o="sidebar_2ahu",c="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",d="sidebarItem_2UVv",u="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",v=a(4973);function p(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,v.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(c,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:d},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:g},e.title))}))))}var h=a(571),E=["sidebar","toc","children"];var b=function(e){var t=e.sidebar,a=e.toc,s=e.children,o=(0,n.Z)(e,E),c=t&&t.items.length>0;return r.createElement(i.Z,o,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},c&&r.createElement("aside",{className:"col col--3"},r.createElement(p,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c})},s),a&&r.createElement("div",{className:"col col--2"},r.createElement(h.Z,{toc:a})))))}},3146:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7294),r=a(6010),l=a(3905),i=a(4973),s=a(6742),o=a(3018),c=a(4038),m=a(1217),d=a(6146),u="blogPostTitle_GeHD",g="blogPostData_291c",v="blogPostDetailsFull_3kfx";var p=function(e){var t,a,p,h,E=(p=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return p(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),b=e.children,f=e.frontMatter,_=e.frontMatterAssets,N=e.metadata,Z=e.truncated,k=e.isBlogPostPage,w=void 0!==k&&k,I=N.date,T=N.formattedDate,L=N.permalink,P=N.tags,M=N.readingTime,x=N.title,y=N.editUrl,C=f.author,A=f.keywords,R=null!=(t=_.image)?t:f.image,B=f.author_url||f.authorURL,U=f.author_title||f.authorTitle,O=_.author_image_url||_.authorImageURL||f.author_image_url||f.authorImageURL;return n.createElement(n.Fragment,null,n.createElement(m.Z,{keywords:A,image:R}),n.createElement("article",{className:w?void 0:"margin-bottom--xl"},(h=w?"h1":"h2",n.createElement("header",null,n.createElement(h,{className:u},w?x:n.createElement(s.Z,{to:L},x)),n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:I},T),M&&n.createElement(n.Fragment,null," \xb7 ",E(M))),n.createElement("div",{className:"avatar margin-vert--md"},O&&n.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:B},n.createElement("img",{src:O,alt:C})),n.createElement("div",{className:"avatar__intro"},C&&n.createElement(n.Fragment,null,n.createElement("div",{className:"avatar__name"},n.createElement(s.Z,{href:B},C)),n.createElement("small",{className:"avatar__subtitle"},U)))))),n.createElement("div",{className:"markdown"},n.createElement(l.Zo,{components:c.Z},b)),(P.length>0||Z)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(a={},a[v]=w,a))},P.length>0&&n.createElement("div",{className:"col"},n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),P.map((function(e){var t=e.label,a=e.permalink;return n.createElement(s.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),w&&y&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:y})),!w&&Z&&n.createElement("div",{className:"col text--right"},n.createElement(s.Z,{to:N.permalink,"aria-label":"Read more about "+x},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},1549:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(7294),r=a(6165),l=a(3146),i=a(9105),s=a(4996);var o=function(e){var t,a=(0,s.C)().withBaseUrl,r=e.frontMatter,l=e.frontMatterAssets,o=e.metadata,c=o.date,m=o.title,d=o.description,u=null!=(t=l.image)?t:r.image,g=r.author,v=r.author_url||r.authorURL,p=Object.assign({"@context":"https://schema.org","@type":"BlogPosting",headline:m,description:d},u?{image:[a(u,{absolute:!0})]}:{},{datePublished:c,author:Object.assign({"@type":"Person"},g?{name:g}:{},{url:v})});return n.createElement(i.Z,null,n.createElement("script",{type:"application/ld+json"},JSON.stringify(p)))},c=a(4973),m=a(6742);var d=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(m.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(m.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},u=a(3018);var g=function(e){var t=e.content,a=e.sidebar,i=t.frontMatter,s=t.frontMatterAssets,c=t.metadata,m=c.title,g=c.description,v=c.nextItem,p=c.prevItem,h=i.hide_table_of_contents;return n.createElement(r.Z,{title:m,description:g,wrapperClassName:u.kM.wrapper.blogPages,pageClassName:u.kM.page.blogPostPage,sidebar:a,toc:!h&&t.toc?t.toc:void 0},n.createElement(o,{frontMatter:i,frontMatterAssets:s,metadata:c}),n.createElement(l.Z,{frontMatter:i,frontMatterAssets:s,metadata:c,isBlogPostPage:!0},n.createElement(t,null)),(v||p)&&n.createElement(d,{nextItem:v,prevItem:p}))}},6146:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7294),r=a(4973),l=a(2122),i=a(9756),s=a(6010),o="iconEdit_2_ui",c=["className"],m=function(e){var t=e.className,a=(0,i.Z)(e,c);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:function(e,t,a){a.d(t,{r:function(){return o},Z:function(){return c}});var n=a(7294),r=a(6010);var l=function(e,t,a){var r=(0,n.useState)(void 0),l=r[0],i=r[1];(0,n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,s=!1,o=document.getElementsByClassName(e);r<o.length&&!s;){var c=o[r],m=c.href,d=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===d&&(l&&l.classList.remove(t),c.classList.add(t),i(c),s=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i="tableOfContents_35-E",s="table-of-contents__link";function o(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(o,{isChild:!0,toc:e.children}))}))):null}var c=function(e){var t=e.toc;return l(s,"table-of-contents__link--active",100),n.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar")},n.createElement(o,{toc:t}))}}}]);