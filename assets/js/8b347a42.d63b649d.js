"use strict";(self.webpackChunksweep_docs_website=self.webpackChunksweep_docs_website||[]).push([[442],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),f=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=f(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=f(t),p=o,w=u["".concat(c,".").concat(p)]||u[p]||s[p]||i;return t?r.createElement(w,a(a({ref:n},d),{},{components:t})):r.createElement(w,a({ref:n},d))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var f=2;f<i;f++)a[f]=t[f];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9424:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},frontMatterAssets:function(){return c},contentTitle:function(){return f},metadata:function(){return d},toc:function(){return s},default:function(){return p}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),a=["components"],l={},c=void 0,f="Add a workflow definition",d={unversionedId:"Code Examples/add-a-workflow-definition",id:"Code Examples/add-a-workflow-definition",isDocsHomePage:!1,title:"Add a workflow definition",description:"`python",source:"@site/docs/Code Examples/add-a-workflow-definition.md",sourceDirName:"Code Examples",slug:"/Code Examples/add-a-workflow-definition",permalink:"/Code Examples/add-a-workflow-definition",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Add a destination definition",permalink:"/Code Examples/add-a-destination-definition"},next:{title:"Creating executables",permalink:"/Code Examples/creating-executables"}},s=[],u={toc:s};function p(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"add-a-workflow-definition"},"Add a workflow definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"    response = sweep_client.register_workflow(\n        wffile='examples/hello_world_workflow/workflow_def_hello_world.json',\n        user = user)\n\n    print(response)\n    > '{'workflow_id': 'wfdef_hello_world', 'status' : 'OK', 'msg' : 'Successfully created workflow wfdef_hello_world for user username.'}'\n")))}p.isMDXComponent=!0}}]);