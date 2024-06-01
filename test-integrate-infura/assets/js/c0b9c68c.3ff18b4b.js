"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[10977],{52278:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var r=t(74848),a=t(28453),o=t(11470),s=t(19365);const i={description:"Enable API request forwarding on Avalanche (C-Chain)."},c="Enable API request forwarding",l={id:"network-apis/avalanche-c-chain/how-to/failover-protection-imp-avalanche",title:"Enable API request forwarding",description:"Enable API request forwarding on Avalanche (C-Chain).",source:"@site/services/network-apis/avalanche-c-chain/how-to/failover-protection-imp-avalanche.md",sourceDirName:"network-apis/avalanche-c-chain/how-to",slug:"/network-apis/avalanche-c-chain/how-to/failover-protection-imp-avalanche",permalink:"/test-integrate-infura/services/network-apis/avalanche-c-chain/how-to/failover-protection-imp-avalanche",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/network-apis/avalanche-c-chain/how-to/failover-protection-imp-avalanche.md",tags:[],version:"current",frontMatter:{description:"Enable API request forwarding on Avalanche (C-Chain)."},sidebar:"servicesSidebar",previous:{title:"How to",permalink:"/test-integrate-infura/services/network-apis/avalanche-c-chain/how-to/"},next:{title:"Get testnet AVAX tokens",permalink:"/test-integrate-infura/services/network-apis/avalanche-c-chain/how-to/get-testnet-avax-tokens"}},u={},h=[{value:"Request",id:"request",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"enable-api-request-forwarding",children:"Enable API request forwarding"}),"\n",(0,r.jsxs)(n.p,{children:["For Avalanche (C-Chain) JSON-RPC methods, you can request failover protection by adding the failover header to\nyour API request using ",(0,r.jsx)(n.code,{children:"cURL"}),", ",(0,r.jsx)(n.code,{children:"Web3.js"}),", ",(0,r.jsx)(n.code,{children:"Ethers.js"}),", or any other language of your choice."]}),"\n",(0,r.jsxs)(n.p,{children:["For more information about this feature, including our partner and their privacy information,\nsee ",(0,r.jsx)(n.a,{href:"/test-integrate-infura/services/network-apis/avalanche-c-chain/concepts/failover-protection",children:"Failover protection"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Avalanche (C-Chain) failover support is available on Mainnet only."})}),"\n",(0,r.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,r.jsxs)(n.p,{children:["In the code tabs, the ",(0,r.jsx)(n.code,{children:"eth_blockNumber"})," method is used as an example."]}),"\n","\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(s.A,{value:"cURL",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl https://avalanche-mainnet.infura.io/v3/YOUR-API-KEY \\\n    -X POST \\\n    -H "Enable-Failover: true" \\\n    -d \'{"jsonrpc":"2.0","method":"eth_blockNumber","params": [],"id":1}\'\n'})})}),(0,r.jsx)(s.A,{value:"Web3.js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"const { Web3 } = require('web3');\nconst https = require('https');\n\nconst options = {\n    headers: {\n        \"Enable-Failover\": \"true\",\n    },\n};\n\nconst provider = new https.Agent(options);\n\nconst web3 = new Web3(new Web3.providers.HttpProvider('https://avalanche-mainnet.infura.io/v3/YOUR-API-KEY', { agent: provider }));\n\nweb3.eth.getBlockNumber().then(console.log);\n"})})}),(0,r.jsx)(s.A,{value:"Ethers.js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"const ethers = require('ethers');\nconst fetch = require('node-fetch');\n\nclass InfuraJsonRpcProvider extends ethers.providers.JsonRpcProvider {\n    constructor(network, apiKey) {\n        super(network, apiKey);\n        this.fetchFunc = async (url, json, processFunc) => {\n            const response = await fetch(url, {\n                method: 'POST',\n                body: json.body,\n                headers: {\n                    'Content-Type': 'application/json',\n                    'Enable-Failover': 'true'\n                }\n            });\n\n            const text = await response.text();\n            const fetchJsonResponse = {\n                jsonrpc: json.jsonrpc,\n                id: json.id,\n                result: JSON.parse(text).result,\n                error: JSON.parse(text).error\n            };\n\n            return processFunc(fetchJsonResponse);\n        };\n    }\n}\n\nconst provider = new InfuraJsonRpcProvider('https://avalanche-mainnet.infura.io/v3/YOUR-API-KEY');\n\nprovider.getBlockNumber().then((blockNumber) => {\n    console.log(blockNumber);\n});\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var o=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(96540),a=t(18215),o=t(23104),s=t(56347),i=t(205),c=t(57485),l=t(31682),u=t(70679);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function v(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=d(e),[s,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[l,h]=v({queryString:t,groupId:a}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),m=(()=>{const e=l??f;return p({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{m&&c(m)}),[m]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),b(e)}),[h,b,o]),tabValues:o}}var b=t(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function w(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),a=i[t].value;a!==r&&(l(n),s(a))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:h,onClick:u,...o,className:(0,a.A)("tabs__item",m.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,g.jsx)(w,{...n,...e}),(0,g.jsx)(x,{...n,...e})]})}function k(e){const n=(0,b.A)();return(0,g.jsx)(j,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(96540);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);