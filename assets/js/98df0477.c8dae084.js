"use strict";(self.webpackChunksweep_docs_website=self.webpackChunksweep_docs_website||[]).push([[7339],{2476:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),a=["components"],c={},l="Example 1: A simple workflow",p={unversionedId:"Example Workflows/example-1",id:"Example Workflows/example-1",isDocsHomePage:!1,title:"Example 1: A simple workflow",description:"Workflow definition",source:"@site/docs/Example Workflows/example-1.md",sourceDirName:"Example Workflows",slug:"/Example Workflows/example-1",permalink:"/Example Workflows/example-1",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Launch and monitor the workflow",permalink:"/Code Examples/launch-and-monitor-the-workflow"},next:{title:"Example 2: A workflow with a scattered task",permalink:"/Example Workflows/example-2"}},s=[{value:"Workflow definition",id:"workflow-definition",children:[]},{value:"DAG Representation",id:"dag-representation",children:[]}],f={toc:s};function u(e){var n=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,c,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"example-1-a-simple-workflow"},"Example 1: A simple workflow"),(0,i.kt)("h2",{id:"workflow-definition"},"Workflow definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'\n{\n  "workflow_id": "example1",\n  "config": {},\n  "tasks": [\n    {\n      "id": "1",\n      "execution_configurations" : [\n        {\n          "function_def_id" : "my_lambda_function1",\n          "priority" : 1\n        }\n      ],\n      "successors": [\n        "2",\n        "3",\n        "4"\n      ],\n      "properties": {\n        "position": "start"\n      }\n    },\n    {\n      "id": "2",\n      "execution_configurations" : [\n        {\n          "function_def_id" : "my_lambda_function2",\n          "priority" : 1\n        }\n      ],\n      "successors": [],\n      "properties": {\n        "static_input": {\n          "msg": "static input message"\n        }\n      }\n    },\n    {\n      "id": "3",\n      "execution_configurations" : [\n        {\n          "function_def_id" : "my_lambda_function3",\n          "priority" : 1\n        }\n      ],\n      "successors": [\n        "4"\n      ],\n      "properties": {\n        "delay": 10\n      }\n    },\n    {\n      "id": "4",\n      "execution_configurations" : [\n        {\n          "function_def_id" : "my_lambda_function4",\n          "priority" : 1\n        }\n      ],\n\n      "successors": []\n    }\n  ]\n}\n')),(0,i.kt)("h2",{id:"dag-representation"},"DAG Representation"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example 1",src:t(9753).Z})))}u.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||i;return t?r.createElement(d,a(a({ref:n},s),{},{components:t})):r.createElement(d,a({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9753:function(e,n,t){n.Z=t.p+"assets/images/example_wf_DAG-197fcad4f98d92efde1356e18d3a7fc6.png"}}]);