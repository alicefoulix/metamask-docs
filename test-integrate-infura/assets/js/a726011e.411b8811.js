"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[79964],{43762:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>s});var a=t(74848),r=t(28453);const s=[];function c(e){const n={p:"p",...(0,r.R)(),...e.components};return(0,a.jsx)(n.p,{children:"Returns the receipt of a transaction given transaction hash. Note that the receipt is not available for pending transactions."})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1406:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>s});var a=t(74848),r=t(28453);const s=[];function c(e){const n={a:"a",code:"code",p:"p",...(0,r.R)(),...e.components};return(0,a.jsxs)(n.p,{children:["Replace ",(0,a.jsx)(n.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,a.jsx)(n.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},69254:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>s});var a=t(74848),r=t(28453);const s=[];function c(e){const n={code:"code",em:"em",p:"p",...(0,r.R)(),...e.components};return(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"transaction hash"}),": [",(0,a.jsx)(n.em,{children:"Required"}),"] A string representing the hash (32 bytes) of a transaction."]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},81704:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>o});var a=t(74848),r=t(28453),s=t(11470),c=t(19365);const o=[];function i(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsx)(s.A,{children:(0,a.jsx)(c.A,{value:"JSON",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "blockHash":"0x0a79eca9f5ca58a1d5d5030a0fabfdd8e815b8b77a9f223f74d59aa39596e1c7",\n    "blockNumber":"0x11e5883",\n    "contractAddress":null,\n    "cumulativeGasUsed":"0xc5f3e7",\n    "effectiveGasPrice":"0xa45b9a444",\n    "from":"0x690b9a9e9aa1c9db991c7721a92d351db4fac990",\n    "gasUsed":"0x565f",\n    "logs": [\n      {\n        "address":"0x388c818ca8b9251b393131c08a736a67ccb19297",\n        "blockHash":"0x0a79eca9f5ca58a1d5d5030a0fabfdd8e815b8b77a9f223f74d59aa39596e1c7",\n        "blockNumber":"0x11e5883",\n        "data":"0x00000000000000000000000000000000000000000000000011b6b79503fb875d",\n        "logIndex":"0x187",\n        "removed":false,\n        "topics": [\n          "0x27f12abfe35860a9a927b465bb3d4a9c23c8428174b83f278fe45ed7b4da2662"\n        ],\n        "transactionHash":"0x7114b4da1a6ed391d5d781447ed443733dcf2b508c515b81c17379dea8a3c9af",\n        "transactionIndex":"0x76"\n      }\n    ],\n    "logsBloom":"0x00000000000000000000000000000000000100004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000",\n    "status":"0x1",\n    "to":"0x388c818ca8b9251b393131c08a736a67ccb19297",\n    "transactionHash":"0x7114b4da1a6ed391d5d781447ed443733dcf2b508c515b81c17379dea8a3c9af",\n    "transactionIndex":"0x76",\n    "type":"0x2"\n  }\n}\n'})})})})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},52585:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>s});var a=t(74848),r=t(28453);const s=[];function c(e){const n={a:"a",code:"code",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"A transaction receipt object, or null when no receipt was found. The transaction receipt object will contain the following keys and their values:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"blockHash"}),": 32 bytes. Hash of the block including this transaction."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"blockNumber"}),": Block number including this transaction."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"contractAddress"}),": 20 bytes. The contract address created if the transaction was a contract creation, otherwise ",(0,a.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"cumulativeGasUsed"}),": The total amount of gas used when this transaction was executed in the block."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"effectiveGasPrice"}),": The actual value per gas deducted from the sender's account. Before ",(0,a.jsx)(n.a,{href:"/test-integrate-infura/services/network-apis/ethereum/concepts/transaction-types#eip-1559-transactions",children:"EIP-1559"}),", equal to the gas price."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"from"}),": 20 bytes. The address of the sender."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"gasUsed"}),": The amount of gas used by this specific transaction alone."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"logs"}),": (Array) An array of log objects generated by this transaction."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"logsBloom"}),": 256 bytes. Bloom filter for light clients to quickly retrieve related logs."]}),"\n",(0,a.jsxs)(n.li,{children:["One of the following:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"root"})," : 32 bytes of post-transaction stateroot (pre-Byzantium)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"status"}),": Either 1 (success) or 0 (failure)"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"to"}),": 20 bytes. The address of the receiver. ",(0,a.jsx)(n.code,{children:"null"})," when the transaction is a contract creation transaction."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"transactionHash"}),": 32 bytes. The hash of the transaction."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"transactionIndex"}),": Hexadecimal of the transaction's index position in the block."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"type"}),": the ",(0,a.jsx)(n.a,{href:"/test-integrate-infura/services/network-apis/ethereum/concepts/transaction-types",children:"transaction type"}),"."]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},36403:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>b,default:()=>g,frontMatter:()=>f,metadata:()=>x,toc:()=>j});var a=t(74848),r=t(28453),s=t(11470),c=t(19365),o=t(43762),i=t(69254),l=t(52585),d=t(1406);function u(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(s.A,{children:[(0,a.jsx)(c.A,{value:"cURL",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl https://avalanche-mainnet.infura.io/v3/YOUR-API-KEY \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{"jsonrpc":"2.0","method":"eth_getTransactionReceipt","params": ["0xbb3a336e3f823ec18197f1e13ee875700f08f03e2cab75f0d0b118dabb44cba0"],"id":1}\'\n'})})}),(0,a.jsx)(c.A,{value:"WSS",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'wscat -c wss://avalanche-mainnet.infura.io/ws/v3/YOUR-API-KEY -x \'{"jsonrpc":"2.0","method":"eth_getTransactionReceipt","params": ["0xbb3a336e3f823ec18197f1e13ee875700f08f03e2cab75f0d0b118dabb44cba0"],"id":1}\'\n'})})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}var p=t(81704);const f={title:"eth_getTransactionReceipt"},b=void 0,x={id:"network-apis/avalanche-c-chain/json-rpc-methods/eth_gettransactionreceipt",title:"eth_getTransactionReceipt",description:"Parameters",source:"@site/services/network-apis/avalanche-c-chain/json-rpc-methods/eth_gettransactionreceipt.mdx",sourceDirName:"network-apis/avalanche-c-chain/json-rpc-methods",slug:"/network-apis/avalanche-c-chain/json-rpc-methods/eth_gettransactionreceipt",permalink:"/test-integrate-infura/services/network-apis/avalanche-c-chain/json-rpc-methods/eth_gettransactionreceipt",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/network-apis/avalanche-c-chain/json-rpc-methods/eth_gettransactionreceipt.mdx",tags:[],version:"current",frontMatter:{title:"eth_getTransactionReceipt"},sidebar:"servicesSidebar",previous:{title:"eth_getTransactionCount",permalink:"/test-integrate-infura/services/network-apis/avalanche-c-chain/json-rpc-methods/eth_gettransactioncount"},next:{title:"eth_getUncleByBlockHashAndIndex",permalink:"/test-integrate-infura/services/network-apis/avalanche-c-chain/json-rpc-methods/eth_getunclebyblockhashandindex"}},m={},j=[...o.RM,{value:"Parameters",id:"parameters",level:2},...i.RM,{value:"Returns",id:"returns",level:2},...l.RM,{value:"Example",id:"example",level:2},...d.RM,{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},...p.RM];function v(e){const n={h2:"h2",h3:"h3",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Ay,{}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n","\n",(0,a.jsx)(i.Ay,{}),"\n",(0,a.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n","\n",(0,a.jsx)(l.Ay,{}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n","\n",(0,a.jsx)(d.Ay,{}),"\n",(0,a.jsx)(n.h3,{id:"request",children:"Request"}),"\n","\n",(0,a.jsx)(h,{}),"\n",(0,a.jsx)(n.h3,{id:"response",children:"Response"}),"\n","\n",(0,a.jsx)(p.Ay,{})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(v,{...e})}):v(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>c});t(96540);var a=t(18215);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function c(e){let{children:n,hidden:t,className:c}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,c),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(96540),r=t(18215),s=t(23104),c=t(56347),o=t(205),i=t(57485),l=t(31682),d=t(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,c.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[c,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[l,u]=f({queryString:t,groupId:r}),[b,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),m=(()=>{const e=l??b;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{m&&i(m)}),[m]);return{selectedValue:c,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=t(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function v(e){let{className:n,block:t,selectedValue:a,selectValue:c,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=i.indexOf(n),r=o[t].value;r!==a&&(l(n),c(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=b(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(g,{...n,...e})]})}function w(e){const n=(0,x.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var a=t(96540);const r={},s=a.createContext(r);function c(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);