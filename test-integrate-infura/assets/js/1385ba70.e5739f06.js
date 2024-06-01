"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[54696],{12742:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=s(74848),r=s(28453),t=s(32545);const o={description:"Optimism quickstart guide",sidebar_position:2},a="Quickstart",l={id:"network-apis/optimism/quickstart",title:"Quickstart",description:"Optimism quickstart guide",source:"@site/services/network-apis/optimism/quickstart.md",sourceDirName:"network-apis/optimism",slug:"/network-apis/optimism/quickstart",permalink:"/test-integrate-infura/services/network-apis/optimism/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/network-apis/optimism/quickstart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Optimism quickstart guide",sidebar_position:2},sidebar:"servicesSidebar",previous:{title:"Optimism",permalink:"/test-integrate-infura/services/network-apis/optimism/"},next:{title:"Supported networks",permalink:"/test-integrate-infura/services/network-apis/optimism/choose-a-network"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Make calls",id:"make-calls",level:2},{value:"cURL",id:"curl",level:3},{value:"Node (JavaScript)",id:"node-javascript",level:3},{value:"Node Fetch",id:"node-fetch",level:4},{value:"Axios",id:"axios",level:4},{value:"Ethers",id:"ethers",level:4},{value:"Python",id:"python",level:3},{value:"Next Steps",id:"next-steps",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"quickstart",children:"Quickstart"}),"\n",(0,i.jsx)(n.p,{children:"This quickstart guide will help you set up and make calls on the Optimism network using the Infura endpoints."}),"\n",(0,i.jsx)(t.A,{children:(0,i.jsx)(n.p,{children:"Don't have an Infura account? Sign up for our free plan and start using the Optimism network!"})}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.p,{children:["Ensure you have an ",(0,i.jsx)(n.a,{href:"../../../dashboard/create-api.md",children:"API key"})," with the Optimism networked enabled."]}),"\n",(0,i.jsx)(n.h2,{id:"make-calls",children:"Make calls"}),"\n",(0,i.jsx)(n.h3,{id:"curl",children:"cURL"}),"\n",(0,i.jsxs)(n.p,{children:["Run the following command in your terminal. Replace ",(0,i.jsx)(n.code,{children:"YOUR-API-KEY"})," with your actual Infura API key."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl https://optimism-mainnet.infura.io/v3/YOUR-API-KEY \\\n    -X POST \\\n    -H "Content-Type: application/json" \\\n    -d \'{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}\'\n'})}),"\n",(0,i.jsx)(n.h3,{id:"node-javascript",children:"Node (JavaScript)"}),"\n",(0,i.jsxs)(n.p,{children:["In these examples,you'll use ",(0,i.jsx)(n.a,{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",children:"npm"})," as your package manager."]}),"\n",(0,i.jsx)(n.h4,{id:"node-fetch",children:"Node Fetch"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In your project folder, install the Node Fetch package using npm:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm i node-fetch\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create your Javascript file and copy the following code:"}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.code,{children:"YOUR-API-KEY"})," with your actual Infura API key."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:'import fetch from \'node-fetch\';\n\nfetch("https://optimism-mainnet.infura.io/v3/YOUR-API-KEY", {\n  method: "POST",\n  headers: {\n    "Content-Type": "application/json"\n  },\n  body: JSON.stringify({\n    jsonrpc: "2.0",\n    method: "eth_blockNumber",\n    params: [],\n    id: 1\n  })\n})\n.then(response =>\n  response.json()\n)\n.then(data => {\n  console.log(data);\n})\n.catch(error => {\n  console.error(error);\n});\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run the code using the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"node index.js\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"axios",children:"Axios"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In your project folder, install the Axios package using npm:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm i axios\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create your Javascript file and copy the following code:"}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.code,{children:"YOUR-API-KEY"})," with your actual Infura API key."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:"const axios = require('axios');\n\naxios.post('https://optimism-mainnet.infura.io/v3/YOUR-API-KEY', {\n  jsonrpc: '2.0',\n  method: 'eth_blockNumber',\n  params: [],\n  id: 1\n})\n.then(response => {\n  console.log(response.data);\n})\n.catch(error => {\n  console.error(error);\n});\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run the code using the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"node index.js\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"ethers",children:"Ethers"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In your project folder, install the ethers package using npm:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install ethers\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create your Javascript file and copy the following code:"}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.code,{children:"YOUR-API-KEY"})," with your actual Infura API key."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:"const ethers = require('ethers');\n\nconst provider = new ethers.providers.JsonRpcProvider('https://optimism-mainnet.infura.io/v3/YOUR-API-KEY');\n\nprovider.getBlockNumber()\n.then(blockNumber => {\n  console.log(blockNumber);\n})\n.catch(error => {\n  console.error(error);\n});\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run the code using the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"node index.js\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"python",children:"Python"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In your project folder, install the ",(0,i.jsx)(n.code,{children:"requests"})," library:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install requests\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create your Javascript file and copy the following code:"}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.code,{children:"YOUR-API-KEY"})," with your actual Infura API key."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="index.py"',children:'import requests\nimport json\n\nurl = \'https://optimism-mainnet.infura.io/v3/YOUR-API-KEY\'\n\npayload = {\n    "jsonrpc": "2.0",\n    "method": "eth_blockNumber",\n    "params": [],\n    "id": 1\n}\n\nheaders = {\'content-type\': \'application/json\'}\n\nresponse = requests.post(url, data=json.dumps(payload), headers=headers).json()\n\nprint(response)\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run the code using the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python index.py\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsx)(n.p,{children:"Now that you have successfully made a call to the Optimism network, you can explore more functionalities and APIs provided\nby Infura. Here are some suggestions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Explore other Optimism APIs"}),": Infura supports a wide range of APIs. You can find more information in the\n",(0,i.jsx)(n.a,{href:"./json-rpc-methods/",children:"JSON-RPC API method documentation"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Try out different networks"}),": Infura supports multiple networks including Ethereum, Linea, Polygon, and more."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Monitor your usage"}),": Keep an eye on your usage on the ",(0,i.jsx)(n.a,{href:"../../../dashboard/dashboard-stats.md",children:"Infura dashboard"})," to ensure you're not hitting your rate limits."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Remember, the Infura community is here to help. If you have any questions or run into any issues, check out the\n",(0,i.jsx)(n.a,{href:"https://community.infura.io/",children:"Infura community"})," for help and answers to common questions."]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},32545:(e,n,s)=>{s.d(n,{A:()=>a});s(96540);var i=s(28774);const r="banner_ava2",t="button_BPnc";var o=s(74848);const a=e=>{let{children:n}=e;return(0,o.jsxs)("div",{className:r,children:[n,(0,o.jsx)(i.A,{to:"https://app.infura.io/register",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsxs)("div",{className:`${t} margin-top--xs`,children:["Sign up\xa0",(0,o.jsx)("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module",children:(0,o.jsx)("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})})]})})]})}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var i=s(96540);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);