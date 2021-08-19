"use strict";(self.webpackChunksweep_docs_website=self.webpackChunksweep_docs_website||[]).push([[167],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,d=u["".concat(p,".").concat(m)]||u[m]||f[m]||a;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1536:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},frontMatterAssets:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return f},default:function(){return m}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i=["components"],s={},p=void 0,l="Example 3: A workflow with scatter and follow",c={unversionedId:"Example Workflows/example-3",id:"Example Workflows/example-3",isDocsHomePage:!1,title:"Example 3: A workflow with scatter and follow",description:"Workflow definition",source:"@site/docs/Example Workflows/example-3.md",sourceDirName:"Example Workflows",slug:"/Example Workflows/example-3",permalink:"/Example Workflows/example-3",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Example 2: A workflow with a scattered task",permalink:"/Example Workflows/example-2"},next:{title:"Example 4: A more complicated workflow with follow",permalink:"/Example Workflows/example-4"}},f=[{value:"Workflow definition",id:"workflow-definition",children:[]},{value:"DAG representation",id:"dag-representation",children:[]}],u={toc:f};function m(e){var n=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"example-3-a-workflow-with-scatter-and-follow"},"Example 3: A workflow with scatter and follow"),(0,a.kt)("h3",{id:"workflow-definition"},"Workflow definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\n{\n  "workflow_id": "example3",\n  "config": {},\n  "tasks": [\n    {\n      "id": "1",\n      "execution_configurations" : [\n        {\n          "function_def_id" : "firstFunc",\n          "priority" : 1\n        }\n      ],\n      "successors": [\n        "2"\n      ],\n      "properties": {\n        "position": "start"\n      }\n    },\n    {\n      "id": "2",\n      "execution_configurations" : [\n        {\n          "function_def_id" : "multFunc",\n          "priority" : 1\n        }\n      ],\n      "successors": [\n        "3"\n      ],\n      "properties": {\n        "scatter": "predecessor_outputs[\'1\'][\'tile\']"\n      }\n    },\n    {\n      "id": "3",\n      "execution_configurations" : [\n        {\n          "function_def_id" : "otherFunc",\n          "priority" : 1\n        }\n      ],\n      "successors": [],\n      "properties": {\n        "follow": "2"\n      }\n    }\n  ]\n}\n\n')),(0,a.kt)("p",null,"If the function ",(0,a.kt)("strong",{parentName:"p"},"firstFunc")," generates the same output as the examle above, and task ",(0,a.kt)("strong",{parentName:"p"},"2")," is expanded in the same manner:"),(0,a.kt)("p",null,"Then task ",(0,a.kt)("strong",{parentName:"p"},"3")," will be expanded to tasks ",(0,a.kt)("strong",{parentName:"p"},"3_A"),", ",(0,a.kt)("strong",{parentName:"p"},"3_B"),", ",(0,a.kt)("strong",{parentName:"p"},"3_C"),", each of which becomes a successor of one of the tasks expanded from task ",(0,a.kt)("strong",{parentName:"p"},"2"),":"),(0,a.kt)("h3",{id:"dag-representation"},"DAG representation"),(0,a.kt)("p",null,"Task ",(0,a.kt)("strong",{parentName:"p"},"2")," is a scatter task:\n",(0,a.kt)("img",{alt:"Example 3A",src:t(5790).Z}),"\nUpon expansion of task ",(0,a.kt)("strong",{parentName:"p"},"2"),", task ",(0,a.kt)("strong",{parentName:"p"},"3")," is expanded into 3 tasks: ",(0,a.kt)("strong",{parentName:"p"},"3_A, 3_B")," and ",(0,a.kt)("strong",{parentName:"p"},"3_C"),".\n",(0,a.kt)("img",{alt:"Example 3B",src:t(9126).Z})))}m.isMDXComponent=!0},5790:function(e,n,t){n.Z=t.p+"assets/images/example_wf_DAG_follow_A-d96a407120e399d4e5129929d4485ccd.png"},9126:function(e,n,t){n.Z=t.p+"assets/images/example_wf_DAG_follow_B-cf7da7495826d2a7489cda779c9208e1.png"}}]);