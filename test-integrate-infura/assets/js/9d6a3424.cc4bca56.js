"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[38352],{64762:(e,n,r)=>{r.d(n,{Ay:()=>i,RM:()=>o});var t=r(74848),s=r(28453);const o=[];function a(e){const n={p:"p",...(0,s.R)(),...e.components};return(0,t.jsx)(n.p,{children:"Returns historical gas information, allowing you to track trends over time."})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},72374:(e,n,r)=>{r.d(n,{Ay:()=>i,RM:()=>o});var t=r(74848),s=r(28453);const o=[];function a(e){const n={a:"a",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,t.jsx)(n.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},16014:(e,n,r)=>{r.d(n,{Ay:()=>i,RM:()=>o});var t=r(74848),s=r(28453);const o=[];function a(e){const n={code:"code",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"blockCount"}),": (integer) Number of blocks in the requested range. Between 1 and 1024 blocks can be requested in a single query. If blocks in the specified block range are not available, then only the fee history for available blocks is returned."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"newestBlock"}),": (string) Integer representing the highest number block of the requested range, or one of the string tags ",(0,t.jsx)(n.code,{children:"latest"}),", ",(0,t.jsx)(n.code,{children:"earliest"}),", or ",(0,t.jsx)(n.code,{children:"pending"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"array"})," of ",(0,t.jsx)(n.code,{children:"integers"}),": (optional) A monotonically increasing list of percentile values to sample from each block's effective priority fees per gas in ascending order, weighted by gas used."]}),"\n"]})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28883:(e,n,r)=>{r.d(n,{Ay:()=>c,RM:()=>i});var t=r(74848),s=r(28453),o=r(11470),a=r(19365);const i=[];function l(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsx)(o.A,{children:(0,t.jsx)(a.A,{value:"JSON",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'{\n    "jsonrpc": "2.0",\n    "result": {\n        "baseFeePerGas": [\n            "0x3da8e7618",\n            "0x3e1ba3b1b",\n            "0x3dfd72b90",\n            "0x3d64eee76",\n            "0x3d4da2da0",\n            "0x3ccbcac6b"\n        ],\n        "gasUsedRatio": [\n            0.5290747666666666,\n            0.49240453333333334,\n            0.4615576,\n            0.49407083333333335,\n            0.4669053\n        ],\n        "oldestBlock": "0xfab8ac",\n        "reward": [\n            [\n                "0x59682f00",\n                "0x59682f00"\n            ],\n            [\n                "0x59682f00",\n                "0x59682f00"\n            ],\n            [\n                "0x3b9aca00",\n                "0x59682f00"\n            ],\n            [\n                "0x510b0870",\n                "0x59682f00"\n            ],\n            [\n                "0x3b9aca00",\n                "0x59682f00"\n            ]\n        ]\n    },\n    "id": 0\n}\n'})})})})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},13889:(e,n,r)=>{r.d(n,{Ay:()=>i,RM:()=>o});var t=r(74848),s=r(28453);const o=[];function a(e){const n={a:"a",code:"code",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"oldestBlock"}),": Lowest number block of the returned range expressed as a hexadecimal number."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"baseFeePerGas"}),": An array of block base fees per gas, including an extra block value. The extra value is the next block after the newest block in the returned range. Returns zeroes for blocks created before ",(0,t.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1559",children:"EIP-1559"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"gasUsedRatio"}),": An array of block gas used ratios. These are calculated as the ratio of ",(0,t.jsx)(n.code,{children:"gasUsed"})," and ",(0,t.jsx)(n.code,{children:"gasLimit"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"reward"}),": An array of effective priority fee per gas data points from a single block. All zeroes are returned if the block is empty."]}),"\n"]})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},15917:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>b,contentTitle:()=>m,default:()=>j,frontMatter:()=>f,metadata:()=>x,toc:()=>v});var t=r(74848),s=r(28453),o=r(11470),a=r(19365),i=r(64762),l=r(16014),c=r(13889),u=r(72374);function d(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(o.A,{children:[(0,t.jsx)(a.A,{value:"cURL",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl https://polygon-mainnet.infura.io/v3/YOUR-API-KEY \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{"id": 1, "jsonrpc": "2.0", "method": "eth_feeHistory", "params": ["0x5", "latest", [20,30]] }\'\n'})})}),(0,t.jsx)(a.A,{value:"WSS",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'wscat -c wss://polygon-mainnet.infura.io/ws/v3/YOUR-API-KEY -x \'{"jsonrpc":"2.0","method":"eth_feeHistory","params":["0x5", "latest", []],"id":1}\'\n'})})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}var h=r(28883);const f={title:"eth_feeHistory"},m=void 0,x={id:"network-apis/polygon-pos/json-rpc-methods/eth_feehistory",title:"eth_feeHistory",description:"This JSON-RPC method allows a request to be forwarded to a partner service provider if Infura should",source:"@site/services/network-apis/polygon-pos/json-rpc-methods/eth_feehistory.mdx",sourceDirName:"network-apis/polygon-pos/json-rpc-methods",slug:"/network-apis/polygon-pos/json-rpc-methods/eth_feehistory",permalink:"/test-integrate-infura/services/network-apis/polygon-pos/json-rpc-methods/eth_feehistory",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/network-apis/polygon-pos/json-rpc-methods/eth_feehistory.mdx",tags:[],version:"current",frontMatter:{title:"eth_feeHistory"},sidebar:"servicesSidebar",previous:{title:"eth_estimateGas",permalink:"/test-integrate-infura/services/network-apis/polygon-pos/json-rpc-methods/eth_estimategas"},next:{title:"eth_gasPrice",permalink:"/test-integrate-infura/services/network-apis/polygon-pos/json-rpc-methods/eth_gasprice"}},b={},v=[...i.RM,{value:"Parameters",id:"parameters",level:2},...l.RM,{value:"Returns",id:"returns",level:2},...c.RM,{value:"Example",id:"example",level:2},...u.RM,{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},...h.RM];function g(e){const n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",p:"p",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.Ay,{}),"\n",(0,t.jsxs)(n.admonition,{title:"For Growth and Custom service plans",type:"info",children:[(0,t.jsxs)(n.p,{children:["This JSON-RPC method allows a request to be forwarded to a partner service provider if Infura should\nexperience a service issue or outage. See ",(0,t.jsx)(n.a,{href:"/test-integrate-infura/services/network-apis/polygon-pos/concepts/failover-protection",children:"Failover protection"}),"\nand ",(0,t.jsx)(n.a,{href:"/test-integrate-infura/services/network-apis/polygon-pos/how-to/failover-protection-imp-polygon",children:"Enable API request forwarding"}),"\nfor complete details."]}),(0,t.jsx)(n.p,{children:"If you would like failover protection but don't qualify under your current plan, then either\nself-upgrade to the Growth plan or contact a sales representative to upgrade to a Custom plan."})]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n","\n",(0,t.jsx)(l.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n","\n",(0,t.jsx)(c.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n","\n",(0,t.jsx)(u.Ay,{}),"\n",(0,t.jsx)(n.h3,{id:"request",children:"Request"}),"\n","\n",(0,t.jsx)(p,{}),"\n",(0,t.jsx)(n.h3,{id:"response",children:"Response"}),"\n","\n",(0,t.jsx)(h.Ay,{})]})}function j(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>a});r(96540);var t=r(18215);const s={tabItem:"tabItem_Ymn6"};var o=r(74848);function a(e){let{children:n,hidden:r,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,a),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(96540),s=r(18215),o=r(23104),a=r(56347),i=r(205),l=r(57485),c=r(31682),u=r(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const s=(0,a.W6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,o=p(e),[a,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[c,d]=f({queryString:r,groupId:s}),[m,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,u.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:s}),b=(()=>{const e=c??m;return h({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),x(e)}),[d,x,o]),tabValues:o}}var x=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function g(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const n=e.currentTarget,r=l.indexOf(n),s=i[r].value;s!==t&&(c(n),a(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,s.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:s}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,v.jsx)(g,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function w(e){const n=(0,x.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var t=r(96540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);