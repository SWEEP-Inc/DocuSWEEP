"use strict";(self.webpackChunksweep_docs_website=self.webpackChunksweep_docs_website||[]).push([[5026],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2618:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={},i="Example 7: A workflow with dynamic container overrides",s={unversionedId:"Example Workflows/example-7",id:"Example Workflows/example-7",title:"Example 7: A workflow with dynamic container overrides",description:"The task properties environment and command can also be specified as strings, in which case they must be valid expression that can be evaluated using eval()",source:"@site/docs/Example Workflows/example-7.md",sourceDirName:"Example Workflows",slug:"/Example Workflows/example-7",permalink:"/Example Workflows/example-7",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Example 6: A workflow with container overrides",permalink:"/Example Workflows/example-6"},next:{title:"Example 8: A dynamic workflow with static output",permalink:"/Example Workflows/example-8"}},l={},p=[{value:"Workflow definition",id:"workflow-definition",level:3},{value:"DAG representation",id:"dag-representation",level:3}],c={toc:p},u="wrapper";function d(e){let{components:n,...a}=e;return(0,o.kt)(u,(0,r.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"example-7-a-workflow-with-dynamic-container-overrides"},"Example 7: A workflow with dynamic container overrides"),(0,o.kt)("p",null,"The task properties ",(0,o.kt)("strong",{parentName:"p"},"environment")," and ",(0,o.kt)("strong",{parentName:"p"},"command")," can also be specified as strings, in which case they must be valid expression that can be evaluated using eval()"),(0,o.kt)("p",null,"This can be used to e.g. let the outputs of the previous task determine the values:"),(0,o.kt)("p",null,"An example where a function-based task outputs information about how many container tasks should be launched, and what their environment variables should be:"),(0,o.kt)("h3",{id:"workflow-definition"},"Workflow definition"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\n{\n  "workflow_id": "wf_overrides_dynamic",\n  "providers": [],\n  "tasks": [\n    {\n      "id": "1",\n      "execution_configurations": [\n        {\n          "function_def_id": "prepFunc",\n          "priority": 1\n        }\n      ],\n      "successors": [\n        2\n      ],\n      "properties": {\n        "position": "start"\n      }\n    },\n    {\n      "id": 2,\n      "execution_configurations": [\n        {\n          "container_def_id": "cdef_hello_world",\n          "priority": 1\n        }\n      ],\n      "successors": [],\n      "properties": {\n        "scatter": "predecessor_outputs[\'1\'][\'env_vars\']",\n        "command": [\n          "sh",\n          "-c",\n          "printenv IND"\n        ],\n        "environment": "predecessor_outputs[\'1\'][\'env_vars\']"\n      }\n    }\n  ]\n}\n\n\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'In this case, the output of the function prepFunc is scattered over.\n"predecessor_outputs',"['1']['env_vars']",'" will contain a list with one item for each subsequent task.')),(0,o.kt)("p",null,"The definition of the lambda function ",(0,o.kt)("strong",{parentName:"p"},"prepFunc")," is ",(0,o.kt)("a",{target:"_blank",href:t(8573).Z},"example7.py")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\nimport json\n\ndef handler(event, context):\n        print("Received event: " + json.dumps(event, indent=2))\n\n            response = {"num_inds": 3,\n                "env_vars" : [\n                    [{"name": "IND", "value": "1"}, {"name": "VAR", "value": "hello"}],\n                    [{"name": "IND", "value": "2"}, {"name": "VAR", "value": "hello"}],\n                    [{"name": "IND", "value": "3"}, {"name": "VAR", "value": "hello"}]\n                ]\n                }\n        return response\n\n\n')),(0,o.kt)("h3",{id:"dag-representation"},"DAG representation"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example 7",src:t(6338).Z,width:"640",height:"480"})))}d.isMDXComponent=!0},8573:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/files/example7-f96c4ca585fb43280253cf660dc59d54.py"},6338:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/example7-621f19d856ad549ebb1cef81498339f6.png"}}]);