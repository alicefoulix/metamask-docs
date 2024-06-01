"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[87983],{56630:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>s});var r=t(74848),a=t(28453);const s=[];function c(e){const n={p:"p",...(0,a.R)(),...e.components};return(0,r.jsx)(n.p,{children:"Get trace information about all the transactions in a given block. This can be useful for debugging purposes or for analyzing the behavior of a blockchain."})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},77946:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>s});var r=t(74848),a=t(28453);const s=[];function c(e){const n={a:"a",code:"code",p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,r.jsx)(n.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},31466:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>s});var r=t(74848),a=t(28453);const s=[];function c(e){const n={a:"a",code:"code",em:"em",li:"li",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"block parameter"})," [",(0,r.jsx)(n.em,{children:"Required"}),"] A hexadecimal block number, or the string ",(0,r.jsx)(n.code,{children:"latest"}),", ",(0,r.jsx)(n.code,{children:"earliest"}),", or ",(0,r.jsx)(n.code,{children:"pending"}),". See the ",(0,r.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#default-block",children:"default block parameter"}),"."]}),"\n"]})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},21727:(e,n,t)=>{t.d(n,{Ay:()=>i,RM:()=>o});var r=t(74848),a=t(28453),s=t(11470),c=t(19365);const o=[];function l(e){const n={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsx)(s.A,{children:(0,r.jsx)(c.A,{value:"JSON",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "result": [\n    {\n      "action": {\n        "callType": "call",\n        "from": "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73",\n        "gas": "0xffad82",\n        "input": "0x0000000000000000000000000000000000000999",\n        "to": "0x0020000000000000000000000000000000000000",\n        "value": "0x0"\n      },\n      "blockHash": "0x71512d31e18f828cef069a87bc2c7514a8ca334f9ee72625efdf5cc2d43768dd",\n      "blockNumber": 6,\n      "result": {\n        "gasUsed": "0x7536",\n        "output": "0x"\n      },\n      "subtraces": 1,\n      "traceAddress": [],\n      "transactionHash": "0x91eeabc671e2dd2b1c8ddebb46ba59e8cb3e7d189f80bcc868a9787728c6e59e",\n      "transactionPosition": 0,\n      "type": "call"\n    },\n    {\n      "action": {\n        "address": "0x0020000000000000000000000000000000000000",\n        "balance": "0x300",\n        "refundAddress": "0x0000000000000999000000000000000000000000"\n      },\n      "blockHash": "0x71512d31e18f828cef069a87bc2c7514a8ca334f9ee72625efdf5cc2d43768dd",\n      "blockNumber": 6,\n      "result": null,\n      "subtraces": 0,\n      "traceAddress": [0],\n      "transactionHash": "0x91eeabc671e2dd2b1c8ddebb46ba59e8cb3e7d189f80bcc868a9787728c6e59e",\n      "transactionPosition": 0,\n      "type": "suicide"\n    },\n    {\n      "action": {\n        "author": "0x0000000000000000000000000000000000000000",\n        "rewardType": "block",\n        "value": "0x1bc16d674ec80000"\n      },\n      "blockHash": "0x71512d31e18f828cef069a87bc2c7514a8ca334f9ee72625efdf5cc2d43768dd",\n      "blockNumber": 6,\n      "result": null,\n      "subtraces": 0,\n      "traceAddress": [],\n      "transactionHash": null,\n      "transactionPosition": null,\n      "type": "reward"\n    }\n  ],\n  "id": 1\n}\n'})})})})}function i(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},6981:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>s});var r=t(74848),a=t(28453);const s=[];function c(e){const n={a:"a",p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(n.p,{children:["A list of ",(0,r.jsx)(n.a,{href:"/test-integrate-infura/services/network-apis/ethereum/json-rpc-methods/trace-methods/#trace",children:"calls to other contracts"})," containing one object per call, in transaction execution order."]})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},88973:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>x,contentTitle:()=>b,default:()=>k,frontMatter:()=>m,metadata:()=>f,toc:()=>v});var r=t(74848),a=t(28453),s=t(11470),c=t(19365),o=t(56630),l=t(31466),i=t(6981),u=t(77946);function d(e){const n={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(s.A,{children:[(0,r.jsx)(c.A,{value:"cURL",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl https://mainnet.infura.io/v3/YOUR-API-KEY \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{"jsonrpc":"2.0","method":"trace_block","params":["0x6"],"id":1}\'\n'})})}),(0,r.jsx)(c.A,{value:"WSS",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'wscat -c wss://mainnet.infura.io/ws/v3/YOUR-API-KEY -x \'{"jsonrpc":"2.0","method":"trace_block","params":["0x6"],"id":1}\'\n'})})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}var h=t(21727);const m={title:"trace_block"},b=void 0,f={id:"network-apis/ethereum/json-rpc-methods/trace-methods/trace_block",title:"trace_block",description:"Parameters",source:"@site/services/network-apis/ethereum/json-rpc-methods/trace-methods/trace_block.mdx",sourceDirName:"network-apis/ethereum/json-rpc-methods/trace-methods",slug:"/network-apis/ethereum/json-rpc-methods/trace-methods/trace_block",permalink:"/test-integrate-infura/services/network-apis/ethereum/json-rpc-methods/trace-methods/trace_block",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/network-apis/ethereum/json-rpc-methods/trace-methods/trace_block.mdx",tags:[],version:"current",frontMatter:{title:"trace_block"},sidebar:"servicesSidebar",previous:{title:"Trace methods",permalink:"/test-integrate-infura/services/network-apis/ethereum/json-rpc-methods/trace-methods/"},next:{title:"trace_call",permalink:"/test-integrate-infura/services/network-apis/ethereum/json-rpc-methods/trace-methods/trace_call"}},x={},v=[...o.RM,{value:"Parameters",id:"parameters",level:2},...l.RM,{value:"Returns",id:"returns",level:2},...i.RM,{value:"Example",id:"example",level:2},...u.RM,{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},...h.RM];function j(e){const n={h2:"h2",h3:"h3",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n","\n",(0,r.jsx)(l.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n","\n",(0,r.jsx)(i.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n","\n",(0,r.jsx)(u.Ay,{}),"\n",(0,r.jsx)(n.h3,{id:"request",children:"Request"}),"\n","\n",(0,r.jsx)(p,{}),"\n",(0,r.jsx)(n.h3,{id:"response",children:"Response"}),"\n","\n",(0,r.jsx)(h.Ay,{})]})}function k(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>c});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function c(e){let{children:n,hidden:t,className:c}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,c),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),a=t(18215),s=t(23104),c=t(56347),o=t(205),l=t(57485),i=t(31682),u=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,c.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=p(e),[c,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[i,d]=m({queryString:t,groupId:a}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),x=(()=>{const e=i??b;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:c,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:c,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==r&&(i(n),c(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function k(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function g(e){const n=b(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,v.jsx)(j,{...n,...e}),(0,v.jsx)(k,{...n,...e})]})}function y(e){const n=(0,f.A)();return(0,v.jsx)(g,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(96540);const a={},s=r.createContext(a);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);