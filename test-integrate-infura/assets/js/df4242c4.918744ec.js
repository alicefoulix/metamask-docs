"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[29056],{77616:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=t(74848),r=t(28453),s=t(11470),c=t(19365);const l={description:"Retrieve the balance of an ERC-20 token."},o="Retrieve the balance of an ERC-20 token",i={id:"tutorials/ethereum/retrieve-the-balance-of-an-erc-20-token",title:"Retrieve the balance of an ERC-20 token",description:"Retrieve the balance of an ERC-20 token.",source:"@site/services/tutorials/ethereum/retrieve-the-balance-of-an-erc-20-token.md",sourceDirName:"tutorials/ethereum",slug:"/tutorials/ethereum/retrieve-the-balance-of-an-erc-20-token",permalink:"/test-integrate-infura/services/tutorials/ethereum/retrieve-the-balance-of-an-erc-20-token",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/tutorials/ethereum/retrieve-the-balance-of-an-erc-20-token.md",tags:[],version:"current",frontMatter:{description:"Retrieve the balance of an ERC-20 token."},sidebar:"servicesSidebar",previous:{title:"Retrieve and display ERC-721 and ERC-1155 tokens",permalink:"/test-integrate-infura/services/tutorials/ethereum/retrieve-and-display-erc-721-and-erc-1155-tokens"},next:{title:"Send transactions",permalink:"/test-integrate-infura/services/tutorials/ethereum/send-a-transaction"}},d={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Create a project directory",id:"1-create-a-project-directory",level:3},{value:"2. Install required packages",id:"2-install-required-packages",level:3},{value:"3. Set up the script",id:"3-set-up-the-script",level:3},{value:"4. Set the ABI",id:"4-set-the-abi",level:3},{value:"5. Select a token address",id:"5-select-a-token-address",level:3},{value:"6. Request the token balance",id:"6-request-the-token-balance",level:3},{value:"7. Convert the token units",id:"7-convert-the-token-units",level:3},{value:"8. Run the script",id:"8-run-the-script",level:3},{value:"Complete code",id:"complete-code",level:4}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"retrieve-the-balance-of-an-erc-20-token",children:"Retrieve the balance of an ERC-20 token"}),"\n",(0,a.jsxs)(n.p,{children:["In this tutorial, using Web3.js, you'll retrieve the balance of an ",(0,a.jsx)(n.a,{href:"/test-integrate-infura/services/network-apis/ethereum/how-to/interact-with-erc-20-tokens",children:"ERC-20 token"})," in an account, using the account address and the token contract."]}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["An ",(0,a.jsx)(n.a,{href:"/test-integrate-infura/services/get-started/infura",children:"Ethereum project"})," on Infura"]}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://nodejs.org/en/download/",children:"Node.js installed"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,a.jsx)(n.h3,{id:"1-create-a-project-directory",children:"1. Create a project directory"}),"\n",(0,a.jsx)(n.p,{children:"Create a new directory for your project. This can be done from the command line:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"mkdir retrieveBalance\n"})}),"\n",(0,a.jsx)(n.p,{children:"Change into the new directory:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd retrieveBalance\n"})}),"\n",(0,a.jsx)(n.h3,{id:"2-install-required-packages",children:"2. Install required packages"}),"\n",(0,a.jsxs)(n.p,{children:["Install the ",(0,a.jsx)(n.code,{children:"web3"})," package in the project directory:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install web3\n"})}),"\n",(0,a.jsx)(n.h3,{id:"3-set-up-the-script",children:"3. Set up the script"}),"\n",(0,a.jsxs)(n.p,{children:["Create a file called ",(0,a.jsx)(n.code,{children:"retrieveBalance.js"}),". At the top of file, add the following lines to import the web3.js library and connect to the Infura HTTPS endpoint:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'const { Web3 } = require("web3");\nconst web3 = new Web3(\n  new Web3.providers.HttpProvider(\n    "https://mainnet.infura.io/v3/<YOUR_API_KEY>",\n  ),\n);\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Make sure to replace ",(0,a.jsx)(n.code,{children:"<YOUR_API_KEY>"})," with your Infura API key."]}),"\n",(0,a.jsx)(n.h3,{id:"4-set-the-abi",children:"4. Set the ABI"}),"\n",(0,a.jsxs)(n.p,{children:["You'll only use the ",(0,a.jsx)(n.code,{children:"balanceOf"})," method, so you don\u2019t need the entire ABI for ERC-20 smart contracts. In the ",(0,a.jsx)(n.code,{children:"retrieveBalance.js"})," file, define the ABI for the ",(0,a.jsx)(n.code,{children:"balanceOf"})," method by adding the following to the script:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'const balanceOfABI = [\n  {\n    constant: true,\n    inputs: [\n      {\n        name: "_owner",\n        type: "address",\n      },\n    ],\n    name: "balanceOf",\n    outputs: [\n      {\n        name: "balance",\n        type: "uint256",\n      },\n    ],\n    payable: false,\n    stateMutability: "view",\n    type: "function",\n  },\n];\n'})}),"\n",(0,a.jsx)(n.h3,{id:"5-select-a-token-address",children:"5. Select a token address"}),"\n",(0,a.jsxs)(n.p,{children:["To retrieve the balance of a token, you need the contract address of the token. You can find this in the tokens section of a block explorer such as ",(0,a.jsx)(n.a,{href:"https://etherscan.io/",children:"Etherscan"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"This example uses a DAI token contract. However, you can use any ERC-20 token contract address. Copy the token contract address you wish to use."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(93874).A+"",width:"2680",height:"806"})}),"\n",(0,a.jsx)(n.h3,{id:"6-request-the-token-balance",children:"6. Request the token balance"}),"\n",(0,a.jsxs)(n.p,{children:["Define the addresses to use in the ",(0,a.jsx)(n.code,{children:"retrieveBalance.js"})," script:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'const tokenContract = "0x6b175474e89094c44da98b954eedeac495271d0f";\nconst tokenHolder = "0xf326e4de8f66a0bdc0970b79e0924e33c79f1915";\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Define ",(0,a.jsx)(n.code,{children:"contract"})," using ",(0,a.jsx)(n.code,{children:"web3.eth.Contract()"}),", passing the ",(0,a.jsx)(n.code,{children:"balanceOfABI"})," and the token contract address ",(0,a.jsx)(n.code,{children:"tokenContract"})," as parameters:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const contract = new web3.eth.Contract(balanceOfABI, tokenContract);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Next, call ",(0,a.jsx)(n.code,{children:"methods.balanceOf()"})," on the ",(0,a.jsx)(n.code,{children:"contract"})," and pass the ",(0,a.jsx)(n.code,{children:"tokenHolder"})," address. This call sends a request to your Infura endpoint to request the token balance in the ",(0,a.jsx)(n.code,{children:"tokenHolder"})," account address."]}),"\n",(0,a.jsxs)(n.p,{children:["Create the below ",(0,a.jsx)(n.code,{children:"async"})," function ",(0,a.jsx)(n.code,{children:"getTokenBalance"})," that accomplishes this by interacting with the ",(0,a.jsx)(n.code,{children:"tokenContract"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"async function getTokenBalance() {\n    const result = await.contract.methods.balanceOf(tokenHolder).call();\n    console.log(result)\n}\n\ngetTokenBalance();\n"})}),"\n",(0,a.jsx)(n.h3,{id:"7-convert-the-token-units",children:"7. Convert the token units"}),"\n",(0,a.jsxs)(n.p,{children:["By default, calling ",(0,a.jsx)(n.code,{children:"balanceOf"})," returns the balance value in ",(0,a.jsx)(n.code,{children:"wei"}),", which is the smallest unit in Ethereum, equal to 0.000000000000000001 Ether (10",(0,a.jsx)("sup",{children:"-18"}),")."]}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:'web3.utils.fromWei(result, "ether")'})," to get the actual number of DAI tokens, by adding the following line to the ",(0,a.jsx)(n.code,{children:"async"})," function:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'const formattedResult = web3.utils.fromWei(result, "ether");\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Also, update your ",(0,a.jsx)(n.code,{children:"console.log(format)"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"console.log(formattedResult);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"8-run-the-script",children:"8. Run the script"}),"\n",(0,a.jsx)(n.h4,{id:"complete-code",children:"Complete code"}),"\n",(0,a.jsxs)(n.p,{children:["Here is the complete code for ",(0,a.jsx)(n.code,{children:"retrieveBalance.js"}),". Before running it make sure you replace ",(0,a.jsx)(n.code,{children:"<YOUR_API_KEY>"})," with your Infura API key."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'const { Web3 } = require("web3");\nconst web3 = new Web3(\n  new Web3.providers.HttpProvider(\n    "https://mainnet.infura.io/v3/<YOUR_API_KEY>",\n  ),\n);\n\nconst balanceOfABI = [\n  {\n    constant: true,\n    inputs: [\n      {\n        name: "_owner",\n        type: "address",\n      },\n    ],\n    name: "balanceOf",\n    outputs: [\n      {\n        name: "balance",\n        type: "uint256",\n      },\n    ],\n    payable: false,\n    stateMutability: "view",\n    type: "function",\n  },\n];\n\n// DAI token contract\nconst tokenContract = "0x6B175474E89094C44Da98b954EedeAC495271d0F";\n// A DAI token holder\nconst tokenHolder = "0x075e72a5eDf65F0A5f44699c7654C1a76941Ddc8";\nconst contract = new web3.eth.Contract(balanceOfABI, tokenContract);\n\nasync function getTokenBalance() {\n  const result = await contract.methods.balanceOf(tokenHolder).call();\n  const formattedResult = web3.utils.fromWei(result, "ether");\n  console.log(formattedResult);\n}\n\ngetTokenBalance();\n'})}),"\n",(0,a.jsx)(n.p,{children:"Run the script using the following command:"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(c.A,{value:"Command",label:"Command",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"node retrieveBalance.js\n"})})}),(0,a.jsxs)(c.A,{value:"Example",label:"Example",children:[(0,a.jsx)(n.h1,{id:"example-output",children:"Example output"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"278916727.186877714909963561\n"})})]})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>c});t(96540);var a=t(18215);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function c(e){let{children:n,hidden:t,className:c}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,c),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(96540),r=t(18215),s=t(23104),c=t(56347),l=t(205),o=t(57485),i=t(31682),d=t(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,c.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[c,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[i,u]=f({queryString:t,groupId:r}),[b,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),j=(()=>{const e=i??b;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{j&&o(j)}),[j]);return{selectedValue:c,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),m(e)}),[u,m,s]),tabValues:s}}var m=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function v(e){let{className:n,block:t,selectedValue:a,selectValue:c,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),r=l[t].value;r!==a&&(i(n),c(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(g,{...n,...e})]})}function y(e){const n=(0,m.A)();return(0,x.jsx)(k,{...e,children:u(e.children)},String(n))}},93874:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/contract_address-8a05e29b2068cb13c1810f1344c7dcd2.jpeg"},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var a=t(96540);const r={},s=a.createContext(r);function c(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);