"use strict";(self.webpackChunksweep_docs_website=self.webpackChunksweep_docs_website||[]).push([[594],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||i;return t?r.createElement(d,a(a({ref:n},s),{},{components:t})):r.createElement(d,a({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9624:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],l={},c="Example 6: A workflow with container overrides",p={unversionedId:"Example Workflows/example-6",id:"Example Workflows/example-6",isDocsHomePage:!1,title:"Example 6: A workflow with container overrides",description:"A workflow with a single container-based task with command and environment variables defined in the workflow definition, overriding those in the docker image.",source:"@site/docs/Example Workflows/example-6.md",sourceDirName:"Example Workflows",slug:"/Example Workflows/example-6",permalink:"/Example Workflows/example-6",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Example 5: More ways to use scatter and gather",permalink:"/Example Workflows/example-5"},next:{title:"Example 7: A workflow with dynamic container overrides",permalink:"/Example Workflows/example-7"}},s=[{value:"Workflow definition",id:"workflow-definition",children:[]}],f={toc:s};function u(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"example-6-a-workflow-with-container-overrides"},"Example 6: A workflow with container overrides"),(0,i.kt)("p",null,"A workflow with a single container-based task with command and environment variables defined in the workflow definition, overriding those in the docker image."),(0,i.kt)("h3",{id:"workflow-definition"},"Workflow definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "workflow_id": "wf_overrides",\n  "config": {},\n  "tasks": [\n    {\n      "id": 1,\n      "execution_configurations" : [\n        {\n          "container_def_id" : "cdef_hello_world",\n          "priority" : 1\n        }\n      ],\n      "successors": [],\n      "properties": {\n        "position": "start",\n        "command": [\n          "sh",\n          "-c",\n          "printenv USERNAME"\n        ],\n        "environment": [\n          {\n            "name": "USERNAME",\n            "value": "ka"\n          },\n          {\n            "name": "IND",\n            "value": "1"\n          }\n        ]\n      }\n    }\n  ]\n}\n\n\n')),(0,i.kt)("p",null,"The optional task properties ",(0,i.kt)("strong",{parentName:"p"},"environment")," and ",(0,i.kt)("strong",{parentName:"p"},"command")," are used to specify additional information for the container the task is run in."),(0,i.kt)("p",null,"when this workflow is launched, task 1 will be run in a container and SWEEP will:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"set the two environment variables USERNAME and IND (overwriting any other definition of these)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"override the run command to 'printenv USERNAME'"))))}u.isMDXComponent=!0}}]);