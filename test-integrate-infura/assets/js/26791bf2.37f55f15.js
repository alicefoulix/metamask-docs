"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[63226],{82017:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>a});var s=t(74848),r=t(28453);const a=[];function i(e){const n={p:"p",...(0,r.R)(),...e.components};return(0,s.jsx)(n.p,{children:"Creates a new subscription for particular events. The node returns a subscription ID. For each event\nthat matches the subscription, a notification with relevant data is sent together with the subscription ID."})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},24189:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>a});var s=t(74848),r=t(28453);const a=[];function i(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Replace ",(0,s.jsx)(n.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,s.jsx)(n.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]}),"\n",(0,s.jsx)(n.admonition,{title:"WebSocket connections only",type:"tip",children:(0,s.jsxs)(n.p,{children:["Subscription methods are available for ",(0,s.jsx)(n.a,{href:"/test-integrate-infura/services/learn/websockets",children:"WebSocket"})," connections only."]})})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},86589:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>a});var s=t(74848),r=t(28453);const a=[];function i(e){const n={admonition:"admonition",code:"code",em:"em",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Specify one of the following subscription events:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"newHeads"}),": Subscribing to this returns a notification each time a new header is appended to the chain, including chain reorganizations. In a chain reorganization, the subscription emits all new headers for the new chain. Therefore the subscription can emit multiple headers at the same height."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"logs"}),": Returns logs that are included in new imported blocks and match the given filter criteria. In case of a chain reorganization, previously sent logs that are on the old chain are resent with the removed property set to ",(0,s.jsx)(n.code,{children:"true"}),". Logs from transactions that ended up in the new chain are emitted. Therefore a subscription can emit logs for the same transaction multiple times. This parameter has the following fields:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"address"}),": (",(0,s.jsx)(n.em,{children:"optional"}),") Either an address or an array of addresses. Only logs that are created from these addresses are returned."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"topics"}),": (",(0,s.jsx)(n.em,{children:"optional"}),") Only logs that match these specified topics are returned."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Infura Recommendation",type:"tip",children:(0,s.jsxs)(n.p,{children:["We strongly recommend specifying a filter (",(0,s.jsx)(n.code,{children:"address"})," or ",(0,s.jsx)(n.code,{children:"topics"})," or both) when subscribing to the ",(0,s.jsx)(n.code,{children:"logs"})," event."]})}),"\n"]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},24962:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>o});var s=t(74848),r=t(28453),a=t(11470),i=t(19365);const o=[];function c(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(a.A,{children:[(0,s.jsx)(i.A,{value:"New subscription",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "id": 1,\n  "jsonrpc": "2.0",\n  "result": "0x9cef478923ff08bf67fde6c64013158d"\n}\n'})})}),(0,s.jsx)(i.A,{value:"newHeads subscription",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "method": "eth_subscription",\n  "params": {\n    "result": {\n      "difficulty": "0x15d9223a23aa",\n      "extraData": "0xd983010305844765746887676f312e342e328777696e646f7773",\n      "gasLimit": "0x47e7c4",\n      "gasUsed": "0x38658",\n      "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n      "miner": "0xf8b483dba2c3b7176a3da549ad41a48bb3121069",\n      "nonce": "0x084149998194cc5f",\n      "number": "0x1348c9",\n      "parentHash": "0x7736fab79e05dc611604d22470dadad26f56fe494421b5b333de816ce1f25701",\n      "receiptRoot": "0x2fab35823ad00c7bb388595cb46652fe7886e00660a01e867824d3dceb1c8d36",\n      "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",\n      "stateRoot": "0xb3346685172db67de536d8765c43c31009d0eb3bd9c501c9be3229203f15f378",\n      "timestamp": "0x56ffeff8",\n      "transactionsRoot": "0x0167ffa60e3ebc0b080cdb95f7c0087dd6c0e61413140e39d94d3468d7c9689f"\n    },\n    "subscription": "0x9ce59a13059e417087c02d3236a0b1cc"\n  }\n}\n'})})}),(0,s.jsx)(i.A,{value:"logs subscription",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc":"2.0",\n  "method":"eth_subscription",\n  "params": {\n    "subscription":"0x4a8a4c0517381924f9838102c5a4dcb7",\n    "result": {\n      "address":"0x8320fe7702b96808f7bbc0d4a888ed1468216cfd","blockHash":"0x61cdb2a09ab99abf791d474f20c2ea89bf8de2923a2d42bb49944c8c993cbf04",\n      "blockNumber":"0x29e87","data":"0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000003",\n      "logIndex":"0x0",\n      "topics":["0xd78a0cb8bb633d06981248b816e7bd33c2a35a6089241d099fa519e361cab902"],"transactionHash":"0xe044554a0a55067caafd07f8020ab9f2af60bdfe337e395ecd84b4877a3d1ab4",\n      "transactionIndex":"0x0"\n    }\n  }\n}\n'})})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},53270:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>a});var s=t(74848),r=t(28453);const a=[];function i(e){const n={code:"code",li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"subscription ID"}),": The ID of the newly created subscription on the node."]}),"\n"]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},97230:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>x,contentTitle:()=>m,default:()=>g,frontMatter:()=>b,metadata:()=>f,toc:()=>j});var s=t(74848),r=t(28453),a=t(11470),i=t(19365),o=t(82017),c=t(86589),l=t(53270),d=t(24189);function u(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(a.A,{children:[(0,s.jsx)(i.A,{value:"newHeads",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'wscat -c wss://optimism-mainnet.infura.io/ws/v3/YOUR-API-KEY -x \'{"jsonrpc":"2.0", "id": 1, "method": "eth_subscribe", "params": ["newHeads"]}\'\n'})})}),(0,s.jsx)(i.A,{value:"logs",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'wscat -c wss://optimism-mainnet.infura.io/ws/v3/YOUR-API-KEY -x \'{"jsonrpc":"2.0", "id": 1, "method": "eth_subscribe", "params": ["logs", {"address": "0x8320fe7702b96808f7bbc0d4a888ed1468216cfd", "topics":["0xd78a0cb8bb633d06981248b816e7bd33c2a35a6089241d099fa519e361cab902"]}]}\'\n'})})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}var p=t(24962);const b={title:"eth_subscribe"},m=void 0,f={id:"network-apis/optimism/json-rpc-methods/subscription-methods/eth_subscribe",title:"eth_subscribe",description:"Parameters",source:"@site/services/network-apis/optimism/json-rpc-methods/subscription-methods/eth_subscribe.mdx",sourceDirName:"network-apis/optimism/json-rpc-methods/subscription-methods",slug:"/network-apis/optimism/json-rpc-methods/subscription-methods/eth_subscribe",permalink:"/test-integrate-infura/services/network-apis/optimism/json-rpc-methods/subscription-methods/eth_subscribe",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/network-apis/optimism/json-rpc-methods/subscription-methods/eth_subscribe.mdx",tags:[],version:"current",frontMatter:{title:"eth_subscribe"},sidebar:"servicesSidebar",previous:{title:"Subscription methods",permalink:"/test-integrate-infura/services/network-apis/optimism/json-rpc-methods/subscription-methods/"},next:{title:"eth_unsubscribe",permalink:"/test-integrate-infura/services/network-apis/optimism/json-rpc-methods/subscription-methods/eth_unsubscribe"}},x={},j=[...o.RM,{value:"Parameters",id:"parameters",level:2},...c.RM,{value:"Returns",id:"returns",level:2},...l.RM,{value:"Example",id:"example",level:2},...d.RM,{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},...p.RM];function v(e){const n={h2:"h2",h3:"h3",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n","\n",(0,s.jsx)(c.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n","\n",(0,s.jsx)(l.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n","\n",(0,s.jsx)(d.Ay,{}),"\n",(0,s.jsx)(n.h3,{id:"request",children:"Request"}),"\n","\n",(0,s.jsx)(h,{}),"\n",(0,s.jsx)(n.h3,{id:"response",children:"Response"}),"\n","\n",(0,s.jsx)(p.Ay,{})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(v,{...e})}):v(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var s=t(18215);const r={tabItem:"tabItem_Ymn6"};var a=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var s=t(96540),r=t(18215),a=t(23104),i=t(56347),o=t(205),c=t(57485),l=t(31682),d=t(70679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=h(e),[i,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[l,u]=b({queryString:t,groupId:r}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,d.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),x=(()=>{const e=l??m;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{x&&c(x)}),[x]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,a]),tabValues:a}}var f=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function v(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),r=o[t].value;r!==s&&(l(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...a,className:(0,r.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(g,{...n,...e})]})}function y(e){const n=(0,f.A)();return(0,j.jsx)(w,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(96540);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);