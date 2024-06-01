"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[69559],{74807:(e,n,r)=>{r.d(n,{Ay:()=>o,RM:()=>a});var s=r(74848),t=r(28453);const a=[];function c(e){const n={a:"a",p:"p",...(0,t.R)(),...e.components};return(0,s.jsxs)(n.p,{children:["Returns an array of all the logs matching the given filter object. See also the below ",(0,s.jsx)(n.a,{href:"#constraints",children:"Constraints"})," section."]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},89215:(e,n,r)=>{r.d(n,{Ay:()=>o,RM:()=>a});var s=r(74848),t=r(28453);const a=[];function c(e){const n={a:"a",code:"code",p:"p",...(0,t.R)(),...e.components};return(0,s.jsxs)(n.p,{children:["Replace ",(0,s.jsx)(n.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,s.jsx)(n.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},92989:(e,n,r)=>{r.d(n,{Ay:()=>o,RM:()=>a});var s=r(74848),t=r(28453);const a=[];function c(e){const n={a:"a",code:"code",em:"em",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"A filter object containing the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"address"}),": [",(0,s.jsx)(n.em,{children:"optional"}),"] Contract address (20 bytes) or a list of addresses from which logs should originate."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"fromBlock"}),": ",(0,s.jsx)(n.em,{children:'[optional, default is "latest"]'})," A hexadecimal block number, or one of the string tags ",(0,s.jsx)(n.code,{children:"latest"}),", ",(0,s.jsx)(n.code,{children:"earliest"}),", ",(0,s.jsx)(n.code,{children:"pending"}),", ",(0,s.jsx)(n.code,{children:"safe"}),", or ",(0,s.jsx)(n.code,{children:"finalized"}),". See the ",(0,s.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#default-block",children:"default block parameter"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"toBlock"}),": ",(0,s.jsx)(n.em,{children:'[optional, default is "latest"]'})," A hexadecimal block number, or one of the string tags ",(0,s.jsx)(n.code,{children:"latest"}),", ",(0,s.jsx)(n.code,{children:"earliest"}),", ",(0,s.jsx)(n.code,{children:"pending"}),", ",(0,s.jsx)(n.code,{children:"safe"}),", or ",(0,s.jsx)(n.code,{children:"finalized"}),". See the ",(0,s.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#default-block",children:"default block parameter"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"topics"}),": ",(0,s.jsx)(n.em,{children:"[optional]"})," Array of 32 bytes DATA topics. Topics are order-dependent."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"blockhash"}),": ",(0,s.jsx)(n.em,{children:"[optional]"})," Restricts the logs returned to the single block referenced in the 32-byte hash ",(0,s.jsx)(n.code,{children:"blockHash"}),". Using ",(0,s.jsx)(n.code,{children:"blockHash"})," is equivalent to setting ",(0,s.jsx)(n.code,{children:"fromBlock"})," and  ",(0,s.jsx)(n.code,{children:"toBlock"})," to the block number referenced in the ",(0,s.jsx)(n.code,{children:"blockHash"}),". If ",(0,s.jsx)(n.code,{children:"blockHash"})," is present in in the filter criteria, then neither ",(0,s.jsx)(n.code,{children:"fromBlock"})," nor ",(0,s.jsx)(n.code,{children:"toBlock"})," are allowed."]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},13304:(e,n,r)=>{r.d(n,{Ay:()=>i,RM:()=>o});var s=r(74848),t=r(28453),a=r(11470),c=r(19365);const o=[{value:"Constraints",id:"constraints",level:2}];function l(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.A,{children:(0,s.jsx)(c.A,{value:"JSON",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": [\n    {\n      "address": "0x1a94fce7ef36bc90959e206ba569a12afbc91ca1",\n      "blockHash": "0x7c5a35e9cb3e8ae0e221ab470abae9d446c3a5626ce6689fc777dcffcab52c70",\n      "blockNumber": "0x5c29fb",\n      "data": "0x0000000000000000000000003e3310720058c51f0de456e273c626cdd35065700000000000000000000000000000000000000000000000000000000000003185000000000000000000000000000000000000000000000000000000000000318200000000000000000000000000000000000000000000000000000000005c2a23",\n      "logIndex": "0x1d",\n      "removed": false,\n      "topics": [\n        "0x241ea03ca20251805084d27d4440371c34a0b85ff108f6bb5611248f73818b80"\n      ],\n      "transactionHash": "0x3dc91b98249fa9f2c5c37486a2427a3a7825be240c1c84961dfb3063d9c04d50",\n      "transactionIndex": "0x1d"\n    },\n    {\n      "address": "0x06012c8cf97bead5deae237070f9587f8e7a266d",\n      "blockHash": "0x7c5a35e9cb3e8ae0e221ab470abae9d446c3a5626ce6689fc777dcffcab52c70",\n      "blockNumber": "0x5c29fb",\n      "data": "0x00000000000000000000000077ea137625739598666ded665953d26b3d8e374400000000000000000000000000000000000000000000000000000000000749ff00000000000000000000000000000000000000000000000000000000000a749d00000000000000000000000000000000000000000000000000000000005c2a0f",\n      "logIndex": "0x57",\n      "removed": false,\n      "topics": [\n        "0x241ea03ca20251805084d27d4440371c34a0b85ff108f6bb5611248f73818b80"\n      ],\n      "transactionHash": "0x788b1442414cb9c9a36dba2abe250763161a6f6395788a2e808f1b34e92beec1",\n      "transactionIndex": "0x54"\n    }\n  ]\n}\n'})})})}),"\n",(0,s.jsx)(n.h2,{id:"constraints",children:"Constraints"}),"\n",(0,s.jsx)(n.p,{children:"The following constraints apply:"}),"\n",(0,s.jsxs)(n.p,{children:["To prevent queries from consuming too many resources, ",(0,s.jsx)(n.code,{children:"eth_getLogs"})," requests are currently limited by three constraints:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A maximum of 5,000 parameters in a single request"}),"\n",(0,s.jsx)(n.li,{children:"A maximum of 10,000 results can be returned by a single query"}),"\n",(0,s.jsx)(n.li,{children:"Query duration must not exceed 10 seconds"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If a query returns too many results or exceeds the max query duration, one of the following errors is returned:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "error": {\n    "code": -32005,\n    "message": "query returned more than 10000 results"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"or"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "error": {\n    "code": -32005,\n    "message": "query timeout exceeded"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"If this happens:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Limit your query to a smaller number of blocks using ",(0,s.jsx)(n.code,{children:"fromBlock"})," and ",(0,s.jsx)(n.code,{children:"toBlock"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["If querying for commonly used ",(0,s.jsx)(n.code,{children:"topics"}),", consider limiting to a single smart contract ",(0,s.jsx)(n.code,{children:"address"}),"."]}),"\n"]})]})}function i(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},54e3:(e,n,r)=>{r.d(n,{Ay:()=>o,RM:()=>a});var s=r(74848),t=r(28453);const a=[];function c(e){const n={code:"code",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"log objects"}),": An array of log objects, or an empty array if nothing has changed since last poll. Log objects contain the following keys and their values:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"removed"}),": (boolean) ",(0,s.jsx)(n.code,{children:"true"})," when the log was removed, due to a chain reorganization. ",(0,s.jsx)(n.code,{children:"false"})," if it's a valid log."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"logIndex"}),": Hexadecimal of the log index position in the block. ",(0,s.jsx)(n.code,{children:"Null"})," when it is a pending log."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"transactionIndex"}),": Hexadecimal of the transactions index position from which the log created. ",(0,s.jsx)(n.code,{children:"Null"})," when it is a pending log."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"transactionHash"}),": 32 bytes. Hash of the transactions from which this log was created. ",(0,s.jsx)(n.code,{children:"Null"})," when it is a pending log."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"blockHash"}),": 32 bytes. Hash of the block where this log was in. ",(0,s.jsx)(n.code,{children:"Null"})," when it is a pending log."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"blockNumber"}),": Block number where this log was in. ",(0,s.jsx)(n.code,{children:"Null"})," when it is a pending log."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"address"}),": 20 bytes. Address from which this log originated."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"data"}),": Contains one or more 32-bytes non-indexed arguments of the log."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"topics"}),": An array of 0 to 4 indexed log arguments, each 32 bytes. In solidity the first topic is the hash of the signature of the event (e.g. Deposit(address,bytes32,uint256)), except when you declared the event with the anonymous specifier."]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},39386:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>b,contentTitle:()=>x,default:()=>v,frontMatter:()=>f,metadata:()=>m,toc:()=>j});var s=r(74848),t=r(28453),a=r(11470),c=r(19365),o=r(74807),l=r(92989),i=r(54e3),d=r(89215);function h(e){const n={code:"code",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(a.A,{children:[(0,s.jsx)(c.A,{value:"cURL",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl https://avalanche-mainnet.infura.io/v3/YOUR-API-KEY \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{"jsonrpc":"2.0","method":"eth_getLogs","params":[{"blockHash": "0x7c5a35e9cb3e8ae0e221ab470abae9d446c3a5626ce6689fc777dcffcab52c70", "topics":["0x241ea03ca20251805084d27d4440371c34a0b85ff108f6bb5611248f73818b80"]}],"id":1}\'\n'})})}),(0,s.jsx)(c.A,{value:"WSS",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'wscat -c wss://avalanche-mainnet.infura.io/ws/v3/YOUR-API-KEY -x \'{"jsonrpc":"2.0","method":"eth_getLogs","params":[{"blockHash": "0x7c5a35e9cb3e8ae0e221ab470abae9d446c3a5626ce6689fc777dcffcab52c70", "topics":["0x241ea03ca20251805084d27d4440371c34a0b85ff108f6bb5611248f73818b80"]}],"id":1}\'\n'})})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}var p=r(13304);const f={title:"eth_getLogs"},x=void 0,m={id:"network-apis/avalanche-c-chain/json-rpc-methods/eth_getlogs",title:"eth_getLogs",description:"Parameters",source:"@site/services/network-apis/avalanche-c-chain/json-rpc-methods/eth_getlogs.mdx",sourceDirName:"network-apis/avalanche-c-chain/json-rpc-methods",slug:"/network-apis/avalanche-c-chain/json-rpc-methods/eth_getlogs",permalink:"/test-integrate-infura/services/network-apis/avalanche-c-chain/json-rpc-methods/eth_getlogs",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/network-apis/avalanche-c-chain/json-rpc-methods/eth_getlogs.mdx",tags:[],version:"current",frontMatter:{title:"eth_getLogs"},sidebar:"servicesSidebar",previous:{title:"eth_getCode",permalink:"/test-integrate-infura/services/network-apis/avalanche-c-chain/json-rpc-methods/eth_getcode"},next:{title:"eth_getProof",permalink:"/test-integrate-infura/services/network-apis/avalanche-c-chain/json-rpc-methods/eth_getproof"}},b={},j=[...o.RM,{value:"Parameters",id:"parameters",level:2},...l.RM,{value:"Returns",id:"returns",level:2},...i.RM,{value:"Example",id:"example",level:2},...d.RM,{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},...p.RM];function g(e){const n={h2:"h2",h3:"h3",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n","\n",(0,s.jsx)(l.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n","\n",(0,s.jsx)(i.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n","\n",(0,s.jsx)(d.Ay,{}),"\n",(0,s.jsx)(n.h3,{id:"request",children:"Request"}),"\n","\n",(0,s.jsx)(u,{}),"\n",(0,s.jsx)(n.h3,{id:"response",children:"Response"}),"\n","\n",(0,s.jsx)(p.Ay,{})]})}function v(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>c});r(96540);var s=r(18215);const t={tabItem:"tabItem_Ymn6"};var a=r(74848);function c(e){let{children:n,hidden:r,className:c}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,c),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>k});var s=r(96540),t=r(18215),a=r(23104),c=r(56347),o=r(205),l=r(57485),i=r(31682),d=r(70679);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}}))}(r);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const t=(0,c.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})}),[a,t])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,a=u(e),[c,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[i,h]=f({queryString:r,groupId:t}),[x,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,a]=(0,d.Dv)(r);return[t,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:t}),b=(()=>{const e=i??x;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:c,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),m(e)}),[h,m,a]),tabValues:a}}var m=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(74848);function g(e){let{className:n,block:r,selectedValue:s,selectValue:c,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,a.a_)(),d=e=>{const n=e.currentTarget,r=l.indexOf(n),t=o[r].value;t!==s&&(i(n),c(t))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...a,className:(0,t.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:t}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,t.A)("tabs-container",b.tabList),children:[(0,j.jsx)(g,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function k(e){const n=(0,m.A)();return(0,j.jsx)(y,{...e,children:h(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>o});var s=r(96540);const t={},a=s.createContext(t);function c(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);