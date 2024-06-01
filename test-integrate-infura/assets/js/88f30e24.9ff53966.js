"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[30393],{84914:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=a(74848),r=a(28453),s=a(11470),l=a(19365);const i={},o="cat",u={id:"network-apis/ipfs/http-api-methods/cat",title:"cat",description:"/api/v0/cat",source:"@site/services/network-apis/ipfs/http-api-methods/cat.md",sourceDirName:"network-apis/ipfs/http-api-methods",slug:"/network-apis/ipfs/http-api-methods/cat",permalink:"/test-integrate-infura/services/network-apis/ipfs/http-api-methods/cat",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/network-apis/ipfs/http-api-methods/cat.md",tags:[],version:"current",frontMatter:{},sidebar:"servicesSidebar",previous:{title:"block_stat",permalink:"/test-integrate-infura/services/network-apis/ipfs/http-api-methods/block_stat"},next:{title:"dag_get",permalink:"/test-integrate-infura/services/network-apis/ipfs/http-api-methods/dag_get"}},c={},d=[{value:"/api/v0/cat",id:"apiv0cat",level:2},{value:"REQUEST",id:"request",level:3},{value:"REQUEST PARAMS",id:"request-params",level:4},{value:"RESPONSE",id:"response",level:3},{value:"BODY",id:"body",level:4}];function p(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"cat",children:"cat"}),"\n",(0,n.jsx)(t.h2,{id:"apiv0cat",children:"/api/v0/cat"}),"\n",(0,n.jsx)(t.p,{children:"Show IPFS object data."}),"\n",(0,n.jsx)(t.h3,{id:"request",children:"REQUEST"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(l.A,{value:"Syntax",label:"Syntax",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl "https://ipfs.infura.io:5001/api/v0/cat?arg=<key>" \\\n    -X POST \\\n    -u "<API_KEY>:<API_KEY_SECRET>"\n'})})}),(0,n.jsx)(l.A,{value:"Example",label:"Example",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl "https://ipfs.infura.io:5001/api/v0/cat?arg=QmZtmD2qt6fJot32nabSP3CUjicnypEBz7bHVDhPQt9aAy" \\\n    -X POST \\\n    -u "PROJECT_ID:PROJECT_SECRET"\n'})})})]}),"\n",(0,n.jsx)(t.h4,{id:"request-params",children:"REQUEST PARAMS"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"arg"})," ",(0,n.jsx)(t.em,{children:"[required]"})," - The IPFS object hash."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"response",children:"RESPONSE"}),"\n",(0,n.jsx)(t.p,{children:"On success, the call to this endpoint will return with 200 and the following body:"}),"\n",(0,n.jsx)(t.h4,{id:"body",children:"BODY"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"This endpoint returns a `text/plain` response body.\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>l});a(96540);var n=a(18215);const r={tabItem:"tabItem_Ymn6"};var s=a(74848);function l(e){let{children:t,hidden:a,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,l),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>w});var n=a(96540),r=a(18215),s=a(23104),l=a(56347),i=a(205),o=a(57485),u=a(31682),c=a(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=p(e),[l,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[u,d]=f({queryString:a,groupId:r}),[m,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),v=(()=>{const e=u??m;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=a(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=a(74848);function g(e){let{className:t,block:a,selectedValue:n,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,a=o.indexOf(t),r=i[a].value;r!==n&&(u(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;t=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;t=o[a]??o[o.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function j(e){let{lazy:t,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function E(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,x.jsx)(E,{...e,children:d(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>l,x:()=>i});var n=a(96540);const r={},s=n.createContext(r);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);