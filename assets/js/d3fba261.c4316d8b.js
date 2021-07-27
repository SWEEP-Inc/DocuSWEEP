(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[146],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=s(n),m=o,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1083:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return f}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],p={},l="Example 2: A workflow with a scattered task",s={unversionedId:"Example Workflows/example-2",id:"Example Workflows/example-2",isDocsHomePage:!1,title:"Example 2: A workflow with a scattered task",description:"Workflow definition",source:"@site/docs/Example Workflows/example-2.md",sourceDirName:"Example Workflows",slug:"/Example Workflows/example-2",permalink:"/DocuSWEEP/Example Workflows/example-2",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Example 1: A simple workflow",permalink:"/DocuSWEEP/Example Workflows/example-1"},next:{title:"Example 3: A workflow with scatter and follow",permalink:"/DocuSWEEP/Example Workflows/example-3"}},c=[{value:"Workflow definition",id:"workflow-definition",children:[]},{value:"DAG representation",id:"dag-representation",children:[]}],u={toc:c};function f(e){var t=e.components,p=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"example-2-a-workflow-with-a-scattered-task"},"Example 2: A workflow with a scattered task"),(0,a.kt)("h3",{id:"workflow-definition"},"Workflow definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\n{\n  "workflow_id": "example2",\n  "config": {},\n  "tasks": [\n    {\n      "id": "1",\n      "execution_configurations" : [\n        {\n          "function_def_id" : "firstFunc",\n          "priority" : 1\n        }\n      ],\n      "successors": [\n        "2"\n      ],\n      "properties": {\n        "position": "start"\n      }\n    },\n    {\n      "id": "2",\n      "execution_configurations" : [\n        {\n          "function_def_id" : "mutFunc",\n          "priority" : 1\n        }\n      ],\n      "successors": [\n        "3"\n      ],\n      "properties": {\n        "scatter": "predecessor_outputs[\'1\'][\'tile\']"\n      }\n    },\n    {\n      "id": "3",\n      "execution_configurations" : [\n        {\n          "function_def_id" : "otherFunc",\n          "priority" : 1\n        }\n      ],\n      "successors": []\n    }\n  ]\n}\n\n')),(0,a.kt)("p",null,"If the function ",(0,a.kt)("strong",{parentName:"p"},"firstFunc")," generates the following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'{ "buckets": [{"count": 3}],\n  "tile" : [{"tile_id" : 1}, {"tile_id" : 2},{"tile_id" : 3}]}\n')),(0,a.kt)("p",null,"Then task ",(0,a.kt)("strong",{parentName:"p"},"2")," will be expanded to tasks ",(0,a.kt)("strong",{parentName:"p"},"2_A"),", ",(0,a.kt)("strong",{parentName:"p"},"2_B"),", ",(0,a.kt)("strong",{parentName:"p"},"2_C"),", each receiving the following input (where X = 0,1,2):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'{ "buckets": [{"count": 3}],\n  "tile" : {"tile_id" : X}}\n')),(0,a.kt)("h3",{id:"dag-representation"},"DAG representation"),(0,a.kt)("p",null,"Task ",(0,a.kt)("strong",{parentName:"p"},"2")," is a scatter task:\n",(0,a.kt)("img",{alt:"Example 2A",src:n(908).Z})),(0,a.kt)("p",null,"Upon completion of task ",(0,a.kt)("strong",{parentName:"p"},"1"),", task ",(0,a.kt)("strong",{parentName:"p"},"2")," is expanded into 3 tasks: ",(0,a.kt)("strong",{parentName:"p"},"2_A"),", ",(0,a.kt)("strong",{parentName:"p"},"2_B")," and ",(0,a.kt)("strong",{parentName:"p"},"2_C"),"\n",(0,a.kt)("img",{alt:"Example 2B",src:n(9792).Z})))}f.isMDXComponent=!0},908:function(e,t,n){"use strict";t.Z=n.p+"assets/images/example_wd_DAG_dyn_A-86c5cc2b1f1f05249b2fe2c0d767de86.png"},9792:function(e,t,n){"use strict";t.Z=n.p+"assets/images/example_wd_DAG_dyn_B-3fad1a204a08b479eb9706669dbae0fe.png"}}]);