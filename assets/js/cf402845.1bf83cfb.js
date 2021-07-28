(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[843],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,k=f["".concat(c,".").concat(d)]||f[d]||l[d]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6097:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},c="Inputs",u={unversionedId:"Communication Between Tasks/inputs",id:"Communication Between Tasks/inputs",isDocsHomePage:!1,title:"Inputs",description:"Workflow tasks get input of the following structure:",source:"@site/docs/Communication Between Tasks/inputs.md",sourceDirName:"Communication Between Tasks",slug:"/Communication Between Tasks/inputs",permalink:"/Communication Between Tasks/inputs",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Creating container definitions",permalink:"/The Workflow Concept/creating-container-definitions"},next:{title:"Outputs",permalink:"/Communication Between Tasks/outputs"}},p=[{value:"Input to function-based tasks",id:"input-to-function-based-tasks",children:[]},{value:"Input to container-based tasks",id:"input-to-container-based-tasks",children:[]},{value:"Example task input of a task with two predecessors:",id:"example-task-input-of-a-task-with-two-predecessors",children:[]}],l={toc:p};function f(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"inputs"},"Inputs"),(0,a.kt)("p",null,"Workflow tasks get input of the following structure:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Task Input")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"{\n    'predecessor_outputs' : dict,\n    'static_input' : dict\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"predecessor_outputs")," contains outputs from every predecessor of the task. For every predecessor id x, the dictionary has an entry\nx : {output of task x}.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"static_input")," is the dict specified as this task's ",(0,a.kt)("strong",{parentName:"p"},"static_input"),"-property in the workflow definition. Empty dict if no such property was specified."))),(0,a.kt)("p",null,"The task input can be referenced in the workflow definition in dynamic task properties, e.g. an expression that specifies how a task should scatter based on the output of a predecessor."),(0,a.kt)("p",null,"The task input can not always be accessed in the executable code of the task, however. This depends on whether it is a function-based or container-based task, as described below."),(0,a.kt)("h3",{id:"input-to-function-based-tasks"},"Input to function-based tasks"),(0,a.kt)("p",null,"Function-based tasks receive the task input as a function argument, and it can therefore be accessed in the function code itself."),(0,a.kt)("p",null,"See\n",(0,a.kt)("a",{target:"_blank",href:n(5585).Z},"lamba_function_template.py"),"\nfor an example of a function that accesses the output from its predecessors."),(0,a.kt)("h3",{id:"input-to-container-based-tasks"},"Input to container-based tasks"),(0,a.kt)("p",null,"Containers do not receive arguments, and the task input is therefore not directly available for the code that is executing in the container."),(0,a.kt)("p",null,"There are two ways through which information can be passed into containers:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"the command to run when the container is launched"),(0,a.kt)("li",{parentName:"ol"},"the environment variables of the container")),(0,a.kt)("p",null,"Both of these can be set"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"when creating the docker image"),(0,a.kt)("li",{parentName:"ul"},"in the SWEEP container definition ",(0,a.kt)("strong",{parentName:"li"},"This overrides the ones specified when building the docker image")),(0,a.kt)("li",{parentName:"ul"},"in the SWEEP workflow definition ",(0,a.kt)("strong",{parentName:"li"},"This overrides both of the above"))),(0,a.kt)("h3",{id:"example-task-input-of-a-task-with-two-predecessors"},"Example task input of a task with two predecessors:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"{\n  'predecessor_outputs': {\n    '1': {\n      'msg': 'I completed successfully'\n    },\n    '2': {\n      'buckets': 10,\n      'static_output': 5\n    }\n  },\n  'static_input': {}\n}\n")))}f.isMDXComponent=!0},5585:function(e,t,n){"use strict";t.Z=n.p+"assets/files/lambda_function_template-c36835e2be0005a7eee3f3846e19ca07.py"}}]);