"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[64432],{79180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(74848),a=n(28453),s=n(11470),l=n(19365);const i={title:"starknet_call"},o=void 0,c={id:"network-apis/starknet/json-rpc-methods/starknet_call",title:"starknet_call",description:"Calls the specified contract function at the specified block, and returns the value of the function,",source:"@site/services/network-apis/starknet/json-rpc-methods/starknet_call.mdx",sourceDirName:"network-apis/starknet/json-rpc-methods",slug:"/network-apis/starknet/json-rpc-methods/starknet_call",permalink:"/test-integrate-infura/services/network-apis/starknet/json-rpc-methods/starknet_call",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/network-apis/starknet/json-rpc-methods/starknet_call.mdx",tags:[],version:"current",frontMatter:{title:"starknet_call"},sidebar:"servicesSidebar",previous:{title:"starknet_blockNumber",permalink:"/test-integrate-infura/services/network-apis/starknet/json-rpc-methods/starknet_blocknumber"},next:{title:"starknet_chainId",permalink:"/test-integrate-infura/services/network-apis/starknet/json-rpc-methods/starknet_chainid"}},u={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Calls the specified contract function at the specified block, and returns the value of the function,\nwithout creating a StarkNet transaction.\nThis method does not change the network state."}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"request"}),": [",(0,r.jsx)(t.em,{children:"Required"}),"] The function call object containing:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"contract_address"}),": (string) [",(0,r.jsx)(t.em,{children:"Required"}),"] Address the transaction is sent from."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"entry_point_selector"}),": (string) [",(0,r.jsx)(t.em,{children:"Required"}),"] Smart contract entry point selector."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"calldata"}),": (array of strings)[",(0,r.jsx)(t.em,{children:"Required"}),"] The parameters passed to the function."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"block_id"}),": [",(0,r.jsx)(t.em,{children:"Required"}),"] The block parameter object containing one of the following:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"block_hash"}),": (string) Block hash."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"block_number"}),": (integer) Decimal block number."]}),"\n",(0,r.jsxs)(t.li,{children:["One of the string tags ",(0,r.jsx)(t.code,{children:"latest"})," or ",(0,r.jsx)(t.code,{children:"pending"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"The function's return value."}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(t.p,{children:["Replace ",(0,r.jsx)(t.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,r.jsx)(t.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"request",children:"Request"}),"\n",(0,r.jsx)(s.A,{children:(0,r.jsx)(l.A,{value:"cURL",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'curl https://starknet-mainnet.infura.io/v3/YOUR-API-KEY \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "jsonrpc": "2.0",\n    "method": "starknet_call",\n    "params": {\n      "request": {\n        "contract_address": "0x049E0cCb70e1F1684F43116e9E42e60D0f64d3D254Be8D8A1143dba43dEad733",\n        "calldata": ["0xbfc2ea1a458d7cac752a4a688dbb8e0cff399e1b"],\n        "entry_point_selector": "0x12ead94ae9d3f9d2bdb6b847cf255f1f398193a1f88884a0ae8e18f24a037b6"\n      },\n      "block_id": {\n        "block_number": 470207\n      }\n    },\n    "id": 0\n  }\'\n'})})})}),"\n",(0,r.jsx)(t.h3,{id:"response",children:"Response"}),"\n",(0,r.jsx)(s.A,{children:(0,r.jsx)(l.A,{value:"JSON",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "result": [],\n  "id": 0\n}\n'})})})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var r=n(18215);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),a=n(18215),s=n(23104),l=n(56347),i=n(205),o=n(57485),c=n(31682),u=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,d]=m({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),x=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{x&&o(x)}),[x]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),a=i[n].value;a!==r&&(c(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function g(e){const t=f(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,j.jsx)(v,{...t,...e}),(0,j.jsx)(k,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,j.jsx)(g,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var r=n(96540);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);