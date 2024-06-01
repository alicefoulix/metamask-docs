"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[17597],{29719:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(74848),a=n(28453),s=n(11470),c=n(19365);const i={title:"starknet_getClassAt"},o=void 0,l={id:"network-apis/starknet/json-rpc-methods/starknet_getclassat",title:"starknet_getClassAt",description:"Returns the contract class definition of the specified contract class address in the specified block.",source:"@site/services/network-apis/starknet/json-rpc-methods/starknet_getclassat.mdx",sourceDirName:"network-apis/starknet/json-rpc-methods",slug:"/network-apis/starknet/json-rpc-methods/starknet_getclassat",permalink:"/test-integrate-infura/services/network-apis/starknet/json-rpc-methods/starknet_getclassat",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/network-apis/starknet/json-rpc-methods/starknet_getclassat.mdx",tags:[],version:"current",frontMatter:{title:"starknet_getClassAt"},sidebar:"servicesSidebar",previous:{title:"starknet_getClass",permalink:"/test-integrate-infura/services/network-apis/starknet/json-rpc-methods/starknet_getclass"},next:{title:"starknet_getClassHashAt",permalink:"/test-integrate-infura/services/network-apis/starknet/json-rpc-methods/starknet_getclasshashat"}},u={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function p(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Returns the contract class definition of the specified contract class address in the specified block."}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"block_id"}),": [",(0,r.jsx)(t.em,{children:"Required"}),"] The block parameter object containing one of the following:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"block_hash"}),": (string) Block hash."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"block_number"}),": (integer) Decimal block number."]}),"\n",(0,r.jsxs)(t.li,{children:["One of the string tags ",(0,r.jsx)(t.code,{children:"latest"})," or ",(0,r.jsx)(t.code,{children:"pending"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"contract_address"}),": (string) [",(0,r.jsx)(t.em,{children:"Required"}),"] The address of the requested\n",(0,r.jsx)(t.a,{href:"https://docs.starknet.io/documentation/architecture_and_concepts/Smart_Contracts/contract-classes/",children:"contract class"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.a,{href:"https://docs.starknet.io/documentation/architecture_and_concepts/Smart_Contracts/contract-classes/",children:"contract class"}),"\nobject containing:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"abi"}),": The class ABI, as supplied by the user declaring the class."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"contract_class_version"}),": The version of the contract class object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"entry_points_by_type"}),": Entry points by type."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"sierra_program"}),": The list of Sierra instructions of which the program consists."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(t.p,{children:["Replace ",(0,r.jsx)(t.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,r.jsx)(t.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"request",children:"Request"}),"\n",(0,r.jsx)(s.A,{children:(0,r.jsx)(c.A,{value:"cURL",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'curl https://starknet-mainnet.infura.io/v3/YOUR-API-KEY \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "jsonrpc": "2.0",\n    "method": "starknet_getClassAt",\n    "params": {\n      "block_id": {\n        "block_hash": "0x041b10c45dc3f39372f7b9409261cac9d880c5d75a5bb077d028db20b1bd76c4"\n      },\n      "contract_address": "0x03b554093fb0a7460913be2d5c011cb5ac4333dfcfe6125851bcd3f926a3b558"\n    },\n    "id": 0\n  }\'\n'})})})}),"\n",(0,r.jsx)(t.h3,{id:"response",children:"Response"}),"\n",(0,r.jsx)(s.A,{children:(0,r.jsx)(c.A,{value:"JSON",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": {\n    "abi": "[{\\"type\\": \\"impl\\", \\"name\\": \\"ISTARKSImpl\\", \\"interface_name\\": \\"ins::ins::ISTARKS\\"}, {\\"type\\": \\"interface\\", \\"name\\": \\"ins::ins::ISTARKS\\", \\"items\\": [{\\"type\\": \\"function\\", \\"name\\": \\"get_total_supply\\", \\"inputs\\": [{\\"name\\": \\"tick\\", \\"type\\": \\"core::felt252\\"}], \\"outputs\\": [{\\"type\\": \\"core::integer::u128\\"}], \\"state_mutability\\": \\"view\\"}, {\\"type\\": \\"function\\", \\"name\\": \\"get_max_supply\\", \\"inputs\\": [{\\"name\\": \\"tick\\", \\"type\\": \\"core::felt252\\"}], \\"outputs\\": [{\\"type\\": \\"core::integer::u128\\"}], \\"state_mutability\\": \\"view\\"}, {\\"type\\": \\"function\\", \\"name\\": \\"balance_of\\", \\"inputs\\": [{\\"name\\": \\"tick\\", \\"type\\": \\"core::felt252\\"}, {\\"name\\": \\"account\\", \\"type\\": \\"core::starknet::contract_address::ContractAddress\\"}], \\"outputs\\": [{\\"type\\": \\"core::integer::u128\\"}], \\"state_mutability\\": \\"view\\"}, {\\"type\\": \\"function\\", \\"name\\": \\"allowance\\", \\"inputs\\": [{\\"name\\": \\"tick\\", \\"type\\": \\"core::felt252\\"}, {\\"name\\": \\"owner\\", \\"type\\": \\"core::starknet::contract_address::ContractAddress\\"}, {\\"name\\": \\"spender\\", \\"type\\": \\"core::starknet::contract_address::ContractAddress\\"}], \\"outputs\\": [{\\"type\\": \\"core::integer::u128\\"}], \\"state_mutability\\": \\"view\\"}, {\\"type\\": \\"function\\", \\"name\\": \\"get_holders\\", \\"inputs\\": [{\\"name\\": \\"tick\\", \\"type\\": \\"core::felt252\\"}], \\"outputs\\": [{\\"type\\": \\"core::integer::u128\\"}], \\"state_mutability\\": \\"view\\"}, {\\"type\\": \\"function\\", \\"name\\": \\"transfer\\", \\"inputs\\": [{\\"name\\": \\"tick\\", \\"type\\": \\"core::felt252\\"}, {\\"name\\": \\"recipient\\", \\"type\\": \\"core::starknet::contract_address::ContractAddress\\"}, {\\"name\\": \\"amount\\", \\"type\\": \\"core::integer::u128\\"}], \\"outputs\\": [], \\"state_mutability\\": \\"external\\"}, {\\"type\\": \\"function\\", \\"name\\": \\"transfer_from\\", \\"inputs\\": [{\\"name\\": \\"tick\\", \\"type\\": \\"core::felt252\\"}, {\\"name\\": \\"sender\\", \\"type\\": \\"core::starknet::contract_address::ContractAddress\\"}, {\\"name\\": \\"recipient\\", \\"type\\": \\"core::starknet::contract_address::ContractAddress\\"}, {\\"name\\": \\"amount\\", \\"type\\": \\"core::integer::u128\\"}], \\"outputs\\": [], \\"state_mutability\\": \\"external\\"}, {\\"type\\": \\"function\\", \\"name\\": \\"approve\\", \\"inputs\\": [{\\"name\\": \\"tick\\", \\"type\\": \\"core::felt252\\"}, {\\"name\\": \\"spender\\", \\"type\\": \\"core::starknet::contract_address::ContractAddress\\"}, {\\"name\\": \\"amount\\", \\"type\\": \\"core::integer::u128\\"}], \\"outputs\\": [], \\"state_mutability\\": \\"external\\"}, {\\"type\\": \\"function\\", \\"name\\": \\"increase_allowance\\", \\"inputs\\": [{\\"name\\": \\"tick\\", \\"type\\": \\"core::felt252\\"}, {\\"name\\": \\"spender\\", \\"type\\": \\"core::starknet::contract_address::ContractAddress\\"}, {\\"name\\": \\"added_value\\", \\"type\\": \\"core::integer::u128\\"}], \\"outputs\\": [], \\"state_mutability\\": \\"external\\"}, {\\"type\\": \\"function\\", \\"name\\": \\"decrease_allowance\\", \\"inputs\\": [{\\"name\\": \\"tick\\", \\"type\\": \\"core::felt252\\"}, {\\"name\\": \\"spender\\", \\"type\\": \\"core::starknet::contract_address::ContractAddress\\"}, {\\"name\\": \\"subtracted_value\\", \\"type\\": \\"core::integer::u128\\"}], \\"outputs\\": [], \\"state_mutability\\": \\"external\\"}, {\\"type\\": \\"function\\", \\"name\\": \\"Inscribe\\", \\"inputs\\": [{\\"name\\": \\"tick\\", \\"type\\": \\"core::felt252\\"}], \\"outputs\\": [], \\"state_mutability\\": \\"external\\"}, {\\"type\\": \\"function\\", \\"name\\": \\"Deploy\\", \\"inputs\\": [{\\"name\\": \\"tick\\", \\"type\\": \\"core::felt252\\"}, {\\"name\\": \\"maxSupply\\", \\"type\\": \\"core::integer::u128\\"}, {\\"name\\": \\"maxPerMint\\", \\"type\\": \\"core::integer::u128\\"}], \\"outputs\\": [], \\"state_mutability\\": \\"external\\"}, {\\"type\\": \\"function\\", \\"name\\": \\"get_tick_counter\\", \\"inputs\\": [], \\"outputs\\": [{\\"type\\": \\"core::integer::u128\\"}], \\"state_mutability\\": \\"view\\"}, {\\"type\\": \\"function\\", \\"name\\": \\"get_ticks\\", \\"inputs\\": [], \\"outputs\\": [{\\"type\\": \\"core::array::Array::\\u003ccore::integer::u128\\u003e\\"}], \\"state_mutability\\": \\"view\\"}]}, {\\"type\\": \\"constructor\\", \\"name\\": \\"constructor\\", \\"inputs\\": [{\\"name\\": \\"_admin\\", \\"type\\": \\"core::starknet::contract_address::ContractAddress\\"}, {\\"name\\": \\"_ff\\", \\"type\\": \\"core::starknet::contract_address::ContractAddress\\"}, {\\"name\\": \\"_eth\\", \\"type\\": \\"core::starknet::contract_address::ContractAddress\\"}, {\\"name\\": \\"_firstTick\\", \\"type\\": \\"core::felt252\\"}, {\\"name\\": \\"_firstTickSupply\\", \\"type\\": \\"core::integer::u128\\"}, {\\"name\\": \\"_firstTickPerMint\\", \\"type\\": \\"core::integer::u128\\"}]}, {\\"type\\": \\"event\\", \\"name\\": \\"ins::ins::STARKS::Transfer\\", \\"kind\\": \\"struct\\", \\"members\\": [{\\"name\\": \\"tick\\", \\"type\\": \\"core::felt252\\", \\"kind\\": \\"data\\"}, {\\"name\\": \\"from\\", \\"type\\": \\"core::starknet::contract_address::ContractAddress\\", \\"kind\\": \\"data\\"}, {\\"name\\": \\"to\\", \\"type\\": \\"core::starknet::contract_address::ContractAddress\\", \\"kind\\": \\"data\\"}, {\\"name\\": \\"value\\", \\"type\\": \\"core::integer::u128\\", \\"kind\\": \\"data\\"}]}, {\\"type\\": \\"event\\", \\"name\\": \\"ins::ins::STARKS::Approval\\", \\"kind\\": \\"struct\\", \\"members\\": [{\\"name\\": \\"tick\\", \\"type\\": \\"core::felt252\\", \\"kind\\": \\"data\\"}, {\\"name\\": \\"owner\\", \\"type\\": \\"core::starknet::contract_address::ContractAddress\\", \\"kind\\": \\"data\\"}, {\\"name\\": \\"spender\\", \\"type\\": \\"core::starknet::contract_address::ContractAddress\\", \\"kind\\": \\"data\\"}, {\\"name\\": \\"value\\", \\"type\\": \\"core::integer::u128\\", \\"kind\\": \\"data\\"}]}, {\\"type\\": \\"event\\", \\"name\\": \\"ins::ins::STARKS::Deploy\\", \\"kind\\": \\"struct\\", \\"members\\": [{\\"name\\": \\"tick\\", \\"type\\": \\"core::felt252\\", \\"kind\\": \\"data\\"}, {\\"name\\": \\"maxSupply\\", \\"type\\": \\"core::integer::u128\\", \\"kind\\": \\"data\\"}, {\\"name\\": \\"maxPerMint\\", \\"type\\": \\"core::integer::u128\\", \\"kind\\": \\"data\\"}]}, {\\"type\\": \\"event\\", \\"name\\": \\"ins::ins::STARKS::Event\\", \\"kind\\": \\"enum\\", \\"variants\\": [{\\"name\\": \\"Transfer\\", \\"type\\": \\"ins::ins::STARKS::Transfer\\", \\"kind\\": \\"nested\\"}, {\\"name\\": \\"Approval\\", \\"type\\": \\"ins::ins::STARKS::Approval\\", \\"kind\\": \\"nested\\"}, {\\"name\\": \\"Deploy\\", \\"type\\": \\"ins::ins::STARKS::Deploy\\", \\"kind\\": \\"nested\\"}]}]",\n    "contract_class_version": "0.1.0",\n    "entry_points_by_type": {\n      "CONSTRUCTOR": [\n        {\n          "function_idx": 14,\n          "selector": "0x28ffe4ff0f226a9107253e17a904099aa4f63a02a5621de0576e5aa71bc5194"\n        }\n      ],\n      "EXTERNAL": [\n        {\n          "function_idx": 11,\n          "selector": "0x14dfa38c36b389189b8be0b1d3f9434ffcca49bf1a88f3658579d23d16368f"\n        },\n        {\n          "function_idx": 10,\n          "selector": "0x1fd12fd4580400368d8953eca1bf472ee233e7e06245d1ef8c176ff12bd3c4"\n        },\n        ...\n      ],\n      "L1_HANDLER": []\n    },\n    "sierra_program": [\n      "0x1",\n      "0x3",\n      "0x0",\n      "0x361",\n      "0x800000000000000700000000000000000000000000000000",\n      "0x537472756374",\n      ...\n    ]\n  }\n}\n'})})})})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var r=n(18215);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function c(e){let{children:t,hidden:n,className:c}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,c),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>g});var r=n(96540),a=n(18215),s=n(23104),c=n(56347),i=n(205),o=n(57485),l=n(31682),u=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,c.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[c,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[l,d]=f({queryString:n,groupId:a}),[h,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),b=(()=>{const e=l??h;return m({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&o(b)}),[b]);return{selectedValue:c,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),y(e)}),[d,y,s]),tabValues:s}}var y=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=n(74848);function _(e){let{className:t,block:n,selectedValue:r,selectValue:c,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),a=i[n].value;a!==r&&(l(t),c(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function v(e){const t=h(e);return(0,k.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,k.jsx)(_,{...t,...e}),(0,k.jsx)(x,{...t,...e})]})}function g(e){const t=(0,y.A)();return(0,k.jsx)(v,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(96540);const a={},s=r.createContext(a);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);