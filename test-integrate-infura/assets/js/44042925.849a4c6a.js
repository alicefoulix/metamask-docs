"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[31435],{71567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=n(74848),r=n(28453),s=n(47220);const a={description:"IPFS network documentation"},o="IPFS",c={id:"network-apis/ipfs/index",title:"IPFS",description:"IPFS network documentation",source:"@site/services/network-apis/ipfs/index.md",sourceDirName:"network-apis/ipfs",slug:"/network-apis/ipfs/",permalink:"/test-integrate-infura/services/network-apis/ipfs/",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/network-apis/ipfs/index.md",tags:[],version:"current",frontMatter:{description:"IPFS network documentation"},sidebar:"servicesSidebar",previous:{title:"web3_clientVersion",permalink:"/test-integrate-infura/services/network-apis/ethereum/json-rpc-methods/web3_clientversion"},next:{title:"Quickstart",permalink:"/test-integrate-infura/services/network-apis/ipfs/quickstart"}},d={},l=[];function p(e){const t={a:"a",admonition:"admonition",h1:"h1",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"ipfs",children:"IPFS"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://ipfs.io/",children:"Interplanetary File System (IPFS)"})," is a distributed, ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Peer-to-peer",children:"peer-to-peer (p2p)"})," storage network used for storing and accessing files, websites, applications, and data."]}),"\n",(0,i.jsx)(t.admonition,{title:"Limited access",type:"caution",children:(0,i.jsx)(t.p,{children:"Infura is currently limiting IPFS services to customers that already have an active IPFS key.\nNew IPFS key creation is disabled for new and existing customers."})}),"\n",(0,i.jsx)(t.p,{children:"Content is accessible from peer nodes located anywhere in the world. These nodes relay information, store it, or both."}),"\n",(0,i.jsxs)(t.p,{children:["To integrate your IPFS project with Infura, create an ",(0,i.jsx)(t.a,{href:"/test-integrate-infura/services/get-started/infura#2-create-an-api-key",children:"Infura API key"}),"."]}),"\n",(0,i.jsx)(t.admonition,{title:"See also",type:"info",children:(0,i.jsxs)(t.p,{children:["See the ",(0,i.jsx)(t.a,{href:"https://docs.ipfs.io",children:"IPFS documentation"})," for more information. Check out the ",(0,i.jsx)(t.a,{href:"https://docs.ipfs.io/how-to/command-line-quick-start/#prerequisites",children:"IPFS Quick Start docs"})," to get up and running with IPFS."]})}),"\n",(0,i.jsx)(s.A,{items:[{href:"./ipfs/quickstart",title:"Quickstart",description:"Learn how to quickly connect and make calls to the IPFS network."},{href:"./ipfs/http-api-methods",title:"HTTP API methods",description:"View the APIs available for communicating with the IPFS network."},{href:"../../dashboard/create-api",title:"Create an API key",description:"Learn how to create an API key and secure and share it with your team."}]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},47220:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var i=n(20053),r=n(28774),s=n(49259),a=n(74848);function o(e){let{item:t}=e;const n=(0,a.jsxs)(a.Fragment,{children:[t.title&&(0,a.jsxs)("h2",{className:(0,i.A)(s.A.cardTitle),children:[t.icon&&(0,a.jsx)("img",{src:t.icon,className:s.A.cardIcon}),(0,a.jsx)("span",{children:t.title})]}),t.description&&(0,a.jsx)("p",{children:t.description})]}),o=(0,i.A)("card","padding--lg",s.A.cardContainer,{[s.A.flaskOnly]:t.flaskOnly});return t.href?(0,a.jsx)(r.A,{className:o,href:t.href,children:n}):(0,a.jsx)("div",{className:o,children:n})}function c(e){const{items:t}=e;return(0,a.jsx)("section",{className:"row",children:t.map(((e,t)=>(0,a.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,a.jsx)(o,{item:e})},t)))})}},20053:(e,t,n)=>{function i(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}n.d(t,{A:()=>r});const r=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}},49259:(e,t,n)=>{n.d(t,{A:()=>i});const i={cardContainer:"cardContainer_C0Dw",flaskOnly:"flaskOnly_ADUl",cardTitle:"cardTitle_ZNcV",cardIcon:"cardIcon_naep"}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(96540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);