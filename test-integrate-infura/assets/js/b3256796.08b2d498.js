"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[54649],{4192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(74848),r=n(28453),s=n(11470),c=n(19365);const o={},i="Trace transactions",l={id:"network-apis/ethereum/how-to/trace-transactions",title:"Trace transactions",description:"Trace API is currently an open beta feature, available to paying Infura customers.",source:"@site/services/network-apis/ethereum/how-to/trace-transactions.md",sourceDirName:"network-apis/ethereum/how-to",slug:"/network-apis/ethereum/how-to/trace-transactions",permalink:"/test-integrate-infura/services/network-apis/ethereum/how-to/trace-transactions",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/network-apis/ethereum/how-to/trace-transactions.md",tags:[],version:"current",frontMatter:{},sidebar:"servicesSidebar",previous:{title:"Subscribe to events",permalink:"/test-integrate-infura/services/network-apis/ethereum/how-to/subscribe-to-events"},next:{title:"JSON-RPC methods",permalink:"/test-integrate-infura/services/network-apis/ethereum/json-rpc-methods/"}},d={},u=[{value:"Ad-hoc tracing APIs",id:"ad-hoc-tracing-apis",level:2},{value:"Transaction-trace filtering APIs",id:"transaction-trace-filtering-apis",level:2},{value:"Trace a transaction example",id:"trace-a-transaction-example",level:2},{value:"Use cases",id:"use-cases",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"trace-transactions",children:"Trace transactions"}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"Trace API is currently an open beta feature, available to paying Infura customers."})}),"\n",(0,a.jsxs)(t.p,{children:["Infura provides access to a trace API that allows you to get detailed transaction processing information. Use the API to\nextract information about contract interactions, transactions, and blocks on the Ethereum network. You can\nalso use the API to retrieve transaction details that are not recorded on the blockchain. For example, use the\n",(0,a.jsx)(t.a,{href:"/test-integrate-infura/services/network-apis/ethereum/json-rpc-methods/trace-methods/trace_call",children:(0,a.jsx)(t.code,{children:"trace_call"})})," API to observe contract interactions."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Example for using the trace_call API",src:n(83434).A+"",width:"1000",height:"698"})}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["View the ",(0,a.jsx)(t.a,{href:"https://www.youtube.com/watch?v=RpjbiDlwPEs",children:"trace API tutorial"})," for more information on how to call the API to\ntrace, debug, analyze, and secure smart contracts."]})}),"\n",(0,a.jsxs)(t.p,{children:["The trace API provides endpoints that can be categorized into the following groups, ",(0,a.jsx)(t.a,{href:"#ad-hoc-tracing-apis",children:"ad-hoc tracing APIs"}),"\nand ",(0,a.jsx)(t.a,{href:"#transaction-trace-filtering-apis",children:"transaction-trace filtering APIs"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"ad-hoc-tracing-apis",children:"Ad-hoc tracing APIs"}),"\n",(0,a.jsxs)(t.p,{children:["These API endpoints allow you to use the ",(0,a.jsx)(t.a,{href:"../json-rpc-methods/trace-methods#trace",children:(0,a.jsx)(t.code,{children:"trace"})})," or\n",(0,a.jsx)(t.a,{href:"../json-rpc-methods/trace-methods#statediff",children:(0,a.jsx)(t.code,{children:"stateDiff"})})," diagnostic options when tracing calls or transactions, and are\nhelpful for debugging transactions and analyzing state changes."]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"vmTrace"})," diagnostic option is not supported."]})}),"\n",(0,a.jsx)(t.p,{children:"The ad-hoc tracing API endpoints are:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/test-integrate-infura/services/network-apis/ethereum/json-rpc-methods/trace-methods/trace_call",children:(0,a.jsx)(t.code,{children:"trace_call"})})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/test-integrate-infura/services/network-apis/ethereum/json-rpc-methods/trace-methods/trace_callmany",children:(0,a.jsx)(t.code,{children:"trace_callMany"})})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"transaction-trace-filtering-apis",children:"Transaction-trace filtering APIs"}),"\n",(0,a.jsxs)(t.p,{children:["These API endpoints allow you to filter and search by specific information such as the block, address, or transaction. The endpoints\nonly use the ",(0,a.jsx)(t.a,{href:"../json-rpc-methods/trace-methods#trace",children:(0,a.jsx)(t.code,{children:"trace"})})," diagnostic option. The transaction-trace filtering API endpoints are:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/test-integrate-infura/services/network-apis/ethereum/json-rpc-methods/trace-methods/trace_block",children:(0,a.jsx)(t.code,{children:"trace_block"})})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/test-integrate-infura/services/network-apis/ethereum/json-rpc-methods/trace-methods/trace_transaction",children:(0,a.jsx)(t.code,{children:"trace_transaction"})})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/test-integrate-infura/services/network-apis/ethereum/json-rpc-methods/trace-methods/trace_filter",children:(0,a.jsx)(t.code,{children:"trace_filter"})})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"trace-a-transaction-example",children:"Trace a transaction example"}),"\n",(0,a.jsx)(t.p,{children:"In the following example,you'll trace a transaction using a transaction hash on Ethereum mainnet. The result displays two traces, meaning two separate calls were made within the transaction, and includes the gas used for each call."}),"\n",(0,a.jsxs)(t.p,{children:["This example represents a call to the ",(0,a.jsx)(t.code,{children:"transfer"})," function of an ERC-20 token contract (indicated in the ",(0,a.jsx)(t.code,{children:"input"})," field), transferring tokens to the address, ",(0,a.jsx)(t.code,{children:"0x7154980e9be95eab4eef2269650d4c7e17f156b8"}),"."]}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(c.A,{value:"cURL",label:"cURL",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'curl https://mainnet.infura.io/v3/<API-KEY> \\\n    -X POST \\\n    -H "Content-Type: application/json" \\\n    -d \'{"jsonrpc": "2.0", "method": "trace_transaction","params": ["0x1e404c4bf580688c5527df2ce5aceb3db5de49479ab7dd321dd4615e4f5a7a5c"],"id": 1}\'\n'})})}),(0,a.jsx)(c.A,{value:"Result",label:"Result",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": [\n    {\n      "action": {\n        "callType": "call",\n        "from": "0x6438b5009a81b85800511f12a3d15f61fb553f53",\n        "gas": "0x12f44",\n        "input": "0xa9059cbb0000000000000000000000007154980e9be95eab4eef2269650d4c7e17f156b80000000000000000000000000000000000000000000000000000000033721c51",\n        "to": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",\n        "value": "0x0"\n      },\n      "blockHash": "0xb85642efcf81c2dc0d0db617bd83b1aacb3de2df930e43f555732875b08d4e0f",\n      "blockNumber": 17317923,\n      "result": {\n        "gasUsed": "0xabf1",\n        "output": "0x0000000000000000000000000000000000000000000000000000000000000001"\n      },\n      "subtraces": 1,\n      "traceAddress": [],\n      "transactionHash": "0x1e404c4bf580688c5527df2ce5aceb3db5de49479ab7dd321dd4615e4f5a7a5c",\n      "transactionPosition": 121,\n      "type": "call"\n    },\n    {\n      "action": {\n        "callType": "delegatecall",\n        "from": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",\n        "gas": "0x10eac",\n        "input": "0xa9059cbb0000000000000000000000007154980e9be95eab4eef2269650d4c7e17f156b80000000000000000000000000000000000000000000000000000000033721c51",\n        "to": "0xa2327a938febf5fec13bacfb16ae10ecbc4cbdcf",\n        "value": "0x0"\n      },\n      "blockHash": "0xb85642efcf81c2dc0d0db617bd83b1aacb3de2df930e43f555732875b08d4e0f",\n      "blockNumber": 17317923,\n      "result": {\n        "gasUsed": "0x8f78",\n        "output": "0x0000000000000000000000000000000000000000000000000000000000000001"\n      },\n      "subtraces": 0,\n      "traceAddress": [0],\n      "transactionHash": "0x1e404c4bf580688c5527df2ce5aceb3db5de49479ab7dd321dd4615e4f5a7a5c",\n      "transactionPosition": 121,\n      "type": "call"\n    }\n  ]\n}\n'})})})]}),"\n",(0,a.jsx)(t.h2,{id:"use-cases",children:"Use cases"}),"\n",(0,a.jsx)(t.p,{children:"Use cases for the trace API include:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Debugging transactions"})," \u2013 The trace API allows you to analyze and debug Ethereum transactions. Trace the execution of a transaction to identify issues or bugs in smart contracts or dapps. Track the sequence of operations, inspect the input and output data, and pinpoint potential errors or unexpected behavior. "]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Optimizing gas usage"})," \u2013 The trace API allows you to analyze the gas consumption of transactions and identify areas where gas usage can be optimized. By examining the execution trace, you can spot expensive operations, inefficient code patterns, or unnecessary computations that consume excessive gas. You can use this information to refactor smart contracts and reduce transaction costs for users."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Security auditing"})," \u2013 Conduct security audits of smart contracts and dapps by tracing the execution flow. This allows you to identify potential vulnerabilities or attack vectors in the code. You can analyze contract interactions, track data modifications, and validate that the smart contract behaves as intended. This helps uncover security loopholes and ensures that the smart contracts are robust against various types of attacks, such as reentrancy or unauthorized access."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var a=n(18215);const r={tabItem:"tabItem_Ymn6"};var s=n(74848);function c(e){let{children:t,hidden:n,className:c}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,c),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>y});var a=n(96540),r=n(18215),s=n(23104),c=n(56347),o=n(205),i=n(57485),l=n(31682),d=n(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,c.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=h(e),[c,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[l,u]=f({queryString:n,groupId:r}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,d.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),x=(()=>{const e=l??b;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{x&&i(x)}),[x]);return{selectedValue:c,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),m(e)}),[u,m,s]),tabValues:s}}var m=n(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function j(e){let{className:t,block:n,selectedValue:a,selectValue:c,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),r=o[n].value;r!==a&&(l(t),c(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,g.jsx)(j,{...t,...e}),(0,g.jsx)(v,{...t,...e})]})}function y(e){const t=(0,m.A)();return(0,g.jsx)(w,{...e,children:u(e.children)},String(t))}},83434:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/trace-call-67d553b8f9499686d6a7c479f2ac86d0.png"},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var a=n(96540);const r={},s=a.createContext(r);function c(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);