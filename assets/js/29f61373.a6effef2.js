(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[832],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),k=r,d=m["".concat(p,".").concat(k)]||m[k]||u[k]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6277:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:4},p="Definitions of task properties",l={unversionedId:"The Workflow Concept/definitions-of-task-properties",id:"The Workflow Concept/definitions-of-task-properties",isDocsHomePage:!1,title:"Definitions of task properties",description:"Task properties",source:"@site/docs/The Workflow Concept/definitions-of-task-properties.md",sourceDirName:"The Workflow Concept",slug:"/The Workflow Concept/definitions-of-task-properties",permalink:"/DocuSWEEP/The Workflow Concept/definitions-of-task-properties",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Definitions of tasks",permalink:"/DocuSWEEP/The Workflow Concept/definitions-of-tasks"},next:{title:"Creating destinations",permalink:"/DocuSWEEP/The Workflow Concept/creating-destinations"}},c=[{value:"Task properties",id:"task-properties",children:[]},{value:"Dynamic task properties",id:"dynamic-task-properties",children:[]}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"definitions-of-task-properties"},"Definitions of task properties"),(0,i.kt)("h2",{id:"task-properties"},"Task properties"),(0,i.kt)("p",null,"Task properties are static values that are associated with a task. This means that they do not change over time,\nthey are associated with a workflow (unlike task attributes described below, which are associated with a particular launch of the workflow)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"position"),": the position in the task graph. used to define the starting task.  "),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"There must be exactly one task with the property ",(0,i.kt)("strong",{parentName:"p"},"'position' : 'start'"),". This will be the first task that is executed, and all other tasks should be on a path from the start task in the DAG representation."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"delay"),": time in seconds that a task should wait before being launched. the delay begins when the task is otherwise ready to lauch, after all its predecessors have finished.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"static_input"),": input to the task that is independent of the launch, other tasks, etc.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"multiplicity"),": specifies a number of times a task should be replicated.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"deploy_conditions"),": list of conditions in the form of expressions depending on the output of this task predecessors that must be fulfilled in order for the task to be launched. if all predecessors have finished but any of the conditions is not true, the task fails.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"scatter"),": an expression that indicates which part of a predecessors output should be scattered over: this output is assumed to be of list-type, this task will be replicated for each element of this list, each new task replica receiving one element as input.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"follow"),": specifies a predecessor ID (P) whose replication factor this task (T) is to follow. A replica Ti of this task will gather all aggregatedd output of the corresponding replica Pi of the predecessor. See example below how scatter and follow can be used to define multi-level scatter and gather behaviour.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"environment"),": only valid for container-based tasks. specifies environment variables the image, overriding the one specified when building the image and the one in the container definition. one dictionary per environment variable, the dictionary must contains 2 items: 'name' and\n'value'")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"command"),": only valid for container-based tasks. specifies a command to run in the image, overriding the one specified when building the image and the one in the container definition.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"static_output"),": specifies a pre-determined item in the task's output. it will appear in the output-dictionary of a task with the key 'static_output', along with any other output that the actual task generates. ",(0,i.kt)("strong",{parentName:"p"},"NOTE:")," ",(0,i.kt)("em",{parentName:"p"},"unlike static_input, the "),"value",(0,i.kt)("em",{parentName:"p"}," must not be determined before launch: static_output may be a str, in which case it is considered a dynamic property (see ",(0,i.kt)("a",{parentName:"em",href:"#dynamic-task-properties"},"Dynamic task properties"),"), meaning it can e.g. specify a value in terms of the predecessor outputs.")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Task Properties"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"{\n    'position' : str,\n    'delay' : int,\n    'static_input' : object,\n    'multiplicity' : int\n    'deploy_conditions' : expr list,\n    'scatter' : expr,\n    'follow' : str,\n    'environment' : dict list | expr,\n    'command' : str list,\n    'static_output' : expr\n}\n"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Environment Properties"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"'environment' : [\n                {'name': 'EVAR1', 'value': '1'},\n                {'name': 'EVAR2', 'value': 'hello'}\n              ]\n"))),(0,i.kt)("h2",{id:"dynamic-task-properties"},"Dynamic task properties"),(0,i.kt)("p",null,"Dynamic task properties are properties whose value is decided at runtime."),(0,i.kt)("p",null,'They are specified by strings of Python expressions, e.g. by referencing the output of a previous tasks using the output variable "predecessor_outputs" as shown in the examples below (see ',(0,i.kt)("a",{parentName:"p",href:"../Communication%20Between%20Tasks/inputs"},"Communication between tasks"),")."),(0,i.kt)("h4",{id:"the-properties-that-must-be-dynamic-are"},"The properties that must be dynamic are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"deploy_conditions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"scatter"))),(0,i.kt)("h4",{id:"the-properties-that-may-be-dynamic-are"},"The properties that may be dynamic are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"environment")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"static_output"))),(0,i.kt)("p",null,"If the value of these properties is of type str then they are treated as dynamic."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Example of ",(0,i.kt)("strong",{parentName:"p"},"deploy_conditions")," property with one dynamic condition:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"\"deploy_conditions\" : [\"predecessor_outputs['1']['buckets'][0]['count'] >= 4\"]\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Example of a dynamic ",(0,i.kt)("strong",{parentName:"p"},"static_output")," property:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"\"static_output\" : \"predecessor_outputs['1']['env_vars']\"\n")))}m.isMDXComponent=!0}}]);