"use strict";(self.webpackChunksweep_docs_website=self.webpackChunksweep_docs_website||[]).push([[4013],{6165:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(9756),a=n(7294),l=n(6010),c=n(6698),i=n(6742),s="sidebar_2ahu",o="sidebarItemTitle_2hhb",u="sidebarItemList_2xAf",m="sidebarItem_2UVv",f="sidebarItemLink_1RT6",d="sidebarItemLinkActive_12pM",v=n(4973);function h(e){var t=e.sidebar;return 0===t.items.length?null:a.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,v.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},t.title),a.createElement("ul",{className:u},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:m},a.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:f,activeClassName:d},e.title))}))))}var g=n(571),E=["sidebar","toc","children"];var b=function(e){var t=e.sidebar,n=e.toc,i=e.children,s=(0,r.Z)(e,E),o=t&&t.items.length>0;return a.createElement(c.Z,s,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},o&&a.createElement("aside",{className:"col col--3"},a.createElement(h,{sidebar:t})),a.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},i),n&&a.createElement("div",{className:"col col--2"},a.createElement(g.Z,{toc:n})))))}},94:function(e,t,n){n.r(t);var r=n(7294),a=n(6165),l=n(6584),c=n(941);t.default=function(e){var t=e.tags,n=e.sidebar,i=(0,c.MA)();return r.createElement(a.Z,{title:i,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:n},r.createElement("h1",null,i),r.createElement(l.Z,{tags:Object.values(t)}))}},571:function(e,t,n){n.d(t,{r:function(){return d},Z:function(){return v}});var r=n(7294),a=n(6010),l=n(941);function c(e){var t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function i(e){var t,n=e.anchorTopOffset,r=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),a=r.find((function(e){return c(e).top>=n}));return a?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:null!=(t=r[r.indexOf(a)-1])?t:null:r[r.length-1]}function s(){var e=(0,r.useRef)(0),t=(0,l.LU)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var o=function(e){var t=(0,r.useRef)(void 0),n=s();(0,r.useEffect)((function(){var r=e.linkClassName,a=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=i({anchorTopOffset:n.current}),c=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){if(n){var r;t.current&&t.current!==e&&(null==(r=t.current)||r.classList.remove(a)),e.classList.add(a),t.current=e}else e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])},u="tableOfContents_35-E",m="table-of-contents__link",f={linkClassName:m,linkActiveClassName:"table-of-contents__link--active"};function d(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:m,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(d,{isChild:!0,toc:e.children}))}))):null}var v=function(e){var t=e.toc;return o(f),r.createElement("div",{className:(0,a.Z)(u,"thin-scrollbar")},r.createElement(d,{toc:t}))}},7211:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(6010),l=n(6742),c="tag_1Okp",i="tagRegular_3MiF",s="tagWithCount_1HU1";var o=function(e){var t,n=e.permalink,o=e.name,u=e.count;return r.createElement(l.Z,{href:n,className:(0,a.Z)(c,(t={},t[i]=!u,t[s]=u,t))},o,u&&r.createElement("span",null,u))}},6584:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a=n(7211),l=n(941),c="tag_21yA";function i(e){var t=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,t.letter),r.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:c},r.createElement(a.Z,e))}))),r.createElement("hr",null))}var s=function(e){var t=e.tags,n=(0,l.PZ)(t);return r.createElement("section",{className:"margin-vert--lg"},n.map((function(e){return r.createElement(i,{key:e.letter,letterEntry:e})})))}}}]);