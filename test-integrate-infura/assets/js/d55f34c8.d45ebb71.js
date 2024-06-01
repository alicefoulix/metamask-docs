"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[61127],{2128:(e,t,n)=>{n.d(t,{Ay:()=>i,RM:()=>s});var a=n(74848),r=n(28453);const s=[];function o(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.admonition,{title:"Not supported by Infura",type:"warning",children:(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"eth_sendTransaction"})," JSON-RPC method is not supported because Infura doesn't store the user's private key required to sign the transaction. Use ",(0,a.jsx)(t.a,{href:"/test-integrate-infura/services/network-apis/ethereum/json-rpc-methods/eth_sendrawtransaction",children:(0,a.jsx)(t.code,{children:"eth_sendRawTransaction"})})," instead."]})}),"\n",(0,a.jsxs)(t.p,{children:["You can use ",(0,a.jsx)(t.a,{href:"https://web3js.readthedocs.io/en/v1.2.0/web3-eth.html#sendtransaction",children:(0,a.jsx)(t.code,{children:"web3.eth.sendTransaction"})}),", which in turn signs the transaction locally using the private key of the account, and sends the transaction via ",(0,a.jsx)(t.a,{href:"https://web3js.readthedocs.io/en/v1.2.0/web3-eth.html#sendsignedtransaction",children:(0,a.jsx)(t.code,{children:"web3.eth.sendSignedTransaction"})}),", which is a wrapper for ",(0,a.jsx)(t.code,{children:"eth_sendRawTransaction"}),"."]})]})}function i(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},39746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(74848),r=n(28453),s=(n(11470),n(19365),n(2128));const o={title:"eth_sendTransaction"},i=void 0,c={id:"network-apis/avalanche-c-chain/json-rpc-methods/eth_sendtransaction",title:"eth_sendTransaction",description:"",source:"@site/services/network-apis/avalanche-c-chain/json-rpc-methods/eth_sendtransaction.mdx",sourceDirName:"network-apis/avalanche-c-chain/json-rpc-methods",slug:"/network-apis/avalanche-c-chain/json-rpc-methods/eth_sendtransaction",permalink:"/test-integrate-infura/services/network-apis/avalanche-c-chain/json-rpc-methods/eth_sendtransaction",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/network-apis/avalanche-c-chain/json-rpc-methods/eth_sendtransaction.mdx",tags:[],version:"current",frontMatter:{title:"eth_sendTransaction"},sidebar:"servicesSidebar",previous:{title:"eth_sendRawTransaction",permalink:"/test-integrate-infura/services/network-apis/avalanche-c-chain/json-rpc-methods/eth_sendrawtransaction"},next:{title:"eth_sign",permalink:"/test-integrate-infura/services/network-apis/avalanche-c-chain/json-rpc-methods/eth_sign"}},u={},l=[...s.RM];function d(e){return(0,a.jsx)(s.Ay,{})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d()}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var a=n(18215);const r={tabItem:"tabItem_Ymn6"};var s=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>k});var a=n(96540),r=n(18215),s=n(23104),o=n(56347),i=n(205),c=n(57485),u=n(31682),l=n(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=h(e),[o,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[u,d]=m({queryString:n,groupId:r}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,l.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),v=(()=>{const e=u??f;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{v&&c(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=n(74848);function g(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),l=e=>{const t=e.currentTarget,n=c.indexOf(t),r=i[n].value;r!==a&&(u(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>c.push(e),onKeyDown:d,onClick:l,...s,className:(0,r.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function x(e){const t=f(e);return(0,w.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,w.jsx)(g,{...t,...e}),(0,w.jsx)(j,{...t,...e})]})}function k(e){const t=(0,b.A)();return(0,w.jsx)(x,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(96540);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);