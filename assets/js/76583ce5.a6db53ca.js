"use strict";(self.webpackChunksweep_docs_website=self.webpackChunksweep_docs_website||[]).push([[553],{9824:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return f},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:2},u="Creating workflow configurations",l={unversionedId:"The Workflow Concept/creating-workflow-configurations",id:"The Workflow Concept/creating-workflow-configurations",isDocsHomePage:!1,title:"Creating workflow configurations",description:"* max_task_concurrency: max number of tasks to run concurrently",source:"@site/docs/The Workflow Concept/creating-workflow-configurations.md",sourceDirName:"The Workflow Concept",slug:"/The Workflow Concept/creating-workflow-configurations",permalink:"/The Workflow Concept/creating-workflow-configurations",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Creating workflows",permalink:"/The Workflow Concept/creating-workflows"},next:{title:"Definitions of tasks",permalink:"/The Workflow Concept/definitions-of-tasks"}},f=[],s={toc:f};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-workflow-configurations"},"Creating workflow configurations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"max_task_concurrency"),": max number of tasks to run concurrently")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"max_task_runtime"),": task timeout in seconds"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Workflow Configuration"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},"{\n    'max_task_concurrency' : int,\n    'max_task_runtime' : int\n}\n"))))}p.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,k=p["".concat(u,".").concat(m)]||p[m]||s[m]||a;return n?r.createElement(k,i(i({ref:t},f),{},{components:n})):r.createElement(k,i({ref:t},f))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);