"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8173],{61352:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=i(74848),o=i(28453);const r={description:"Use dotenv to load environment variables from a file."},s="JavaScript dotenv",a={id:"tutorials/developer-tools/javascript-dotenv",title:"JavaScript dotenv",description:"Use dotenv to load environment variables from a file.",source:"@site/services/tutorials/developer-tools/javascript-dotenv.md",sourceDirName:"tutorials/developer-tools",slug:"/tutorials/developer-tools/javascript-dotenv",permalink:"/test-integrate-infura/services/tutorials/developer-tools/javascript-dotenv",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/tutorials/developer-tools/javascript-dotenv.md",tags:[],version:"current",frontMatter:{description:"Use dotenv to load environment variables from a file."},sidebar:"servicesSidebar",previous:{title:"Developer tools",permalink:"/test-integrate-infura/services/tutorials/developer-tools"},next:{title:"JSON Web Token (JWT)",permalink:"/test-integrate-infura/services/tutorials/developer-tools/json-web-token-jwt"}},c={},d=[{value:"Install <code>dotenv</code>",id:"install-dotenv",level:3},{value:"Create the <code>.env</code> file",id:"create-the-env-file",level:3},{value:"Access the <code>.env</code> information",id:"access-the-env-information",level:3},{value:"Create a <code>.gitignore</code> file",id:"create-a-gitignore-file",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"javascript-dotenv",children:"JavaScript dotenv"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/dotenv",children:(0,t.jsx)(n.code,{children:"dotenv"})})," is an ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/",children:"npm"})," JavaScript package that loads environment variables from a ",(0,t.jsx)(n.code,{children:".env"})," file into the ",(0,t.jsx)(n.code,{children:"process.env"})," global variable, storing configuration in the environment separate from the code."]}),"\n",(0,t.jsxs)(n.p,{children:["When you create a dapp using Infura, store your environment variables on your local machine using ",(0,t.jsx)(n.code,{children:"dotenv"})," to protect sensitive information, such as Infura API URLs and MetaMask mnemonics, from pushing to GitHub and becoming publicly accessible."]}),"\n",(0,t.jsxs)(n.h3,{id:"install-dotenv",children:["Install ",(0,t.jsx)(n.code,{children:"dotenv"})]}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.a,{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",children:"npm"})," to install ",(0,t.jsx)(n.code,{children:"dotenv"})," in your project directory:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm i dotenv\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Navigate to the project's ",(0,t.jsx)(n.code,{children:"package.json"})," file to check that ",(0,t.jsx)(n.code,{children:"dotenv"})," is included under ",(0,t.jsx)(n.code,{children:"dependencies:"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"dependencies": {\n...\n  "dotenv": "^16.0.1",\n...\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["You can create a ",(0,t.jsx)(n.code,{children:"package.json"})," file by running a CLI questionnaire, or by creating a default ",(0,t.jsx)(n.code,{children:"package.json"})," file. Refer to the ",(0,t.jsx)(n.a,{href:"https://docs.npmjs.com/creating-a-package-json-file",children:"npm documentation"})," for more information."]})}),"\n",(0,t.jsxs)(n.h3,{id:"create-the-env-file",children:["Create the ",(0,t.jsx)(n.code,{children:".env"})," file"]}),"\n",(0,t.jsxs)(n.p,{children:["At the root of your project directory, create a file named ",(0,t.jsx)(n.code,{children:".env"})," containing environment variables for sensitive information that shouldn't be shared, such as an Infura API key, Ethereum private key, or MetaMask secret recovery phrase:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'INFURA_API_KEY = "https://goerli.infura.io/v3/<Your-API-Key>"\nPRIVATE_KEY = "<Your-private-key>"\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"Never disclose your private keys or secret recovery phrases. Anyone with your private keys or secret recovery phrases can steal assets held in your account or wallet."})}),"\n",(0,t.jsxs)(n.h3,{id:"access-the-env-information",children:["Access the ",(0,t.jsx)(n.code,{children:".env"})," information"]}),"\n",(0,t.jsxs)(n.p,{children:["Give your project access to the ",(0,t.jsx)(n.code,{children:".env"})," information by including the following line at the top of your project script:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'require("dotenv").config();\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Access the environment variables using ",(0,t.jsx)(n.code,{children:"process.env.<Your-Environment-Variable-Name>"}),". For example, the following is a ",(0,t.jsx)(n.code,{children:"hardhat.config.js"})," file for a Hardhat project:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"require('@nomiclabs/hardhat-waffle');\nrequire('dotenv').config();\n\nmodule.exports = {\n  solidity: '0.8.0',\n  networks: {\n    rinkeby: {\n      url: process.env.INFURA_API_KEY,\n      accounts: [process.env.PRIVATE_KEY]\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"create-a-gitignore-file",children:["Create a ",(0,t.jsx)(n.code,{children:".gitignore"})," file"]}),"\n",(0,t.jsxs)(n.p,{children:["If you push your project to GitHub, the ",(0,t.jsx)(n.code,{children:".env"})," file will become publicly accessible unless you include it in a ",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files",children:(0,t.jsx)(n.code,{children:".gitignore"})})," file."]}),"\n",(0,t.jsxs)(n.p,{children:["Before pushing your project, create a file named ",(0,t.jsx)(n.code,{children:".gitignore"}),", and include a line containing ",(0,t.jsx)(n.code,{children:".env"}),". Your file will now be ignored by Git and won't be checked into GitHub."]}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:".gitignore"})," ignores only untracked files. If your ",(0,t.jsx)(n.code,{children:".env"})," file was committed in the past, it's now tracked by Git. Untrack the file by deleting it and running ",(0,t.jsx)(n.code,{children:"git rm --cached .env"}),", then include it in ",(0,t.jsx)(n.code,{children:".gitignore"}),"."]}),(0,t.jsxs)(n.p,{children:["If you committed sensitive data in the past, ",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository",children:"remove the data from your GitHub repository"}),"."]})]}),"\n",(0,t.jsxs)(n.p,{children:["When cloning an existing project, it might come with a ",(0,t.jsx)(n.code,{children:".env.sample"}),", ",(0,t.jsx)(n.code,{children:".env.template"}),", or similar file containing environment variables without values. Copy this file into a ",(0,t.jsx)(n.code,{children:".env"})," file on your local machine and fill in your values."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var t=i(96540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);