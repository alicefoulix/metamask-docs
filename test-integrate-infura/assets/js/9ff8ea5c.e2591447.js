"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[70854],{29085:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(74848),s=t(28453),a=t(11470),i=t(19365);const o={description:"Get started with Infura; create your Infura API key and send requests to the Ethereum network.",sidebar_position:1},l="Get started with Infura",c={id:"get-started/infura",title:"Get started with Infura",description:"Get started with Infura; create your Infura API key and send requests to the Ethereum network.",source:"@site/services/get-started/infura.md",sourceDirName:"get-started",slug:"/get-started/infura",permalink:"/test-integrate-infura/services/get-started/infura",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/get-started/infura.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Get started with Infura; create your Infura API key and send requests to the Ethereum network.",sidebar_position:1},sidebar:"servicesSidebar",previous:{title:"Get started",permalink:"/test-integrate-infura/services/get-started"},next:{title:"Network endpoints",permalink:"/test-integrate-infura/services/get-started/network-endpoints"}},u={},d=[{value:"1. Sign up to Infura",id:"1-sign-up-to-infura",level:2},{value:"2. Configure your API key",id:"2-configure-your-api-key",level:2},{value:"3. Send requests",id:"3-send-requests",level:2},{value:"3.1 Get the current block number",id:"31-get-the-current-block-number",level:3},{value:"3.2 View the Ether balance of a specified contract",id:"32-view-the-ether-balance-of-a-specified-contract",level:3},{value:"4. Secure your API key",id:"4-secure-your-api-key",level:2},{value:"5. View your project stats",id:"5-view-your-project-stats",level:2},{value:"6. Manage your account",id:"6-manage-your-account",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"get-started-with-infura",children:"Get started with Infura"}),"\n",(0,r.jsx)(n.h2,{id:"1-sign-up-to-infura",children:"1. Sign up to Infura"}),"\n",(0,r.jsxs)(n.p,{children:["Sign up for an account on the ",(0,r.jsx)(n.a,{href:"https://app.infura.io/register",children:"Infura website"}),", enter your details, and select\n",(0,r.jsx)(n.strong,{children:"CREATE A FREE ACCOUNT"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"To activate your account, verify your email address by clicking the link sent to your inbox."}),"\n",(0,r.jsxs)(n.admonition,{title:"API key restrictions",type:"important",children:[(0,r.jsx)(n.p,{children:"Based on your plan, Infura allows for the following amount of API keys:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Free plan - Allows one API key."}),"\n",(0,r.jsx)(n.li,{children:"Developer plan - Allows up to five API keys."}),"\n",(0,r.jsx)(n.li,{children:"Team plans and higher - No limit on the number of API keys."}),"\n"]}),(0,r.jsxs)(n.p,{children:["For more information refer to the ",(0,r.jsx)(n.a,{href:"https://www.infura.io/pricing",children:"Infura pricing information"}),"."]})]}),"\n",(0,r.jsx)(n.h2,{id:"2-configure-your-api-key",children:"2. Configure your API key"}),"\n",(0,r.jsxs)(n.p,{children:["Once verified, you\u2019ll be taken to the ",(0,r.jsx)(n.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"})," where you can configure your\nauto-generated API key."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Infura will automatically generate the ",(0,r.jsx)(n.strong,{children:"My First Key"})," API key for you."]})}),"\n",(0,r.jsx)("div",{class:"left-align-container",children:(0,r.jsx)("div",{class:"img-large",children:(0,r.jsx)("img",{src:t(40354).A})})}),"\n",(0,r.jsxs)(n.p,{children:["In the API key page that appears, select ",(0,r.jsx)(n.strong,{children:"My First Key"})," to access your API key settings. In the ",(0,r.jsx)(n.strong,{children:"All Endpoints"})," tab, select\nthe networks that you wish to connect to, and select ",(0,r.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"In this example, we've selected the Ethereum mainnet and Linea mainnet networks."}),"\n",(0,r.jsx)("div",{class:"left-align-container",children:(0,r.jsx)("div",{class:"img-large",children:(0,r.jsx)("img",{src:t(39483).A})})}),"\n",(0,r.jsx)(n.h2,{id:"3-send-requests",children:"3. Send requests"}),"\n",(0,r.jsx)(n.p,{children:"Use the API key when sending requests. The following examples interact with the Ethereum network by sending requests using HTTP."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["All requests are ",(0,r.jsx)(n.code,{children:"POST"})," requests."]}),"\n",(0,r.jsxs)(n.li,{children:["Replace",(0,r.jsx)(n.code,{children:"YOUR-API-KEY"})," with your own unique API key."]}),"\n"]})}),"\n",(0,r.jsxs)(n.p,{children:["Use a tool such as the ",(0,r.jsx)(n.a,{href:"/test-integrate-infura/services/learn/curl",children:"Client Uniform Resource Locator (curl)"})," or ",(0,r.jsx)(n.a,{href:"https://www.postman.com/downloads/",children:"Postman"})," to make requests. We recommend using Postman if you're a Windows user."]}),"\n",(0,r.jsx)(n.h3,{id:"31-get-the-current-block-number",children:"3.1 Get the current block number"}),"\n",(0,r.jsx)(n.p,{children:"Retrieve the current block number."}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"cURL",label:"cURL",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl https://mainnet.infura.io/v3/YOUR-API-KEY \\\n    -X POST \\\n    -H "Content-Type: application/json" \\\n    --data \'{"jsonrpc": "2.0", "id": 1, "method": "eth_blockNumber", "params": []}\'\n'})})}),(0,r.jsx)(i.A,{value:"Postman",label:"Postman",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'URL: https://mainnet.infura.io/v3/YOUR-API-KEY\nRequest_Type: POST\nBody:\n{\n    "jsonrpc":"2.0",\n    "method":"eth_blockNumber",\n    "params":[],\n    "id":1\n}\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"You'll receive a response similar to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'{"jsonrpc":"2.0","id":1,"result":"0xde5fba"}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The data returned is in hexadecimal, prefixed with ",(0,r.jsx)(n.code,{children:"0x"}),". If you ",(0,r.jsx)(n.a,{href:"https://www.rapidtables.com/convert/number/hex-to-decimal.html",children:"convert"})," ",(0,r.jsx)(n.code,{children:"de5fba"})," to decimal, the resulting number is 14573498, representing the current block number at the time the query was made."]}),"\n",(0,r.jsx)(n.h3,{id:"32-view-the-ether-balance-of-a-specified-contract",children:"3.2 View the Ether balance of a specified contract"}),"\n",(0,r.jsx)(n.p,{children:"Check the balance of an Ethereum smart contract."}),"\n",(0,r.jsx)(n.p,{children:"The example code checks the latest balance of the Ethereum Proof of Stake (PoS) contract."}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"cURL",label:"cURL",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl https://mainnet.infura.io/v3/API-KEY \\\n    -X POST \\\n    -H "Content-Type: application/json" \\\n    -d \'{"jsonrpc":"2.0","method":"eth_getBalance","params": ["0x00000000219ab540356cBB839Cbe05303d7705Fa", "latest"],"id":1}\'\n'})})}),(0,r.jsx)(i.A,{value:"Postman",label:"Postman",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'URL: https://mainnet.infura.io/v3/YOUR-PROJECT-ID\nRequest_Type: POST\nBody:\n{\n  "jsonrpc":"2.0",\n  "method":"eth_getBalance",\n  "params": [\n      "0x00000000219ab540356cBB839Cbe05303d7705Fa",\n      "latest"\n  ],\n  "id":1\n}\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"You'll receive a result similar to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'{"jsonrpc":"2.0","id":1,"result":"0x96c8e932f1e499c855045"}\n'})}),"\n",(0,r.jsx)(n.p,{children:"This result is the hexadecimal value of the contract in Wei (the smallest denomination of Ether)."}),"\n",(0,r.jsxs)(n.p,{children:["The decimal conversion of the result is ",(0,r.jsx)(n.code,{children:"11392978000069000000000069"})," Wei, which equals ",(0,r.jsx)(n.code,{children:"11392978.000069000000000069"})," Ether."]}),"\n",(0,r.jsx)(n.h2,{id:"4-secure-your-api-key",children:"4. Secure your API key"}),"\n",(0,r.jsxs)(n.p,{children:["Configure security settings in the ",(0,r.jsx)(n.strong,{children:"Settings"})," tab. This is optional."]}),"\n",(0,r.jsxs)(n.p,{children:["Force API requests to include the API key secret and/or ",(0,r.jsx)(n.a,{href:"/test-integrate-infura/services/tutorials/developer-tools/json-web-token-jwt",children:"JSON Web Tokens (JWTs)"}),"."]}),"\n",(0,r.jsx)("div",{class:"left-align-container",children:(0,r.jsx)("div",{class:"img-large",children:(0,r.jsx)("img",{src:t(25552).A})})}),"\n",(0,r.jsxs)(n.p,{children:["Use an allowlist to restrict API key access. See to the ",(0,r.jsx)(n.a,{href:"../dashboard/secure-an-api/use-an-allowlist.md",children:"allowlist documentation"})," for configuration instructions and best practices."]}),"\n",(0,r.jsx)("div",{class:"left-align-container",children:(0,r.jsx)("div",{class:"img-large",children:(0,r.jsx)("img",{src:t(24018).A})})}),"\n",(0,r.jsx)(n.h2,{id:"5-view-your-project-stats",children:"5. View your project stats"}),"\n",(0,r.jsxs)(n.p,{children:["From the Stats page of the Infura dashboard, you can view real-time statistics about your API usage.\nOptimize your app and better understand your users by\n",(0,r.jsx)(n.a,{href:"../dashboard/dashboard-stats.md",children:"reviewing your API request stats"})," regularly."]}),"\n",(0,r.jsx)("div",{class:"left-align-container",children:(0,r.jsx)("div",{class:"img-large",children:(0,r.jsx)("img",{src:t(22489).A})})}),"\n",(0,r.jsx)(n.h2,{id:"6-manage-your-account",children:"6. Manage your account"}),"\n",(0,r.jsxs)(n.p,{children:["Find additional settings in ",(0,r.jsx)(n.strong,{children:"Settings"})," to manage your account. You can:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/test-integrate-infura/services/network-apis/ethereum/how-to/avoid-rate-limiting#tips-to-avoid-rate-limiting",children:"Set notifications for daily limits"}),"\nfrom the ",(0,r.jsx)(n.strong,{children:"Account"})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["Manage your billing information in the ",(0,r.jsx)(n.strong,{children:"Billing"})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["Manage ",(0,r.jsx)(n.a,{href:"../dashboard/project-sharing.md",children:"shared API keys"})," in the ",(0,r.jsx)(n.strong,{children:"Key Sharing"})," option."]}),"\n"]}),"\n",(0,r.jsx)("div",{class:"left-align-container",children:(0,r.jsx)("div",{class:"img-large",children:(0,r.jsx)("img",{src:t(81282).A})})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(18215);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),s=t(18215),a=t(23104),i=t(56347),o=t(205),l=t(57485),c=t(31682),u=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,d]=f({queryString:t,groupId:s}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,u.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),x=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),s=o[t].value;s!==r&&(c(n),i(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=m(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(n))}},24018:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/allowlist-2a034e09bcb44be8922852f715d55934.png"},39483:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/api-key-page-6156edb60866c888e8115dda50fc35a8.png"},22489:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/dashboard_stats-168ec62e09a2bdc43793c1eb34e66740.png"},40354:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/first-api-key-b3b5de5ee453f6383fe07e55061897cc.png"},25552:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/settings-tab-2e2d5d6eea31c4991e92f29b44f09286.png"},81282:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/settings-1996a2a486495c819d11b20683c2c5f2.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(96540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);