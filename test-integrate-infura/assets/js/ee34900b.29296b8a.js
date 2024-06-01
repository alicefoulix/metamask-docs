"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[72281],{69085:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(74848),a=r(28453),s=r(11470),l=r(19365);const i={description:"debug_traceCall API method"},c="debug_traceCall",o={id:"network-apis/mantle/json-rpc-methods/debug/debug_tracecall",title:"debug_traceCall",description:"debug_traceCall API method",source:"@site/services/network-apis/mantle/json-rpc-methods/debug/debug_tracecall.md",sourceDirName:"network-apis/mantle/json-rpc-methods/debug",slug:"/network-apis/mantle/json-rpc-methods/debug/debug_tracecall",permalink:"/test-integrate-infura/services/network-apis/mantle/json-rpc-methods/debug/debug_tracecall",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/network-apis/mantle/json-rpc-methods/debug/debug_tracecall.md",tags:[],version:"current",frontMatter:{description:"debug_traceCall API method"},sidebar:"servicesSidebar",previous:{title:"debug_traceBlockByNumber",permalink:"/test-integrate-infura/services/network-apis/mantle/json-rpc-methods/debug/debug_traceblockbynumber"},next:{title:"debug_traceTransaction",permalink:"/test-integrate-infura/services/network-apis/mantle/json-rpc-methods/debug/debug_tracetransaction"}},d={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Request",id:"request",level:3},{value:"Result",id:"result",level:3}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"debug_tracecall",children:"debug_traceCall"}),"\n",(0,n.jsxs)(t.p,{children:["Returns the number of possible tracing result by executing an ",(0,n.jsx)(t.code,{children:"eth_call"})," within the context of the\ngiven block execution."]}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Transaction object with the foloowing fields:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"from"}),": (string)  address (20 bytes) the transaction is sent from."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"to"}),": (string) ",(0,n.jsx)(t.em,{children:"[required]"})," address (20 bytes) the transaction is directed to."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"gas"}),": (string) hexadecimal value of the gas provided for the transaction execution. ",(0,n.jsx)(t.code,{children:"eth_call"})," consumes zero\ngas, but this parameter may be needed by some executions."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"gasPrice"}),": (string) hexadecimal value of the ",(0,n.jsx)(t.code,{children:"gasPrice"})," used for each paid gas."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"maxPriorityFeePerGas"}),": (string) maximum fee, in Wei, the sender is willing to pay per gas above the base fee.\nSee ",(0,n.jsx)(t.a,{href:"/test-integrate-infura/services/network-apis/ethereum/concepts/transaction-types#eip-1559-transactions",children:"EIP-1559 transactions"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"maxFeePerGas"}),": (string) maximum total fee (base fee + priority fee), in Wei, the sender is willing to pay per gas.\nSee ",(0,n.jsx)(t.a,{href:"/test-integrate-infura/services/network-apis/ethereum/concepts/transaction-types#eip-1559-transactions",children:"EIP-1559 transactions"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"value"}),": (string) hexadecimal of the value sent with this transaction."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"data"}),": (string) hash of the method signature and encoded parameters.\nSee ",(0,n.jsx)(t.a,{href:"https://docs.soliditylang.org/en/latest/abi-spec.html",children:"Ethereum contract ABI specification"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"block parameter"}),": [",(0,n.jsx)(t.em,{children:"Required"}),"] hexadecimal block number, or one of the string tags\n",(0,n.jsx)(t.code,{children:"latest"}),", ",(0,n.jsx)(t.code,{children:"earliest"}),", ",(0,n.jsx)(t.code,{children:"pending"}),", ",(0,n.jsx)(t.code,{children:"safe"}),", or ",(0,n.jsx)(t.code,{children:"finalized"}),".\nSee the ",(0,n.jsx)(t.a,{href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#default-block",children:"default block parameter"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Optional tracing options object with the following fields:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"tracer"}),": (string) ",(0,n.jsx)(t.em,{children:"[optional]"})," type of tracer. Supports ",(0,n.jsx)(t.a,{href:"/test-integrate-infura/services/#calltracer",children:(0,n.jsx)(t.code,{children:"callTracer"})})," or\n",(0,n.jsx)(t.a,{href:"/test-integrate-infura/services/##prestatetracer",children:(0,n.jsx)(t.code,{children:"prestateTracer"})}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"tracerConfig"}),": (object) ",(0,n.jsx)(t.em,{children:"[optional]"}),"  tracer configuration options:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"onlyTopCall"}),": (boolean) ",(0,n.jsx)(t.em,{children:"[optional]"})," when ",(0,n.jsx)(t.code,{children:"true"}),", will only trace the primary (top-level) call and not any\nsub-calls. It eliminates the additional processing for each call frame."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:["Depending on the specified tracer type, returns a ",(0,n.jsx)(t.a,{href:"/test-integrate-infura/services/##calltracer",children:(0,n.jsx)(t.code,{children:"callTracer"})})," object or\n",(0,n.jsx)(t.a,{href:"/test-integrate-infura/services/#prestatetracer",children:(0,n.jsx)(t.code,{children:"prestateTracer"})})," object."]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(t.p,{children:["Replace ",(0,n.jsx)(t.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,n.jsx)(t.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"request",children:"Request"}),"\n",(0,n.jsx)(s.A,{children:(0,n.jsx)(l.A,{value:"cURL",label:"cURL",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl https://mantle-mainnet.infura.io/v3/<YOUR-API-KEY> \\\n-X POST \\\n-H "Content-Type: application/json" \\\n-d \'{"method":"debug_traceCall","params":[{"to":"0x6b175474e89094c44da98b954eedeac495271d0f","data":"0x70a082310000000000000000000000006E0d01A76C3Cf4288372a29124A26D4353EE51BE"}, "latest", {"tracer": "callTracer"}],"id":1,"jsonrpc":"2.0"}\'\n'})})})}),"\n",(0,n.jsx)(t.h3,{id:"result",children:"Result"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "from": "0x0000000000000000000000000000000000000000",\n    "gas": "0x28cc0",\n    "gasUsed": "0x3635000",\n    "to": "0x6b175474e89094c44da98b954eedeac495271d0f",\n    "input": "0x70a082310000000000000000000000006e0d01a76c3cf4288372a29124a26d4353ee51be",\n    "value": "0x0",\n    "type": "CALL"\n  }\n}\n'})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(18215);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,l),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(96540),a=r(18215),s=r(23104),l=r(56347),i=r(205),c=r(57485),o=r(31682),d=r(70679);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=h(e),[l,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[o,u]=m({queryString:r,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,d.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),x=(()=>{const e=o??f;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{x&&c(x)}),[x]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=r(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function j(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),a=i[r].value;a!==n&&(o(t),l(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,g.jsx)(j,{...t,...e}),(0,g.jsx)(v,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>i});var n=r(96540);const a={},s=n.createContext(a);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);