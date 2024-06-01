"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[30956],{9012:(e,t,n)=>{n.d(t,{Ay:()=>i,RM:()=>a});var r=n(74848),s=n(28453);const a=[];function o(e){const t={p:"p",...(0,s.R)(),...e.components};return(0,r.jsx)(t.p,{children:"Returns an estimate of how much priority fee, in wei, you need to be included in a block."})}function i(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},19548:(e,t,n)=>{n.d(t,{Ay:()=>i,RM:()=>a});var r=n(74848),s=n(28453);const a=[];function o(e){const t={a:"a",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(t.p,{children:["Replace ",(0,r.jsx)(t.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,r.jsx)(t.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]})}function i(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},66244:(e,t,n)=>{n.d(t,{Ay:()=>i,RM:()=>a});var r=n(74848),s=n(28453);const a=[];function o(e){const t={p:"p",...(0,s.R)(),...e.components};return(0,r.jsx)(t.p,{children:"None."})}function i(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},29313:(e,t,n)=>{n.d(t,{Ay:()=>l,RM:()=>i});var r=n(74848),s=n(28453),a=n(11470),o=n(19365);const i=[];function c(e){const t={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsx)(a.A,{children:(0,r.jsx)(o.A,{value:"JSON",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "0x55d4a80"\n}\n'})})})})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},32927:(e,t,n)=>{n.d(t,{Ay:()=>i,RM:()=>a});var r=n(74848),s=n(28453);const a=[];function o(e){const t={code:"code",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"result"}),": A hexadecimal value of the priority fee, in wei, needed to be included in a block."]})}function i(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},38476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>y,frontMatter:()=>h,metadata:()=>x,toc:()=>v});var r=n(74848),s=n(28453),a=n(11470),o=n(19365),i=n(9012),c=n(66244),l=n(32927),u=n(19548);function d(e){const t={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(a.A,{children:[(0,r.jsx)(o.A,{value:"cURL",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'curl https://optimism-mainnet.infura.io/v3/YOUR-API-KEY \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{"jsonrpc":"2.0","method":"eth_maxPriorityFeePerGas","params": [],"id":1}\'\n'})})}),(0,r.jsx)(o.A,{value:"WSS",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'wscat -c wss://optimism-mainnet.infura.io/ws/v3/d23391e03c6d40738530a1b4b679e66e -x \'{"jsonrpc":"2.0","method":"eth_maxPriorityFeePerGas","params": [],"id":1}\'\n'})})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}var m=n(29313);const h={title:"eth_maxPriorityFeePerGas"},f=void 0,x={id:"network-apis/optimism/json-rpc-methods/eth_maxpriorityfeepergas",title:"eth_maxPriorityFeePerGas",description:"Parameters",source:"@site/services/network-apis/optimism/json-rpc-methods/eth_maxpriorityfeepergas.mdx",sourceDirName:"network-apis/optimism/json-rpc-methods",slug:"/network-apis/optimism/json-rpc-methods/eth_maxpriorityfeepergas",permalink:"/test-integrate-infura/services/network-apis/optimism/json-rpc-methods/eth_maxpriorityfeepergas",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/network-apis/optimism/json-rpc-methods/eth_maxpriorityfeepergas.mdx",tags:[],version:"current",frontMatter:{title:"eth_maxPriorityFeePerGas"},sidebar:"servicesSidebar",previous:{title:"eth_getUncleCountByBlockNumber",permalink:"/test-integrate-infura/services/network-apis/optimism/json-rpc-methods/eth_getunclecountbyblocknumber"},next:{title:"eth_protocolVersion",permalink:"/test-integrate-infura/services/network-apis/optimism/json-rpc-methods/eth_protocolversion"}},b={},v=[...i.RM,{value:"Parameters",id:"parameters",level:2},...c.RM,{value:"Returns",id:"returns",level:2},...l.RM,{value:"Example",id:"example",level:2},...u.RM,{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},...m.RM];function j(e){const t={h2:"h2",h3:"h3",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Ay,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n","\n",(0,r.jsx)(c.Ay,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n","\n",(0,r.jsx)(l.Ay,{}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n","\n",(0,r.jsx)(u.Ay,{}),"\n",(0,r.jsx)(t.h3,{id:"request",children:"Request"}),"\n","\n",(0,r.jsx)(p,{}),"\n",(0,r.jsx)(t.h3,{id:"response",children:"Response"}),"\n","\n",(0,r.jsx)(m.Ay,{})]})}function y(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(18215);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),s=n(18215),a=n(23104),o=n(56347),i=n(205),c=n(57485),l=n(31682),u=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=p(e),[o,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[l,d]=h({queryString:n,groupId:s}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),b=(()=>{const e=l??f;return m({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{b&&c(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),x(e)}),[d,x,a]),tabValues:a}}var x=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function j(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),s=i[n].value;s!==r&&(l(t),o(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,v.jsx)(j,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function w(e){const t=(0,x.A)();return(0,v.jsx)(g,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(96540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);