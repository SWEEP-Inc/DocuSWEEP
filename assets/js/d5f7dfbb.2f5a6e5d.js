(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[313],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6412:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:7},c="Creating container definitions",p={unversionedId:"The Workflow Concept/creating-container-definitions",id:"The Workflow Concept/creating-container-definitions",isDocsHomePage:!1,title:"Creating container definitions",description:"A container definition contains three elements:",source:"@site/docs/The Workflow Concept/creating-container-definitions.md",sourceDirName:"The Workflow Concept",slug:"/The Workflow Concept/creating-container-definitions",permalink:"/DocuSWEEP/The Workflow Concept/creating-container-definitions",version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Creating function definitions",permalink:"/DocuSWEEP/The Workflow Concept/creating-function-definitions"},next:{title:"Inputs",permalink:"/DocuSWEEP/Communication Between Tasks/inputs"}},u=[],s={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-container-definitions"},"Creating container definitions"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A container definition contains three elements:"),(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"Where: A destination (cloud provider) where to run the container"),(0,a.kt)("li",{parentName:"ol"},"What: A docker image that the container will be based on"),(0,a.kt)("li",{parentName:"ol"},"How: Information for defining the container (memory, cpu, command to run)"))),(0,a.kt)("p",null,"Container tasks are placed in a workflow by specifying a ",(0,a.kt)("strong",{parentName:"p"},"container_def_id")," in the ",(0,a.kt)("strong",{parentName:"p"},"execution_configurations")," of the workflow definition. This must correspond to the id of a ",(0,a.kt)("em",{parentName:"p"},"container_definition")," that has been registered in SWEEP:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"container definition")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"  {\n      'id' : str,\n      'destination_id' : str,\n      'image_name' : str,\n      'image_tag' : str,\n      'cpu' : float,\n      'memory' : int,\n      'command' : str list\n  }\n")),(0,a.kt)("p",null,"required:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"id"),": unique identifier of the container definition.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"destination_id"),": id of a destination, must be one that has already been registered in SWEEP. See ",(0,a.kt)("a",{parentName:"p",href:"creating-destinations"},"Creating destinations"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"image_name")," and ",(0,a.kt)("strong",{parentName:"p"},"image_tag"),": define the image to base the container on."))),(0,a.kt)("p",null,"optional:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"cpu_units"),": number of CPU units allocated")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"memory"),": max memory allocated in MB")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"command"),": defines the command to run when starting the container, overriding the command specified in the docker image definition."))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Runtime resources of the container"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"CPU units and memory are allocated and charged for even if not fully utilized.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Values must be valid for the specified CP. See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonECS/latest/userguide/fargate-task-defs.html"},"https://docs.aws.amazon.com/AmazonECS/latest/userguide/fargate-task-defs.html")," (Task CPU and Memory) for valid configurations for these values for Fargate.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If not specified, default values (depending on CP) specified in the config file are used.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," the specified image and tag must exist in the local docker registry."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"  ",(0,a.kt)("strong",{parentName:"p"},"trying to push another container definition with the same image_name and image_tag will")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"update the cpu, memory and command settings"),(0,a.kt)("li",{parentName:"ul"},"NOT overwrite the uploaded image (even if it has changed in the local docker repo) unless the optional argument --overwrite is given to sweep upload_container_def"))),(0,a.kt)("p",null,"The upload may take some time."))}m.isMDXComponent=!0}}]);